const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const guild = require("guild");
var table = require("table").table;
const Discord = require("discord.js");
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame("discord.gg/ET8Drmd - Support Server")
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
  if (message.content === "-help") {
    message.channel.send(
      `**:smiling_imp:  | The commands has been sent in your dms. **`
    );

    message.author.sendMessage(` ✽ **__ Depex Bot v1__**
**__General Commands__** 
**  -bot • Shows information about the bot.** 
**  -user • Shows information about you.** 
**  -server •  Shows information about the server.**
**  -savatar • Shows the server avatar. **
**  -avatar • Shows your avatar or the one who you mentioned.** 
**__Administrator Commands__**
**  -clear • Clears the chat.** 
**  -ban • Bans someone you mentioned.** 
**  -kick • Kicks someone you mentioned** 
**  -mute • Mutes someone you mentioned.** 
**  -unmute • Unmutes someone you mentioned.** 
**  -gcreate •   Makes a giveaway about something you want to give.**
**  -close • Closes the chat for members. **
**  -open •  Opens the chat for members. **
**  -bc •  Broadcasts anything you say to the whole server.  **
**  -addemoji •  Adds a emoji. **
**  -setLog •  Set a log channel. **
**  -toggleLog •  Toggles the log channel. **


`);
  }
});

const log = JSON.parse(fs.readFileSync("./log.json", "utf8"));

client.on("message", message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith("-setLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The Log Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith("-toggleLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __𝐎𝐍__ !**`),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});


client.on('message', msg => {
  if (msg.content === '-ping') {
    msg.reply('Pong!');
  }
});

client.on("message", msg => {
  if (msg.content === "السلام عليكم") {
    msg.reply("** وعليكم السلام ورحمة الله وبركاته 💖💕**  ");
  }
});

client.on("message", message => {
    const prefix = "-"
              
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

client.on('message', message => {
  if (message.author.id === client.user.id) return;
if(!message.channel.guild) return
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.startsWith('-bc')) {
      message.guild.members.forEach(member => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          member.send(`**:loudspeaker: ${message.guild.name} **
${args}`);
      });
  }

});

client.on('message', function(message) {
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
  if (message.content.startsWith("-gcreate")) {
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
          if (message.content.startsWith("-bc")) {
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
  if (message.content.startsWith('-ban')) {
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
     if (message.content === "-server") {
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

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose: Welcome to the server. :rose: 
:crown: Member Name: ${member}:crown:  
You are the nummber ${member.guild.memberCount} to join this server. `) 
}).catch(console.error)
})


client.on("message",message => {
    var args = message.content.split(" ");
    var command = args[0];
    var emojisname = args[1];
    var emojislink = args[2];
    if (command === "-addemoji"){
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
  if (message.content === "-close") {
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

  if (command === "-unmute") {
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

  if (command === "-mute") {
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

client.on("messageCreate", async message => {
  let args = message.cleanContent.split(" ");
  if (args[0] == `${prefix}roles`) {
    let space = "                         ";
    let roles = message.guild.roles
      .map(r => r)
      .sort((a, b) => b.position - a.position);
    let rr = roles
      .map(
        r =>
          `${r.name +
            space.substring(r.name.length) +
            message.guild.members.filter(m => m.roles.includes(r.id))
              .length} members`
      )
      .join("\n");
    await message.channel.sebd(`\`\`\`${rr}\`\`\``);
  }
});

client.on('message', message => {
    if (message.content.startsWith('-avatar')) {
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

  if (message.content.startsWith('-kick')) {
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
  if (message.content === "-bot") {
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
