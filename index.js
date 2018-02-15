const Discord = require("discord.js");

const PREFIX = "";

var client = new Discord.Client();

const TOKEN = "NDEzMjc2NDAxNzEwMzk5NDkw.DWWdLA.yoPnyThsdPhYCzvbrg-kcDPcEeQ";

client.on("ready", function(message) {
    console.log("srsBot up and running!")
    client.user.setStatus('Online')
    client.user.setGame('&help')
});

client.on("message", function(message) {
    if(message.author.equals(client.user)) return;
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {

    case "&ping":
    message.channel.sendMessage("pong!")
    break;
            
    case "hi":
    message.channel.sendMessage("hey")
    break;
            
    case "&help":
            var embed = new Discord.RichEmbed()
                .addField("&help", "Shows this window.")
                .addField("&ping", "pong!")
                .addField("&ping", "ping?")
                .addField("hi", "hey wyd")
                .addField("hey", "hey wyd")
                .addField("lol", "lol indeed")
                .setFooter("Credits: made by Slurpy")
                .setColor("#0xff0000")
            message.channel.sendEmbed(embed).catch(e => {
              console.error(e);
            });
    break;
            
    case "&pong":
    message.channel.sendMessage("ping?")
    break;
            
    case "hey":
    message.channel.sendMessage("hey wyd?")
    break;
    
    case "lol":
    message.channel.sendMessage("lol indeed")
    break;
            
    case "hehe":
    message.channel.sendMessage("watcha tryna do?")
    break;
            
    case "omg":
    message.channel.sendMessage("ikr")
    break;
            
    case "oml":
    message.channel.sendMessage("ikr")
    break;
            
    case "bruh":
    message.channel.sendMessage("wot?")
    break;
            
    case "no":
    message.channel.sendMessage("yes!")
    break;
            
    case "yes":
    message.channel.sendMessage("no!")
    break;
            
    case "ye":
    message.channel.sendMessage("noooooo")
    break;
            
    case "wtf":
    message.channel.sendMessage("like shit")
    break;
            
    case "fuck":
    message.channel.sendMessage("oi no swearing jks jks")
    break;
            
    case "succ":
    message.channel.sendMessage("dicc")
    break;
            
    case "haha":
    message.channel.sendMessage("oh yes very funny 10/10 from IGN")
    break;
            
    case "shit":
    message.channel.sendMessage("haha ur stfed lol")
    break;
            
    case "oh":
    message.channel.sendMessage("yeah u didn't know?")
    break;
            
    case "ermagherd":
    message.channel.sendMessage("wots bothering ya m8?")
    break;
            
    case "finally":
    message.channel.sendMessage("finally what?")
    break;
            
    case "ok":
    message.channel.sendMessage("or is it ok?")
    break;
    }
});
client.login(TOKEN)
