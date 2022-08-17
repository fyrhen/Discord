import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../command";

export const Hello: Command = {
    name: "hello",
    description: "Retorna uma mensagem de boas-vindas",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = "Oiii!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};