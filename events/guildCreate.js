const Discord = require("discord.js");
const client = new Discord.Client({ forceFetchUsers: true });
module.exports = guild => {
  console.log(`New guild joined: ${guild.name} This guild has ${guild.memberCount} members!`);
    let defaultChannel = "";
guild.channels.forEach((channel) => {
  if(channel.type == "text" && defaultChannel == "") {
    if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
      defaultChannel = channel;
    }
  }
})
  defaultChannel.send("Kon'nichiwa Inori-des My prefix is (>) UwU.")
 var embed = new Discord.RichEmbed()  
.setColor(0xff5bc3)
.setDescription(`**<:nom_inori:606020087874584588> New Guild!** \n\n **●︎ Guild: ** ${guild.name} \n**●︎ Members: ** ${guild.memberCount} \n **Owner: ** ${guild.owner.tag}`)
  const left = guild.client.channels.find('id', "628241464253480962")  
  left.send(embed)
};