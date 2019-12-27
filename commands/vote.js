exports.run = (client, message, args) => {

	if (args.lenght < 1) return;

	args = args.slice(0).join(" ");

	message.channel.send({
		embed : {
			color: 0x10cc68,
			author: {
					name: client.user.username,
					icon_url: client.user.displayAvatarURL
			},
			description : args
		}
	}).then((function(message) {
		message.react("❎");
		message.react("✅");
	}));
};

module.exports.help = {
	name : "vote",
	category: "fun"
};
