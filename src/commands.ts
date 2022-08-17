import { Command } from "./command";
import { Hello } from "./commands/hello";
import { Invite } from "./commands/invite";

export const Commands: 
    Command[] = [
        Hello, 
        Invite
    ];