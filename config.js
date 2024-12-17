require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝑲𝑰𝑵𝑮 𝑴𝑨𝒀𝑶𝑹"
global.dana = "6281299965035"
global.qris = "-"


// GLOBAL SETTING
global.owner = "6281299965035"
global.namabot = "Febrian"
global.nomorbot = "6281299965035"
global.namaCreator = "Febrian"
global.linkyt = ""
global.autoJoin = false
global.antilink = false
global.versisc = '2.0.0'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = ''
global.isLink = 'https://chat.whatsapp.com/G9jvPbplXTgAQ26c3e6kif'
global.packname = "Fatal"
global.author = "Febrian"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})