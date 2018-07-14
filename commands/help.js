const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Help Menu")
  .setColor("#ff9900")
  .addField("Member Commands", "8ball, botinfo, coins, credits, dog, help, level, pay, ping, serverinfo, fortnite, and report")
  .addField("8ball", ">8ball [question]")
  .addField("botinfo", ">botinfo")
  .addField("coins", ">coins")
  .addField("credits", ">credits")
  .addField("dog", ">dog")
  .addField("help", ">help")
  .addField("level", ">level")
  .addField("pay", ">pay [@user]")
  .addField("report", ">report [@user]")
  .addField("serverinfo", ">serverinfo")
  .addField("fortnite", ">fortnite")
  .addField("ping", ">ping")
  .addField("invite", ">invite")


  message.member.send(helpembed);

  if(message.member.hasPermission("ADMINISTRATOR")){
  let modembed = new Discord.RichEmbed()
  .setDescription("Mod Help Menu")
  .setColor("#8b3aad")
  .addField("Mod Commands", "addrole, removerole, kick, warn, tempmute, warnlevel, ban, purge, prefix and announce")
  .addField("addrole", "Usage:>addrole [@user]")
  .addField("removerole", "Usage:>removerole [@user]")
  .addField("kick", ">kick [@user]")
  .addField("warn", ">warn [@user]")
  .addField("tempmute", ">tempmute [@user] [duration] [reason]")
  .addField("ban", ">ban [@user] [reason]");

  try{
    await message.author.send(modembed);
    message.react("🖕")
  }catch(e){
    message.reply("Your DMs are locked. I cannot send you the mod cmds.")
  }
}

}

module.exports.help = {
  name: "help"
}