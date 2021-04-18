const Discord = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "ping",
    description: "Ping info command",
    usage: "",
    aliases: [],
  },

  run: async function (client, message, args) {
  
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("🏓 Ping")
  .setDescription(`📤 Envío de mensajes: **${Date.now() - message.createdTimestamp}ms**\n🛰️ DiscordAPI: **${Math.round(client.ws.ping)}ms**`)
   return message.channel.send(embed)
  },
};