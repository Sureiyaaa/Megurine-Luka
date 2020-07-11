const Discord = require('discord.js')
const snekfetch = require('snekfetch');
const { cryP } = require('../assets/json/actions.json');
exports.run = async (client, message, args) => {  
      const embed = new Discord.RichEmbed()
            .setColor('#0xff5bc3')
            .setImage(cryP[Math.round(Math.random() * (cryP.length - 1))]);
        return message.channel.send(`${message.author} has started crying!`, { embed: embed });

    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cry"],
  permLevel: 0,
};

exports.help = {
  name: "cry",
  description: "cry",
  usage: "cry",
};