const Discord = require('discord.js');

const bot = new Discord.Client();


const PREFIX = "!";

bot.on('ready', function(){
    console.log(`${bot.user.username} is online!`);
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
                .addField("!report", "Usado pra reportar membros")
                .addField("!botinfo", "Informações do Bot")
                .addField("!serverinfo", "Informações do Servidor")
                .setColor(0xFF0000)
                //.setThumbnail(message.author.avatarURL)
                .setThumbnail("https://i.imgur.com/O0GnxhZ.png")
            message.channel.sendEmbed(embed);
            break;
        case "botinfo":
            let bIcon = bot.user.displayAvatarURL;
            var embedBot = new Discord.RichEmbed()
                .setDescription("Informações do BOT")
                .setColor("#000000")
                .addField("Nome do bot:", bot.user.username)
                .addField("Criado em:", bot.user.createdAt)
                .setThumbnail(bIcon)
            message.channel.sendEmbed(embedBot);
            break;
        case "serverinfo":
            let sIcon = message.guild.iconURL;
            var embedServer = new Discord.RichEmbed()
                .setDescription("Informações do Server")
                .setColor("#000000")                
                .addField("Nome do servidor", message.guild.name)
                .addField("Numero de membros", message.guild.memberCount)
                .addField("Criado em", message.guild.createdAt)
                .addField("Você juntou em", message.member.joinedAt)
                .setThumbnail(sIcon)
            message.channel.sendEmbed(embedServer)   
            break;
        case "report":
            let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
            if(!rUser) return message.channel.send("Usuario nao encontrado");
            let tam = args.length;
            let reason = args.slice(2,tam);
            let reason2 = reason.join(" ");

            let reportEmbed = new Discord.RichEmbed()
                .setDescription("Reports")
                .setColor("#FF0000")
                .addField("Usuario Reportado", `${rUser}`)
                .addField("Reportado por", `${message.author}`)
                .addField("Canal", message.channel)
                .addField("Time", message.createdAt)
                .addField("Motivo", reason2)

            let canalReport = message.guild.channels.find("name","reports");
            if(!canalReport) return message.channel.send("Canal nao encontrado");

            message.delete().catch(O_o => {});
            canalReport.send(reportEmbed);
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
