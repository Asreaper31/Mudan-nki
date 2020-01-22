const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {

const lütfençalmayınız = new Discord.RichEmbed()
.setColor('#D50000')
.setAuthor(`${client.user.username}-İstatistik`, client.user.avatarURL)
.setDescription(`**Ad:** \`${client.user.username}\` \n **Sunucu Sayısı:** \`${client.guilds.size}\` \n **Kullanıcı Sayısı:** \`${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ``}\` \n **Kanal Sayısı:** \`${client.channels.size.toLocaleString()}\` \n **Bellek Kullanımı:** \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\` \n **Mesaj Gecikmesi:** \`${client.ping}ms\` \n **Kütüphane Sürümü:** \`${Discord.version}\` \n **Botun Yapılmaya Başlandığı Tarih:** \`20.6.2019\` \n **Komut Sayısı:** \`${client.commands.size}\` \n **Sahip:** <@544223572759937025> \n **Prefix:** \`${client.ayarlar.prefix}\` \n **Davet Linki:** [Tıkla!](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`)
.setFooter('Developed By Muda')
.setThumbnail(client.user.avatarURL)
//.setImage(`https://cdn.discordapp.com/attachments/664549202889801729/664567662650589185/Baslksz-1.jpg`)



return message.channel.sendEmbed(lütfençalmayınız)

    };




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bilgi'],
  permLevel: 0,
};


exports.help = {
 name: 'istatistik',
 description: '',
 usage: ''
};