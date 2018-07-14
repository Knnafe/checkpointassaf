const Discord = module.require("discord.js");

let cicreator = ("13");

let cicommunity = ("Israel, Holon.");

let cihosting = ("1.5 Years of developing");

module.exports.run = async (bot, message, args) => {
	let embed = new Discord.RichEmbed()
        .setColor("#9B59B6")
        .setImage(usernameUser.displayAvatarURL({size: 2048}))
        .setThumbnail(bicon)
        .addField("Age:", cicreator)
        .addField("Live In:", cicommunity)
        .addField("Developing Time:", cihosting)


        message.channel.send({embed: embed});
}

module.exports.help = {
	name: "aboutmydev"
}