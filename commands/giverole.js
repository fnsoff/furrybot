const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("недостаточно прав").then(message => message.delete(4000));
    let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rMember) return message.reply("пользователь не существует").then(message => message.delete(4000));
    let role = args[1];
    if(!role) return message.reply("Укажите роль для выдачи.").then(message => message.delete(4000));
    let gRole = message.guild.roles.find('name', role);
    if(!gRole) return message.reply("Не могу найти эту роль").then(message => message.delete(4000));
    if(rMember.roles.has(gRole.id));
    await(rMember.addRole(gRole.id));
    message.channel.send(`Пользовательзователю <@${rMember.id}> добавлена роль ***${gRole.name}***`)
}


module.exports.help = {

    name: "giverole",
    category: "roles"
}