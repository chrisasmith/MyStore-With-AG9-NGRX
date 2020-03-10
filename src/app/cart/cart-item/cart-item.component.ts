import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  public itemData;
  @Input() set info(i: any) {
    if (i) {
      this.itemData = i;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
