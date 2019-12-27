const superagent = require("superagent");

module.exports.run = async (client, message) => {
    let {
        body
    } = await superagent
        .get('http:\/\/aws.random.cat\/meow');
    message.channel.send({
        embed: {
          color: 0x10cc68,
          author: {
              name: client.user.username,
              icon_url: client.user.displayAvatarURL
          },
          image: {
                url: body.file
          }
        }
    })
}

module.exports.help = {
    name: "cat",
    category: "fun"
}
