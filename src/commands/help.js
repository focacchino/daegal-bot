const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Use for any help!',
    options: null,
    execute: async (interaction) => {
        const help = new EmbedBuilder()
            .setTitle("oh noes :0")
            .setDescription(
                    `>   support server: https://discord.gg/eqTXEbkrH8\n>    \n>   wanna report bugs? send them here: \n>   \n>   still need help? ;-; i can understand :< \n>   \n>   dm the developer :D — hearts4ji \n>   *(pls use this as last resort thanks)*`
                )
            .setThumbnail('https://i.pinimg.com/564x/59/f8/c3/59f8c3d947b3f9c60ce9d8ba907ef12d.jpg')
            .setColor('White')
            .setTimestamp()
            .setFooter({text: '<3'});
            interaction.reply({ embeds: [help] });
    }
};