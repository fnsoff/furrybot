const request = require('request');

module.exports.run = async (client, message) => {
  const regex = /<p class=\"block hidden-xs\">\n<a href=\".*\">\n(.*) VDM/
  request('https://www.viedemerde.fr/aleatoire', (error, response, body) => {
      let vdm = regex.exec(body);
      message.channel.send(vdm[1]);
  })
}

module.exports.help = {
    name: "vdm",
    category: "fun"
}
