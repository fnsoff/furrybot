const ms = require("ms");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Sorry, but you do not have the **ADMINISTRATOR** permissions! If you think this is an error, contact an owner.')
  if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send('I do not have the **ADMINISTRATOR** permission in this server.');

    if (!client.lockit) client.lockit = [];
    let time = args.join(" ");
    let validUnlocks = ["unlock"];
    if (!time) return message.channel.send(`Вы должны указать время блокирования в часах, минутах, или секундах.`);

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
        }).then(() => {
            message.channel.send(":unlock: Lock up.");
            clearTimeout(client.lockit[message.channel.id]);
            delete client.lockit[message.channel.id];
        }).catch().catch((e) => {
            message.channel.send("❌ An error has occurred.")
        });
    } else {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
            message.channel.send(`:lock: Канал заблокирован на ${ms(ms(time), { long:true })}, чтобы убрать блокировку введите **!lockdown unlock**.`).then(() => {

                client.lockit[message.channel.id] = setTimeout(() => {
                    message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: null
                    }).then(message.channel.send(":unlock: Lock up.")).catch(console.error);
                    delete client.lockit[message.channel.id];
                }, ms(time));

            })
        }).catch().catch((e) => {
          message.channel.send("❌ An error has occurred.")
            console.log(e)
        });
    }
}

module.exports.help = {
    name: "lockdown",
    category: "moderation"
}
