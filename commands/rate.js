const Discord = require("discord.js")
exports.run = async (client, message, args) => {  


let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let result = Math.floor((Math.random() * rates.length));


  return message.channel.send(`${result}/10`);

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rate"],
  permLevel: 0,
};

exports.help = {
  name: "rate",
  description: "rate <args>",
  usage: "rate",
};