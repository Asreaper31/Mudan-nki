const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("",`
 ▄███▄◕─◕▄██▄◕ ▄███▄◕─◕▄██▄
▀──██◕◕██──██◕▀──██◕◕██──██
──██◕─◕██──██◕──██◕─◕██──██
─██◕──◕██──██◕─██◕──◕██──██
█████◕─◕▀██▀◕─█████◕─◕▀██▀  



`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '2020',
  description: '',
  usage: '2020'
};