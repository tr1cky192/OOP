import { ISmartDevice } from "./lab2";

export interface IObserver {
    update(event: string): void;
}

// Датчик руху
export class MotionSensor {
    private observers: IObserver[] = [];

    public attach(observer: IObserver): void { this.observers.push(observer); }
    
    public trigger(): void {
        console.log("\n🚨 [Датчик]: Виявлено рух у коридорі!");
        this.notify("Рух у коридорі");
    }

    private notify(event: string): void {
        for (const observer of this.observers) {
            observer.update(event);
        }
    }
}

export class SecurityService implements IObserver {
    update(event: string): void {
        console.log(`👮 [Безпека]: Сигнал: "${event}". Викликаю патруль.`);
    }
}

export class LightAutomation implements IObserver {
    private device: ISmartDevice;
    constructor(device: ISmartDevice) { this.device = device; }

    update(event: string): void {
        console.log(`🤖 [Автоматизація]: Подія "${event}" -> Вмикаю пристрій:`);
        this.device.turnOn();
    }
}