const superagent = require("snekfetch");
const Discord = require('discord.js')
exports.run = async (client, message, args) => {  
    if (!message.channel.nsfw) return message.channel.send('You can use this commands on NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Lewd Neko :heart:")
      .setImage(response.body.url)
      .setColor(`0xff5bc3`)
  message.channel.send(lewdembed);
    })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lewdneko"],
  permLevel: 0,
};

exports.help = {
  name: "lewdneko",
  description: "NSFW lewdneko",
  usage: "lewdneko",
};