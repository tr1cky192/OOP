export interface IEnergyStrategy {
    applySettings(): void;
}

// Експортуємо, бо цей клас потрібен для Facade у lab8
export class EcoStrategy implements IEnergyStrategy {
    applySettings(): void {
        console.log("🌿 [Стратегія ECO]: Температура знижена до 18°C, всі пристрої переведені в режим енергозбереження.");
    }
}

// Додаємо export
export class PartyStrategy implements IEnergyStrategy {
    applySettings(): void {
        console.log("🥳 [Стратегія PARTY]: Музика на максимум, увімкнути всі спецефекти та яскраве світло!");
    }
}

// Додаємо export
export class HouseEnergyManager {
    private strategy: IEnergyStrategy;

    constructor(strategy: IEnergyStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: IEnergyStrategy): void {
        this.strategy = strategy;
    }

    executeStrategy(): void {
        this.strategy.applySettings();
    }
}