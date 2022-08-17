import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../command";

export const Invite: Command = {
    name: "invite",
    description: "Convite para o servidor",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = "https://discord.gg/CqTzhHE";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};