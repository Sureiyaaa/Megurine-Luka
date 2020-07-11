const Discord = require("discord.js");
const snekfetch = require("snekfetch")
exports.run = async (client, message, args) => {  
    
      if (message.mentions.users.size < 1) return message.channel.send("you can't marry nobody")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${user} You got married with ${message.author.username} ❤`)
    let embed = new Discord.RichEmbed()
      .setColor("0xff5bc3")
      .setImage("https://i.imgur.com/u67QLhB.gif")
    message.channel.send(embed)
              
  
} 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["marry"],
  permLevel: 0,
};

exports.help = {
  name: "marry",
  description: "marry.",
  usage: "marry <@user>",
};