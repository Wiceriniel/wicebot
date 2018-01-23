const Discord = require('discord.js');
const client = new Discord.Client();
 
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log('Process started.');

  client.user.setGame('$help');

});
 
client.on('message', message => {

  //message.channel.send('message')

  switch(message.content) {

    case "$help":
    message.reply("This a chatbot. Type .message to start a conversation.")
      break;

    case 'ping':
    message.reply('Pong!')
        break;

    case 'sa':
    message.reply('as')
        break;

    case 'hi':
    message.reply('hey')
        break;

    default:


}

// DEVELOPER COMMANDS

var me = process.env.ME_I;

if((message.cleanContent.startsWith("$") || message.channel.type == 'dm') && message.author.id == me){

  var cmd = message.content.split("$");


  switch(cmd[1]) {

    case "me":
    message.reply(message.author.id);
      break;

    case "setnick":
    message.guild.members.get(client.user.id).setNickname(cmd[2]);
    message.reply("Nickname is set to " + cmd[2] + ".");
      break;

    case "setstatus":
    client.user.setGame(cmd[2]);
    message.reply("Status is set to " + cmd[2] + ".");
      break;

    case "movemember":
    const channel = message.guild.channels.find('id', cmd[2]);
    //const membertomove = message.guild.members.get(cmd[2]);
    message.member.setVoiceChannel(channel);
    //message.delete();
        break;

    default:
    if(message.content === "$help") {} else {
    message.reply("$" + cmd[1] + " : Unknown command."); }
}

}



});
 
