const Discord = require('discord.js');


exports.run = async (client, message, args) => {
  console.log("works");
  var here = [
    "[Here]"
  ];
  var phrases = [
    "Invite me to your Server with this Link",
    "I\`d love to join your server!",
    "You can invite me to your server :3!"
  ];
  var phrase = phrases[Math.round(Math.random() * (phrases.length - 1))];
    let ico = client.user.avatarURL
    var embed = new Discord.RichEmbed()
        .setTitle("❯\u2000\Invite")
        .setDescription(`[${here}](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1849032063)` + ` ${phrase}`)
        .setColor(0xff5bc3)
        .setImage("https://i.imgur.com/vDKM0Qc.gif")
        .setFooter("© Sureiyā#3654", client.user.avatarURL)
        message.channel.sendEmbed(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite"],
  permLevel: 0,
};

exports.help = {
  name: "invite",
  description: "invite ",
  usage: "invite",
};
