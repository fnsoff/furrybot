module.exports.run = async (client, message, args) => {

    if (message.author.id != '407157653475819530') return message.channel.send(`⚠ У вас недостаточно прав для презагрузки бота.`);

message.channel.send("Лог всех удаленных сообщений.", {
  files: [
    "./deleted.log"
  ]
});


}
module.exports.help = {
    name: "downloadlog",
    category: "owner",
}
