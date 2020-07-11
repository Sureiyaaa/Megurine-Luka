const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
  	var serverQueue = message.client.queue.get(message.guild.id);
                let notvc = new Discord.RichEmbed()
						.setDescription("You are not in a Voice Channel.")
						.setColor(0xff5bc3)
		if (!message.member.voiceChannel) return message.channel.send(notvc);
		let noskip = new Discord.RichEmbed()
						.setDescription("There is nothing playing = No Skip..")
						.setColor(0xff5bc3)
		if (!serverQueue) return message.channel.send(noskip);
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;

    
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["next"],
  permLevel: 0,
};

exports.help = {
  name: "skip",
  description: "skip",
  usage: "skip",
};
