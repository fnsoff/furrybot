var moment = require("moment");

module.exports.run = async (client, message, args) => {

    if (message.guild.emojis.size === 0) return message.channel.send("На сервере нет емоджи.");

    message.channel.send(`Вот \`${message.guild.emojis.filter(e => e.toString()).size}\` эмоджи с сервера **${message.guild.name}**:\n${message.guild.emojis.map(e => e).join(' - ')}`);

}

module.exports.help = {
    name: "emojis",
    category: "utiles"
}
