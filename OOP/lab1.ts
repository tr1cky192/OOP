export class SmartHomeHub {
    private static instance: SmartHomeHub | null = null;
    public houseName: string;

    private constructor() {
        this.houseName = "Smart Villa 2026";
        console.log("--- [Singleton] Головний Хаб системи ініціалізовано. ---");
    }

    public static getInstance(): SmartHomeHub {
        if (!SmartHomeHub.instance) {
            SmartHomeHub.instance = new SmartHomeHub();
        }
        return SmartHomeHub.instance;
    }

    public showStatus(): void {
        console.log(`[Хаб]: Система '${this.houseName}' працює стабільно.`);
    }
}