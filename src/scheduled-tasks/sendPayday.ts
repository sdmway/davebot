import { ScheduledTask } from '@sapphire/plugin-scheduled-tasks';

export class SendPaydayTask extends ScheduledTask {
	public constructor(context: ScheduledTask.LoaderContext, options: ScheduledTask.Options) {
		super(context, {
			...options,
			interval: 120000
		});
	}

	public async run() {
		const channelId = '1251338333997629561';
		const message = 'PAYDAY';

		const channel = await this.container.client.channels.fetch(channelId);

		if (channel?.isTextBased()) {
			channel.send(message).catch(console.error);
		}
	}
}

declare module '@sapphire/plugin-scheduled-tasks' {
	interface ScheduledTasks {
		interval: never;
	}
}
