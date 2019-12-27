const math = require("mathjs");

module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.channel.send(`Mark a calculation.`)

    let resp;
    try {
        resp = math.eval(args.join(' '));
    } catch (e) {
        return message.channel.send('Please enter a correct calculation.')
    }

      message.channel.send(`\`\`\`JS\n${resp}\`\`\``)
}

module.exports.help = {
    name: "math",
    category: "utiles"
}
