var moment = require("moment");

module.exports.run = async (client, message, args) => {

    message.channel.send(`Вот детальная информация о сервере: **${message.guild.name}**`, {
        embed: {
            color: 0x10cc68,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            thumbnail: {
                url: message.guild.iconURL
            },
            fields: [{
                    name: "• Название:",
                    value: `${message.guild.name}`,
                    inline: true
                }, {
                    name: "• ID:",
                    value: `${message.guild.id}`,
                    inline: true
                }, {
                    name: "• Создан:",
                    value: moment(message.guild.createdAt).format("LL"),
                    inline: true
                }, {
                    name: "• Владелец:",
                    value: message.guild.owner.user.tag,
                    inline: true
                }, {
                    name: "• Пользователей:",
                    value: `${message.guild.memberCount}`,
                    inline: true
                }, {
                    name: "• Последний зашедший:",
                    value: `${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `<@!${m.id}>`).splice(0, 1)}`,
                    inline: true
                }, {
                    name: "• Каналы",
                    value: `**${message.guild.channels.filter(channel => channel.type === 'text').size}** text - **${message.guild.channels.filter(channel => channel.type === 'voice').size}** audio`,
                    inline: true
                }, {
                    name: "• AFK канал",
                    value: `${message.guild.afkChannel}`,
                    inline: true
                }
            ]
        }
    }).then(message => message.channel.send({
      embed: {
        color: 0x10cc68,
        fields: [{
            name: `• Роли - **${message.channel.guild.roles.size}**:`,
            value: message.guild.roles.array().map(g => g).join(', '),
            inline: true
        }]
      }
    }))

}

module.exports.help = {
    name: "sinfo",
    category: "utiles"
}
