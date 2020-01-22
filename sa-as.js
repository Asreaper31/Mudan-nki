const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bunu İçin Yetkin Bulunmuyor.')
  if (!args[0]) return message.channel.send('Örnek kullanım; `a!sa-as aç/kapat`')
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')
      message.channel.send('SA-AS Başarı ile açıldı.')
    
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')
      message.channel.send('SA-AS Başarı ile kapatıldı.')
    
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'Selamün aleyküm, Aleyküm selam',
  usage: '/sa-as'
};
