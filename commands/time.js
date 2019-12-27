module.exports.run = async (client, message, args) => {

    var today = new Date()
    let Day = today.toString().split(" ")[0].concat("day");
    let Month = today.toString().split(" ")[1]
    let Year = today.toString().split(" ")[3]

    message.channel.send({
        embed: {
            color: 0x10cc68,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            fields: [{
                name: "• Точное время по МСК:",
                value: `\` Время:\` **${today.toString().split(" ")[4]}**`,
                inline: true
            }
            ]
        }
    })

}

module.exports.help = {
    name: "time",
    category: "utiles"
}
