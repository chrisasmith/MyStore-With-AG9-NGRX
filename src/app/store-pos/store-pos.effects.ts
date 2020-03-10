import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {StorePosActions} from '../store-pos/actions/index';
import {tap} from 'rxjs/operators';

@Injectable()
export class StorePosEffects {
  cartItems$ = createEffect(() => this.actions$
    .pipe(
      ofType(StorePosActions.addItemToCart),
      tap(action => localStorage.setItem('cart', JSON.stringify(action['cart'])))
    ),
    {dispatch: false});
  constructor(private actions$: Actions) {
  }
}
