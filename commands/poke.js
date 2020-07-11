const nekos = require('nekos.life');
const neko = new nekos();
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
let user = message.mentions.users.first()
if(message.mentions.users.size < 1) return message.reply('You need to mention somebody to poke.')
if(user.id == message.author.id) return message.reply(`Baka! you can't poke yourself`)
let { url } = await neko.sfw.poke();
let kiss1 = new Discord.RichEmbed()
  .setDescription(`${message.author} poked ${user}`)
  .setColor(0xff5bc3)
  .setImage(url)
  .setFooter("© Sureiyā#3654", client.user.avatarURL)
message.channel.send(kiss1);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["poke"],
  permLevel: 0,
};

exports.help = {
  name: "poke",
  description: "poke <@user>",
  usage: "poke <@user>",
};