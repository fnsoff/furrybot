module.exports.run = async (client, message, args) => {
    if (!args[0]) {
        return message.channel.send(`Дайте мне как минимум два варианта и я выберу что-то одно.`);
    }
    let choices = args;
    if (choices.length < 2) {
        return message.channel.send(`Вы должны дать мне как минимум два варианта.`);
    }
    let choice = choices[Math.floor(Math.random() * choices.length)].trim();
    message.channel.send(`Пожалуй я выберу: \`${choice}\`!`);
    }
    
    
    module.exports.help = {
        name: "select",
        category: "fun"
    }
    