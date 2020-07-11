const Discord = require('discord.js')
const snekfetch = require("snekfetch");
const { disgustP } = require('../assets/json/actions.json');
exports.run = async (client, message, args) => {  
       var recipient = message.content.split(/\s+/g).slice(1).join(" ");
      var disgust = disgustP[Math.round(Math.random() * (disgustP.length - 1))];

        if (args.length < 1) {
            var embed = new Discord.RichEmbed()
                .setColor('#0xff5bc3')
                .setImage(disgust)
            return message.channel.send(`${message.author} noms on... themselves..?`, { embed: embed })

        } else if (message.mentions.users.first() == message.author) {
            var embed = new Discord.RichEmbed()
                .setColor('#0xff5bc3')
                .setImage(disgust)
            return message.channel.send(`${message.author} noms on... themselves..?`, { embed: embed })

        } else if (message.mentions.users.first() == client.user) {

            var text = await snekfetch.get(`https://rra.ram.moe/i/r?type=nom`);
            var body = JSON.parse(text.text);

            var embed = new Discord.RichEmbed()
                .setColor('#0xff5bc3')
                .setImage(`https://rra.ram.moe${body.path}`)
            return message.channel.send(`Nyaa~ s-senpai... (´Å\`∗)... `, { embed: embed })

        } else {

            var text = await snekfetch.get(`https://rra.ram.moe/i/r?type=nom`);
            var body = JSON.parse(text.text);

            var embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(`https://rra.ram.moe${body.path}`)
            return message.channel.send(`${message.author} noms on ${recipient}!`, { embed: embed })
        }
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bite"],
  permLevel: 0,
};

exports.help = {
  name: "nom",
  description: "nom user",
  usage: "nom <@user>",
};