const Discord = require("discord.js");
const ms = require("ms");

exports.run = (client, message, args, func) => {
    if (!message.member.hasPermissions("BAN_MEMBERS")) return message.channel.send(":no_entry: Bu komutu kullanabilmek için `Üyeleri yasakla` yetkisine sahip olmanız gerek")

    let user = message.mentions.users.first();
    if (!user) return message.reply("kullanıcı belirtmelisin")
    let süre = args[1]
    if (!süre) return message.reply("Süre belirtmelisin")
    let member = message.guild.member(user)
    if (member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Yetkilileri banlayamassın`)

    message.guild.ban(user, 2)
    message.channel.send(`${user} süreli olarak banlandı.`)

    setTimeout(() => {

        message.guild.unban(user)
        message.channel.send(`${user} adlı kişinin banı kalktı. `)

    }, ms(süre))

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['süreliban'],
    permLevel: 0
};

exports.help = {
    name: 'süreli-ban',
    description: 'Etiketlenen kullanıcıyı süreli olarak banlar',
    usage: 'tempban <@kullanıcı> <süre>'
};