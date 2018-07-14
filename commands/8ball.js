const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if(!args[2]) return message.reply("!לפני השאלה do תשאל שאלה מלאה עם");
    let replies =  [".כן", ".לא", "לא יודע", "תשאל אחר כך"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#efd215")
    .addField("Question", question)
    .addField("Answer", replies[result]);
   
    message.channel.send(ballembed);



}

module.exports.help = {
    name: "8ball"
}