module.exports.run = async (client, message, args) => {

      if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Sorry, but you do not have the **KICK_MEMBERS** permissions! If you think this is an error, contact an owner.')
      if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send('I do not have the **KICK_MEMBERS** permission in this server.');

    if (!args[0]) {
      return message.channel.send('Please mark a name of a person.');
    }

    const search = args.slice(0)[0];

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

    if (member.hasPermission("MANAGE_GUILD")) return message.channel.send("I can not kick him, he must have permission to Manage the server.");

    let reason = args.slice(1).join(' ');
    if (!reason) reason = 'No reason';

    member.kick({ reason: `${reason}` })
      .then(message.channel.send(`**${member.user.username}** has been kick.`))
    }

module.exports.help = {
    name: "kick",
    category: "moderation"
}
