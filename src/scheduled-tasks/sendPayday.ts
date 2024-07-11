import { ScheduledTask } from '@sapphire/plugin-scheduled-tasks';
import { sendMessage } from '../handlers/sendPaydayHandler';

export class SendPaydayTask extends ScheduledTask {
	public constructor(context: ScheduledTask.LoaderContext, options: ScheduledTask.Options) {
		super(context, {
			...options,
			name: 'sendPayday',
			interval: 120000
		});
	}

	public async run() {
		const channelId = '1251338333997629561';
		const message = 'PAYDAY';

		await sendMessage(this.container.client, channelId, message);
	}
}

declare module '@sapphire/plugin-scheduled-tasks' {
	interface ScheduledTasks {
		interval: never;
	}
}
