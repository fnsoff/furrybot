module.exports.run = async (client, message) => {
    if (!message.channel.nsfw) return message.channel.send("🔞 This channel has no NSFW option enabled.");
    const randomPuppy = require('random-puppy');
    const subreddits = [
        "NSFW_GIF",
        "nsfw_gifs",
        "porninfifteenseconds",
        "60FPSPorn",
        "porn_gifs",
        "nsfw_Best_Porn_Gif",
        "LipsThatGrip",
        "adultgifs"
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
    name: "nsfwgif",
    category: "nsfw"
};
