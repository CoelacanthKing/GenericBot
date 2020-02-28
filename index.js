const {
    Client,
    Attachment,
    Discord
} = require('discord.js');
const bot = new Client();
const PREFIX = '.';
const NOPREFIX = '';
const MIN = '0';
const MAX = "4"; //ALWAYS ONE MORE
var version = '0.1.0';
const ytdl = require("ytdl-core");
var servers = {};
var plagueName = 'CORONAVIRUS';
var name = 'Spencer';

var Message = [MAX];
Message[0] = "Wow, it's getting pretty stinky in here...";
Message[1] = "You're actually pretty cute, down to get stinky?";
Message[2] = 'How dare you talk to me like that, I swear to god I will literally kiss you.';
Message[3] = "I'm sorry but I think you mean " + name;

//#region Thread.Sleep

/*function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}*/

//#endregion

//#region Token ID

const token = 'NjgxOTE4MDY4NTU2ODI0NTc2.XlVfBg.KjEonN6BzjN7cAQVd68dGkiVjyE';

//#endregion

//#region Random message



//#endregion

//#region Bot Initiation

bot.on('ready', () =>{
    console.log("[GenericBot] is now ready for use.");
})

//#endregion

//#region Bot message

bot.on('message', message =>{

    let args = message.content.toUpperCase().substring(PREFIX.length).split(" ");

    switch(args[0])
    {
        case 'PLAY':

            /*function play(connect, message){
                var server = servers[message.guild.id];
                server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: 'audioonly'}));

                server.queue.shift();

                server.dispatcher.on("end", function(){
                    if(server.queue[0]){
                        play(connection, message);
                    }else {
                        connection.disconnect();
                    }
                });
            }

                if(!args[1]){
                    message.channel.send("You need to provide a link!");
                    return;
                }

                if(!message.member.voiceChannel){
                    message.channel.send("You need to be in a channel!");
                    return;
                }

                if(!servers[message.guild.id]) servers[message.guild.id] = {
                    queue: []
                }

                var server = servers[message.guild.id];

                server.queue.push(args[1]);

                if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
                    play(connection, message);
                })
            break;*/

            return message.channel.send("Music Bot Functionality - COMING SOON");
            break;

        case 'HELP':
            message.reply('So I see my infinite wisdom has been called upon, I wonder if you are jealous that I created the best game ever. As of right now there are no messages, however if you have any suggestions feel free to let me know. I have sent you some documentation...');
            message.author.send('Enjoy the Documentation, fair maiden.');
            message.author.send('./GBDocumentation.txt');
            break;

        case 'INFO':
            if(args[1] === 'VERSION')
            {
                message.channel.send("[Generic] Bot Version: " + version);
            }
            else
            {
                message.channel.send("Invalid Command!");
            }
            break;

        case 'COMMAND':
            if(!args[2]) 
            {
                return message.reply("Invalid Quantity! Please enter the amount of messages you would like to infect with " +plagueName);
            }
            if(args[1] === "PURGE")
            {
                message.channel.bulkDelete(args[2]);
                message.channel.send("Holy fuck that was a close encounter with " +plagueName);
            }
            else
            {
                return message.reply("Invalid Command! Please Consult the Documentation using .HELP");
            }
            break;

        /*To Be Added to Documentation*/

        /*case 'PROFILE':
            let embed = new Discord.RichEmbed()
            .setTitle('Profile Information:')
            .addField('Name', message.author.username, true)
            .addField('Bot Version', version, true)
            .addField('Current Server', message.guild.name, true)
            .setThumbnail(message.author.avatarURL)
            
            message.channel.sendEmbed(embed);
            break;*/
        
            
        /*default:
            return message.reply("Invalid Command! Please Consult the Documentation using .HELP");
            break;*/
    }

    let args2 = message.content.toUpperCase().substring(NOPREFIX.length).split(" ");

    switch(args2[0])
    {
        case 'STINKY':
            message.channel.send(Message[Math.floor(Math.random() * MAX)]);
            break;
        case 'NICO':
            message.reply('ISNT NICO STUPID!');
            break;
        case 'GENTLEMEN':
            message.channel.send('Very Nice Man!');
            break;
        case 'BEN':
            message.reply('Tall boy, looks like Ben. Yeah, I fucked him.');
            break;
        case 'SUMMON':
            message.reply('You asked for this...');
            message.channel.send("IT'S ME, THE MIGHTY GENERIC BOT. I COME TO STEAL ALL YOUR PENNIES!", {tts:true});
            break;
        case 'STUDY':
            message.reply('You want to study?');
            message.channel.send("YOU STUPID POOPS JOIN THE ACTUAL WORK/STUDYING CHAT!", {tts: true});
            break;
    }

})

//#endregion

bot.login(token);