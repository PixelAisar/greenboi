const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Pixel... Bot- Script By : PixelSupport`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : PixelSupport' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(".help Servers:",`» ${client.user.tag} `)
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

client.on('message', message => {
    if (message.content.startsWith('.avatar')) {
        if (message.author.bot || message.channel.type == 'dm') return;
        var args = message.content.split(' ')[1];
        var avt = args || message.author.id;
        client
            .fetchUser(avt)
            .then(user => {
                avt = user;
                let avtEmbed = new Discord.RichEmbed()
                    .setColor('#36393e')
                    .setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
                    .setImage(avt.avatarURL)
                    .setFooter(``, message.client.user.avatarURL);
                message.channel.send(avtEmbed);
            })
            .catch(() => message.channel.send(`Error`));
    } 
});

client.on("message", message => {
  if (message.content === prefix + "bot") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("#00000")
      .addField(
        "✽ **Bot Ping** : ",
        `» ${Date.now() - client.createdTimestamp}` + " ms",
        true
      )
      .addField("**Servers** :  ", `» ${client.guilds.size}`, true)
      .addField("**:hash: Channels** : ", `» ${client.channels.size} `, true)
      .addField("**:busts_in_silhouette: Users** : ", `» ${client.users.size} `, true)
      .addField("**:robot: Bot Name** :  ", `» ${client.user.tag} `, true)
      .addField("**:registered: Bot Developers** :  ", `» <@604758234057670686>,<@635186941977165824>`, true) // تعديل اساسي غير الايدي لايدي حسابك
      .setImage("")
      .setFooter(message.author.username, message.client.avatarURL);
    message.channel.send(bot);
  }
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('.kick')) {
    if (!message.member.hasPermission("KICK_MEMBERS"))  return;
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`Successfully kicked ${user.tag} :white_check_mark: `);
          })
          .catch(err => {
            message.reply('I do not have the permission `KICK_MEMBERS`');
            console.error(err);
          });
      } else {
        message.reply("**The user is not in the server! :x:**");
      }
    } else {
      message.reply("**You didn't mention the user to kick! :x:**");
    }
  }
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('.ban')) {
    if (!message.member.hasPermission("BAN_MEMBERS"))  return;
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag} :white_check_mark:`);
          })
          .catch(err => {
            message.reply('I do not have the permission `BAN_MEMBERS`');
            console.error(err);
          });
      } else {
        message.reply("**That user isn't in this server! :x:**");
      }
    } else {
      message.reply("**You didn't mention the user to ban!** :x:");
    }
  }
});

var prefix = '.';
client.on('message', message => {
  if (message.author.id === client.user.id) return;
if(!message.channel.guild) return
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.startsWith(prefix + 'bc')) {
      message.guild.members.forEach(member => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          member.send(`**:loudspeaker: ${message.guild.name} **
${args}`);
      });
  }

});

client.on("message", message => {
  if (message.author.id === client.user.id) return;
if(!message.channel.guild) return
          var args = message.content.substring(prefix.length).split(" ");
          if (message.content.startsWith(prefix + "bc")) {
                       if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (!args[1]) {
                              let embed3 = new Discord.RichEmbed()
                              .setDescription("-bc <message>")
                              .setColor("RANDOM")
                              message.channel.sendEmbed(embed3);
                          } else {

                          let embed4 = new Discord.RichEmbed()
                                                          .setDescription(':white_check_mark: Broadcast has been sent! - Devil Bot')
                                                          .setColor("#008000")
                              message.channel.sendEmbed(embed4);
                          }
                        }
});

client.on("message", message => {
    const prefix = "."
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "savatar"){
          const embed = new Discord.RichEmbed()
  
      .setTitle(`ServerAvatar${message.guild.name} **  `)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  }); 





client.login(process.env.BOT_TOKEN);
