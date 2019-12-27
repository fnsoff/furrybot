module.exports.run = async (client, message, args) => {

    let cus = client.users.size;
    let cgs = client.guilds.size;

    const clean = text => {
        if (typeof (text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text
    };
    if (message.author.id != '407157653475819530') return message.channel.send(`⚠ У вас недостаточно прав для выполнения скрипта.`);
    try {
        const code = args.join(" ");
        if (code.length === 0) return message.channel.send("⚠ Не введен код для исполнения");
        let evaled = eval(code);
        if (typeof evaled !== "string");
        evaled = require('util').inspect(evaled);
        let codeok = evaled.replace(client.token, "Ты правда хочешь узнать мой токен?");
        message.channel.send(clean(codeok.substr(0, 1850)), {
            code: "js"
        }).then(async (res) => {
            await res.react("🍻");
        });
    } catch (err) {
        message.channel.send(clean(err), {
            code: "js"
        }).then(async (res) => {
            await res.react("❌");
        });
    };
}
module.exports.help = {
    name: "eval",
    category: "owner",
}
