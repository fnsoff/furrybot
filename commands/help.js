const Discord = require("discord.js");

module.exports.run = async (client, message) => {
    message.channel.send(`Все возможные **${client.commands.map(c => c).length}** комманд`, {
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
                    name: "• :jack_o_lantern: Создателю:",
                    value: `${client.commands.filter(cmd => cmd.help.category === 'owner').map(cmd => `\`${cmd.help.name}\``).join(" - ")}`
                },
                {
                    name: "• :robot: Бот:",
                    value: `${client.commands.filter(cmd => cmd.help.category === 'bot').map(cmd => `\`${cmd.help.name}\``).join(" - ")}`
                },
                {
                    name: "• :zap: Модерация:",
                    value: `${client.commands.filter(cmd => cmd.help.category === 'moderation').map(cmd => `\`${cmd.help.name}\``).join(" - ")}`
                },
                {
                    name: "• :joystick: Полезности:",
                    value: `${client.commands.filter(cmd => cmd.help.category === 'utiles').map(cmd => `\`${cmd.help.name}\``).join(" - ")}`
                },
                {
                    name: "• :loud_sound: Музыка:",
                    value: "Для просмотра музыкальных команд введите `mhelp`"
                },
                {
                    name: "• :confetti_ball: Веселье:",
                    value: `${client.commands.filter(cmd => cmd.help.category === 'fun').map(cmd => `\`${cmd.help.name}\``).join(" - ")}`
                },
                {
                    name: "• :underage: NSFW:",
                    value: `${client.commands.filter(cmd => cmd.help.category === 'nsfw').map(cmd => `\`${cmd.help.name}\``).join(" - ")}`
                }
            ]
        }
    })

}
module.exports.help = {
    name: "help",
    category: "utiles"
}
