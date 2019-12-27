module.exports.run = async (client, message) => {
    if (!message.channel.nsfw) return message.channel.send("🔞 This channel has no NSFW option enabled.");
    var max = 5511;
    var min = 1000;
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
            url: `http://media.obutts.ru/butts_preview/0${MathLoL}.jpg`
          }
        }
    });

};

module.exports.help = {
    name: "ass",
    category: "nsfw"
};
