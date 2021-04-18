const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "support",
    description: "Server of support",
    usage: "[support]",
    aliases: ["supp"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle(`Support on ${client.user.username}`)
    .setDescription(`Do you need help?? Click on the next link \n\n [Support Server](https://discord.gg/fFchMqeeYr)`)
    .setImage(`https://media.discordapp.net/attachments/832228029987946496/833097656309121124/Toradora_Bot.gif`)
    .setColor("RANDOM")
    return message.channel.send(invite);
  },
};
