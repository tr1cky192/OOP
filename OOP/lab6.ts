// Імпортуємо інтерфейс з другої лабораторної
import { ISmartDevice } from "./lab2";

export abstract class DeviceDecorator implements ISmartDevice {
    protected decoratedDevice: ISmartDevice;

    constructor(device: ISmartDevice) {
        this.decoratedDevice = device;
    }

    getName(): string { return this.decoratedDevice.getName(); }
    turnOn(): void { this.decoratedDevice.turnOn(); }
    turnOff(): void { this.decoratedDevice.turnOff(); }
}

export class RGBDecorator extends DeviceDecorator {
    getName(): string { return `${super.getName()} (з RGB підсвіткою)`; }

    turnOn(): void {
        super.turnOn();
        this.setRGB();
    }

    private setRGB(): void {
        console.log("🌈 [Декоратор RGB]: Увімкнено режим плавної зміни кольорів.");
    }
}