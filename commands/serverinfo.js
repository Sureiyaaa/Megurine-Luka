const Discord = require("discord.js");

exports.run = (client, message) => {
    const embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL, "https://hgvmp.com")
      .setColor("#0xff5bc3")
      .setDescription(
        `Since ${new Date(message.guild.createdAt).toUTCString()}`,
      )
      .addField(`Server Region:`, `${message.guild.region}`, true)
      .addField(`Server Users:`, `${message.member.guild.memberCount}`, true)
      .addField(
        `Text Channels:`,
        `${
          message.guild.channels.filter(c => c.type === "text").map(c => c.name)
            .length
        }`,
        true,
      )
      .addField(
        `Voice Channels:`,
        `${
          message.guild.channels
            .filter(c => c.type === "voice")
            .map(c => c.name).length
        }`,
        true,
      )
      .addField(
        `Roles:`,
        `${
          message.guild.roles
            .filter(r => r.id !== message.guild.id)
            .map(roles => `\`${roles.name}\``).length
        }`,
        true,
      )
      .addField(`Owner:`, `${message.guild.owner}`, true)
      .setThumbnail(message.guild.iconURL);
    message.channel.send({ embed });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sinfo"],
  permLevel: 0,
};

exports.help = {
  name: "serverinfo",
  description: "Shows information of HGVMP's Discord Server",
  usage: "serverinfo",
};