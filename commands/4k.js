const randomPuppy = require('random-puppy');

module.exports.run = async (client, message) => {
  if (!message.channel.nsfw) return message.channel.send("🔞 This channel has no NSFW option enabled.");

  var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
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
    name: "4k",
    category: "nsfw"
};
