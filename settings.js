//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='noiseKey":{"private":{"type":"Buffer","data":"+G6R7VqqPbECeeIHU0kjn4xCy3glUez/4fcUvU9/Lkk="},"public":{"type":"Buffer","data":"Hic9Ho8VKifosEI0F8v4tGmbww86AkJUKenARUUF8UM="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"+JLExNz/9j0kGjDgs6qlKuDCyehuxyiKsocLzZ63k38="},"public":{"type":"Buffer","data":"jWv6uLeuNFDUyYC7U7LcSCFDp+QLvYaVPYcvIJRiVSg="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"4Du+4X98dw1TWFNOPup1fWu5qXuC4Y0O8GcXp+55zlM="},"public":{"type":"Buffer","data":"zyKDB7GNKOSvQSO5uPkxSQ3LUlpSTpiBwyX7s3AWN2Q="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"gM9mDk3n/PT3uoTTRdCykpVZmNNNlAFs+OdLZq0PPn8="},"public":{"type":"Buffer","data":"MZrNg61+121cs0DwzC1VqIvNrNbo3Vc4QjJCCcPlACQ="}},"signature":{"type":"Buffer","data":"u7HSWh4X4vlhKDVw4K7QmaIGuYn6V4Rknv3tOONjhy8Ub9D0jHwJPybK5C1R8oSykV+/DXpo7JLyJF7geaoHCA=="},"keyId":1},"registrationId":162,"advSecretKey":"E0FfswB0viyQJKKlqjv9a5NynPQZ8J+cDNw12TEpPIc=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"RLjWY1xXTDGkzg24dG2XHw","phoneId":"66eeab54-d8e5-45f5-bbbc-b6e131dae3f8","identityId":{"type":"Buffer","data":"LsM5BAP4RzySbSKI8NcFudiEjes="},"registered":true,"backupToken":{"type":"Buffer","data":"0N4Vj/qnIIi5fu4c+/YiFJIbHsY="},"registration":{},"pairingCode":"9QZ2V6TF","me":{"id":"22587666605:21@s.whatsapp.net","lid":"9006882025576:21@lid"},"account":{"details":"CIqDgfQHEPiK3rIGGAMgACgA","accountSignatureKey":"G3pBXj3lH2weTesN4VFhbZjSK4DoLQK/1cE/g1xnXSA=","accountSignature":"H106Fw8OUluEUrf++/83vD+LTpLc9xJwMUtqFFCvVP6+8Hm8IC//5vm9om2a5R5Pxr5xNwt8GouvOFn/G04RCw==","deviceSignature":"TKl98UHsdwVI4C5MDybo39xdiTxrA5X6Cg9/OEV8ZDsVDx6WYLeI+Juwiu42QgM0+vk0UaGjKL3PQLpZPkwIBA=="},"signalIdentities":[{"identifier":{"name":"22587666605:21@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRt6QV495R9sHk3rDeFRYW2Y0iuA6C0Cv9XBP4NcZ10g"}}],"platform":"android","lastAccountSyncTimestamp":1717011836,"myAppStateKeyId":"AAAAADiq"'

//owmner v card
global.ytname = "YT: xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "Ivory Coast, Abidjan, Cocody " //ur location

//new
global.botname = 'bkismx🔱' //ur bot name
global.ownernumber = '2250787666605' //ur owner number
global.ownername = 'bkismx⚜' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "🦄드림 가이 Xeon\n\n+916909137213"
global.creator = "916909137213@s.whatsapp.net"
global.xprefix = '$'
global.premium = ["2250787666605"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
