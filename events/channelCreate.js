module.exports = async (client, channel) => {
    let get_log = client.guildDB.get(channel.guild.id);
    if (get_log == undefined) return;
    if (get_log == 'no_set') return;
    let get_channel = channel.guild.channels.find(c => c.id == get_log.id);
    if (!get_channel) return;
    get_channel.send(``, {
        embed: {
            thumbnail: {
    "url": "https://i.pinimg.com/originals/a3/5b/2b/a35b2bfea82adf69803ec2dca48bfe27.gif"
            },
            color: 0x10cc68,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            timestamp: new Date(),
            description: "Создан канал с типом " + `${channel.type}`,
            fields: [
                {
                    name: "Название:",
                    value: channel.name,
                    inline: true
                },
                {
                    name: "ID:",
                    value: channel.id,
                    inline: true
                }
            ]
        }
        /*embed: {
            color: 0x10cc68,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            fields: [{
                name: '• Название:',
                value: channel.name
            }, {
                name: '• ID:',
                value: channel.id
            }]
        }*/
    });
};
