const log = require("./../utils/log.js");

module.exports = async (client) => {

    // console.log(client.guildDB)

    setInterval(function() {
  		client.user.setPresence({game : {name : `#help | SmookyWizard [RU] `, type : 0}});
  	}, 60000);

    log.color(`${client.user.username} теперь онлайн.`, "FgMagenta");
    log.color(`${client.user.username} работает для ${client.users.size} пользователей на ${client.guilds.size} серверах!`, "FgMagenta");

    client.guilds.filter(g => !client.guildDB.has(g.id)).forEach((g) => {
        const get_guildDB = {
            id: 'no_set'
        };
        client.guildDB.set(g.id, get_guildDB);
        log.debug(`[guildDB] Создаю конфигурацию для ${g.name} (ID:${g.id})`);
    });

}
