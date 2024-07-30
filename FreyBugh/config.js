const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "Freya_BUG"
global.ownerName = "Rayen_Davidsen"
global.botNumber = "62882010162339"
global.devNumber = ["628813211861"]

global.Auto_Typing = true // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = true // auto read messages

global.domain = "https://xgu.cafegt.my.id" // Ganti Domain Lu
global.key_plta = "ptla_8IksfXzdSlK1DoSCvm6DUowMQqX201PvkJArjMQNi5o" // Isi Apikey Plta Lu
global.key_pltc = "ptlc_OVWU1Z3xkfPLQX1CFcAHtpbo7ldH1189MuyEn23fUbF" // Isi Apikey Pltc Lu
global.nama_host = "FREYA_BOT" // Ganti Nama Store Atau nama Host Lu

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})