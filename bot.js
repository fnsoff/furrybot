
const Discord = require('discord.js');
const fs = require("fs");
const log = require("./utils/log.js");
const Enmap = require('enmap');
const db = require('enmap-level');
const client = new Discord.Client();

client.commands = new Discord.Collection();

(async function () {
    fs.readdir("./commands/", (err, files) => {
        if (err) log.error(err);
        let cmd = files.filter(f => f.split(".").pop() === "js");
        if (cmd.length <= 0) {
            log.debug("Импорт комманд :/\n");
            return;
        }

        log.debug(`Загружено (${files.length} комманд)`);
        cmd.forEach((f, i) => {
            let fichier = require(`./commands/${f}`);
            client.commands.set(fichier.help.name, fichier);
        });

        log.debug(`Все комманды с папки были загружены.\n`);
    });
	
	/*MUSIC MODULE COMMANDS*/
    fs.readdir("./music/", (err, files) => {
        if (err) log.error(err);
        let cmd = files.filter(f => f.split(".").pop() === "js");
        if (cmd.length <= 0) {
            log.debug("Импорт комманд :/\n");
            return;
        }

        log.debug(`Загружено (${files.length} комманд музыкального модуля)`);
        cmd.forEach((f, i) => {
            let fichier = require(`./music/${f}`);
            client.commands.set(fichier.help.name, fichier);
        });

        log.debug(`Все комманды музыкального модуля были загружены.\n`);
    });
	/*END*/
	

    fs.readdir("./events/", (err, files) => {
        if (err) log.error(err);
        let cmd = files.filter(f => f.split(".").pop() === "js");
        if (cmd.length <= 0) {
            log.debug("Загрузка событий :/\n");
            return;
        }

        log.debug(`Загружено (${files.length} событий)`);
        files.forEach((f, i) => {
            const events = require(`./events/${f}`);
            const event = f.split(".")[0];
            client.on(event, events.bind(null, client));
            delete require.cache[require.resolve(`./events/${f}`)];
        });

        log.debug(`Все события загружены успешно.\n`);
    });

    fs.readdir("./helpers/", async (err, files) => {
        if (err) log.error(err);
        let cmd = files.filter(f => f.split(".").pop() === "js");
        if (cmd.length <= 0) {
            log.debug("Загрузка функций :/\n");
            return;
        }

        log.debug(`Загружено (${files.length} функций)`);
        files.forEach(async (r) => {
            const helper = require(`./helpers/${r}`);
            client[r.split('.')[0]] = helper;
        });

        log.debug(`Все функции успешно загружены.\n`);
    });

}());

client.guildDB = new Enmap({
    provider: new db({
        name: 'guildDB'
    })
});






 /* MUSIC MODULE */

log.debug(`Загрузка музыкального модуля.\n`);
var cp = require("child_process");
cp.exec("java -Dnogui=true -jar musicmodule.jar");
log.debug(`Музыкальный модуль успешно загружен.\n`);
 
 /* MUSIC MODULE END */




client.login("You must paste token here")
    .then(() => log.log('[Discord] Подключен к веб-сокету!'))
    .catch(console.error);

