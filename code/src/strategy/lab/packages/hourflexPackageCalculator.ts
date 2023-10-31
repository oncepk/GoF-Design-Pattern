import { MonthlyCalculator } from "./calculator";

export class HourflexCalculator implements MonthlyCalculator {
    public calculate(totalHours: number): number {
        return totalHours * 50;
    }

}