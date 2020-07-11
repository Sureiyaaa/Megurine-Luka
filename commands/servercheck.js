const Discord = require("discord.js");
const config = require("../storage/settings.json")
const ownerID = "341577240934613004";
exports.run = async (client, message, args) => {
    if (message.author.id !== ownerID) return message.channel.send("You are not authorized to use this command.");
    
    let bicon = client.user.displayAvatarURL;
    let string = '';
    client.guilds.forEach(guild => {
    string += guild.name + '\n';})
    let bt = client.user.username;
    let botembed = new Discord.RichEmbed()
        .setColor("#0xff5bc3")
        .addField("Servers In", string)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL);
    message.channel.send(botembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["servers"],
  permLevel: 0,
};

exports.help = {
  name: "servers",
  description: "servers",
  usage: "servers",
};
