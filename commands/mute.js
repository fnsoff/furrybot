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

  //start of create role
  if (!muterole) {
      try {
          muterole = await message.guild.createRole({
              name: "Muted",
              color: 0x10cc68,
              permissions: []
          })
          message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(muterole, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false
              });
          });
      } catch (e) {
          console.log(e.stack);
      }
  };
  //end of create role
    if (member.roles.has(muterole.id)) return message.channel.send(`**${member.user.username}** is already mute`);

  member.addRole(muterole.id)
    .then(message.channel.send(`**${member.user.username}** has been mute.\nPlease see if the *Muted* role is greater than the role of the person you want to mute.`))

}

module.exports.help = {
  name: "mute",
  category: "moderation"
}
