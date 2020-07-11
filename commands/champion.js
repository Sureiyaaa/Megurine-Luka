const Discord = require("discord.js")
const request = require('node-superfetch');
const { shorten } = require('../utils/utils.js');
const waifus = require('../assets/json/waifus.json');
const total = Object.keys(waifus).length
const weefi = [
    'https://gfycat.com/KindheartedContentIberianmidwifetoad',
    'http://i.imgur.com/U25HMyz.gifv',
    'http://i.imgur.com/0xhBPbR.gif',
    'Your waifu is me...right?',
    'https://media.giphy.com/media/2PW8oTlHnVaZa/giphy.gif',
    'https://thumbs.gfycat.com/BiodegradableWillingIchneumonfly-max-1mb.gif',
    'https://i.makeagif.com/media/10-19-2015/PyKTt9.gif',
    'https://i.imgur.com/hn0YsNQ.gif',
    'https://media.giphy.com/media/xUA7aVR8tUqIHdAjPa/giphy.gif',
    'http://i0.kym-cdn.com/photos/images/original/001/203/473/1cd.gif',
    'https://media1.tenor.com/images/0e6d6a8f61b84b1ea6cdb13522a39753/tenor.gif?itemid=5237833',
    'https://i.imgur.com/5XuI7W8.gif',
    'http://i.imgur.com/usJbYkw.gif'
]
exports.run = async (client, message, args) => {
        let somethingThere = message.content.split(/\s+/g).slice(1).join(" ");
        const percentage = Math.random()
        if (!somethingThere || args.number == 'none') {
            var random = Math.floor(Math.random() * total + 1);
            var waifu = waifus[random];
        message.channel.send("Specify Name of a Champion")

        } else if (somethingThere) {
            const waifuNumber = args[0];
            var waifu = waifus[waifuNumber]
            const embed = new Discord.RichEmbed()
                .setAuthor(waifu.name, waifu.image)
                .setDescription(waifu.desc)
                .addField(waifu.passive, waifu.passivedesc)
                .addField(waifu.skill1, waifu.skill1desc)
                .addField(waifu.skill2, waifu.skill2desc)
                .addField(waifu.skill3, waifu.skill3desc)
                .addField(waifu.skill4, waifu.skill4desc)
                .setThumbnail(waifu.image)
                .setColor('#FAC193');
            var ms = await message.channel.send({ embed: embed });
            return null;

        }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["champ"],
  permLevel: 0,
};

exports.help = {
  name: "champion",
  description: "Random Waifu",
  usage: "champion",
};
