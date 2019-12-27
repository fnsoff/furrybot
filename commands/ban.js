module.exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Sorry, but you do not have the **BAN_MEMBERS** permissions! If you think this is an error, contact an owner.')
  if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send('I do not have the **BAN_MEMBERS** permission in this server.');

  if (!args[0]) {
    return message.channel.send(':point_up_2: Укажите персону которую хотите навсегда забанить на сервере');
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
      return message.channel.send(`❌ Пользователь по вашему запросу не найден \`${search}\`!`);
    } else if (member.size === 1) {
      member = member.first();
    } else {
      return message.channel.send(client.findersUtil.formatMembers(client, member));
    }
};

  if (member.hasPermission("MANAGE_GUILD")) return message.channel.send("Я не могу забанить его, у него роль выше моей :head_bandage: ");

  let reason = args.slice(1).join(' ');
  if (!reason) reason = 'Причина не указана';

  member.ban({ reason: `${reason}` })
    .then(message.channel.send(`**${member.user.username}** был забанен :smiling_imp: .`))
  }

module.exports.help = {
  name: "ban",
  category: "moderation"
}
