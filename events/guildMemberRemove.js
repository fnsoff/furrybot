module.exports = async (client, member) => {
    let get_log = client.guildDB.get(member.guild.id);
    if (get_log == undefined) return;
    if (get_log == 'no_set') return;
    let get_channel = member.guild.channels.find(c => c.id == get_log.id);
    if (!get_channel) return;
    get_channel.send(``, {
        /*embed: {
            color: 0x10cc68,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            fields: [{
                name: '• Имя:',
                value: `${member.user.username}`
            }, {
                name: '• ID:',
                value: `${member.user.id}`
            }]
        }*/
        embed: {
            thumbnail: {
    "url": "https://cdn.dribbble.com/users/1002227/screenshots/2894489/check-minus.gif"
            },
            color: 0xff0000,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            timestamp: new Date(),
            description: "Пользователь вышел с сервера",
            fields: [
                {
                    name: "Пользователь:",
                    value: `${member.user.username}`,
                }
            ]
        }
    });
};
