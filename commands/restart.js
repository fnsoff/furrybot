module.exports.run = async (client, message, args) => {

    if (message.author.id != '407157653475819530') return message.channel.send(`⚠ У вас недостаточно прав для презагрузки бота.`);

    message.channel.send(`:repeat: Начинаю процесс перезагрузки...`)

    setTimeout(function () {
        process.exit(1);
    }, 3 * 1000)

}
module.exports.help = {
    name: "restart",
    category: "owner",
}
