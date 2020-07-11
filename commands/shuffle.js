const Discord = require("discord.js");
const errors = require("../utils/errors.js");

exports.run = async (client, message, args) => {  
        let connection = message.client.queue.get(message.guild.id);
        if (!connection || !connection.songs[0]) {
            return message.channel.send(`:x: There is nothing in the queue to shuffle`);
        }
        connection.queue = connection.songs.sort(() => Math.random() - Math.random());
        return message.channel.send(`:musical_note: Successfully shuffled the queue`);
} 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["shuffle"],
  permLevel: 0,
};

exports.help = {
  name: "shuffle",
  description: "shuffle",
  usage: "shuffle",
};