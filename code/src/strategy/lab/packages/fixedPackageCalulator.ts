import { MonthlyCalculator } from "./calculator";

export class FixedPackageCalculator implements MonthlyCalculator {
    public calculate(totalHours: number): number {
        return 500;
    }

}