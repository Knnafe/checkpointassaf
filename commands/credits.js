const Discord = module.require("discord.js");

let ccreator = ("Knnafe#1155.");

let ccommunity = ("🔥𝑨𝒔𝒔𝒂𝒇 𝑷𝒓𝒐𝒈𝒓𝒂𝒎𝒔🔥");

let chosting = ("Knnafe`s Servers.");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
	let embed = new Discord.RichEmbed()
        .setColor("#9B59B6")
        .setThumbnail(bicon)
        .addField("Maker:", ccreator)
        .addField("Idea's:", ccommunity)
        .addField("Server Hosting", chosting)


        message.channel.send({embed: embed});
}

module.exports.help = {
	name: "credits"
}