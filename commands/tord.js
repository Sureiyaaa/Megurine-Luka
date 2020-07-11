const Discord = require("discord.js")
const settings = require("../storage/settings.json");
exports.run = (client, message, args) => {
  function emoji (id) {
  return client.emojis.get(id).toString();
}
    var users = [
    "Beem",
    "John",
    "Joseph",
    "Mina",
    "Yata",
    "Rollyn",
    "Jesi",
    "Sam",
    "Gab"
  ];
    var phrase = users[Math.round(Math.random() * (users.length - 1))];
    let dare = [
      `\n =================================== \n\n ${phrase} Choosed **Dare**\n\n ===================================`
    ];

    let truth = [
      `\n =================================== \n\n ${phrase} Choosed **Truth**\n\n ===================================`
    ];
    let user = [
      `\n =================================== \n\n ${phrase} Choose **T** or **D**\n\n ===================================`
    ];
  let page = 1;
  let ico = client.user.avatarURL
let helpembed = new Discord.RichEmbed()
		.setTitle("❯\u2000\Help")
	  .setDescription(user)
    .setFooter(`T or D`)
		.setColor(0xff5bc3)
message.channel.send(helpembed)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tord"],
  permLevel: 0,
};

exports.help = {
  name: "tord",
  description: "tord",
  usage: "tord",
};
