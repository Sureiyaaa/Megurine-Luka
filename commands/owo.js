const Discord = require('discord.js')
const snekfetch = require('snekfetch');
const { cryP } = require('../assets/json/actions.json')  ;
exports.run = async (client, message, args) => {  
      var text = await snekfetch.get(`https://rra.ram.moe/i/r?type=owo`);
        var body = JSON.parse(text.text);

        var embed = new Discord.RichEmbed()
            .setColor('#0xff5bc3')
            .setImage(`https://rra.ram.moe${body.path}`);
        return message.channel.send({ embed });

    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["owo"],
  permLevel: 0,
};

exports.help = {
  name: "owo",
  description: "owo",
  usage: "owo",
};