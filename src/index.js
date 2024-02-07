
require('dotenv').config(); //access dotenv from anywhere

const Discord = require('discord.js');
const { Client, IntentsBitField, EmbedBuilder, ActivityType } = require('discord.js');

const client = new Discord.Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
    allowedMentions: { parse: ['users'] },
});

const fs = require('fs');
const prefix = "!";
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./src/commands").filter(file => file.endsWith('.js'));
for (const file of commands) {
    const commandName = file.split(".")[0];
    const command = require(`./commands/${file}`);
    client.commands.set(commandName, command);
}

client.on('ready', () => {
    console.log(`${client.user.username} is here ! ^^`);

    client.user.setActivity('Marine Turtle by NCT U', { type: ActivityType.Streaming, url: 'https://www.youtube.com/watch?v=K7cHPC3c3Jk&t=0s' });
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command!');
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.editReply({ content: 'There was an error while executing this interaction!', ephemeral: true });
    }
});

    // Command handling for slash commands


    //     if (interaction.commandName === 'hi') {
    //         const hi = new EmbedBuilder()
    //             .setTitle("hi hi !!")
    //             .setDescription('say `/start` to start playing ^^')
    //             .setThumbnail('https://i.pinimg.com/564x/59/f8/c3/59f8c3d947b3f9c60ce9d8ba907ef12d.jpg')
    //             .setColor('White')
    //             .setTimestamp()
    //             .setImage('https://i.pinimg.com/564x/56/a1/de/56a1dee20ac9ed0432576331e828a9af.jpg')
    //             .setFooter({text: '<3'});


    //         interaction.reply({ embeds: [hi] });
    //     };

    //     if (interaction.commandName === 'chenle') {
    //         const chenle = new EmbedBuilder()
    //             .setTitle(':D')
    //             .setDescription('my owner and the cutest hooman-dolphin being in the world !! <3')
    //             .setThumbnail('https://i.pinimg.com/564x/59/f8/c3/59f8c3d947b3f9c60ce9d8ba907ef12d.jpg')
    //             .setColor('White')
    //             .setTimestamp()
    //             .setImage('https://i.pinimg.com/564x/87/29/a5/8729a57f999348a5e19f99b1860adcd2.jpg')
    //             .setFooter({text: '<3'});

    //         interaction.reply({ embeds: [chenle] });    
    //     };

    //     if (interaction.commandName === 'help') {
    //         const help = new EmbedBuilder()
    //             .setTitle("oh noes :0")
    //             .setDescription(
    //                 `>   support server: https://discord.gg/eqTXEbkrH8\n>    \n>   wanna report bugs? send them here: \n>   \n>   still need help? ;-; i can understand :< \n>   \n>   dm the developer :D — hearts4ji \n>   *(pls use this as last resort thanks)*`
    //             )
    //             .setThumbnail('https://i.pinimg.com/564x/59/f8/c3/59f8c3d947b3f9c60ce9d8ba907ef12d.jpg')
    //             .setColor('White')
    //             .setTimestamp()
    //             .setFooter({text: '<3'});


    //         interaction.reply({ embeds: [help] });
    //     };

    //     if (interaction.commandName === 'about') {
    //         const about = new EmbedBuilder()
    //             .setTitle("daegal !")
    //             .setDescription(
    //                 '   an nct card bot !! \n  pre-alpha release\n\n>         https://daegallie.carrd.co/ ♡'
    //             )
    //             .setThumbnail('https://i.pinimg.com/564x/59/f8/c3/59f8c3d947b3f9c60ce9d8ba907ef12d.jpg')
    //             .setColor('White')
    //             .setFooter({text: 'made with <3 by nana~'})
    //             .setImage('https://i.pinimg.com/564x/93/e9/59/93e9598b482d27a86696d9e7c10017ea.jpg');


    //         interaction.reply({ embeds: [about] });
    //     };
    // });


// Removed the unnecessary if statement

client.login(process.env.DISCORD_TOKEN); // logins with token
