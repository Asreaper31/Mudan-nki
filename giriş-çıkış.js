const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, params, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Hoşgeldin kanalı ayarlamak için `Yönetici` yetkisine sahip olman gerek.')
  let hgkanali = message.mentions.channels.first();
  if (!hgkanali) return message.channel.send('<a:hyr2:664442673133912064> Bir Kanala Etiketlemen Gerek! `a!giriş-çıkış-ayarla #kanal`')
    db.set(`gcc_${message.guild.id}`, message.mentions.channels.first().id)
  let i = await db.fetch(`gcc_${message.guild.id}`)
  message.channel.send(`${process.env.basarili} <a:evt:664443420709748736> Hoşgeldin kanalı, <#${i}> olarak ayarlandı.`)    
        
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['giriş-çıkış', 'gelen-giden', 'hgbb'],
 permLevel: 0
};

exports.help = {
 name: 'giriş-çıkış-ayarla',
 description: '',
 usage: ''
};