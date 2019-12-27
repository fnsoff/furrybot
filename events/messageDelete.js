const index = require('../bot.js'); // укажи путь еп тут до индекса
module.exports = async (client, message) => {
    if (message.author.bot) return;
    let getlog = client.guildDB.get(message.guild.id);
    if (getlog == undefined) return;
    if (getlog.id == 'no_set') return;
    let channel = message.guild.channels.find(c => c.id == getlog.id);
    var deletedmessage = "```" + message.content + "```";
    var messageauthor = `${message.member.user.username}` + ` (<@${message.member.id}>)`;
    if (!channel) return;
    const fs = require("fs");
    const deletedMessages = fs.createWriteStream('deleted.log', {'flags': 'a'});
    deletedMessages.write(`[${new Date()}] [${message.guild.name}] [${message.channel.name}] ${message.member.user.tag}: ${message.content}\n`);
    channel.send(``, {
        embed: {
            color: 0xf9000d,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            timestamp: new Date(),
            description: "Сообщение было удалено",
            fields: [{
                    name: "Удалённое сообщение:",
                    value: deletedmessage
                },
                {
                    name: "Автор:",
                    value: messageauthor,
                    inline: true
                },
                {
                    name: "Канал:",
                    value: `${message.channel.name}`,
                    inline: true
                }
            ]
        }
    })
}

/*module.exports = async (client, message) => {
    if (message.author.bot) return;
    let getlog = client.guildDB.get(message.guild.id);
    if (getlog == undefined) return;
    if (getlog.id == 'no_set') return;
    let channel = message.guild.channels.find(c => c.id == getlog.id);
    if (!channel) return;
    channel.send(`:put_litter_in_its_place: Сообщение от **${message.member.user.username}** удалено`, {
        embed: {
            color: 0xf9000d,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            fields: [{
                    name: "• Канал:",
                    value: `${message.channel.name}`
                },
                {
                    name: "• Сообщение:",
                    value: message.content
                }
            ]
        }
    })
}
*/
