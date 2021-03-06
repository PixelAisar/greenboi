const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const guild = require("guild");
var table = require("table").table;
const Discord = require("discord.js");
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame("discord.gg/ZyMau2r - Support Server")
client.user.setStatus("dnd")
});

const dev = ["604758234057670686"];
const admin = "=";
var owner = "604758234057670686"; 

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** No Invite Links :rage: ! **`)
    }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === "d!help") {
    message.channel.send(
      `**:smiling_imp:  | The commands has been sent in your dms. **`
    );

    message.author.sendMessage(` ✽ **__ Depex Bot v1__**
**__General Commands__** 
**  d!bot • Shows information about the bot.** 
**  d!user • Shows information about you.** 
**  d!server •  Shows information about the server.**
**  d!savatar • Shows the server avatar. **
**  d!avatar • Shows your avatar or the one who you mentioned.** 
**__Administrator Commands__**
**  d!clear • Clears the chat.** 
**  d!ban • Bans someone you mentioned.** 
**  d!kick • Kicks someone you mentioned** 
**  d!mute • Mutes someone you mentioned.** 
**  d!unmute • Unmutes someone you mentioned.** 
**  d!gcreate •   Makes a giveaway about something you want to give.**
**  d!close • Closes the chat for members. **
**  d!open •  Opens the chat for members. **
**  d!bc •  Broadcasts anything you say to the whole server.  **
**  d!addemoji •  Adds a emoji. **
**  d!setbye •  Toggles a goodbye room to any room you mention. **


