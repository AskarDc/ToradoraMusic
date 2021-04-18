  
const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "To add/invite the bot to your server",
    usage: "[invite]",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`[Invite Link (recommended)](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)\n\n [Invite Link (admin)](https://discord.com/api/oauth2/authorize?client_id=831565056486932541&permissions=8&scope=bot)`)
    .setImage(`https://media.discordapp.net/attachments/832228029987946496/833097656309121124/Toradora_Bot.gif`)
    .setColor("BLACK")
    return message.channel.send(invite);
  },
};
