module.exports.run = async (client, message) => {
    if (!message.channel.nsfw) return message.channel.send("🔞 This channel has no NSFW option enabled.");
    var max = 12449;
    var min = 10000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    message.channel.send({
        embed: {
          color: 0x10cc68,
          author: {
              name: client.user.username,
              icon_url: client.user.displayAvatarURL
          },
          image: {
            url: `http://media.oboobs.ru/boobs_preview/${MathLoL}.jpg`
          }
        }
    });

};

module.exports.help = {
    name: "boobs",
    category: "nsfw"
};
