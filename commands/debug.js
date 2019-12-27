module.exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
    var os = require('os');
    if (client.uptime < 30000) {
        return message.channel.send(':x: Я еще не собрал необходимые сведения, пожалуйста подождите 30 секундочек');
    }
    message.channel.send(`Информация отладки по вашему запросу :computer:`, {
        embed: {
            color: 0x10cc68,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            thumbnail: {
                url: client.user.displayAvatarURL
            },
            fields: [{
                    name: "• Аптайм:",
                    value: (Math.round(client.uptime / (1000 * 60 * 60))) + " Hrs, " + (Math.round(client.uptime / (1000 * 60)) % 60) + " Mins " + (Math.round(client.uptime / 1000) % 60) + " Secs"
                },
                {
                    name: "• CPU | RAM:",
                    value: `**CPU:** ${(os.loadavg()[0] * os.cpus().length / 100).toFixed(2)}% | **RAM:** ${(process.memoryUsage().rss / 1048576).toFixed()}MB / ${(os.totalmem() > 1073741824 ? `${(os.totalmem() / 1073741824).toFixed(1)} GB` : `${(os.totalmem() / 1048576).toFixed()} MB`)} (${(process.memoryUsage().rss / os.totalmem() * 100).toFixed(2) }%)`
                },
                {
                    name: "• Информация об использовании:",
                    value: `**${client.guilds.size}** серверов **${client.users.size}** участников `
                },
                {
                    name: "• Ping API:",
                    value: `${Math.round(client.ping)}` + 'ms'
                },
                {
                    name: "• Версия",
                    value: `Discord.js: ${Discord.version} | NodeJS: ${process.version} | Bot: 2.3`,
                },
                {
                    name: "• OS",
                    value: process.platform,
                }, {
                    name: "• Config",
                    value: os.cpus()[0].model,
                }, {
                    name: "• Веб-сайт",
                    value: `https://furrybot.gq`
                }
            ]
        }
    })

}

module.exports.help = {
    name: "debug",
    category: "bot"
}
