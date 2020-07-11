const superagent = require("snekfetch");
const Discord = require('discord.js');
const client = new Discord.Client();
const Enmap = require('enmap');
client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep'
});

const defaultSettings = {
  welcomeChannel: "🎉welcome🎉",
  welcomeMessage: "**Welcome to {{guild}}, {{user}}! You are the {{count}}th User**"
}
exports.run = async (client, message, args) => {  
  const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
    let configProps = Object.keys(guildConf).map(prop => {
      return `${prop}  :  ${guildConf[prop]}\n`;
    });
    message.channel.send(`The Following are the Guild's Current Configuration:
    \`\`\`${configProps}\`\`\``);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["guildconf", "guildConf", "guildconfig"],
};

exports.help = {
  name: "guildConfig",
  description: "set config",
  usage: "setconfig",
};