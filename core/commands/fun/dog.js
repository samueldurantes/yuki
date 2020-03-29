const randomPuppy = require('random-puppy');

module.exports = {
	name: 'dog',
	aliases: ['doug'],
	description: 'Random images of dogs',
	usage: '',
	category: 'fun',
	enabled: true,
	execute(Yuki, message, args) {
		randomPuppy(Yuki.util.randomItem(['dog', 'pitbulls']))
			.then((url) => {
				message.channel.send(new Yuki.MessageEmbed()
					.setColor(Yuki.util.hexColor.default)
					.setImage(url)
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