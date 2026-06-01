// Імпортуємо інтерфейс пристрою
import { ISmartDevice } from "./lab2";
import { HouseEnergyManager, EcoStrategy } from "./lab7"; 

import { MotionSensor } from "./lab4"; 

export class SmartHomeFacade {
    private light: ISmartDevice;
    private music: ISmartDevice;
    private energyManager: HouseEnergyManager;
    private sensor?: MotionSensor; // Тепер тут гарний тип замість any

    constructor(light: ISmartDevice, music: ISmartDevice, energy: HouseEnergyManager, sensor?: MotionSensor) {
        this.light = light;
        this.music = music;
        this.energyManager = energy;
        this.sensor = sensor;
    }

    public leaveHome(): void {
        console.log("\n=== [Фасад]: Активація сценарію 'Я йду з дому' ===");
        this.light.turnOff();
        this.music.turnOff();
        
        this.energyManager.setStrategy(new EcoStrategy());
        this.energyManager.executeStrategy();
        
        console.log("🔒 Будинок поставлено на охорону. Все вимкнено.");
    }
}