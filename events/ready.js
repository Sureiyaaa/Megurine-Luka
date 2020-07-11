const config = require("../storage/settings.json");
const fs = require("fs");
const db = require("quick.db")
const DBL = require('dblapi.js');
const http = require('http');
const express = require('express');
const app = express();
const Discord = require("discord.js");
module.exports = async (client, message, guild) => {

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

  console.log(`\nReady: ${config.botName} is now online`);

  client.mutes = require("../storage/mutes.json");

  client.setInterval((i, message) => {
    if (i in client.mutes) {
      const { time } = client.mutes[i].time;
      const guildId = client.mutes[i].guild;
      const guild = client.guilds.get(guildId);
      const member = guild.members.get(i);
      const mutedRole = guild.roles.find(
        r => r.name === config.silencedRoleName,
      );
      const defaultRole = message.guild.roles.find(
        r => r.name === config.memberRoleName,
      );
      if (!mutedRole);

      if (Date.now() > time) {
        console.log(`${i} is now able to be unsilenced`);

        member.removeRole(mutedRole);
        member.addRole(defaultRole);
        delete client.mutes[i];

        fs.writeFile(
          "./storage/mutes.json",
          JSON.stringify(client.mutes),
          err => {
            if (err) throw err;
            console.log(`I have unsilenced ${member.user.username}.`);
          },
        );
      }
    }
  }, 5000);

  try {
    const link = await client.generateInvite(["ADMINISTRATOR"]);
    console.log(`\nInvite link: ${link}`);
  } catch (e) {
    console.log(e.stack);
  }

  console.log(``)
    console.log(`/////////////////////////////////////////////////////////////////`)
    console.log(`//Inori has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} servers.//`);
    console.log(`/////////////////////////////////////////////////////////////////`)
    console.log(``) 
    console.log("Sureiya-Sama or known as Red King, I am ready to take commands.")
      setInterval(async () => {
    const statuslist = [
      `Voids | Stats `
    ];
    const random = Math.floor(Math.random() * statuslist.length);

    try {
      await client.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "WATCHING",
          url: 'https://www.twitch.tv/sur3iya'
        },
        status: "online"
      });
    } catch (error) {
      console.error(error);
    }
  }, 10000);

  client.generateInvite(["ADMINISTRATOR"]);
};