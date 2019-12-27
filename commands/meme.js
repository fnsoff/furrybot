const randomPuppy = require('random-puppy');

module.exports.run = async (client, message) => {

  var subreddits = [
        'meme'
  ]

  var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

  randomPuppy(sub).then(url => {
    message.channel.send({
      embed: {
        color: 0x10cc68,
        author: {
          name: client.user.username,
          icon_url: client.user.displayAvatarURL
        },
        image: {
          url: url
        }
      }
    });
  });

};

module.exports.help = {
    name: "meme",
    category: "fun"
};
