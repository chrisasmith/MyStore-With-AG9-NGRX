import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../reducers';
import {getProductsList} from '../actions/my-store.actions';
import {getCartItems} from '../store-pos/actions/store-pos.actions';
import {PosState} from '../store-pos/reducers';

@Injectable({
  providedIn: 'root'
})
export class MyStoreService {
  private products = [
    {
      id: null,
      name: 'Skittles',
      price: 16.00,
      priceTaxed: 0,
      imported: false,
      image: '../assets/products/skittles.png',
      taxable: false
    },
    {
      id: null,
      name: 'Walkman',
      price: 99.99,
      priceTaxed: 0,
      imported: false,
      image: '../assets/products/walkman.png',
      taxable: true
    },
    {
      id: null,
      name: 'Microwave Popcorn',
      price: 0.99,
      priceTaxed: 0,
      imported: false,
      image: '../assets/products/microwavePopcorn.png',
      taxable: false
    },
    {
      id: null,
      name: 'Vanilla-Hazelnut Coffee',
      price: 11.00,
      priceTaxed: 0,
      imported: true,
      image: '../assets/products/vanillaHazelnutCoffee.png',
      taxable: false
    },
    {
      id: null,
      name: 'Vespa',
      price: 15001.25,
      priceTaxed: 0,
      imported: true,
      image: '../assets/products/vespa.png',
      taxable: true
    },
    {
      id: null,
      name: 'Crate of Almond Snickers',
      price: 75.99,
      priceTaxed: 0,
      imported: true,
      image: '../assets/products/almondSnickers.png',
      taxable: false
    },
    {
      id: null,
      name: 'Discman ',
      price: 55.00,
      priceTaxed: 0,
      imported: false,
      image: '../assets/products/cdplayer.png',
      taxable: true
    },
    {
      id: null,
      name: 'Bottle of Wine',
      price: 10.00,
      priceTaxed: 0,
      imported: true,
      image: '../assets/products/bottleOfWine.png',
      taxable: true
    },
    {
      id: null,
      name: '300# Bag of Fair-Trade Coffee',
      price: 997.99,
      priceTaxed: 0,
      imported: false,
      image: '../assets/products/fairTradeCoffee.png',
      taxable: false
    }
  ];

  constructor(private store: Store<AppState>, private posStore: Store<PosState>) {
    this.setStoreState();
  }

  setStoreState(): void {
    this.products.forEach(p => {
      p.id = Math.random() * Date.now();
    });
    this.store.dispatch(getProductsList({products: this.products}));
    this.posStore.dispatch(getCartItems({cart: []}));
  }
}
