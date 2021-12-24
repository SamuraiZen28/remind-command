const { MessageEmbed } = require('discord.js');
const i = require('./../../colors.json')

module.exports = {
    name: 'reminder',
    description: 'set a reminder to do something!',
    category: 'General',
    cooldown: 10,
    aliases: ['remind', 'remember'],
    usage: '<oneday> || <sixhours> || <hour> || <minute> [reminder]',
    run: async(client, message, args, text) => {
        let minute = 60000
        let hour = 3600000
        let sixhours = 21600000
        let oneday = 86400000
        let time = args[0]
        let reason = args.slice(1).join(" ")
        const sucem = new MessageEmbed().setDescription(`\`✅ Done!\` **Remind: ${reason} in an ${time}**`).setColor("#2f3136").setTimestamp()
        const remind = new MessageEmbed().setDescription(`<@!${message.author.id}> **Reminder: ${reason}**`).setColor("#2f3136")
        if(!reason) {
            message.reply(`\`❌ Please specify something for me to remind you!\``)
        } else if(!time) 
            message.reply(`\`No time specified\``)
        } else if(args[0] === 'oneday') {
            message.reply(sucem).then(() => {
                setTimeout(function(){message.reply(remind)}, oneday)
        })
            
        } else if(args[0] === 'sixhours') {
            message.reply(sucem).then(() => {
                setTimeout(function(){message.reply(remind)}, sixhours)
        })
        } else if(args[0] === 'hour') {
            message.reply(sucem).then(() => {
                setTimeout(function(){message.reply(remind)}, hour)
        })
        } else if(args[0] === 'minute') {
            message.reply(sucem).then(() => {
                setTimeout(function(){message.reply(remind)}, minute)
        })
        }
    }
}
