const nekos = require('nekos.life');
const neko = new nekos();
const Discord = require("discord.js");

exports.run = async (client, message, args) => {  

  if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return; 
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("You are not my master.");
  if(!args[0]) return message.channel.send(`Cleaned **${args[1]}** messages `);
  if(isNaN(args[0])) return;
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
} 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["clearmsg"]
};

exports.help = {
  name: "clearmsg",
  description: "clearmsg.",
  usage: "clearmsg <1-100>",
};