const Discord = require('discord.js')
const superagent = require("superagent");
exports.run = async (client, message, args) => {  
  
   let service = [
      "https://i.imgur.com/Onda6pR.jpg",
      "https://i.imgur.com/F2t35mk.jpg",
      "https://i.imgur.com/kqVXtZE.jpg",
      "https://i.imgur.com/HiozL3e.jpg",
      "https://i.imgur.com/LIRQYAT.jpg",
      "https://i.imgur.com/wJRDktm.jpg",
      "https://i.imgur.com/TBF20jU.jpg",
      "https://i.imgur.com/YoWbKlf.jpg",
      "https://i.imgur.com/sl3gWEq.jpg",
      "https://i.imgur.com/QTr3DzV.jpg",
      "https://i.imgur.com/JWypJdM.jpg",
      "https://i.imgur.com/r9oQXcG.jpg",
      "https://i.imgur.com/F66tzZO.jpg",
      "https://i.imgur.com/vEtzahJ.png",
      "https://i.imgur.com/wkSbjHs.png",
      "https://i.imgur.com/quxhR8s.jpg"
    ]
    let serviceresult = Math.floor((Math.random() * service.length));
     if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return; 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You are not my master.");
    message.channel.send(`${message.author.username}` + "-sama Check my Private Message.. UwU")
  message.author.send("H-Here Master:blush: ")
    let ghembed = new Discord.RichEmbed()
        .setColor(`0xff5bc3`)
        .setTitle(`${message.author.username}` + "-s-sama Pervert!!!!.")
        .setFooter("© Sureiyā#3654", client.user.avatarURL)
        .setImage(service[serviceresult])
    message.author.sendEmbed(ghembed)
  

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["service"],
  permLevel: 0,
};

exports.help = {
  name: "service",
  description: "NSFW service",
  usage: "service",
};