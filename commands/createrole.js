const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
var randomcolor = '0x'+Math.floor(Math.random()*16777215).toString(16);
    let gUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!gUser) return message.reply("Сделайте ментион человека чтобы дать ему роль");

    if(!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR", "MANAGE_ROLES")) return;
    let role = args.join(" ").slice(22);

    let gRole = message.guild.roles.find('name', role)
    if(!gRole){
        try {

            gRole = await message.guild.createRole({
                name: role,
                color: randomcolor,
                permissions: []
            })
            message.guild.channels.forEach(async(channel, id) => {
                await channel.overwritePermissions(gRole , {
                ADD_REACTIONS: true,
                READ_MESSAGE_HISTORY: true,
                READ_MESSAGES: true
                })
            })
        }catch(e){
            console.log(e.stack);
        }
    }

let giveEmbed = new Discord.RichEmbed()
.setTitle("Выдача роли")
.setColor("RANDOM")
.addField("Выдал", message.author)
.addField("Выдана роль", gRole.name)
.addField("Пользователю", gUser)
.setThumbnail("https://pngimage.net/wp-content/uploads/2018/05/create-png-image.png")
message.channel.send(giveEmbed)
await  gUser.addRole(gRole);


}


module.exports.help = {

    name: "createrole",
    category: "roles"
}