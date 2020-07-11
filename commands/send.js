const Discord = require("discord.js")
const db = require("quick.db");

exports.run = async (client, message, args, member) => {
    let prefix = '>';

    let g = message.guild;
    let amount = message.channel.id
    let targetBalance = await db.fetch(`guildWelcome_${g.id}`);
    if(targetBalance === null)targetBalance = "welcome"
    if(!targetBalance) return;
    const welcomeChannel = message.guild.channels.find('name', targetBalance);
    welcomeChannel.send("Okay")
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["send"],
  permLevel: 0,
};

exports.help = {
  name: "send",
  description: "waifuset User",
  usage: "send <channel>",
};
