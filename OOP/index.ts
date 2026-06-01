// 1. Імпортуємо все, що потрібно для запуску, з твоїх файлів
import { SmartHomeHub } from "./lab1.ts";
import { LightCreator, ThermostatCreator } from "./lab2";
import { LegacySpeaker, SpeakerAdapter } from "./lab3";
import { MotionSensor, SecurityService, LightAutomation } from "./lab4";
import { RemoteControl, TurnOnCommand } from "./lab5";
import { RGBDecorator } from "./lab6";
import { HouseEnergyManager, PartyStrategy } from "./lab7";
import { SmartHomeFacade } from "./lab8";

// 2. Головна функція запуску (наш тестовий сценарій)
function runSmartHome() {
    console.log("=========================================");
    console.log("   ЗАПУСК ЕКОСИСТЕМИ НА TYPESCRIPT (8 ЛАБ) ");
    console.log("=========================================\n");

    // ЛАБ 1: Singleton
    const hub = SmartHomeHub.getInstance();
    hub.showStatus();

    // ЛАБ 2: Factory Method
    const lightFactory = new LightCreator();
    const basicLight = lightFactory.createDevice();

    // ЛАБ 3: Adapter
    const oldSpeaker = new LegacySpeaker();
    const adaptedSpeaker = new SpeakerAdapter(oldSpeaker);

    // ЛАБ 6: Decorator
    const rgbLight = new RGBDecorator(basicLight);
    console.log(`\nСтворено модифікований пристрій: ${rgbLight.getName()}`);

    // ЛАБ 5: Command
    const remote = new RemoteControl();
    remote.setCommand("A", new TurnOnCommand(rgbLight));
    remote.setCommand("B", new TurnOnCommand(adaptedSpeaker));

    console.log("\n--- [Тест Пульта] ---");
    remote.pressButton("A");
    remote.pressButton("B");
    remote.pressUndo();

    // ЛАБ 4: Observer
    const sensor = new MotionSensor();
    const police = new SecurityService();
    const autoLight = new LightAutomation(basicLight);
    sensor.attach(police);
    sensor.attach(autoLight);
    sensor.trigger();

    // ЛАБ 7: Strategy
    console.log("\n--- [Тест Режимів Енергії] ---");
    const energyManager = new HouseEnergyManager(new PartyStrategy());
    energyManager.executeStrategy();

    // ЛАБ 8: Facade
    const smartHome = new SmartHomeFacade(rgbLight, adaptedSpeaker, energyManager);
    smartHome.leaveHome();
}

// Запускаємо систему
runSmartHome();