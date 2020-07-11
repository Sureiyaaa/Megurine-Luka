const settings = require("../storage/settings.json");


exports.run = (client, message) => {
let API = (client.ping).toFixed(2)

  message.channel.send(`\`Ping ${new Date().getTime() - message.createdTimestamp}ms \nAPI ${API}ms\``)


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["p"],
  permLevel: 0,
};

exports.help = {
  name: "ping",
  description: "Ping/Pong command. Test's the response time of Inori Bot.",
  usage: "ping",
};
