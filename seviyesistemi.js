const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('644627569852940298') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setDescription(`
**<:rank:664436609206452230> Seviye Sistemi Komutları <:rank:664436609206452230>**

**a!liderlik :** Seviye sisteminin sunucudaki liderlik tablosunu gösterir. 
**a!seviye :** Seviyenizi ve XP'nizi gösterir.
**a!seviye renk :** İstediğiniz rengi seviye sistemine ayarlar.
**a!seviye resim :** İstediğiniz resmi seviye sistemine ayarlar.
**a!seviye saydamlaştır :** Seviye sistemini sayadamlaştırır.
**a!seviye ödül :** Ödül ayarlamanızı sağlar.

\`\`\`md\n# Bu Ayarlamalar Kullanıcıya Özeldir. Sunucu Özel Değildir. \`\`\` `)
          
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['levelsystem'],
  permLevel: 0,
};

exports.help = {
  name: 'seviyesistemi',
  description: '',
  usage: 'seviyesistemi'
};