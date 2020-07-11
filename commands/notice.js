const Discord = require('discord.js')
exports.run = async (client, message, args) => {  
message.channel.send(message.author.toString() + "-san I Have Noticed You. uWu");

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["notice"],
  permLevel: 0,
};

exports.help = {
  name: "notice",
  description: "notice",
  usage: "notice",
};