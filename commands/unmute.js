module.exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('Sorry, but you do not have the **MANAGE_ROLES** permissions! If you think this is an error, contact an owner.')
  if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send('I do not have the **MANAGE_ROLES** permission in this server.');

  let muterole = message.guild.roles.find(`name`, "Muted");

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

  if (member.hasPermission("MANAGE_GUILD")) return message.channel.send("I can not mute him, he must have permission to Manage the server.");

  if (!member.roles.has(muterole.id)) return message.channel.send(`**${member.user.username}** is not mute`);

  member.removeRole(muterole.id)
    .then(message.channel.send(`**${member.user.username}** has been unmute.`))

}

module.exports.help = {
  name: "unmute",
  category: "moderation"
}
