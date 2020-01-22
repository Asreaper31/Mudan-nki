const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, args) => {
    const alonebot = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('#D50000')
        .setDescription(`[**AloneBot**](https://discordapp.com/oauth2/authorize?client_id=644627569852940298&scope=bot&permissions=2146958847) **- [Komut Grupları](https://alone-bot-commands.glitch.me/komutlar.html) <a:dc:664456111306571776>**  \n\n <a:Elence:664435269939757065> **| Eğlence Komutları :** \`a!eğlence\` \n\n <a:Kullanc:664434104384880640> **| Kullanıcı Komutları :** \`a!kullanıcı\` \n\n <a:moderasyon:664433752226922496> **| Moderasyon Komutları :** \`a!moderasyon\` \n\n <:rank:664436609206452230> **| Seviye Sistemi :** \`a!seviyesistemi\``)
        .addField(` » Linkler`, `<a:zil:664444924242165790> [Davet Linki](https://discordapp.com/oauth2/authorize?client_id=644627569852940298&scope=bot&permissions=2146958847)  **|** [Destek Sunucusu](https://discord.gg/jaQb5De) **|** [Web Site](https://alone-bot-.glitch.me/) **|** [Oy Ver](https://top.gg/bot/644627569852940298/vote) <a:zil:664444924242165790>`)
        .setFooter(`${client.user.username} ©`, client.user.avatarURL)
        //.setImage(`https://cdn.discordapp.com/attachments/664549202889801729/664567662650589185/Baslksz-1.jpg`)
        .setThumbnail(client.user.avatarURL)

    return message.channel.sendEmbed(alonebot);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help','y'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'Komutları Gösterir',
  usage: ''
};    