`);
  }
});

client.on("message", message => {
  if (message.content.startsWith("d!setbye")) {
    let args = message.mentions.channels.first();
    if (!args)
      message.channel.send("** Mention the room . ❌**").then(m => {
        m.delete(1500);
      });
    if (
      !message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send("**You do not have permissions.. ❌**");
    message.channel.send(`**${args} Toggled a goodbye room. :loudspeaker: **`); //By ItzTexo
    client.on("guildMemberAdd", member => {
      if (member.user.bot) return;
      var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`**Goodbye ✋**`)
        .addField("**__Thank you for your time.__**  ", `${member}`)
        .setDescription(`**We were grateful for meeting you. ✋😢** `)
        .addField("👤   People are in the server now.", `**[ ${member.guild.memberCount} ]**`, true)
        .setColor("RANDOM")
        .setFooter(
          `We hope you enjoyed. `,
          "https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png"
        );

      var channel = member.guild.channels.find("name", "leave");
      if (!channel) return;
      channel.send({ embed: embed });
    });
  }
});


client.on('message', msg => {
  if (msg.content === '-ping') {
    msg.reply('Pong!');
  }
});

client.on("message", msg => {
  if (msg.content === "Back") {
    msg.reply("** Welcome back! 💖💕**  ");
  }
});

client.on("message", msg => {
  if (msg.content === "d!invite") {
    msg.reply("** https://discord.com/api/oauth2/authorize?client_id=739475671084040217&permissions=8&scope=bot 💕**  ");
  }
});

client.on("message", msg => {
  if (msg.content === "@DepexBot") {
    msg.reply("** My prefix is d! 💖💕**  ");
  }
});

client.on("message", message => {
    const prefix = "d!"
              
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


client.on('message', function(message) {
    const prefix = "d!"
    if(!message.channel.guild) return;
    if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if (message.author.equals(client.user)) return;
    if (!message.content.startsWith(prefix)) return;

    
    var args = message.content.substring(prefix.length).split(' ');
    switch (args[0].toLocaleLowerCase()) {
    case "clear" :
    message.delete()
    if(!message.channel.guild) return
    if(message.member.hasPermission(0x2000)){ if (!args[1]) {
    message.channel.fetchMessages()
    .then(messages => {
    message.channel.bulkDelete(messages);
    var messagesDeleted = messages.array().length;
    message.channel.sendMessage(' '+ "**```fix\n" + messagesDeleted + " " +  ': Amount of messages that got deleted' + "```**").then(m => m.delete(5000));
    })
    } else {
    let messagecount = parseInt(args[1]);
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    message.channel.sendMessage(' '+ "**```fix\n" + args[1] + " " +  ': Amount of messages that got deleted' + "```**").then(m => m.delete(5000));
    message.delete(60000);
    }
    } else {
    var manage = new Discord.RichEmbed()
    .setDescription('You do not have the permission MANAGE_MESSAGES :(')
    .setColor("RANDOM")
    message.channel.sendEmbed(manage)
    return;
    }
    }
    });

client.on("message", async message => {
  const moment = require("moment"); //npm i moment
  const ms = require("ms"); //npm i ms
  var prefix = '-' //Bot Prefix !
  var time = moment().format("Do MMMM YYYY , hh:mm");
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
    hours = currentTime.getHours() + 3,
    minutes = currentTime.getMinutes(),
    done = currentTime.getMinutes() + duration,
    seconds = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var suffix = "AM";
  if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12;
  }

  var filter = m => m.author.id === message.author.id;
  if (message.content.startsWith("d!gcreate")) {
    let embed1 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Missing the following permission `MANAGE_GUILD`");

    let embed2 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Please send the `room` name without mentioning it");

    let embed3 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Wrong room name");

    let embed4 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Please send the `time`");

    let embed5 = new Discord.RichEmbed()
      .setColor()
      .setDescription(
        "Wrong time format\nExample of time format: 1s / 1m / 1h / 1d / 1w"
      );

    let embed6 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Please send the `gift`");

    if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))
      return message.channel.send(embed1);
    message.channel.send(embed2).then(msg => {
      message.channel
        .awaitMessages(filter, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
          let room = message.guild.channels.find(
            "name",
            collected.first().content
          );
          if (!room) return message.channel.send(embed3);
          room = collected.first().content;
          collected.first().delete();
          msg.edit(embed4).then(msg => {
            message.channel
              .awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ["time"]
              })
              .then(collected => {
                if (!collected.first().content.match(/[1-60][s,m,h,d,w]/g))
                  return message.channel.send(embed5);
                duration = collected.first().content;
                collected.first().delete();
                msg.edit(embed6).then(msg => {
                  message.channel
                    .awaitMessages(filter, {
                      max: 1,
                      time: 20000,
                      errors: ["time"]
                    })
                    .then(collected => {
                      title = collected.first().content;
                      collected.first().delete();
                      msg.delete();
                      message.delete();
                      try {
                        let giveEmbed = new Discord.RichEmbed()
                          .setColor()
                          .setTitle(`${title}`)
                          .setDescription(
                            `React With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`
                          );
                        //.setFooter(message.author.username, message.author.avatarURL);
                        message.guild.channels
                          .find("name", room)
                          .send(" :tada: **Giveaway** :tada:", {
                            embed: giveEmbed
                          })
                          .then(m => {
                            let re = m.react("🎉");
                            setTimeout(() => {
                              let users = m.reactions.get("🎉").users;
                              let list = users
                                .array()
                                .filter(
                                  u => (u.id !== m.author.id) !== client.user.id
                                );
                              let gFilter =
                                list[
                                  Math.floor(Math.random() * list.length) + 1
                                ];
                              if (gFilter === undefined) {
                                let endEmbed = new Discord.RichEmbed()
                                  .setColor()
                                  .setTitle(title)
                                  .setDescription(
                                    `Winners : no enough number of reaction so there is no winner`
                                  )
                                  .setFooter("Ended at :")
                                  .setTimestamp();
                                m.edit("** 🎉 GIVEAWAY ENDED 🎉**", {
                                  embed: endEmbed
                                });
                              } else {
                                let endEmbed = new Discord.RichEmbed()
                                  .setColor()
                                  .setTitle(title)
                                  .setDescription(`Winners : ${gFilter}`)
                                  .setFooter("Ended at :")
                                  .setTimestamp();
                                m.edit("** 🎉 GIVEAWAY ENDED 🎉**", {
                                  embed: endEmbed
                                });
                              }
                              if (gFilter === undefined) {
                                // message.guild.channels.find("name" , room).send("No enough number of reactions")
                              } else {
                                message.guild.channels
                                  .find("name", room)
                                  .send(
                                    `**Congratulations ${gFilter}! You won The \`${title}\`**`
                                  );
                              }
                            }, ms(duration));
                          });
                      } catch (e) {
                        message.channel.send(
                          `:heavy_multiplication_x:| **i Don't Have Prem**`
                        );
                        console.log(e);
                      }
                    });
                });
              });
          });
        });
    });
  }
});

