const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'about',
    description: 'About Daegal!',
    options: null,
    execute: async (interaction) => {
        const about = new EmbedBuilder()
            .setTitle("daegal !")
            .setDescription(
                    '   an nct card bot !! \n  pre-alpha release\n\n>         https://daegallie.carrd.co/ ♡'
                )
            .setThumbnail('https://i.pinimg.com/564x/59/f8/c3/59f8c3d947b3f9c60ce9d8ba907ef12d.jpg')
            .setColor('White')
            .setFooter({text: 'made with <3 by nana~'})
            .setImage('https://i.pinimg.com/564x/93/e9/59/93e9598b482d27a86696d9e7c10017ea.jpg');
        interaction.reply({ embeds: [about] });
    }
};