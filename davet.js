const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  message.delete()
  const db = require('quick.db');
  
  
  
  const davet = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} `, client.user.avatarURL)
.addField(`Neden Biz ?`, `Çünkü işimizi en iyi şekilde yaptığımızı düşünüyoruz.`)
.addField(`Botu Eklemek İsterseniz`, `[Tıklayabilirsiniz!](https://discordapp.com/oauth2/authorize?client_id=644627569852940298&scope=bot&permissions=8)`)
.addField(`Botun Destek Sunucusuna Katılmak İsterseniz`, `[Tıklayabilirsiniz!](https://discordapp.com/oauth2/authorize?client_id=644627569852940298&scope=bot&permissions=8)`)
.addField(`Botun Web Sitesini Ziyaret Etmek isterseniz`, `[Tıklayabilirsiniz!](https://alone-bot-.glitch.me/)`)
.addField(`Komutları Görmek İsterseniz`, `[Tıklayabilirsiniz!](https://alone-bot-commands.glitch.me/komutlar.html)`)
.addField(`Bota Oy Vermek İsterseniz`, `[Tıklayabilirsiniz!](https://top.gg/bot/644627569852940298/vote)`)
message.channel.send(davet)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['invite'],
  permLevel: 0,
  
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linklerini gösterir.',
  usage: 'davet',
 
};