const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    const sexyrate = Math.floor(Math.random() * 100)
       const embed = new Discord.RichEmbed()
            .addField(":heart_decoration: Sexy Rate :heart_decoration: ", "I rate you a " + sexyrate + " out of 100 on the sexy scale")
            .setThumbnail(message.author.displayAvatarURL)
       message.channel.send({embed})

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sexyrate"],
  permLevel: 0,
};

exports.help = {
  name: "sexyrate",
  description: "sexyrate.",
  usage: "sexyrate",
};