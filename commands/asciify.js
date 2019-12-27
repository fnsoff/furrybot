var figlet = require('figlet');

exports.run = (client, message, args) => {

    var maxLen = 14

    if (args.join(' ').length > maxLen) return message.channel.send('Не больше 14 символов.')

    if (!args[0]) return message.channel.send('Введите текст для асциифирования!');

    figlet(`${args.join(' ')}`, function (err, data) {
        if (err) {
            return;
        }

        message.channel.send(`${data}`, {
            code: 'AsciiArt'
        });
    });

}

module.exports.help = {
    name: "asciify",
    category: "fun"
}
