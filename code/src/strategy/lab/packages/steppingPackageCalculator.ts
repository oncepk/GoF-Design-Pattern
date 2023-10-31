import { MonthlyCalculator } from "./calculator";

export class SteppingCalculator implements MonthlyCalculator {
    public calculate(totalHours: number): number {
        if (totalHours <= 50) {
            return totalHours;
        }
        return 50 + (totalHours - 50) * 0.5;
    }
}