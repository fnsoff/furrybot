module.exports.run = async (client, message) => {
    if (message.author.id != '407157653475819530') return message.channel.send(`⚠ You do not have permission to use this command.`);

    const args = message.content.split(/\s+/);

    let name = args[0]
    if (!name) return message.channel.send(`❌ No pseudo entry!`);

    client.user.setUsername(name).then(name => {
        message.channel.send(`My username has been changed to **${name}**.`)
    }).catch().catch((e) => {
        message.channel.send(`❌ An error has occurred, it can that \`${name}\` already use.`)
    });


}

module.exports.help = {
    name: "rename",
    category: "owner"
}
