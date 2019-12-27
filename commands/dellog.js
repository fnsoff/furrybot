module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '407157653475819530') return message.channel.send('Désolé, mais vous n\'avez pas la permission `Administrateur`!');

    let getchannel = client.guildDB.get(message.guild.id);
    getchannel.id = 'no_set';
    client.guildDB.set(message.guild.id, getchannel);

var loginingstatus = `Логирование успешно удалено с канала: ` + `#${message.channel.name}`;
const embed = {
  description: "Установка логирования",
  url: "https://furrybot.gq",
  color: 0xff0c0c,
  timestamp: new Date(),
  thumbnail: {
    "url": "http://cdn.lowgif.com/full/ef0517cfdf0cd4c6-success-transition-by-nitish-khagwal-dribbble.gif"
  },
  fields: [
    {
      "name": "Статус:",
      "value": loginingstatus
    }
  ]
};
message.channel.send({ embed });
}

module.exports.help = {
    name: "dellog",
    category: "config"
}
