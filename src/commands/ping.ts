import { ApplicationCommandType, Client } from "discord.js";
import { Command } from "../command";

export const Ping: Command = {
    name: "ping",
    description: "Pong!",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: any) => {
        await interaction.followUp({
            ephemeral: true,
            embeds: [{
                title: `Pong!`,
                description: `:green_circle: API Latency: ${Math.round(client.ws.ping)}ms\n :orange_circle: Message latency: ${Date.now() - interaction.createdTimestamp}ms`,
                color: 0xE56100,
                footer: { text: `Your Name` },
                timestamp: new Date(),
            }]
        });
    }
};