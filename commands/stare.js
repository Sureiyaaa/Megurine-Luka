const Discord = require('discord.js')
const snekfetch = require("snekfetch");
const { disgustP, gropeP } = require('../assets/json/actions.json');
exports.run = async (client, message, args) => {  
      var recipient = message.content.split(/\s+/g).slice(1).join(" ");
        var disgust = disgustP[Math.round(Math.random() * (disgustP.length - 1))];

        if (!recipient) {
            var embed = new Discord.RichEmbed()
                .setColor('#0xff5bc3')
                .setImage(disgust);
            return message.channel.send(`${message.author} stares at... themselves..?`, { embed: embed });

        } else if (message.mentions.users.first() == message.author) {
            var embed = new Discord.RichEmbed()
                .setColor('#0xff5bc3')
                .setImage(disgust);
            return message.channel.send(`${message.author} stares at... themselves..?`, { embed: embed });

        } else if (message.mentions.users.first() == client.user) {
            var res = await snekfetch.get(`https://rra.ram.moe/i/r?type=stare`);
            var body = JSON.parse(res.text);

            var embed = new Discord.RichEmbed()
                .setColor('#0xff5bc3')
                .setImage(`https://rra.ram.moe${body.path}`);
            return message.channel.send(`N-Nani? (๑´•ω • \`๑)`, { embed: embed });


        } else {

            var res = await snekfetch.get(`https://rra.ram.moe/i/r?type=stare`);
            var body = JSON.parse(res.text);

            var embed = new Discord.RichEmbed()
                .setColor('#0xff5bc3')
                .setImage(`https://rra.ram.moe${body.path}`);
            return message.channel.send(`${message.author} stares at ${recipient}...`, { embed: embed });

        }
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["stare"],
  permLevel: 0,
};

exports.help = {
  name: "stare",
  description: "stare user",
  usage: "stare <@user>",
};