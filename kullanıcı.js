const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('644627569852940298') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setDescription(`
<a:Kullanc:664434104384880640> **Kullanıcı Komutları** <a:Kullanc:664434104384880640>

**a!yapımcım :** Botun Yapımcısını Gösterir 
**a!yardım :** Tüm komutları gösterir.
**a!davet :** Botun davet linklerini gösterir. 
**a!hata-bildir :** Botta bulunan hatayı gönderir. 
**a!tavsiye :** Bot geliştiricisine hataları raporlamayı/tavsiye vermeyi/öneri iletmeyi sağlar.
**a!afk :** AFK olursunuz. (Birisi sizi etiketlediğinde AFK olduğunuzu söyler.) 
**a!avatar :** Avatarınızı gösterir. 
**a!romen :** Yazdığınız sayının romen karşılığını yazar. 
**a!söz :** Rastgele güzel sözler atar. 
**a!yetkilerim :** Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir. 
**a!havadurumu:** hava durumunu gösterir.`)
          
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['user'],
  permLevel: 0,
};

exports.help = {
  name: 'kullanıcı',
  description: 'Kullanıcı Komutlarını Gösterir.',
  usage: 'kullanıcı'
};