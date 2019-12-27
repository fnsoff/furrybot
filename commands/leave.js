module.exports.run = async (client, message) => {

    if (!message.guild.voiceConnection) {
        if (!message.member.voiceChannel) return message.channel.send('You must be connected in a living room!')
    }

    message.member.voiceChannel.leave()

    message.channel.send(`I left the channel`)

}

module.exports.help = {
    name: "leave",
    category: "music"
}
