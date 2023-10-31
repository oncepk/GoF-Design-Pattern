import { MonthlyCalculator } from './packages/calculator';
import { FixedPackageCalculator } from './packages/fixedPackageCalulator';
import { HourflexCalculator } from './packages/hourflexPackageCalculator';
import { PackageFactory } from './packages/packageFactory';
import { PackageType } from './packages/packageType';
import { SteppingCalculator } from './packages/steppingPackageCalculator';
import { UnknownPackageCalculator } from './packages/unknowPackageCalculator';

export class Billing {
  private vatRate = 7.0;
  private totalHours: number;
  private packageType: PackageType;

  constructor(totalHours: number, packageType: PackageType) {
    this.totalHours = totalHours;
    this.packageType = packageType;
  }

  public monthlyBill(): number {

    let total = PackageFactory
      .createPackage(this.packageType)
      .calculate(this.totalHours);

    return total + (total * this.vatRate) / 100;
  }

  private totalEithVat(total: number): number {
    return total + (total * this.vatRate) / 100;
  }
}
