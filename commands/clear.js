module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Sorry, but you do not have the **Manage Messages** permissions! If you think this is an error, contact an owner.')
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send('I do not have the **Manage Messages** permission in this server.');

    if (!args[0]) return message.channel.send(':hugging: Вы должны указать количество сообщений.');
    if (args[0] < 1 && args[0] > 1000) return message.channel.send(':hugging: Введите число не меньше 1 и не больше 1000');
    if (isNaN(args[0])) return message.channel.send(':x: Введите корректное число для очистки.');


    message.channel.bulkDelete(args[0])
        .then(messages => message.channel.send(`🗑 Я удалил **${args[0]}** сообщений по вашему запросу.`).then(msg => msg.delete({
          timeout: 3000
        }))).catch().catch((e) => message.channel.send(':cry: Вы не можете удалить сообщения старше чем 14 дней.'));
}

module.exports.help = {
    name: "clear",
    category: "moderation"
}
