const Shitgram = require('shitgram');

const shitgram = new Shitgram();

module.exports = {
	name: 'instagram',
	aliases: ['insta', 'ig'],
	description: 'Show Instagram Profile',
	category: 'utility',
    	usage: '<instagram username>',
    	requirements: { arguments: true },
	enabled: true,
	execute(Yuki, message, args) {
		shitgram.user(args[0])
			.then((user) => {
				message.channel.send(new Yuki.MessageEmbed()
					.setColor(Yuki.util.hexColor.default)
					.setThumbnail(user.avatarURL)
					.addFields(
						{ name: 'Username:', value: Yuki.util.sendCode(user.username, { code: 'js' }), inline: true },
						{ name: 'ID:', value: Yuki.util.sendCode(user.id, { code: 'js' }), inline: true },
						{ name: 'Full Name:', value: Yuki.util.sendCode(user.fullname || '-', { code: 'js' }), inline: true },
						{ name: 'Biography:', value: Yuki.util.sendCode(user.biography || '-', { code: 'js' }), inline: false },
						{ name: 'Posts:', value: Yuki.util.sendCode(user.posts, { code: 'js' }), inline: true },
						{ name: 'Followers:', value: Yuki.util.sendCode(user.followers, { code: 'js' }), inline: true },
						{ name: 'Following:', value: Yuki.util.sendCode(user.following, { code: 'js' }), inline: true },
					)
					.setFooter('Sponsored by Shitgram', 'https://files.catbox.moe/fgb31w.png')
				);
			})
			.catch((error) => {
				message.channel.send(new Yuki.MessageEmbed()
					.setColor(Yuki.util.hexColor.error)
					.setDescription(Yuki.util.sendCode(`Error: ${error.message}`, { code: 'js' }))
				);
			});
	}
};