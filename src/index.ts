import '@sapphire/plugin-logger/register';
import '@sapphire/plugin-scheduled-tasks/register';
import 'dotenv/config';
import { SapphireClient } from '@sapphire/framework';

const client = new SapphireClient({
	defaultPrefix: '!',
	caseInsensitiveCommands: true,
	intents: 3276543,
	loadMessageCommandListeners: true,
	tasks: {
		bull: {
			connection: { host: 'localhost', db: 3 }
		}
	}
});

const main = async () => {
	try {
		await client.login(process.env.BOT_TOKEN);
		client.logger.info('Bot logged in...');
	} catch (error) {
		client.logger.fatal(error);
		await client.destroy();
		process.exit(1);
	}
};

void main();
