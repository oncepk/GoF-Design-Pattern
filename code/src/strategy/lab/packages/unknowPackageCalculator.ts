import { MonthlyCalculator } from "./calculator";

export class UnknownPackageCalculator implements MonthlyCalculator {
    public calculate(totalHours: number): number {
        return 0;
    }

}