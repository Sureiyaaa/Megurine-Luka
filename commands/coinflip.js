const Discord = require("discord.js");
const config = require("../storage/settings.json")
const db = require("quick.db")
let prefix = config.prefix
exports.run = async (client, message, args) => {
  
  
  var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "tails";
    } else if (numb > 50) {
      var choice2 = "heads";
    } 
  let amount = args[1]
  let targetBalance = await db.get(`userBalance_${message.author.id}`);
    if(targetBalance === null) targetBalance = 0;
  let member = db.fetch(`userBalance_${message.author.id}`)
 var choice = args[0];
  if (member < args[1]) {
        return message.channel.send(`That's more money than you've got in your balance. try again.`)
    }
  if (!args[1]) return message.reply(`Please specify an amount to bet. \`${prefix}coinflip\` <heads/tails> <amount>`)
  if (isNaN(args[1])) return message.reply('That was not a valid number!')
  if (message.content.includes('-')) return message.reply("Negative Amount!")
  if (choice == "heads" || choice == "h" || choice == "head" || choice == "Heads" || choice == "Head") {
    if (choice2 == "tails") {
      var response = "Tails! You lose."
      db.subtract(`userBalance_${message.author.id}`, amount)
    } else if (choice2 == "heads") {
      var response = "Heads You Win."
      db.add(`userBalance_${message.author.id}`, amount);
    }
    message.channel.send(response);
    if (member < args[1]) {
        return message.channel.send(`That's more money than you've got in your balance. try again.`)
    }
    if (!args[1]) return message.reply(`Please specify an amount to bet. \`${prefix}coinflip\` <heads/tails> <amount>`)
    if (isNaN(args[1])) return message.reply('That was not a valid number!')
    if (message.content.includes('-')) return message.reply("Negative Amount!")
  } else if (choice == "tails" || choice == "t" || choice == "tail" || choice == "Tails" || choice == "Tail") {
    if (choice2 == "heads") {
      var response = "Heads! You Lose."
      db.subtract(`userBalance_${message.author.id}`, amount)
    } else if (choice2 == "tails") {
      var response = "Tails! You Win."
      db.add(`userBalance_${message.author.id}`, amount);
    } 
    message.channel.send(response);
  } else {
    message.channel.send(`You need to use \`${prefix}coinflip\` <heads/tails> <amount>`);
  }
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["cf"],
  permLevel: 0,
};

exports.help = {
  name: "coinflip",
  description: "Head or tails",
  usage: "coinflip heads/tails",
};
