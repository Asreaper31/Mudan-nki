const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
 .setTitle("**AloneBot Durum**")
    .setDescription(
      `**Bot aktif!** \n Botu açılış itibariyle şuan; **${
        client.guilds.size
      }** sunucu\n**${client.guilds
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString() + ``}** kullanıcı kullanıyor!
        **Ping:** ${client.ping}ms`
    )
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    .setColor("40bcdb")
    .setFooter(`${client.user.username} `, client.user.avatarURL);
          

    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sv'],
  permLevel: 5,
};

exports.help = {
  name: 'sv',
  description: '',
  usage: 'sv'
};