client.on("message", message => {
  if (message.author.id === client.user.id) return;
if(!message.channel.guild) return
          var args = message.content.substring('.'.length).split(" ");
          if (message.content.startsWith("d!bc")) {
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
  if (message.content.startsWith('d!ban')) {
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
     if (message.content === "d!server") {
              if (!message.guild) return;

       var verificationLevel = message.guild.verificationLevel;
       const verificationLevels = ['None','Low','Medium','High','Extreme'];
       var year = message.guild.createdAt.getFullYear()
       var month = message.guild.createdAt.getMonth()
       var day = message.guild.createdAt.getDate()
       const embed = new Discord.RichEmbed()
       .addField("**:id: Server ID**:",`**${message.guild.id} **`)
       .addField("**:crown:Server Owner**:",`** ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator} **`)
       .addField("**MemberCount**:",`** [ ${message.guild.memberCount} ] **`)
       .addField("**Region**:",`**[ ${message.guild.region} ]**`)
       .addField("**verificationLevel**:",` ** ${verificationLevels[message.guild.verificationLevel]} ** `)
       .addField("**Channle:**",`** ${message.guild.channels.filter(ch => ch.type === 'text').size} Text, ${message.guild.channels.filter(ch => ch.type === 'voice').size} Voice **`)
       .addField("**AFK Room**:",`**${message.guild.afkChannelID ? `<#${message.guild.afkChannelID}> after ${message.guild.afkTimeout / 60}min` : 'None.'}**`)
       .addField("**Roles**:",`** ${message.guild.roles.size} **`)
       .addField('**Created IN**: ' ,year + "-"+ month +"-"+ day)
       .setColor('RANDOM')
   message.channel.sendEmbed(embed)
} 
});


client.on("message",message => {
    var args = message.content.split(" ");
    var command = args[0];
    var emojisname = args[1];
    var emojislink = args[2];
    if (command === "d!addemoji"){
        if (!message.guild){
            return message.channel.send("Only SERVER Commands");
        }
        if (!message.guild.member(client.user).hasPermission("MANAGE_EMOJIS")){
            return message.channel.send("I do not have the follow permissions  `MANAGE_EMOJIS`");
        }
        if(!message.guild.member(message.author).hasPermission("MANAGE_EMOJIS")) {
            return message.channel.send("You do not have the follow permission.`MANAGE_EMOJIS`");
        }
        if(!emojisname){
            return message.channel.send("Please put the emoji name.");
        }
        if (!emojislink){
            return message.channel.send("Please put the emoji link.");
        }
        message.guild.emojis.create(emojislink, emojisname).then(emoji =>{
            message.channel.send("Emoji Created . <:"+emoji.name+":"+emoji.id+">")
        }).catch(err => message.channel.send(err));
    }
});

client.on("message", message => {
  if (message.content === "d!close") {
    if (!message.channel.guild)
      return message.reply(" This command is only for servers !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("You do not have permissions.⛔");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**The chat has been closed.⛔ **");
      });
  }
  if (message.content === "-open") {
    if (!message.channel.guild)
      return message.reply("This command is only for servers.");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("You do not have permissions.");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**The chat has opened. ✅**");
      });
  }
});

client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "d!unmute") {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** You don't have the permission. 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find("name", "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find("name", "Muted");
    if (!muteRole)
      return message
        .reply("** There is no role called 'Muted'. **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** You gotta mention the person first!**")
        .catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("Usage:", "Mute/Unmute")
      .addField(
        "The mute was removed from:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "By:",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** I do not have the following permission. Manage Roles **")
        .catch(console.error);

    if (message.guild.member(user).removeRole(muteRole.id)) {
      return message
        .reply("**:white_check_mark: .. Successfully unmuted. **")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .removeRole(muteRole)
        .then(() => {
          return message
            .reply("**:white_check_mark: ..Successfully unmuted. **")
            .catch(console.error);
        });
    }
  }
});

client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "d!mute") {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** You do not have the following permission 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find("name", "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find("name", "Muted");
    if (!muteRole)
      return message
        .reply("**There is no role called. Please make one.'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** You gotta mention the person first.**")
        .catch(console.error);

    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("Usage:", "Mute/Unmute")
      .addField(
        "Successfully muted:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "By:",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("**I do not have the permission Manage Roles **")
        .catch(console.error);

    if (message.guild.member(user).roles.has(muteRole.id)) {
      return message
        .reply("**:white_check_mark: .. Successfully muted the member.**")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .addRole(muteRole)
        .then(() => {
          return message
            .reply("**:white_check_mark: .. Successfully muted the member.**")
            .catch(console.error);
        });
    }
  }
});


client.on("error", err => {
  console.log(err);
});


client.on('message', message => {
    if (message.content.startsWith('d!avatar')) {
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

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('d!kick')) {
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
  if (message.content === "d!bot") {
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
      .addField("**:heart: Bot Developers** :  ", `» <@604758234057670686> <@635186941977165824>`, true) // تعديل اساسي غير الايدي لايدي حسابك
      .setImage("")
      .setFooter(message.author.username, message.client.avatarURL);
    message.channel.send(bot);
  }
});

client.login(process.env.BOT_TOKEN);
