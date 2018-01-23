const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  client.setStatus('online', '.message to chat with me!');
  console.log('Process started.');
});
 
client.on('message', message => {
  
  switch(message.content) {

    case 'ping':
    message.channel.send('Pong!')
        break;

    case 'sa':
    message.reply('as')
        break;

    case 'hi':
    message.channel.send('hey')
        break;

    default:
        console.log(message.content)
}

});
 
client.login(process.env.BOT_TOKEN);
