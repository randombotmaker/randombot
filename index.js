const Discord = require("discord.js");

const PREFIX = "";

var client = new Discord.Client();

const TOKEN = "NDEzMjc2NDAxNzEwMzk5NDkw.DWWdLA.yoPnyThsdPhYCzvbrg-kcDPcEeQ";

client.on("ready", function(message) {
    console.log("Logged in as ${client.user.tag}")
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
    message.channel.sendMessage("Help commands coming soon!")
    break;
            
    case "&pong":
    message.channel.sendMessage("ping?")
    break;
    }
});
client.login(TOKEN)
