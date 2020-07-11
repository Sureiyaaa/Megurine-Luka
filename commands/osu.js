const Discord = require('discord.js')
const osu = require('node-osu');
const api = new osu.Api("2c26ab1bde519f69bef138752d5c8c8facc8539f" , {
    notFoundAsError: true,
    completeScores: false 
})
var osuApi = new osu.Api(api, {

    notFoundAsError: true,

    completeScores: false
})
exports.run = async (client, message, args) => {

  
  let username = args[0]
  
  
  if (!args[0]) return message.channel.send('Please, provide a valid user\'s nickname! (osu!)')
      let markCode = `\`\`\``;
api.getUser({u: username}).then(user => {
  const embed = new Discord.RichEmbed()
  .setTitle('Osu! Profile')
  .setDescription(`Displaying Profile:`)
  .setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
  .setColor("#0xff5bc3")
  .addField("Nickname", `${markCode}${user.name}${markCode}`, true)
  .addField('PP', `${markCode}${Math.round(user.pp.raw)}${markCode}`, true)
  .addField('Rank', `${markCode}${user.pp.rank}${markCode}`, true)
  .addField('Level', `${markCode}${Math.round(user.level)}${markCode}`, true)
  .addField("SS", `${markCode}${user.counts.SS}${markCode}`, true)
  .addField("S", `${markCode}${user.counts.S}${markCode}`, true)
  .addField("A", `${markCode}${user.counts.A}${markCode}`, true)
  .addField('Country', `${markCode}${user.country}${markCode}`, true)
  .addField('Country Rank', `${markCode}${user.pp.countryRank}${markCode}`, true)
  .addField('Playcount', `${markCode}${user.counts.plays}${markCode}`, true)
  .addField('Accuracy', `${markCode}${user.accuracyFormatted}${markCode}`, true)
  message.channel.send(embed)
  
}).catch(error =>{
  
          message.channel.send("User does not Exist..");
  
        });
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["osu"],
  permLevel: 0,
};

exports.help = {
  name: "osu",
  description: "osu <username>",
  usage: "osu <Username>",
};