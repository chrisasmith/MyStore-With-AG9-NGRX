import { Component, OnInit } from '@angular/core';
import {MyStoreService} from '../services/my-store.service';
import {select, Store} from '@ngrx/store';
import {AppState} from '../reducers';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {PosState} from './reducers';
import * as StorePosActions from './actions/store-pos.actions';
import {cartItemsSelector, productsSelector} from './store-pos.selectors';

@Component({
  selector: 'app-store-pos',
  templateUrl: './store-pos.component.html',
  styleUrls: ['./store-pos.component.scss']
})
export class StorePosComponent implements OnInit {

  public products: any[];
  public cart$: Observable<any[]>;

  public tax;

  constructor(private myStoreSrv: MyStoreService,
              private store: Store<AppState>,
              private posStore: Store<PosState> ) {
  }

  ngOnInit(): void {
    const savedCart = localStorage.getItem('cart');
    this.posStore.dispatch(StorePosActions.pushCart());

    this.store.pipe(select(productsSelector))
      .pipe(take(1))
      .subscribe(p => this.products = [...p]);

    this.cart$ = this.posStore.pipe(select(cartItemsSelector));

    this.tax = {base: .1, duty: .05};
  }

  public updatePosStore(item: any): void {
    console.log('UPDATE STORE')
    this.posStore.dispatch(StorePosActions.addItemToCart({cart: item}));
  }
}
