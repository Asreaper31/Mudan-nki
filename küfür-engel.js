const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
 if (!message.guild) {
  return }

  if (!args[0]) return message.channel.send('Aç Yada Kapat Yazmalısın Örnek: !!küfür-engel aç veya kapat');

 if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Bu Komutu Kullana Bilmek için \`Yönetici`\ Yetkisine Sahip Olman Gerek :no_entry:')
  
  if (args[0] == 'aç') {

    await db.set(`kufur_${message.guild.id}`, 1)

    message.channel.send(' Küfür Engel **Açıldı**')

  };

  if (args[0] == 'kapat') {

    await db.set(`kufur_${message.guild.id}`, 0)

    message.channel.send(' Küfür Engel **Kapatıldı**')
  };

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'küfür-engel',
  description: 'reklamengel',
  usage: 'reklamengel'
};