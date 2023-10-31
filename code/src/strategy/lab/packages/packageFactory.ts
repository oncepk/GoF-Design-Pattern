import { FixedPackageCalculator } from "./fixedPackageCalulator";
import { HourflexCalculator } from "./hourflexPackageCalculator";
import { PackageType } from "./packageType";
import { SteppingCalculator } from "./steppingPackageCalculator";
import { UnknownPackageCalculator } from "./unknowPackageCalculator";

export class PackageFactory {
    static createPackage(packageType: PackageType) {
        switch (packageType) {
            case PackageType.FIXED:
                return new FixedPackageCalculator();
            case PackageType.HOUR_FLEX:
                return new HourflexCalculator();
            case PackageType.STEPPING:
                return new SteppingCalculator();
            default:
                return new UnknownPackageCalculator();
        }
    }
}