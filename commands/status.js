const Discord = require("discord.js");
let cpuusage = process.cpuUsage();
let cpu = Math.floor(cpuusage.user/cpuusage.system) + "%";
var upSecs = 0;
var upMins = 0;
var upHours = 0;
var upDays = 0;
setInterval(function() {
    upSecs = upSecs + 1
    if (upSecs >= 60) {
        upSecs = 0
        upMins = upMins + 1
    }
    if (upMins >= 60) {
        upMins = 0
        upHours = upHours + 1
    }
    if (upHours >= 24) {
        upHours = 0
        upDays = upDays + 1
    }
}, 1000)
exports.run = async (client, message, args) => {
  
  let ico = client.user.avatarURL

  const statusembed = new Discord.RichEmbed()
        .setTitle("❯\u2000\Information")
        .setDescription(`\`\`\`diff\n
-                   Inori Status                 -
- Users      :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
- Servers    :: ${client.guilds.size.toLocaleString()}
- Channels   :: ${client.channels.size.toLocaleString()}
-                   Inori Usage                  -
- Cpu Usage  :: ${cpu}
- Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``)
        .setColor(0xff5bc3)
        .setThumbnail(ico)
        .addField("❯\u2000\Uptime", `\`\`\`diff\n
-${upDays} Day(s), ${upHours} Hour(s), ${upMins} Min(s) ${upSecs} Sec(s)\`\`\``, false)
        .setFooter("Inori Status")
    message.channel.send(statusembed);
    }
// End of "UserInfo" Command

// Start of Permission System, etc.
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["stat"],
  permLevel: 0,
};
// End of Permission System, etc.

// Start of Misc.
exports.help = {
  name: "status",
  description: "Shows information of Inori",
  usage: "status",
};