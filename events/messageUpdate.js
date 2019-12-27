module.exports = async (client, message, oldMessage) => {
    if (message.author.bot) return;
    let getlog = client.guildDB.get(message.guild.id);
    if (getlog == undefined) return;
    if (getlog.id == 'no_set') return;
    let channel = message.guild.channels.find(c => c.id == getlog.id);
    if (!channel) return;
    var messagenewcont = "```" + `${message.content}` + "```";
    var messageoldcont = "```" + `${oldMessage}` + "```";
    var messageauthor = `${message.member.user.username}` + ` (<@${message.member.id}>)`;
    channel.send(``, {
       /* embed: {
            color: 0xf9a300,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            fields: [
                {
                    name: "• Канал:",
                    value: `${message.channel.name}`
                },
                {
                    name: "• Старое сообщение:",
                    value: `${message.content}`
                },
                {
                    name: "• Новое сообщение:",
                    value: `${oldMessage}`
                }
            ]
        }
        */
          embed: {
            color: 0xf9a300,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            timestamp: new Date(),
            description: "Сообщение было отредактировано",
            fields: [{
                    name: "Старое содержимое:",
                    value: messagenewcont
                },
                {
                    name: "Новое сообщение:",
                    value: messageoldcont
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
