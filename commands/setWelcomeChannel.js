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
  welcomeChannel: "None Set",
  welcomeMessage: "**Welcome to {{guild}}, {{user}}! You are the {{count}}th User**"
}
exports.run = async (client, message, args) => {  
  const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You are not an Admin.");
  const [...value] = args;
      let botembed = new Discord.RichEmbed()

        .setTitle("Set Config")
        .setDescription(`Guild configuration **Welcome Channel** has been set to:\n\`${value.join(" ")}\``)
        .setColor("#0xff5bc3")
        .setTimestamp()
  client.settings.set(message.guild.id, value.join(" "), "welcomeChannel");
  message.channel.send(botembed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["swc", "setWelcome"],
};

exports.help = {
  name: "setWelcomeChannel",
  description: "set config",
  usage: "setconfig",
};