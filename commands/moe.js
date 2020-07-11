const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {
    randomPuppy('awwnime')
    .then(url => {
        const embed = new Discord.RichEmbed()
        .setTitle("MOE")
        .setImage(url)
        .setColor('#0xff5bc3')
     return message.channel.send({ embed });
})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["moe"],
  permLevel: 0,
};

exports.help = {
  name: "moe",
  description: "moe",
  usage: "moe",
};
