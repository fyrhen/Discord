import { ApplicationCommandType,Client } from "discord.js";
import { Command } from "../command";

export const Hello: Command = {
    name: "hello",
    description: "Hello",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: any) => {
        await interaction.followUp({
            ephemeral: true,
            content: "Hey!"
        });
    }
};