const Discord = require("discord.js");
const utils = require('../utils/utils');
const config = require('../storage/settings.json');
exports.run = async (bot, message, args) => {
                let notvc = new Discord.RichEmbed()
						.setDescription("You are not in a Voice Channel.")
						.setColor(0xff5bc3)
	var serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voiceChannel) return message.channel.send(notvc);
		let nostop = new Discord.RichEmbed()
						.setDescription("There is nothing playing that i could stop for you.")
						.setColor(0xff5bc3)
		if (!serverQueue) return message.channel.send(nostop);
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["stop"],
  permLevel: 0,
};

exports.help = {
  name: "stop",
  description: "stop",
  usage: "stop",
};