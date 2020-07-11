const ms = require('ms');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    let reminderTime = args[0];
  if  (!reminderTime) {
    let embed = new Discord.RichEmbed()
      .setTitle("Proper Usage")
      .setDescription(`<prefix>remindme 15min <remind what>`)
    
    return message.channel.send(embed)
  }
  let reminder = args.slice(1).join(" ");
  let remindembed = new Discord.RichEmbed()
    .setColor(0xff5bc3)
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
    .addField('Reminder', `\`\`\`${reminder}\`\`\``)
    .addField('Time', `\`\`\`${reminderTime}\`\`\``)
  
  message.channel.send(remindembed);
  
  setTimeout(function() {
    let remindEmbed = new Discord.RichEmbed()
      .setColor(0xff5bc3)
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
      .addField(`Reminder`, `\`\`\`${reminder}\`\`\``)
      .setTimestamp()
    
    message.channel.send(remindEmbed)
  }, ms(reminderTime));
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["remind"],
  permLevel: 0,
};

exports.help = {
  name: "remind",
  description: "NSFW trap",
  usage: "remind <5min> <Eat Food>",
};
