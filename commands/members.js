const Discord = require('discord.js');

exports.run = (client, message, args) => {

	message.channel.send({
			embed: {
					color: 0x10cc68,
					author: {
							name: client.user.username,
							icon_url: client.user.displayAvatarURL
					},
					fields: [{
									name: "• :spy: Пользователей:",
									value: `${message.guild.memberCount}`
							}, {
									name: "• :bust_in_silhouette: Реальных:",
									value: `${message.guild.members.filter(member => !member.user.bot).size}`
							}, {
									name: "• :robot: Ботов:",
									value: `${message.guild.members.filter(member => member.user.bot).size}`
							}, {
									name: "• :notepad_spiral: Статусы:",
									value: `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Онлайн\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Нет на месте\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Не беспокоить\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Оффлайн/Неведимка\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Стримит`
					}]
			}
	})
};
module.exports.help = {
	name: "members",
	category: "utiles"
}
