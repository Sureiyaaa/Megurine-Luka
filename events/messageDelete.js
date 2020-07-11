const Discord = require("discord.js");
const settings = require("../storage/settings.json");
// End of Constants

// Start of Message Delete Event
module.exports = oldMessage => {
  if (oldMessage.content.startsWith(settings.prefix)) {
    const command = oldMessage.content
      .split(" ")[0]
      .slice(settings.prefix.length);
    const { client } = oldMessage;

    if (client.commands.has(command) || client.aliases.has(command)) return;
  }

  oldMessage.guild.fetchAuditLogs({type: 72 /* MESSAGE_DELETE */ }).then(logs => {
      const embed = new Discord.RichEmbed()
      .setDescription(
        `**Message Sent by **${oldMessage.author.tag}** in ${
          oldMessage.channel
        } was deleted by ${logs.entries.first().executor}!**\n\n**Message:**\n${oldMessage.content}\n`,
      )
      .setColor("#830f0f")
      .setFooter(oldMessage.author.tag, oldMessage.author.displayAvatarURL)
    oldMessage.guild.channels
      .find("id", "625157833972908073")
      .send({ embed });
    });
};