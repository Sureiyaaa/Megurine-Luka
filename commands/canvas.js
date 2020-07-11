const { createCanvas, loadImage } = require('canvas');
const request = require('node-superfetch');
const { sepia } = require('../utils/Canvas');
exports.run = async (client, message, args) => {
  		try {
			const { body } = await request.get(message.author.avatarURL);
			const data = await loadImage(body);
			const canvas = createCanvas(data.width, data.height);
			const ctx = canvas.getContext('2d');
			ctx.drawImage(data, 0, 0);
			sepia(ctx, 0, 0, data.width, data.height);
			const attachment = canvas.toBuffer();
			if (Buffer.byteLength(attachment) > 8e+6) return message.reply('Resulting image was above 8 MB.');
			return message.channel.send({ files: [{ attachment, name: 'sepia.png' }] });
		} catch (err) {
			return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["canvas"],
  permLevel: 0,
};

exports.help = {
  name: "canvas",
  description: "canvas",
  usage: "canvas",
};
