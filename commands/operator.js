const superagent = require("snekfetch");
const Discord = require('discord.js')
exports.run = async (client, message, args) => {  
        let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/boobs`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
    let opsEmbed = new Discord.RichEmbed()
    .setTitle("Oppai!!")
    .setImage(body.url)
    .setColor("0xff5bc3")
    .setFooter("© Sureiyā#3654", client.user.avatarURL)

    message.channel.send(opsEmbed)

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oppai"],
  permLevel: 0,
};

exports.help = {
  name: "oppai",
  description: "NSFW oppai",
  usage: "oppai",
};