const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');



exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setDescription(`
<a:moderasyon:664433752226922496> **Moderasyon Komutları** <a:moderasyon:664433752226922496>

**a!giriş-çıkış-ayarla :** Giriş-çıkış ayarlar.
**a!mod-log-ayarla :** Moderasyon kayıtları kanalını ayarlar. 
**a!log-ayarla :** Sunucu kayıtları kanalını ayarlar. 
**a!reklam-taraması :** Kullanıcıların oynuyor mesajlarındaki ve kullanıcı adlarındaki reklamları tarar. 
**a!yavaş-mod :** Bulunduğunuz kanala yazma sınırı (süresi) ekler. 
**a!otorol ayarla :** Sunucuya birisi katıldıgında verilecek rolü ayarlar.
**a!sayaç-ayarla :** Sayacı ayarlar.
**a!sunucu-kur :** Oto. sunucu kurar.
**a!tag-ayarla :** Sunucuya katılan üyeye otomatik tag verir 
**a!ön-ek :** Botun ön ekini sunucuya özel olarak değiştirir.
**a!emoji :** Sayfalı emojiler 
**a!emojiler :** Bulunduğunuz sunucudaki emojileri gösterir. 
**a!yetkililer :** Bulunduğunuz sunucudaki yetkilileri çevrimiçi, çevrımdışı/görünmez, rahatsız etmeyin ve boşta modlarında olup olmadıklarını göstererek listeler. (Yönetici yetkisine sahip kullanıcıları yetkili olarak sayar.)
**a!sa-as aç/kapat :** Sa-as açıp kapatır.
**a!sil :** Mesaj siler.
**a!süreli-ban :** İstediğiniz kişiyi süreli banlar.
**a!ban :** İstediğiniz kişiyi banlar.
**a!küfür-engel aç/kapat:** Küfür engel açar veya kapatır.`)          
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['modarasyon','moderation'],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon',
  description: '',
  usage: 'moderasyon'
};