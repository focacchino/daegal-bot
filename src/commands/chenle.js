const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'chenle',
    description: ':D',
    options: null,
    execute: async (interaction) => {
        const chenle = new EmbedBuilder()
            .setTitle(':D')
            .setDescription('my owner and the cutest hooman-dolphin being in the world !! <3')
            .setThumbnail('https://i.pinimg.com/564x/59/f8/c3/59f8c3d947b3f9c60ce9d8ba907ef12d.jpg')
            .setColor('White')
            .setTimestamp()
            .setImage('https://i.pinimg.com/564x/87/29/a5/8729a57f999348a5e19f99b1860adcd2.jpg')
            .setFooter({text: '<3'});
        interaction.reply({ embeds: [chenle] });
    }
};   
    