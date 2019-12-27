module.exports.run = async (client, message, args) => {
  // const cooldown = new Set();
  // if (cooldown.has(message.author.id && message.guild.id)) {
  //         return message.channel.send('**[COOLDOWN]** Please wait 1 Minute!');
  //     }
  //     cooldown.add(message.author.id && message.guild.id);
  //     setTimeout(() => {
  //         cooldown.delete(message.author.id && message.guild.id);
  //     }, 60000);

    const startTime = Date.now();
    const messageSent = await message.channel.send(`:repeat: Проверка...`);
    return messageSent.edit(`🏓 Понг | \`${Date.now() - startTime}\`мс`);

}
module.exports.help = {
    name: "ping",
    category: "bot",
}
