
const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const Fichan = new require('./lib/functions')

// System
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true

global.saluran = ''
    global.idsal = "0@newsletter" // opsional ID saluran
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Rayen_Davidsen' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.owner = ['6285711450232','628813211861'] // ubah aja pake nomor lu

// bot
global.botname = 'FreyyBugh' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ Freya_Bot' // ubah aja ini nama sticker
global.author = `At ${hariini}\n${time}` // ubah aja ini nama sticker
global.hiasan = `	◦  `
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'karzsession' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.gris = '`'
global.wm = `FREYA_BOTZ`
global.namaStore = 'Freya_Store'
global.ownerStore = 'Rayen_Davidsen'
global.autobio = false // AutoBio
global.autoread = true //autoread

// apikey panel
global.footer2 = Styles('simple whatsapp bot made by karz')
global.domain = 'https://hyiper.store-panel.biz.id' // Isi Domain Lu
global.apikey = 'ptla_nZGMPKyFeNkem3NnWiNkT9SbhigXZ4xpBh6OCXvn73i' // Isi Apikey Plta Lu
global.capikey = 'ptla_xMtAsVIiC0W89eSQENJcT6lGSDQq22vLU6YJOp4Btxw' // Isi Apikey Pltc Lu
global.egg = '15' // id eggs yang dipakai
global.loc = '1' // id location

// system
global.Func = Fichan
global.systemN = `*[ System Notice ]*`
global.mess = {
    ban: Styles('*[ System Access Failed ]* you are banned by the owner'),
    badm: Styles('*[ System Notice ]* please add bot *admin*'),
    regis: Styles(`*[ System Access Failed ]*\n\nKamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur*`),
    premium: Styles('*[ System Notice ]* this only premium user'),
    search: Styles('🔍 *Search for server. . .*'),
    done: Styles('Done Ga Bang?? Done...'),
    success: Styles('*[ Loaded Success ]*'),
    admin: Styles('*[ System Notice ]* for *admin!* not *npc*'),
    owner: Styles('*[ System Access Failed ]* Access Denied'),
    group: Styles('*[ System Notice ]* Use this in group chat!'),
    private: Styles('*[ System Notice ]* Use this in private chat!'),
    bot: Styles('*[ System Notice ]* Only Bot user'),
    wait: Styles('*[ Loading ]* Please Wait'),
    getdata: Styles('Scraping metadata . . .'),
    fail: Styles('Can\'t get metadata!'),
    error: Styles('*[ System Failed ]* Error, please contact the owner'),
    errorF: Styles('*[ System Failed ]* Sorry this feature is in error.'),
}
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})