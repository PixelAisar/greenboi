const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Pixel... Bot- Script By : PixelSupport`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : PixelSupport' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(".help Servers:",`» ${client.guild.size} `)
client.user.setStatus("dnd")
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** No Invite Links :angry: ! **`)
    }
});

client.on('message', msg => {
  if (msg.content === '.ping') {
    msg.reply('Pong!');
  }
});




client.login(process.env.BOT_TOKEN);
