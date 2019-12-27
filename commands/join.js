module.exports.run = async (client, message) => {

  if (!message.member.voiceChannel) return message.channel.send(`You must be connected in a living room!`)

  if(!message.member.voiceChannel.joinable) return message.channel.send(`I don't have permission to join in this living room!`);

  if(!message.member.voiceChannel.speakable) return message.channel.send(`I don't have permission to talk in this living room!`);

    message.member.voiceChannel.join().then(message.channel.send(`I'm joining you now.`))

}

module.exports.help = {
    name: "join",
    category: "music"
}
