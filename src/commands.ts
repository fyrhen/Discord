import { Command } from "./command";
import { Hello } from "./commands/hello";
import { Ping } from "./commands/ping";

export const Commands: 
    Command[] = [
        Hello, 
        Ping
    ];