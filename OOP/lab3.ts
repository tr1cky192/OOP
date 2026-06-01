import { ISmartDevice } from "./lab2";

export class LegacySpeaker {
    public startSoundSystem(): void { console.log("🔊 Стара акустика заграла через AUX."); }
    public stopSoundSystem(): void { console.log("🔇 Стара акустика затихла."); }
}

export class SpeakerAdapter implements ISmartDevice {
    private legacySpeaker: LegacySpeaker;

    constructor(speaker: LegacySpeaker) {
        this.legacySpeaker = speaker;
    }

    getName(): string { return "Адаптована Аудіосистема"; }
    
    turnOn(): void {
        console.log("[Adapter]: Активація через перехідник...");
        this.legacySpeaker.startSoundSystem();
    }

    turnOff(): void {
        console.log("[Adapter]: Деактивація через перехідник...");
        this.legacySpeaker.stopSoundSystem();
    }
}