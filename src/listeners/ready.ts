import { ApplyOptions } from '@sapphire/decorators';
import { Listener } from '@sapphire/framework';
import type { Client } from 'discord.js';

@ApplyOptions<Listener.Options>({ once: true, event: 'ready' })
export class ReadyListener extends Listener {
	run(client: Client) {
		if (client.user) {
			this.container.logger.info(`Bot ${client.user.username} [${client.user.id}] is ready!`);
		}
	}
}
