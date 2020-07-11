const Discord = require("discord.js")
const settings = require("../storage/settings.json");
exports.run = (client, message, args) => {
  function emoji (id) {
  return client.emojis.get(id).toString();
}
    let adminpage = [
      `🔨 Admin Commands \n\n =================================== \n ban <@user> <reason> \n kick <@user> <reason> \n say <Say what you want> \n clearmsg <value> \n service \n mute <@user> <reason> \n unmute <@user> <reason> \n ===================================`,
    ];
    let userpage = [
       `👤  User Commands \n\n =================================== \n invite \n afk <reason> \n avatar \n notice \n ping \n status \n about \n poll <Question>|<answer1>|...|<answer9> \n vote\n serverinfo  \n math <value> \n advice \n remind <5min> <Eat Food> \n osu <username> \n vote <what to vote for> \n weather <city> \n ===================================`
    ];
    let musicpage = [
         `🎵 Music Commands \n\n =================================== \n play <Music Name> \n skip \n np \n volume <value> \n queue \n pause \n stop \n resume \n ===================================`
    ];
    let funpage = [
         `🤣 Fun Commands \n\n =================================== \n love <name> \n ship <@user1> <@user2> \n flip \n sexyrate \n wouldyourather \n slots \n fact \n math \n rps <rock/paper/scisscors> \n roulette \n coinflip \n yomama \n rate <message> \n ===================================`
    ];
    let animepage = [
         `📺 Anime Commands \n\n =================================== \n anime <anime name> \n moe \n animeme \n manga <manga name> \n [wi]weebinfo <@user> \n [sws]setweebstatus <status> \n [sw]setwaifu <waifuname> \n tsundere \n neko \n waifu \n ratewaifu <waifu name> \n ===================================`
    ];
    let roleplaypage = [
          `🎞 Roleplay Commands \n\n =================================== \n marry <@user>\n divorce <@user> \n grope <@user> \n stare <@user> \n lick <@user> \n holdhands <@user> \n kiss <@user> \n hug <@user> \n pat <@user> \n cuddle <@user> \n wink <@user> \n poke <@user> \n slap <@user> \n tickle <@user> \n nom <@user> \n cry \n owo \n ===================================`
    ];
    let economypage = [
        `💴 Economy Commands \n\n =================================== \n money \n daily \n pay <@user> <amount> \n [cf]coinflip <heads/tails> <amount> \n work \n ===================================`
    ];
    let nsfwpage = [
        `🔞 N.S.F.W Commands \n\n =================================== \n oppai \n lewd \n futanari \n ahegao \n hentaigif \n pantsu \n futanari \n lewdneko \n hentai \n pussy \n fendom \n yuri \n blowjob \n trap \n tits \n ===================================`
    ];
    let pages = [
      `📕 Page Content\n\n =================================== \n 📕 Page Content \n 🔨 Admin Commands \n 👤  User Commands  \n 🎵 Music Commands \n 🤣 Fun Commands \n 📺 Anime Commands \n 🎞 Roleplay Commands \n 💴 Economy (W.I.P) \n 🔞 N.S.F.W. Commands \n ===================================`
    ];
  let page = 1;
  let ico = client.user.avatarURL
let helpembed = new Discord.RichEmbed()
		.setTitle("❯\u2000\Help")
	  .setDescription(pages)
    .setFooter(`Page Content`)
    .setThumbnail(ico)
		.setColor(0xff9a9a)
message.channel.send(helpembed).then(msg => {
    msg.delete(120000);
  msg.react('📕').then( r => {
    msg.react('606020086502916116')
    msg.react('👤')
    msg.react('🎵')
    msg.react('🤣')
    msg.react('📺')
    msg.react('🎞')
    msg.react('💴')
    msg.react('🔞')
    
    const pageFilter = (reaction, user) => reaction.emoji.name === '📕' && user.id === message.author.id;
    const adminFilter = (reaction, user) => reaction.emoji.id === '606020086502916116' && user.id === message.author.id;
    const userFilter = (reaction, user) => reaction.emoji.name === '👤' && user.id === message.author.id;
    const musicFilter = (reaction, user) => reaction.emoji.name === '🎵' && user.id === message.author.id;
    const funFilter = (reaction, user) => reaction.emoji.name === '🤣' && user.id === message.author.id;
    const animeFilter = (reaction, user) => reaction.emoji.name === '📺' && user.id === message.author.id;
    const roleplayFilter = (reaction, user) => reaction.emoji.name === '🎞' && user.id === message.author.id;
    const economyFilter = (reaction, user) => reaction.emoji.name === '💴' && user.id === message.author.id;
    const nsfwFilter = (reaction, user) => reaction.emoji.name === '🔞' && user.id === message.author.id;
      
    

    const page = msg.createReactionCollector(pageFilter, {time: 120000});
    const admin = msg.createReactionCollector(adminFilter, {time: 120000});
    const user = msg.createReactionCollector(userFilter, {time: 120000});
    const music = msg.createReactionCollector(musicFilter, {time: 120000});
    const fun = msg.createReactionCollector(funFilter, {time: 120000});
    const anime = msg.createReactionCollector(animeFilter, {time: 120000});
    const roleplay = msg.createReactionCollector(roleplayFilter, {time: 120000});
    const economy = msg.createReactionCollector(economyFilter, {time: 120000});
    const nsfw = msg.createReactionCollector(nsfwFilter, {time: 120000});
    
    
    page.on('collect', r => {
      helpembed.setDescription(pages);
      helpembed.setFooter(`Page Content`);
      msg.edit(helpembed)
    })
    
    
    admin.on('collect', r => {
      helpembed.setDescription(adminpage);
      helpembed.setFooter(`Admin Commands`);
      msg.edit(helpembed)
    })
    
    user.on('collect', r => {
      helpembed.setDescription(userpage);
      helpembed.setFooter(`User Commands`);
      msg.edit(helpembed)
    })
    music.on('collect', r => {
      helpembed.setDescription(musicpage);
      helpembed.setFooter(`Music Commands`);
      msg.edit(helpembed)
    })
    fun.on('collect', r => {
      helpembed.setDescription(funpage);
      helpembed.setFooter(`Fun Commands`);
      msg.edit(helpembed)
    })
    anime.on('collect', r => {
      helpembed.setDescription(animepage);
      helpembed.setFooter(`Anime Commands`);
      msg.edit(helpembed)
    })
    roleplay.on('collect', r => {
      helpembed.setDescription(roleplaypage);
      helpembed.setFooter(`Roleplay Commands`);
      msg.edit(helpembed)
    })
    economy.on('collect', r => {
      helpembed.setDescription(economypage);
      helpembed.setFooter(`Note: If you vote for Inori you will Recieve ¥5000 use >vote to get the voting link`);
      msg.edit(helpembed)
    })
    nsfw.on('collect', r => {
      helpembed.setDescription(nsfwpage);
      helpembed.setFooter(`NSFW Commands`);
      msg.edit(helpembed)
    })
  })
})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h"],
  permLevel: 0,
};

exports.help = {
  name: "help",
  description: "Open Help Message",
  usage: "help",
};
