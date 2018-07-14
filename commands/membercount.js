const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let countembed = new Discord.RichEmbed()
    .setDescription("Member Count!")
    .setColor("#15f153")
    .setThumbnail(sicon)
.addField("Total Members", message.guild.memberCount);

message.channel.send(countembed);
}

module.exports.help = {
  name:"membercount"
}