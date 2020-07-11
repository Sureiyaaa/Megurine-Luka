const nekos = require('nekos.life');
const neko = new nekos();
const Discord = require("discord.js");

exports.run = async (client, message, args) => {

let user = message.mentions.users.first()
if(message.mentions.users.size < 1) return message.reply('You need to mention somebody to give a one Hard slap')
if(user.id == message.author.id) return message.reply('OoOoOFFffF')
let { url } = await neko.sfw.slap();
let kiss1 = new Discord.RichEmbed()
  .setDescription(`${message.author} slapped ${user}`)
  .setColor(0xff5bc3)
  .setImage(url)
  .setFooter("© Sureiyā#3654", client.user.avatarURL)
message.channel.send(kiss1);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slap"],
  permLevel: 0,
};

exports.help = {
  name: "slap",
  description: "slaps a user",
  usage: "slap <@user>",
};
