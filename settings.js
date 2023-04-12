//ubah nomor owner dan wm di sini 

const fs = require('fs')
const chalk = require('chalk')
global.owner = ['62895809453322']
global.ownernomer = "62895809453322"
global.premium = ['62895809453322']
global.packname = 'Sticker By'
global.author = 'ᴹᴿ᭄ Smile×፝֟͜×'
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '✅Tuh Ngabb',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa / Chat Owner',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    error: 'Error!',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 30
}
global.thumb = fs.readFileSync('./media/image/lol.jpg')
global.faall = fs.readFileSync('./media/image/lel.jpg')
global.mygit = 'https://github.com/rrrifki'
global.webmy = 'https://api.botcahx.biz.id'
global.ghme = 'https://github.com/rrrifki'
global.botname = '°SMLbot-Mdོ'
global.omlen = '© Child Xd'
global.weem = 'ᴹᴿ᭄ Smile×፝֟͜×'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
