const Discord = module.require("discord.js");

let icommunity = ("[♥Invite CheckPoint♥](https://discordapp.com/oauth2/authorize?client_id=466611952014196757&scope=bot)");

let ihosting = ("@Knnafe #1155");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
	let iembed = new Discord.RichEmbed()
        .setColor("#9B59B6")
        .setThumbnail(bicon)
        .addField("Invite:", icommunity)
        .addField("By:", ihosting)


        message.channel.send({embed: iembed});
}

module.exports.help = {
	name: "invite"
}