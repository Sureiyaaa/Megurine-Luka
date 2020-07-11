const Discord = require('discord.js')
const superagent = require("snekfetch");
const { disgustP, gropeP } = require('../assets/json/actions.json');
exports.run = async (client, message, args) => {  
      var recipient = message.content.split(/\s+/g).slice(1).join(" ");
        var disgust = disgustP[Math.round(Math.random() * (disgustP.length - 1))];
        var grope = gropeP[Math.round(Math.random() * (gropeP.length - 1))];

        if (!recipient) {
            var embed = new Discord.RichEmbed()
                .setColor('#0xff5bc3')
                .setImage(disgust);
            return message.channel.send(`${message.author} gropes... themselves..?`, { embed: embed });

        } else if (message.mentions.users.first() == message.author) {
            var embed = new Discord.RichEmbed()
                .setColor('#0xff5bc3')
                .setImage(disgust);
            return message.channel.send(`${message.author} gropes... themselves..?`, { embed: embed });

        } else if (message.mentions.users.first() == client.user) {
            const embed = new Discord.RichEmbed()
                .setColor('#0xff5bc3')
                .setImage(grope);
            return message.channel.send(`E-EH?! Nya! Where...are you.. touching.. (✿\´ ꒳ \` ) I guess I'm okay with it as long as you are... Don't take this the wrong way!`, { embed: embed });

        } else {
            var embed = new Discord.RichEmbed()
                .setColor('#0xff5bc3')
                .setImage(grope);
            return message.channel.send(`${message.author} has started... groping ${recipient}?`, { embed: embed });
        }
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["grope"],
  permLevel: 0,
};

exports.help = {
  name: "grope",
  description: "grope user",
  usage: "grope <@user>",
};