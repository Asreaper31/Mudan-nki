const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send('Yetkin Bulunmuyor!')
  
    if (!args[0]) return message.channel.send('Örnek Kullanım: `a!reklam-engel aç/kapat`')

    if (args[0] == 'aç') {
        db.set(`reklamkick_${message.guild.id}`, 'acik')
        message.channel.send(`Reklam-Engel Sistemi Açıldı!!`)

    }
    if (args[0] == 'kapat') {
        db.set(`reklamkick_${message.guild.id}`, 'kapali')
        message.channel.send(`Reklam-Engel Sistemi Kapatıldı!!`)

    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['reklam-kick'],
    permLevel: 0
};

exports.help = {
    name: 'reklam-engel',
    description: 'Reklam kick sistemini açıp kapatır',
    usage: 'reklamkick aç/kapat'
};