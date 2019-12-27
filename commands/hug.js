const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  if (!args[0]) {
    return message.channel.send('Please mark a name of a person.');
  }

    const search = args.slice(0).join(' ');
    let {
        member
    } = message;
    if (message.mentions.members.size > 0) {
        member = message.mentions.members.first();
    } else if (search) {
        member = client.findersUtil.findMember(message.guild, search);
        if (member.size === 0) {
          return message.channel.send(`❌ No members found \`${search}\`!`);
        } else if (member.size === 1) {
            member = member.first();
        } else {
            return message.channel.send(client.findersUtil.formatMembers(client, member));
        }
    };

    const Neko = require("neko.js");

    let nekoclient = new Neko.Client();

    let hug = await nekoclient.hug();

    if (member) {
        nekoclient.hug().then((hug) => {
            message.channel.send({
                embed: {
                  color: 0x10cc68,
                  author: {
                      name: client.user.username,
                      icon_url: client.user.displayAvatarURL
                  },
                  title: `${message.member.displayName} сделал обнимаши для ${member.displayName}`,
                  image: {
                        url: hug.url
                  }
                }
            })
        });
    }
}

module.exports.help = {
    name: "hug",
    category: "fun"
}
