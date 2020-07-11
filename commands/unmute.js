const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (client, message, args) => {


    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("You need **KICK_MEMBERS** permissions for use this command.")
    const modlog = message.guild.channels.find(channel => channel.name === 'mod-logs');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("Couldn't find user.")
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!user.roles.find(`name`, "Muted")) return message.channel.send('There are\'t in muted.')
    if (!reason) return message.channel.send('lease specify a reason for the unmute!')
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(args[0] == "help"){
      message.reply("Usage: *unmute <user> <reason>");
      return;
    }
  let muteChannel = message.guild.channels.find(`name`, "mod-logs");
  if (!muteChannel) return message.channel.send('**Please create a channel with the name `mod-logs`**')

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#0xff5bc3",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
  

    let mutetime = args[1];

    await (user.removeRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' Action | UnMute', `https://images-ext-2.discordapp.net/external/wKCsnOcnlBoNk-__BXsd6BrO6YddfUB-MtmaoaMxeHc/https/lh3.googleusercontent.com/Z5yhBQBJTSJVe5veJgaK-9p29hXm7Kv8LKF2oN0hDnsToj4wTcQbirR94XVpH4Lt5a5d%3Dw300`)
            .addField('User', `<@${user.id}>`)
            .addField('Reason', `${reason}`)
            .addField('Moderator', `${mod}`)
            .setColor('#0xff5bc3')
        modlog.send(muteembed)
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["unmute"]
};

exports.help = {
  name: "unmute",
  description: "unmute a user",
  usage: "unmute <@user> <reason>",
};
