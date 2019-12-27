const log = require("./../utils/log.js");

module.exports = async (client, guild) => {
  if (!client.guildDB.has(guild.id)) {
    const config = {
      id: 'no_set'
    };
    client.guildDB.set(guild.id, config);
  };
  log.debug(`[guildDB] Created (lately) the configuration file for ${guild.name} (ID:${guild.id})`);

};
