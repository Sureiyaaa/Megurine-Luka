const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
    const voiceChannel = message.member.voiceChannel;
    const thisPlaylist = message.client.queue.get(message.guild.id);
    if (thisPlaylist.loop) {
      thisPlaylist.loop = false;
      return message.channel.send(`Playlist **Unlooped**`);
    } else {
      thisPlaylist.loop = true;
      return message.channel.send(`Playlist **Looped**`);
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["loop"],
  permLevel: 0,
};

exports.help = {
  name: "loop",
  description: "loop",
  usage: "loop",
};
