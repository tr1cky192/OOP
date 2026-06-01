import { ISmartDevice } from "./lab2";

export interface ICommand {
    execute(): void;
    undo(): void;
}

export class TurnOnCommand implements ICommand {
    private device: ISmartDevice;
    constructor(device: ISmartDevice) { this.device = device; }

    execute(): void { this.device.turnOn(); }
    undo(): void { this.device.turnOff(); }
}

export class RemoteControl {
    private commands: { [key: string]: ICommand } = {};
    private history: ICommand[] = [];

    public setCommand(button: string, command: ICommand): void {
        this.commands[button] = command;
    }

    public pressButton(button: string): void {
        if (this.commands[button]) {
            this.commands[button].execute();
            this.history.push(this.commands[button]);
        } else {
            console.log(`Кнопка ${button} не налаштована.`);
        }
    }

    public pressUndo(): void {
        const lastCommand = this.history.pop();
        if (lastCommand) {
            console.log("[UNDO]: Скасування дії ->");
            lastCommand.undo();
        } else {
            console.log("Історія команд порожня.");
        }
    }
}