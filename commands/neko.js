const superagent = require("snekfetch");
const Discord = require('discord.js')
exports.run = async (client, message, args) => {  

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/neko`);

    let wEmbed = new Discord.RichEmbed()
    .setTitle("Neko :heart::heart:")
    .setImage(body.url)
    .setColor("0xff5bc3")
    .setFooter("� Sureiya#3654", client.user.avatarURL)

    message.channel.send(wEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["neko"],
  permLevel: 0,
};

exports.help = {
  name: "neko",
  description: "neko",
  usage: "neko",
};