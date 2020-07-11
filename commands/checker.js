const superagent = require("snekfetch");
const Discord = require('discord.js')
exports.run = async (client, message, args) => {  
    
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setTitle("Pervert??...")
    .setImage(body.url)
    .setColor("0xff5bc3")
    .setFooter("© Sureiyā#3654", client.user.avatarURL)
    message.channel.send(hentaiEmbed);

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pervert"],
  permLevel: 0,
};

exports.help = {
  name: "hentai",
  description: "NSFW hentai",
  usage: "hentai",
};