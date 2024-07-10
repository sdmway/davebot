import 'dotenv/config';
import {SapphireClient} from '@sapphire/framework';

const client: SapphireClient = new SapphireClient({
    defaultPrefix: '!',
    caseInsensitiveCommands: true,
    intents: 3276543,
    loadMessageCommandListeners: true
})

const main = async () => {
    try {
        await client.login(process.env.BOT_TOKEN);
    } catch (error) {
        client.logger.fatal(error);
        await client.destroy();
        process.exit(1);
    }
};

void main();