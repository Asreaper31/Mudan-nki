const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('644627569852940298') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setDescription(`
         **<a:Elence:664435269939757065> Eğlence Komutları <a:Elence:664435269939757065>**

         **a!ascii :** Yazdığınız yazıyı ascii şekline çevirir. 
         **a!2020 :** Embedli bir şekilde 2020 yazısı atar.
         **a!kalp :** Embedli bir şekilde kalp yazısı atar.
         **a!csgo :** Girilen oyuncunun csgo istatistiklerini gösterir. 
         **a!oyun-ara :** Verilen oyun hakkında bilgi verir.
         **a!winner :** Winner efekti atar.
         **a!wasted :** Wasted efekti atar.
         **a!banner :** Banner yazı yazdırır.
         **a!efkar-ölçer :** Efkarınızı ölçer.`)
          
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fun'],
  permLevel: 0,
};

exports.help = {
  name: 'eğlence',
  description: '',
  usage: 'eğlence'
};