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
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You are not an Admin.");
  const [prop, ...value] = args;
      let botembed = new Discord.RichEmbed()

        .setTitle("Set Config")
        .setDescription(`Guild configuration item ${prop} has been changed to:\n\`${value.join(" ")}\``)
        .setColor("#0xff5bc3")
        .setTimestamp()
  client.settings.set(message.guild.id, value.join(" "), prop);
  message.channel.send(botembed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["setconf", "setConfig", "setConf"],
};

exports.help = {
  name: "setconfig",
  description: "set config",
  usage: "setconfig",
};