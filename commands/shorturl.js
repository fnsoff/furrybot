module.exports.run = async (client, message, args) => {

var request = require('request');
var shortlink = args[0];

request(`http://s.fns.wtf/api.php?url=${shortlink}`, function (error, response, body) {
const readylink = JSON.parse(body);
console.log(readylink);
if (!shortlink) {
	    message.channel.send(``, {
        embed: {
            thumbnail: {
    "url": "https://cdn3.iconfinder.com/data/icons/picons-weather/57/53_warning-512.png"
            },
            color: 0xff0000,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            timestamp: new Date(),
            description: "Не указана ссылка для укорачивания ",
            fields: [
                {
                    name: "Ошибка:",
                    value: `Указана некорректная ссылка! Введите ссылку типа http://example.com`
                }
            ]
        }
    })
} else {
    message.channel.send(``, {
        embed: {
            thumbnail: {
    url: `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${readylink.shorturl}`
            },
            color: 0x10cc68,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            timestamp: new Date(),
            description: "Ссылка укорочена! ",
            fields: [
                {
                    name: "Исходная ссылка:",
                    value: shortlink
                },
                {
                	name: "Укороченная ссылка:",
                	value: readylink.shorturl
                }
            ]
        }
    });
}})}
module.exports.help = {
    name: "shorturl",
    category: "utiles"
}
