module.exports.run = async (client, message, args) => {
    const search = args.slice(0).join(' ');
    const user = message.mentions.users.first() || message.author;
    let {
        member
    } = message;
    if (message.mentions.members.size > 0) {
        member = message.mentions.members.first();
    } else if (search) {
        member = client.findersUtil.findMember(message.guild, search);
        if (member.size === 0) {
            return message.channel.send(`❌ Пользователь не найден \`${search}\`!`);
        } else if (member.size === 1) {
            member = member.first();
        } else {
            return message.channel.send(client.findersUtil.formatMembers(client, member));
        }
    };
    message.channel.send({
        embed: {
            color: 0x10cc68,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            title: `🖼 Это аватарка пользователя **${member.user.username}**:`,
            image: {
              url: user.avatarURL
            }
        }
    })
};
module.exports.help = {
    name: "avatar",
    category: "utiles"
};
