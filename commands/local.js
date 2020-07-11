const superagent = require("snekfetch");
const Discord = require('discord.js')
exports.run = async (client, message, args) => {  
    if (!message.channel.nsfw) return message.channel.send('You can use this commands on NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/blowjob')
        .end((err, response) => {
      const pussyembed = new Discord.RichEmbed()
      .setTitle("Explosion Job")
      .setImage(response.body.url)
      .setColor(`0xff5bc3`)
  message.channel.send(pussyembed);
    })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blowjob"],
  permLevel: 0,
};

exports.help = {
  name: "blowjob",
  description: "NSFW blowjob",
  usage: "blowjob",
};