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
                name: "• :inbox_tray: Для приглашения вы можете использовать ссылку:",
                value: `**https://discordapp.com/api/oauth2/authorize?client_id=650034032876191765&permissions=1344236790&scope=bot**`,
                inline: true
            }
            ]
        }
    })

}

module.exports.help = {
    name: "invite",
    category: "utiles"
}
