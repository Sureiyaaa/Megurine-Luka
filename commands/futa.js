const Discord = require('discord.js');
const randomPuppy = require('random-puppy')

exports.run = async (client, message, args) => {
  if (!message.channel.nsfw) return message.channel.send('You can use this commands on NSFW Channel!')
     if(message.author.bot) return;
  if(message.channel.type !== "text") return;
  randomPuppy('futanari')
            .then(url => {
                const embed = new Discord.RichEmbed()
                .setTimestamp(new Date())
                .setTitle(`Futanari`)
                .setImage(url)
                .setColor(0xff5bc3)
    return message.channel.send({ embed });
            })
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["futa"],
  permLevel: 0,
};

exports.help = {
  name: "futanari",
  description: "futanari",
  usage: "futanari",
};
