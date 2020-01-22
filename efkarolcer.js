const Discord = require('discord.js');
exports.run = (client, message) => {
      const random = Math.floor(Math.random() * 100) + 1
      message.channel.send(`Efkarın%${random}`)
   } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
}
exports.help = {
 name: 'efkar-ölçer',
 description: 'Efkar ölçer',
 usage: 'efkar'
};