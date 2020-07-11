const Discord = require("discord.js")
const db = require("quick.db");

exports.run = async (client, message, args) => {
    let prefix = '>';
      let targetMember = message.mentions.members.first(); 
    let amount = parseInt(args.join(' ').replace(targetMember, ''));
  
    let targetBalance = await db.get(`userBalance_${targetMember.id}`);
    let member = db.fetch(`userBalance_${message.author.id}`)
    if(targetBalance === null) targetBalance = 0;
let user = message.mentions.members.first() 
    if(!user) {
        message.channel.send({embed: {
            title: "Usage!",
            color: 0xcc0000,
            description: `Usage: ${prefix}pay [@User] [Amount]`
        }});
        return;
    }

    if (!args[1]) {
        return message.channel.send({embed: {
            title: "You need to Specify amount",
            color: 0xcc0000,
            description: `Usage: ${prefix}pay [@User] [Amount].`
        }});
    }
  if (message.content.includes('-')) { // if the message includes "-" do this.
        return message.channel.send({embed: {
            title: "Negative money can not be paid.",
            color: 0xcc0000,
            description: `Negative money can not be paid.`
    }
    })
  }
    if(isNaN(amount)){
        message.channel.send({embed: {
            title: "Usage!",
            color: 0xcc0000,
            description: `Usage: ${prefix}give [@User] [Amount]`
        }});
    }

     if (member < args[1]) {
        return message.channel.send(`That's more money than you've got in your balance. try again.`)
    }
        db.add(`userBalance_${targetMember.id}`, amount);
        db.subtract(`userBalance_${message.author.id}`, amount)
        message.channel.send({embed: {
            title: "Payment Successful!",
            color: 0x0099cc,
            description: `Paid ${targetMember.user.tag} **¥${amount}**.`
        }});

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pay"],
  permLevel: 0,
};

exports.help = {
  name: "pay",
  description: "Give User",
  usage: "pay <@user> <amount>",
};
