module.exports.run = async (client, message, args) => {
const target = args[0];
const text = args.slice(1).join(' ');

  if (!target || !text) return message.channel.send(`❌ You must specify a **target language** and a **text to translate**.`);

  const translator = require('google-translate-api');
  translator(text, { to: target }).then((res) => {
    message.channel.send({
        embed: {
            color: 0x10cc68,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            thumbnail: {
                url: 'https://image.ibb.co/fCwF5z/translate.png'
            },
            title: `Translation finished:`,
            fields: [{
                name: "• Original text:",
                value: text
                }, {
                name: `• Translated text (${target})`,
                value: res.text
            }
        ]
        }
    })

  }).catch(() => message.channel.send(`❌ An error occured while translating! Please check you are using a good language code.`));

}

module.exports.help = {
    name: "translate",
    category: "utiles"
};
