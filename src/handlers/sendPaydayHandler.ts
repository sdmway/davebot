import { Client } from 'discord.js';

export async function sendMessage(client: Client, channelId: string, message: string) {
	const channel = client.channels.resolve(channelId);

	if (channel?.isTextBased()) {
		await channel.send(message).catch(console.error);
	}
}
