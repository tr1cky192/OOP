export interface ISmartDevice {
    getName(): string;
    turnOn(): void;
    turnOff(): void;
}

export class SmartLight implements ISmartDevice {
    getName(): string { return "Розумна Лампа"; }
    turnOn(): void { console.log("💡 Світло увімкнено на 100%."); }
    turnOff(): void { console.log("🌑 Світло вимкнено."); }
}

export class SmartThermostat implements ISmartDevice {
    getName(): string { return "Розумний Термостат"; }
    turnOn(): void { console.log("🌡️ Клімат-контроль активовано (22°C)."); }
    turnOff(): void { console.log("📴 Клімат-контроль вимкнено."); }
}

export abstract class DeviceCreator {
    public abstract createDevice(): ISmartDevice;
}

export class LightCreator extends DeviceCreator {
    public createDevice(): ISmartDevice { return new SmartLight(); }
}

export class ThermostatCreator extends DeviceCreator {
    public createDevice(): ISmartDevice { return new SmartThermostat(); }
}