import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../models/item';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Item;

  constructor() { }

  ngOnInit(): void {
  }
}
