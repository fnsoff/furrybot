var moment = require("moment");

module.exports.run = async (client, message, args) => {

  var amount = message.content.split(" ").slice(1).join(" ");
   if (!amount) return message.channel.send(`Вы не указали роль.`);

   let role = message.guild.roles.find("name", `${amount}`)
   if (!role) return message.channel.send(`Указанная роль не найдена, укажите ее без @.`);

   var moment = require("moment");

   message.channel.send(`Вот детальная информация о роли: **${role.name}**`, {
       embed: {
           color: 0x10cc68,
           author: {
               name: client.user.username,
               icon_url: client.user.displayAvatarURL
           },
           fields: [{
                   name: "• Название:",
                   value: `${role.name}`
               }, {
                   name: "• ID:",
                   value: `${role.id}`
               }, {
                   name: "• Цвет HEX:",
                   value: `${role.hexColor}`
               }, {
                   name: "• Создана:",
                   value: moment(role.createdAt).format("LL")
               }, {
                   name: "• Люди у которых есть эта роль:",
                   value: role.members.size
               }
           ]
       }
   })
}

module.exports.help = {
    name: "rinfo",
    category: "utiles"
}
