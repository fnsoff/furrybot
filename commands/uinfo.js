var moment = require("moment");

module.exports.run = async (client, message, args) => {

    const search = args.slice(0).join(' ');
    let {
        member
    } = message;
    if (message.mentions.members.size > 0) {
        member = message.mentions.members.first();
    } else if (search) {
        member = client.findersUtil.findMember(message.guild, search);
        if (member.size === 0) {
            return message.channel.send(`❌ Пользователь \`${search}\` на найден!`);
        } else if (member.size === 1) {
            member = member.first();
        } else {
            return message.channel.send(client.findersUtil.formatMembers(client, member));
        }
    };

    var user = member.user;

    if (user.bot == true) {
        var checkbot = "Робот";
    } else {
        var checkbot = "Пользователь";
    }
    if (user.presence.status == 'online') {
        var etat = "Онлайн";
    } else if (user.presence.status == "offline") {
        var etat = "Оффлайн";
    } else if (user.presence.status == "idle") {
        var etat = "Нет на месте";
    } else if (user.presence.status == "dnd") {
        var etat = "Не беспокоить";
    }

    message.channel.send(`Вот подробная информация о **${user.username}**`, {
        embed: {
            color: 0x10cc68,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            thumbnail: {
                url: user.displayAvatarURL
            },
            fields: [{
                    name: "• Username:",
                    value: `${user}`,
                    inline: true
                }, {
                    name: "• Nickname:",
                    value: `${user.username + "#" + user.discriminator}`,
                    inline: true
                }, {
                    name: "• Статус:",
                    value: etat,
                    inline: true
                }, {
                    name: "• ID:",
                    value: user.id,
                    inline: true
                }, {
                    name: "• Зарегистрировался в дискорде:",
                    value: moment(user.createdAt).format("LL"),
                    inline: true
                }, {
                    name: "• Присоеденился к серверу:",
                    value: moment(message.guild.members.get(user.id).joinedAt).format("LL"),
                    inline: true
                }, {
                    name: "• Категория",
                    value: checkbot,
                    inline: true
                }, {
                    name: "• Роли:",
                    value: message.guild.members.get(user.id).roles.array().map(g => g).join(', '),
                    inline: true
                }
            ]
        }
    })
}

module.exports.help = {
    name: "uinfo",
    category: "utiles"
}
