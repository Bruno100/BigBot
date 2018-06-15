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
                .setColor(0x00FFFF)
                .setAuthor("BIGBRUM","https://i.imgur.com/Nydvnvi.jpg")
                .setDescription("Criador desse Clã,Desenvolvedor de Bots,Ajudante do server e jogador ativo que está sempre cuidando de todos fazendo o máximo possivel pra ajudar")
            message.channel.sendEmbed(embed);
            break;
        case "dark":
            message.channel.send("Dark e seus amigos \nCACHORRO AIAI CACHORRO HUHU Para mais informaçoes: acesse https://www.youtube.com/watch?v=6L7LrIDQIn8");
            break;
        case "paradise":
            message.channel.send("Paradise ótimo em construções e viciado em farmar, estrategista mas acaba não sendo tão bom em PvP...");
            break;
        case "pyro":
            message.channel.send("PyroGames73, menino de 14 anos bonito, solteiro, gostoso lgl, gente boa, novato no clan e Bonito dnv");
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
                .setTitle("**COMANDOS**")
                .setDescription("**Abaixo os comandos do server**")
                .addField("!big", "Saber mais sobre Bigbrum")
                .addField("!dark", "Saber mais sobre o Dark")
                .addField("!paradise", "Saber mais sobre o Paradise")
                .addField("!pyro", "Saber mais sobre o Pyro")
                .setColor(0xFF0000)
                //.setThumbnail(message.author.avatarURL)
                .setThumbnail("https://i.imgur.com/O0GnxhZ.png")
            message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.send("This command not exist");
            break;
    }
});

bot.on("guildMemberAdd", function(member){
    member.guild.channels.find("name","📥-entrada-chat-off").send(member.toString() + " Seja Bem Vindo ao nosso grupo");
    member.guild.channels.find("name","📥-entrada-chat-off").send("https://imgur.com/W8LDea2");

    member.addRole(member.guild.roles.find("name", "Membro Novato"));
});


bot.login(process.env.BOT_TOKEN);
