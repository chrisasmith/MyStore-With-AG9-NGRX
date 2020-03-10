import { createAction, props } from '@ngrx/store';

export const getCartItems = createAction(
  '[Store Pos] Get Cart Items',
  props<{cart: any[]}>()
);

export const addItemToCart = createAction(
  '[Store Pos] Add Item to Cart',
  props<{cart: any[]}>()
);

export const removeItemFromCart = createAction(
  '[Store Pos] Remove Item to Cart',
  props<{cart: any[]}>()
);

export const pushCart = createAction(
  '[Store Pos] Load Saved Cart',
);

export const clearCart = createAction(
  '[Store Pos] Cleared Cart',
  props<{cart: any[]}>()
);

