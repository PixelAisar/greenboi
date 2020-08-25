const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setStatus("dnd")
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** No Invite Links :rage: ! **`)
    }
});

client.on('message', msg => {
  if (msg.content === '.ping') {
    msg.reply('Pong!');
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
                                                          .setDescription(':white_check_mark: Broadcast has been sent !')
                                                          .setColor("#008000")
                              message.channel.sendEmbed(embed4);
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
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.reply('I do not have permissions to ban this member. :x:');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this server! :x:");
      }
    } else {
      message.reply("You didn't mention the user to ban! :x:");
    }
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
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            message.reply('I do not have the permission to kick the member! :x:');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this server! :x:");
      }
    } else {
      message.reply("You didn't mention the user to kick! :x:");
    }
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
      .addField("**:black_medium_square: Servers** :  ", `» ${client.guilds.size}`, true)
      .addField("**:hash: Channels** : ", `» ${client.channels.size} `, true)
      .addField("**:computer: Users** : ", `» ${client.users.size} `, true)
      .addField("**:robot: Bot Name** :  ", `» ${client.user.tag} `, true)
      .addField("**:heart: Bot Developers** :  ", `» <@647142424333910037>`, true) // تعديل اساسي غير الايدي لايدي حسابك
      .setImage("")
      .setFooter(message.author.username, message.client.avatarURL);
    message.channel.send(bot);
  }
});

client.login(process.env.BOT_TOKEN);
