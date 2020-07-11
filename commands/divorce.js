const Discord = require("discord.js");
const snekfetch = require("snekfetch")
exports.run = async (client, message, args) => {  
       if (message.mentions.users.size < 1) return message.channel.send("you can't divorce nobody")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${user} You got divorced with ${message.author.username} :broken_heart:`)
                 let embed = new Discord.RichEmbed()
      .setColor("0xff5bc3")
      .setImage("https://i.imgur.com/IgvLWaa.gif")
    message.channel.send(embed)
} 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["divorce"],
  permLevel: 0,
};

exports.help = {
  name: "divorce",
  description: "divorce.",
  usage: "divorce <@user>",
};