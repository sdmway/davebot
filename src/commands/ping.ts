import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';
import { EmbedBuilder, Message } from 'discord.js';

@ApplyOptions<Command.Options>({ name: 'ping', description: 'Ку от бота' })
export default class PingCommand extends Command {
	public override registerApplicationCommands(registry: Command.Registry) {
		registry.registerChatInputCommand({
			name: this.name,
			description: this.description
		});
	}

	public override async messageRun(message: Message) {
		return this.sendPing(message);
	}

	public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		return this.sendPing(interaction);
	}

	private async sendPing(interactionOrMessage: Message | Command.ChatInputCommandInteraction) {
		const replyContent = `ℹ️ Пинг **${Math.round(this.container.client.ws.ping)}**ms`;
		const replyEmbed = new EmbedBuilder().setDescription(replyContent).setColor(0x0066ff);

		if (interactionOrMessage instanceof Message) {
			return interactionOrMessage.reply({ embeds: [replyEmbed] });
		}

		return interactionOrMessage.reply({ embeds: [replyEmbed], ephemeral: true });
	}
}
