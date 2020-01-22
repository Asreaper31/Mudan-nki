const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let txt = args.join('+');
  if(!args[0]) return message.channel.send("Lütfen yazı yaz!");
  
  let embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor("AloneBot")
  .setImage("https://dummyimage.com/2000x500/33363c/ffffff&text=" + txt)
  .setFooter("AloneBot-Banner sistemi");
  
  message.channel.send(embed);
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banneryazı","yazıbanner","banneryaz"],
  permLevel: 0
};

module.exports.help = {
  name: 'banner',
  description: 'Yazdığınız yazıyı banner olarak atar',
  usage: 'yazıb <yazdırmak istediğiniz yazı>'
};