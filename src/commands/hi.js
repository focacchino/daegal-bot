const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'hi',
    description: 'Replies with hi!',
    options: null,
    execute: async (interaction) => {
        const embed = new EmbedBuilder()
            .setTitle("hi hi !!")
            .setDescription('say `/start` to start playing ^^')
            .setThumbnail('https://i.pinimg.com/564x/59/f8/c3/59f8c3d947b3f9c60ce9d8ba907ef12d.jpg')
            .setColor('White')
            .setTimestamp()
            .setImage('https://i.pinimg.com/564x/56/a1/de/56a1dee20ac9ed0432576331e828a9af.jpg')
            .setFooter({text: '<3'});
        interaction.reply({ embeds: [embed] });
    }
};