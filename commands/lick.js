const Discord = require('discord.js')
const snekfetch = require('snekfetch');
const { disgustP } = require('../assets/json/actions.json');
exports.run = async (client, message, args) => {  
      var recipient = message.content.split(/\s+/g).slice(1).join(" ");
        var disgust = disgustP[Math.round(Math.random() * (disgustP.length - 1))];

        if (!recipient) {
            var embed = new Discord.RichEmbed()
                .setColor('#0xff5bc3')
                .setImage(disgust);
            return message.channel.send(`${message.author} licks... themselves..?`, { embed: embed });

        } else if (message.mentions.users.first() == message.author) {
            var embed = new Discord.RichEmbed()
                .setColor('#0xff5bc3')
                .setImage(disgust);
            return message.channel.send(`${message.author} licks... themselves..?`, { embed: embed });

        } else if (message.mentions.users.first() == client.user) {

            var res = await snekfetch.get(`https://rra.ram.moe/i/r?type=lick`);
            var body = JSON.parse(res.text);

            var embed = new Discord.RichEmbed()
                .setColor('#0xff5bc3')
                .setImage(`https://rra.ram.moe${body.path}`);
            return message.channel.send(`Nyaa..♡(｡￫ˇ艸￩) where are you...licking me...`, { embed: embed });

        } else {

            var res = await snekfetch.get(`https://rra.ram.moe/i/r?type=lick`);
            var body = JSON.parse(res.text);

            var embed = new Discord.RichEmbed()
                .setColor('#FBCFCF')
                .setImage(`https://rra.ram.moe${body.path}`);
            return message.channel.send(`${message.author} licks ${recipient}!`, { embed: embed });
        }
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lick"],
  permLevel: 0,
};

exports.help = {
  name: "lick",
  description: "lick user",
  usage: "lick <@user>",
};