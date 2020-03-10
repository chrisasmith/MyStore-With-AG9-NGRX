import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  public itemList: any[];
  private combinedTaxes: number[] = [];
  private combinedPrices: number[] = [];
  @Input() set items(item: any[]) {
    this.combinedTaxes = [];
    this.combinedPrices = [];
    if (item) {
      let taxed = 0;
      this.itemList = item.map(i => {
        taxed = this.calculateCost(i, this.tax);
        return {
          ...i,
          priceTaxed: taxed
        };
      } );
    }
  }
  public tax: {base: number, duty: number};
  @Input() set taxes(t) {
    if (t) {
      this.tax = t;
    }
  }

  public get totalPrice() {
    return this.combinedPrices.reduce((a, b) => a + b, 0);
  }

  public get totalTax() {
    return this.combinedTaxes.reduce((a, b) => a + b, 0);
  }

  constructor() {
  }

  ngOnInit(): void {
  }


  public calculateCost(data: any, tax): any {
    let importTax = 0;
    let baseTax = 0;
    if (data.imported) {
      importTax = this.roundToNearest(data.price * tax.duty);
    }
    if (data.taxable) {
      baseTax = this.roundToNearest(data.price * tax.base);
    }

    const combinedTax = (importTax + baseTax);
    const combinedPrice = data.price + (importTax + baseTax);

    this.combinedTaxes = [combinedTax, ...this.combinedTaxes];
    this.combinedPrices = [combinedPrice, ...this.combinedPrices];

    return combinedPrice;
  }

  private roundToNearest(num: number): number {
    const rounded = (Math.ceil(num * 20 - 0.5) / 20).toFixed(2);
    return +rounded;
  }

}
