module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '407157653475819530') return message.channel.send('Извините, у вас отстутствует право `Администратор` для использования данной команды.');

    let getchannel = client.guildDB.get(message.guild.id);
    getchannel.id = message.channel.id;
    client.guildDB.set(message.guild.id, getchannel);
var loginingstatus = `Логирование успешно установлено на канал: ` + `#${message.channel.name}`;
const embed = {
  description: "Установка логирования",
  url: "https://furrybot.gq",
  color: 0x0cff28,
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
    name: "setlog",
    category: "config"
}
