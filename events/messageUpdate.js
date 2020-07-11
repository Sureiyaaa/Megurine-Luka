const Discord = require("discord.js");
const settings = require("../storage/settings.json");
module.exports = (oldMessage, newMessage) => {
  if (oldMessage.content !== newMessage.content) {

    newMessage.guild.fetchAuditLogs().then(() => {
		if(oldMessage.content.length > 2048){
			oldMessage.content = 'The old message extends the character limit (1024)!';
			const embed = new Discord.RichEmbed()
			.setDescription(
			  `**Message Sent by **${newMessage.author.username}** in ${
				newMessage.channel
			  } was edited!**\n\n**Old Message:**\n${
				oldMessage.content
			  }\n\n**New Message:**\n${newMessage.content}`,
			)
			.setColor("#25976f")
			.setFooter(newMessage.author.tag, newMessage.author.displayAvatarURL);
			newMessage.guild.channels
			.find("id", "625157833972908073")
			.send({ embed });
		} else {
			const embed = new Discord.RichEmbed()
			.setDescription(
			  `**Message Sent by ${newMessage.author.username} in ${
				newMessage.channel
			  } was edited!**\n\n**Old Message:**\n${
				oldMessage.content
			  }\n\n**New Message:**\n${newMessage.content}`,
			)
			.setColor("#25976f")
			.setFooter(newMessage.author.tag, newMessage.author.displayAvatarURL);
			newMessage.guild.channels
			.find("id", "625157833972908073")
			.send({ embed });
		}
		if(newMessage.content.length > 2048){
			newMessage.content = 'The new message extends the character limit (1024)!';
			const embed = new Discord.RichEmbed()
			.setDescription(
			  `**Message Sent by ${newMessage.author.username} in ${
				newMessage.channel
			  } was edited!**\n\n**Old Message:**\n${
				oldMessage.content
			  }\n\n**New Message:**\n${newMessage.content}`,
			)
			.setColor("#25976f")
			.setFooter(newMessage.author.tag, newMessage.author.displayAvatarURL);
			newMessage.guild.channels
			.find("id", "625157833972908073")
			.send({ embed });
		}
    });
  }
};