const Discord = require("discord.js");
const ytdl = require('ytdl-core');
exports.run = async (client, message, args) => {
   let noplaying = new Discord.RichEmbed()
						.setDescription("There is nothing playing.")
						.setColor(0xff5bc3)
	var serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			let pauseembed = new Discord.RichEmbed()
						.setDescription(`⏸ Paused the music for you!`)
						.setColor(0xff5bc3)
			return message.channel.send(pauseembed);
		}
		return message.channel.send(noplaying);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pause"],
  permLevel: 0,
};

exports.help = {
  name: "pause",
  description: "pause",
  usage: "pause",
};
