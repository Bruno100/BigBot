const Discord = require('discord.js');

const bot = new Discord.Client();


const PREFIX = "!";

bot.on('ready', function(){
    console.log("Ready?");
    bot.user.setActivity('!comandos | By Bigbrum');
});

bot.on("message", function(message){
    if(message.author.equals(bot.user)) return;
    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()){
        case "big":
            var embed = new Discord.RichEmbed()
                .addField("BIGBRUM", "Bigbrum desenvolvedor de Bots, criador desse servidor usando para testes")
                .setColor(0x00FFFF)
            message.channel.sendEmbed(embed);
            break;
        case "lipo":
            message.channel.send("Lipo primeiro a entrar pra testes");
            break;
        case "ch":
            message.channel.send("Ch entrou pra ajudar em testes");
            break;
        case "delete":
            let role = message.guild.roles.find("name", "Master");
            if(message.member.roles.has(role.id)){
                let msgDelete = parseInt(args[1]);
                message.channel.fetchMessages({limit: msgDelete}).then(messages => message.channel.bulkDelete(messages));
            }
            break;
        case "comandos":
            var embed = new Discord.RichEmbed()
                .setDescription("**Abaixo os comandos do server**")
                .addField("!big", "Saber mais sobre Bigbrum")
                .addField("!lipo", "Saber mais sobre o lipoViske")
                .addField("!ch", "Saber mais sobre o ch2089")
                .setColor(0xFF0000)
                .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.send("This command not exist");
            break;
    }
});

bot.on("guildMemberAdd", function(member){
    member.guild.channels.find("name","📥-entrada-chat-off").send(member.toString() + " Seja Bem Vindo ao nosso grupo");
    member.guild.channels.find("name","📥-entrada-chat-off").send("http://prntscr.com/jscg7f");

    member.addRole(member.guild.roles.find("name", "Membro Novato"));
});


bot.login(process.env.BOT_TOKEN);
