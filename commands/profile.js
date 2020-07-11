const Discord = require("discord.js")
const db = require("quick.db");
const { Canvas } = require('canvas-constructor');
const { Attachment } = require('discord.js');
const { resolve, join } = require('path');
const fetch = require('node-fetch');
const { shorten } = require('../utils/utils.js');
const imageUrlRegex = /\?size=2048$/g;
const placeholder = new Map();
exports.run = async (client, message, args) => {
  const key = `${message.guild.id}-${message.author.id}`;

  try {
    if (!placeholder.has(key)) {
      placeholder.set(key, {
        user: message.author.id, guild: message.guild.id, points: 500, level: 17
      });
    }

    const buffer = await profile(message, placeholder.get(key));
    const filename = `profile-${message.author.id}.jpg`;
    const attachment = new Attachment(buffer, filename);
    await message.channel.send(attachment);
    
  } catch (error) {
    client.logger.error(error.stack);
    return message.channel.send(`An error ocurred: **${error.message}**`);
  }
};

async function profile(message, score) {
  const key = `${message.guild.id}-${message.author.id}`;
  const member = message.member;
  const { level, points } = placeholder.get(key);
  let user = message.author;
 
  let status = db.fetch(`userStatus_${user.id}`);
  if(status === null) status = "None";
    let Waifu = db.fetch(`userWaifu_${user.id}`);
  if (Waifu === null) Waifu == "None";
  
  let targetBalance = db.fetch(`userBalance_${user.id}`);
  if (targetBalance === null) targetBalance == 0;
  let reset = db.fetch(`userReset_${user.id}`);
  if(reset === null) reset = 0;
  
  try {
    const result = await fetch(member.user.displayAvatarURL.replace(imageUrlRegex, '?size=128'));
    if (!result.ok) throw new Error('Failed to get the avatar!');
    const avatar = await result.buffer();

    const name = member.displayName.length > 30 ? member.displayName.substring(0, 17) + '...'
      : member.displayName;

    return new Canvas(400, 180)
      .setColor('#ff78bb')
      .addRect(84, 0, 316, 180)
      .setColor("#000000")
      .setShadowColor('rgba(22, 22, 22, 1)')
      .setShadowOffsetY(5)
      .setShadowBlur(10)
      .addRect(0, 0, 84, 180)
      .addRect(169, 10, 231, 27)
      .addRect(195, 55, 231, 27)
      .addRect(220, 100, 231, 27)
      .addRect(195, 145, 231, 27)
      .setShadowColor('rgba(22, 22, 22, 1)')
      .setShadowOffsetY(5)
      .setShadowBlur(10)
      .addCircle(84, 90, 62)
      .addCircularImage(avatar, 85, 90, 64)
      .save()
      .createBeveledClip(20, 138, 128, 32, 5)
      .setColor('#23272A')
      .fill()
      .restore()
      .setTextAlign('center')
      .setTextFont('10pt Sans-Serif')
      .setColor('#FFFFFF')
      .addText(`Waifu: ` + shorten(Waifu, 23), 285, 28)
      .addText(name, 84, 159)
      .setTextAlign('left')
      .addText(`Money: ${targetBalance}`, 241, 73)
      .setTextAlign('left')
      .addText(`Reset Token: ${reset}`, 241, 119)
      .setTextAlign('center')
      .setTextFont('7.5pt Sans-Serif')
      .addText(shorten(status, 39), 300, 162)
      .toBuffer();
  } catch (error) {
    await message.channel.send(`An error occurred: **${error.message}**`);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["profile"],
  permLevel: 0,
};

exports.help = {
  name: "profile",
  description: "profile",
  usage: "profile",
};
