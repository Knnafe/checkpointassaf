const Discord = require("discord.js")
bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'welcome');
    if (!channel) return;

      let joinEmbed = new Discord.RichEmbed()
      .setTitle("Member Joined")
      .setColor("#41f400")
      .setThumbnail(member.user.avatarURL)
      .setDescription(`${member}, Welcome to the Server **${member.guild.name}**, \nWe are now **${member.guild.memberCount} Members**`)
      .setFooter(`${member.user.username}#${member.user.discriminator} | User ID: ${member.user.id}`);

      channel.send(joinEmbed);

    var role = member.guild.roles.find('name', 'Member');
    member.addRole(role)
  });
  
  bot.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find('name', 'welcome');
    if (!channel) return;
      let leaveEmbed = new Discord.RichEmbed()
      .setTitle("Member Leave")
      .setColor("#f40008")
      .setThumbnail(member.user.avatarURL)
      .setDescription(`${member}, Leave the Server **${member.guild.name}**, \nWe are now **${member.guild.memberCount} Members**`)
      .setFooter(`${member.user.username}#${member.user.discriminator} | User ID: ${member.user.id}`);

      channel.send(leaveEmbed);

});

bot.login(tokenfile.token);