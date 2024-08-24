//Fait par Kenv/Le fin stratege
//credited by DGXeon
//YouTube: @Kenvofc
//Instagram: kenv8070
//GitHub: @kenvofc
//WhatsApp: +237656774511

const fs = require('fs');
const chalk = require('chalk');

//indos du proprio
global.ytname = "YT: Kenvofc" //Chaine youtube 
global.socialm = "GitHub: kenvofc" //ur github ig fb ou twiter
global.location = "Cameroon, Yaounde" //votre localisation 

//info du bot
global.botname = 'SylversBot-MD' //nom du bot
global.ownernumber = ['237656774511'] //numero du proprio, pas plus d un
global.ownername = '🍁Kenv' //nom du proprio
global.websitex = "https://youtu.be/tLq8_qOOGFI" //site web
global.wagc = "https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18"// chaine WhatsApp 
global.themeemoji = '🍁'
global.wm = "Kev."
global.botscript = 'https://github.com' //lien du repo
global.packname = "Sticker De"
global.author = "🍁Kev\n\n+237656774511"
global.creator = "237656774511@s.whatsapp.net"
global.kevprefix = '.'
global.premium = ["237656774511"] // Boss

//id
global.xchannel = {
	jid: '120363222395675670@newsletter'
	}

//parametres du bot
global.typemenu = 's12' //type de menu  's1' => 's12'
global.typereply = 's4' // type de reponse 's1' => 's4'
global.autoblocknumber = '225' //code du pays bloquey automatiquement 
global.antiforeignnumber = '242' //code du pays interdit d acces

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Erreur!',
	nsfw: 'Les commandes -18 sont interdites dans ce groupe, veuillez contacter un dmin pour l activer',
	done: 'Effectuey'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});