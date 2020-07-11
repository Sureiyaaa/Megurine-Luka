const settings = require('../storage/settings.json')
const YouTube = require('simple-youtube-api');
const Youtube_API_Key = "AIzaSyAI2kQQMDO7F3lEte7_CCT3g0Sb8pTVfFc"
const youtube = new YouTube(Youtube_API_Key); 
const Discord = require("discord.js");
const ytdl = require('ytdl-core');
exports.run = async (client, message, args) => {
    let prefix = settings.prefix
 
 let noplaying = new Discord.RichEmbed()
						.setDescription("There is nothing playing.")
						.setColor(0xff5bc3)
    var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
  var searchString = args.slice(1).join(' ');
	var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	var serverQueue = message.client.queue
var videos = await youtube.searchVideos(searchString, 5);
					var index = 0;
        
        const statusembed = new Discord.RichEmbed()
        .setTitle("**Music Search :mag_right:**")
        .setDescription(`\`\`\`diff\n=======================================
-${videos.map(video2 => `[${++index}]- ${video2.title}`).join('\n-')}
=======================================\nChoose Song Number from 1-5.\`\`\``)
        .setColor(0xcc0000)
        .setFooter("Inori Yuzuriha Music");
    var voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send('``You must be in a Voice Channel BAKA!``').then(msg => {msg.delete(30000)});
		var permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) {
			return message.channel.send('``I Can`t Connect to the Voice Channel Maybe I Don`t have the Permission to Connect``').then(msg => {msg.delete(30000)});
		}
		if (!permissions.has('SPEAK')) {
			return message.channel.send('``I Can`t Speak in thia Voice Channel Maybe I Don`t have the Permission to Speak``').then(msg => {msg.delete(30000)});
		}
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			var playlist = await youtube.getPlaylist(url);
			var videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				var video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, message, voiceChannel, true); 
			}
			return message.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`).then(msg => {msg.delete(30000)});
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
        
				
					message.channel.send(statusembed).then(msg => {msg.delete(30000)});

					try {
						var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 6, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						let invalidembed = new Discord.RichEmbed()
						.setTitle("Invalid")
						.setDescription("**Invalid value Entered/Timeout, Select a Number from 1-10.**")
						.setColor(0xff5bc3)
						return message.channel.send(invalidembed).then(msg => {msg.delete(30000)});
					}
					var videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					let noresultembed = new Discord.RichEmbed()
						.setDescription("**No Results Found.**")
						.setColor(0xff5bc3)
					return message.channel.send('**No Results Found**').then(msg => {msg.delete(30000)});
				}
			}
			return handleVideo(video, message, voiceChannel);
		}
  async function handleVideo(video, message, voiceChannel, playlist = false) {
	var serverQueue = message.client.queue
	var song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`,
    channel: video.channel.title,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
    durations: video.duration.seconds,
    thumbnail: video.thumbnails.default.url,
    author: message.author.username
	};
  if (!serverQueue.has(message.guild.id)) { // check if there isn't a queue for the guild already
    const queueConstruct = { // create the object with information we require
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 100,
      playing: true,
      loop: false
    }; 
    serverQueue.set(message.guild.id, queueConstruct); // set the object we just made
    message.client.queue.get(message.guild.id).songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			message.client.queue.delete(message.guild.id);
			return message.channel.send(`I could not join the voice channel: ${error}`).then(msg => {msg.delete(30000)});
		}
	} else {
	    	let queuesadd = new Discord.RichEmbed()
			.setDescription(`✅ **${song.title} has been added to the queue!**`)
          	.setFooter(`Requested by: ${message.author.tag}`)
			.setColor(0xff5bc3)
			let maxQueue = new Discord.RichEmbed()
			.setDescription('**Max Queue is 15 Songs!**')
          	.setFooter(`Requested by: ${message.author.tag}`)
			.setColor(0xff5bc3)
	if (serverQueue.get(message.guild.id).songs.length >= settings.maxqueuelength) return message.channel.send(maxQueue);
    serverQueue.get(message.guild.id).songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return message.channel.send(queuesadd).then(msg => {msg.delete(30000)});
	}
	return undefined;
}
  function play(guild, song) {
  const queue = message.client.queue;
	const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave(); // if there are no songs leave the channel
    queue.delete(guild.id); // and also remove the guild from the collection
    return;
  }
	console.log(serverQueue.songs);

  const dispatcher = queue.get(guild.id).connection.playStream(ytdl(song.url, { bitrate: 128}))
		.on('end', reason => {
	
	let doneembed = new Discord.RichEmbed()
						.setDescription("**The Song(s) in Queue is Done Playing.**")
						.setColor(0xff5bc3)
      message.channel.send(doneembed).then(msg => {msg.delete(30000)});
        if (serverQueue.loop) { 
        serverQueue.songs.push(serverQueue.songs.shift());
        play(guild, queue.get(guild.id).songs[0]); 
      } else { 
          serverQueue.songs.shift();
          play(guild, queue.get(guild.id).songs[0]); 
      }
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
  const songdurm = String(song.durationm).padStart(2, '0'); // format the time
  const songdurh = String(song.durationh).padStart(2, '0'); // same ^
  const songdurs = String(song.durations).padStart(2, '0'); // same ^^
    let playaembed = new Discord.RichEmbed()
						.setDescription(`🎶 **Start playing: ${song.title}**`)
						.setThumbnail(song.thumbnail)
            			.addField('**Duration**',`${songdurh}:${songdurm}:${songdurs}`, true)
            			.addField('**Channel**',`${song.channel}`, true)
						.setFooter(`Requested by: ${song.author}`)
						.setColor(0xff5bc3)
	if (!serverQueue.loop) return queue.get(guild.id).textChannel.send(playaembed).then(msg => {msg.delete(30000)});
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["p"],
  permLevel: 0,
};

exports.help = {
  name: "play",
  description: "play",
  usage: "play",
};
