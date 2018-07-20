const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "+";
 
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log('Wicebot is online!');

  client.user.setActivity('+komutlar');

});


client.on('message', async message => {

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  
  if(message.content === 'sa' || message.content === 'Sa' || message.content === 'SA' || message.content === 'sA') {
    message.reply('as');
  } else
  if (command === 'ping') {
    const m = await message.channel.send("Gecikme hesaplanıyor...");
    m.edit(`Gecikme ${m.createdTimestamp - message.createdTimestamp}ms. API gecikmesi ${Math.round(client.ping)}ms.`);
  } else
  if (command === 'kontrol') {
    message.channel.send("**Prefix: **" + prefix + "\n**Command: **" + command + "\n**Arguments: **" + args);
  } else
  if (command === 'alıntı') {
    
    message.channel.fetchMessage(args[0])
  .then(msg => mesajYolla(msg.content, msg.author.username, msg.author.discriminator, msg.author.avatarURL, msg.createdAt, msg.editedAt))
  .catch(console.error);

  function mesajYolla(icerik, ad, tag, avatar, olusturmaZamani, editZamani) {
    var zaman;
    if (editZamani == null) {
      zaman = olusturmaZamani;
    } else {
      zaman = editZamani;
    }

    //message.channel.send("Kanal: <#" + message.channel.id + "> | Alıntılayan: <@" + message.author.id + ">");
    message.channel.send({
      "embed": {

      "description": icerik,

      "color": 3381759,
      "timestamp": zaman,

      "footer": {
        //"icon_url": message.author.avatarURL,
        "text": "Alıntılayan: " + message.author.username + "#" + message.author.discriminator
      },

      /*"image": {
        "url": "https://cdn.discordapp.com/attachments/425945005635665922/459843736046796810/ba74954dde74ff40a32ff58069e78c36.png"
      },*/

      "author": {
        "name": ad + "#" + tag,
        //"url": "https://discordapp.com",
        "icon_url": avatar
      }
    }});
  }
  
  message.delete();

  } else

  if (command === "komutlar") {
      message.channel.send("**WiceBot komutları: **\n\n**" + prefix + "yardım komut_adı** : Verilen komutu detaylı açıklar. Örnek: " + prefix + "yardım alıntı\n**" + prefix +"alıntı mesaj_id** : ID'si verilen mesajı alıntılar.\n**" + prefix + "ping:** Gecikmeyi hesaplar.");
  } else

  if (command === "pin") {
    message.channel.fetchMessage(args[0])
  .then(msg => msg.pin())
  .catch(console.error);
  }

  if (command === "sil") {
    message.channel.fetchMessage(args[0])
  .then(msg => msg.delete())
  .catch(console.error);
  message.delete();
  } else

  if (command === "yardım") {
    if (args[0] === "alıntı") {
      message.channel.send("https://www.youtube.com/watch?v=9nwYFrLZvYw");
    } else {
      message.channel.send("Geçersiz komut.");
    }
  } else

  if (message.content == "webhook oluştur") {

    message.channel.createWebhook("WiceBot Webhook", "https://cdn.discordapp.com/avatars/396808835920297984/63bf8d98380f36746e5eb68173f8c3fa.png")
      .then(webhook => webhook.edit("WiceBot Webhook", "https://cdn.discordapp.com/avatars/396808835920297984/63bf8d98380f36746e5eb68173f8c3fa.png")
      .then(wb => message.channel.send(`Webhook URL: https://discordapp.com/api/webhooks/${wb.id}/${wb.token}`)).catch(console.error))

  } else

  if (command == "pm") {
    message.mentions.members.first().send(message.guild.name + " sunucusundan gelen mesaj:\n" + message.cleanContent.slice(prefix.length + command.length + message.mentions.members.first().displayName.length + 3));
    message.delete();
  }

});

//"2018-06-22T20:08:34.503Z"
