import { Client, ClientOptions } from "discord.js";
import interactionCreate from "./events/interactionCreate";
import ready from "./events/ready";
require('dotenv').config();
require('console-stamp')(console, { 
    format: ':date(dd/mm/yy HH:MM)' 
});

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(process.env.TOKEN);