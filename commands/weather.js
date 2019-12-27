const weather = require('weather-js');
module.exports.run = async (client, message, args) => {
        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
            if (result === undefined || result.length === 0) {
                message.channel.send(':x: Введите город!')
                return;
            }
            var current = result[0].current;
            var location = result[0].location;
        message.channel.send({
            embed: {
                color: 0x10cc68,
                author: {
                    name: client.user.username,
                    icon_url: client.user.displayAvatarURL
                },
                description: `**${current.skytext}**`,
                thumbnail: {
                    url: current.imageUrl
                },
                fields: [{
                        name: "• Временная зона:",
                        value: `UTC${location.timezone}`,
                        inline: true
                    },
                    {
                        name: "• Тип температуры:",
                        value: location.degreetype,
                        inline: true
                    },
                    {
                        name: "• Температура:",
                        value: `${current.temperature} градусов`,
                        inline: true
                    },
                    {
                        name: "• В тени:",
                        value: `${current.feelslike} градусов`,
                        inline: true
                    },
                    {
                        name: "• Ветер",
                        value: current.winddisplay,
                        inline: true
                    },
                    {
                        name: "• Влажность",
                        value: `${current.humidity}%`,
                        inline: true
                    }
                ]
            }
        })
    })
}
module.exports.help = {
    name: "weather",
    category: "utiles"
}
