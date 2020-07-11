const Discord = require('discord.js');
const snekfetch = require("snekfetch");
const Canvas = require('canvas');
const { shorten } = require('../utils/utils.js');
const db = require('quick.db')
const client = new Discord.Client();
const Enmap = require('enmap')
client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,  
  cloneLevel: 'deep'
});
const defaultSettings = {
  autoRole: "",
  welcomeChannel: "None Set",
  welcomeMessage: "**Welcome to {{guild}}, {{user}}! You are the {{count}}th User**"
}

module.exports = async(member) => {
  client.settings.ensure(member.guild.id, defaultSettings);
  let guild = member.guild.name
  let welcomeMessage = client.settings.get(member.guild.id, "welcomeMessage");
  welcomeMessage = welcomeMessage.replace("{{user}}", member.user.tag);
  welcomeMessage = welcomeMessage.replace("{{guild}}", member.guild.name);
  welcomeMessage = welcomeMessage.replace("{{count}}", member.guild.memberCount);

  const role = client.settings.get(member.guild.id, "autoRole");
  const getRole = member.guild.roles.find('name', role);
  member.addRole(getRole);
  if(!role) return;
  
  /*
  This Section is where the Canvas start
  */
    const canvas = Canvas.createCanvas(1050, 325);
    const ctx = canvas.getContext('2d');
    
    const background = await Canvas.loadImage('https://cdn.glitch.com/94e3f9bf-4548-4d0f-9023-4826363b284a%2Fwelcome-image.png?v=1564676322213');

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height)

    ctx.font = '60px Arial Bold';
    ctx.fillStyle = '#000000';
    ctx.fillText(`Welcome to \n` + shorten(guild, 24), canvas.width / 3.5, canvas.height / 3.5);

  ctx.font = '45px Sans-Serif Bold';
    ctx.fillStyle = '#000000';
    ctx.fillText(`${member.user.tag}!`, canvas.width / 3.5, canvas.height / 1.4);
  ctx.font = '45px Sans-Serif Bold';
    ctx.fillStyle = '#000000';
    ctx.fillText(`You are the${member.guild.memberCount}th User`, canvas.width / 3.5, canvas.height / 1.1);
  
    ctx.beginPath();
    ctx.arc(125, 150, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
    const avatar = await Canvas.loadImage(buffer);
    ctx.drawImage(avatar, 28, 50, 200, 200);
  const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');
  
  /*End of Canvas*/
  member.guild.channels
  .find("name", client.settings.get(member.guild.id, "welcomeChannel"))
  .send(welcomeMessage, attachment)
  .catch(console.error)
};