const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.reply("Всезнающий шар, спроси и я отвечу.");
    let question = args.join(" ");
    let replies = ["Да", "Нет", "Не знаю, не знаю", "Попробуй спросить еще раз", "Я не могу ответить тебе", "Ты действительно хочешь узнать мой ответ?", "Конечно же!", "Обсурдно!"];
    let result = Math.floor((Math.random() * replies.length));

    message.channel.send({
        embed: {
          color: 0x10cc68,
          author: {
              name: client.user.username,
              icon_url: client.user.displayAvatarURL
          },
            thumbnail: {
                url: "https://thumbs.gfycat.com/KeenVerifiableCavy-max-1mb.gif"
            },
            fields : [
                {
                "name": ":inbox_tray: Вы спросили:",
                "value": question
            },
                            {
                "name": ":outbox_tray: Я вам ответил:",
                "value": replies[result]
            }
        ]
        }

    })

}

module.exports.help = {
    name: "8ball",
    category: "fun"
}
