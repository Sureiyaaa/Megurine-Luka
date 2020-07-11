const superagent = require("snekfetch");
const Discord = require('discord.js')
exports.run = async (client, message, args) => {  
    let {body} = await superagent
    .get(`https://nekos.life/api/lewd/neko`);
    if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("#0xff5bc3")
    .setTitle("You are such a Lewd Person....")
    .setImage(body.neko)
    .setFooter("© Sureiyā#3654", client.user.avatarURL)

    message.channel.send(hentaiEmbed);

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lewd"],
  permLevel: 0,
};

exports.help = {
  name: "lewd",
  description: "NSFW lewd",
  usage: "lewd",
};