const settings = require("../storage/settings.json");
const Discord = require('discord.js')
let cooldown = new Set()
let cdseconds = 2;
let id="341577240934613004";
let id2="206606985167110145";
module.exports = async (message) => {
  const user = message.author.id
  const { client } = message;

  if (message.author.bot) return;
  
  if(message.isMentioned(client.user)){
    message.channel.send("**Hello My Prefix is ``lm>``**")
  }
  let uuser = message.mentions.members.first() 
  if (message.content.startsWith(uuser)){

    client.users.get(id).send(`${message.author.username} : Pings ${uuser}`)
    client.users.get(id2).send(`${message.author.username} : Pings ${uuser}`)
  }
    if (message.content.startsWith("@everyone")){

    client.users.get(id).send(`${message.author.username} : Pings Everyone`)
  }
      if (message.content.startsWith("@Ammy悪夢#4409")){

    client.users.get(id2).send(`${message.author.username} : Pings you`)
  }
  if (message.content.startsWith(settings.prefix)){
    const command = message.content.split(" ")[0].slice(settings.prefix.length);
    const params = message.content.split(" ").slice(1);
    const perms = client.elevation(message);
    let cmd;

    if (client.commands.has(command)) {
      cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    }
    if (cmd) {
      if (perms < cmd.conf.permLevel) {
        return message.author.send(["ERROR: Permission denied"]);
      }
    if(cooldown.has(user)){
      message.delete() 
      return message.reply("Command Cooldown 2 seconds").then(msg => {msg.delete(3000)});
    }
        cooldown.add(user);
      setTimeout(() => {
        cooldown.delete(user)
      }, cdseconds * 1000)
      cmd.run(client, message, params, perms);
    }
  }

};