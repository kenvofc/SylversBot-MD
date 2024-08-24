require('./params');
const fs = require('fs');
const pino = require('pino');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const FileType = require('file-type');
const { exec } = require('child_process');
const { Boom } = require('@hapi/boom');
const NodeCache = require('node-cache');
const PhoneNumber = require('awesome-phonenumber');
const { default: WAConnection, useMultiFileAuthState, Browsers, DisconnectReason, makeInMemoryStore, makeCacheableSignalKeyStore, fetchLatestWaWebVersion, proto, PHONENUMBER_MCC, getAggregateVotesInPollMessage } = require('@whiskeysockets/baileys');

const pairingCode = process.argv.includes('--pairing-code');
const useMobile = process.argv.includes("--mobile")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const DataBase = require('./recherche/database');
const database = new DataBase();
(async () => {
	const loadData = await database.read()
	if (loadData && Object.keys(loadData).length === 0) {
		global.db = {
			sticker: {},
			users: {},
			groups: {},
			database: {},
			 settings: {},
			others: {},
			...(loadData || {}),
		}
		await database.write(global.db)
	} else {
		global.db = loadData
	}
	
	setInterval(async () => {
		if (global.db) await database.write(global.db)
	}, 30000)
})();

const { GroupUpdate, GroupParticipantsUpdate, MessagesUpsert, Solving } = require('./recherche/message');
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./bibliotheque/exif');
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./bibliotheque/function');

async function startKevBot() {
	const { state, saveCreds } = await useMultiFileAuthState('session');
	const { version } = await fetchLatestWaWebVersion()
	const msgRetryCounterCache = new NodeCache()
	const level = pino({ level: 'silent' })
	
	const getMessage = async (key) => {
		if (store) {
			const msg = await store.loadMessage(key.remoteJid, key.id);
			return msg?.message
		}
		return {
			conversation: 'Ici Sylvers MD!'
		}
	}
	
	const Kev = WAConnection({
		version,
		logger: level,
		printQRInTerminal: !pairingCode,
		browser: Browsers.ubuntu('Chrome'),
		patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(
                message.buttonsMessage ||
                message.templateMessage ||
                message.listMessage
            );
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }
            return message;
        },
		auth: {
			creds: state.creds,
			keys: makeCacheableSignalKeyStore(state.keys, level),
		},
		transactionOpts: {
			maxCommitRetries: 10,
			delayBetweenTriesMs: 10,
		},
		getMessage,
		syncFullHistory: true,
		maxMsgRetryCount: 15,
		msgRetryCounterCache,
		retryRequestDelayMs: 10,
		connectTimeoutMs: 60000,
		keepAliveIntervalMs: 10000,
		defaultQueryTimeoutMs: undefined,
		generateHighQualityLinkPreview: true,
	})
	
	if (pairingCode && !Kev.authState.creds.registered) {
		let phoneNumber;
		async function getPhoneNumber() {
			phoneNumber = await question(chalk.bgBlack(chalk.greenBright('Please type your WhatsApp number : ')));
			phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
			
			if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v)) && !phoneNumber.length < 6) {
				console.log(chalk.bgBlack(chalk.redBright('Start with your Country WhatsApp code') + chalk.whiteBright(',') + chalk.greenBright(' Example : 62xxx')));
				await getPhoneNumber()
			}
		}
		
		setTimeout(async () => {
			await getPhoneNumber()
			let code = await Kev.requestPairingCode(phoneNumber);
			console.log(chalk.black(chalk.bgGreen(`Votre Pairing Code : `)), chalk.black(chalk.white(code)));
		}, 3000)
	}
	
	store.bind(Kev.ev)
	
	await Solving(Kev, store)
	
	Kev.ev.on('creds.update', saveCreds)
	
	Kev.ev.on('connection.update', async (update) => {
		const { connection, lastDisconnect, receivedPendingNotifications } = update
		if (connection === 'close') {
			const reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.connectionLost) {
				console.log('Connexion Au Server Echouee, Attente De La Liaison...');
				startKevBot()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log('Connexion fermee, Attente De La Liaison...');
				startKevBot()
			} else if (reason === DisconnectReason.restartRequired) {
				console.log('Redemarrage Imminent...');
				startKevBot()
			} else if (reason === DisconnectReason.timedOut) {
				console.log('Temps De Connexion Expirey, Attente De La Liaison...');
				startKevBot()
			} else if (reason === DisconnectReason.badSession) {
				console.log('Veuillez Supprimer La Session Actuelle Et Scannez A Nouveau...');
				process.exit(1)
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log('Veuillez D abord Fermer La Session...');
				Kev.logout();
			} else if (reason === DisconnectReason.loggedOut) {
				console.log('Veuillez Scanner A Nouveau Et Redemarrer...');
			} else if (reason === DisconnectReason.Multidevicemismatch) {
				console.log('Veuillez Scanner A Nouveau...');
			} else {
				Kev.end(`Unknown DisconnectReason : ${reason}|${connection}`)
			}
		}
		if (connection == 'open') {
			console.log('Connectey a : ' + JSON.stringify(Kev.user, null, 2));
		} else if (receivedPendingNotifications == 'true') {
			console.log('Veuillez Patienter 1 Minute...')
		}
	});
	
	Kev.ev.on('contacts.update', (update) => {
		for (let contact of update) {
			let id = Kev.decodeJid(contact.id)
			if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
		}
	});
	
	Kev.ev.on('call', async (call) => {
		let botNumber = await Kev.decodeJid(Kev.user.id);
		let anticall = global.db.settings[botNumber].anticall
		if (anticall) {
			for (let id of call) {
				if (id.status === 'offer') {
					let msg = await Kev.sendMessage(id.from, { text: `Actuellement, Nous Ne Pouvons Pas Recevoir D appel ${id.isVideo ? 'Video' : 'Suara'}.\nSi @${id.from.split('@')[0]} Veut De L aide, Veuillez Contacter Le Proprio:)`, mentions: [id.from]});
					await Kev.sendContact(id.from, global.owner, msg);
					await Kev.rejectCall(id.id, id.from)
				}
			}
		}
	});
	
	Kev.ev.on('groups.update', async (update) => {
		await GroupUpdate(Kev, update, store);
	});
	
	Kev.ev.on('group-participants.update', async (update) => {
		await GroupParticipantsUpdate(Kev, update);
	});
	
	Kev.ev.on('messages.upsert', async (message) => {
		await MessagesUpsert(Kev, message, store);
	});

	return Kev
}

startKevBot()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});