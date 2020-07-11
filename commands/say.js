const Discord = require("discord.js")
const settings = require("../storage/settings.json");

exports.run = (client, message, args) => {


  if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return; 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You are not my master.");
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["s"],
  permLevel: 0,
};

exports.help = {
  name: "say",
  description: "Make Inori say something",
  usage: "say",
};
