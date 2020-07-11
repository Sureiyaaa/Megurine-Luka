const Discord = require("discord.js");
const showBar = spct => {
  const currentLevel = Math.floor(spct / 100);
  const progress = (spct % 100) / 100;
  const progressOutOf35 = Math.round(progress * 25);
  
  const x = "█";
  const barStr = `[${'='.repeat(progressOutOf35)}${'□'.repeat(25 - progressOutOf35)}]`;
  console.log(barStr + ', currntly at level ' + currentLevel);
};
exports.run = async (client, message, args) => {
  console.log('ship command has been used!');
        
        let user1 = args[0];
        let user2 = args[1];
        if (!user1) return message.channel.send("You did not select the first item to ship")
        if (!user2) return message.channel.send("You did not select the second item to ship")
        var ship = Math.floor(Math.random() * 100) + 1;
                    const badmatch = new Discord.RichEmbed()
                    .setColor(0xff5bc3)
                    .setTitle(user1 + " and " + user2 + " do not match very well")
                    .setDescription(`:broken_heart  ${ship} % :broken_heart:`);
                    message.channel.send(badmatch);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ship"],
  permLevel: 0,
};

exports.help = {
  name: "ship",
  description: "ship a user",
  usage: "ship <@user 1> <@user 2>",
};
