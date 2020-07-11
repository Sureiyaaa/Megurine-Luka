const superagent = require("snekfetch");
const Discord = require('discord.js')
exports.run = async (client, message, args) => {  
    if (!message.channel.nsfw) return message.channel.send('You can use this commands on NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/pussy')
        .end((err, response) => {
      const pussyembed = new Discord.RichEmbed()
      .setTitle("Pussy :cat:")
      .setImage(response.body.url)
      .setColor(`0xff5bc3`)
  message.channel.send(pussyembed);
    })

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pussy"],
  permLevel: 0,
};

exports.help = {
  name: "pussy",
  description: "NSFW pussy",
  usage: "pussy",
};