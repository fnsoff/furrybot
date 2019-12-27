module.exports = async (client, channel) => {
    let get_log = client.guildDB.get(channel.guild.id);
    if (get_log == undefined) return;
    if (get_log == 'no_set') return;
    let get_channel = channel.guild.channels.find(c => c.id == get_log.id);
    if (!get_channel) return;
    get_channel.send(``, {
           embed: {
            thumbnail: {
    "url": "https://cdn.dribbble.com/users/1914549/screenshots/5346994/day21.gif"
            },
            color: 0xf91900,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            timestamp: new Date(),
            description: "Канал с типом " +`${channel.type}` + " был удален",
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
            color: 0xf91900,
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
