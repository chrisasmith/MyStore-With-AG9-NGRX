import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../reducers';
import {PosState} from './reducers';


export const selectCartItems = createFeatureSelector<PosState>('pos');
export const cartItemsSelector = createSelector(
  selectCartItems,
  (pos) => pos.cart
);


export const selectProducts = createFeatureSelector<AppState>('app');
export const productsSelector = createSelector(
  selectProducts,
  (app) => app.products
);
