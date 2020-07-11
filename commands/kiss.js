const nekos = require('nekos.life');
const neko = new nekos();
const Discord = require("discord.js");

exports.run = async (client, message, args) => {  
let user = message.mentions.users.first()
if(message.mentions.users.size < 1) return message.reply('You need to mention somebody to give a little kiss, baka!')
if(user.id == message.author.id) return message.reply('you can not kiss yourself baka!')
let { url } = await neko.sfw.kiss();
let kiss1 = new Discord.RichEmbed()
  .setDescription(`${message.author} kissed ${user} 💋`)
  .setColor(0xff5bc3)
  .setImage(url)
  .setFooter("© Sureiyā#3654", client.user.avatarURL)
message.channel.send(kiss1);
  
} 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kiss"],
  permLevel: 0,
};

exports.help = {
  name: "kiss",
  description: "kiss.",
  usage: "kiss <@user>",
};