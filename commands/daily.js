const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (Bot, message, args) => {

    let coolDown = 86400000;
    let amount = 1000;

    let lastDaily = await db.get(`lastDaily_${message.author.id}`);

    if(lastDaily !== null && coolDown - (Date.now() - lastDaily) > 0) {
        let timeObj  = ms(coolDown - (Date.now() - lastDaily));

        message.channel.send({embed: {
            title: "Daily!",
            color: 0xcc0000,
            description: `You can use this again in **${timeObj.hours}h and ${timeObj.minutes}m**`
        }});
    } else {
        message.channel.send({embed: {
            title: "Daily!",
            color: 0x66cc00,
            description: `Successfully, give you **$${amount}**. `
        }});

        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`userBalance_${message.author.id}`, 1000);
    }

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["daily"],
  permLevel: 0,
};

exports.help = {
  name: "daily",
  description: "daily rewards",
  usage: "daily",
};
