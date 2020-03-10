import {
  createReducer,
  MetaReducer,
  on
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {StorePosActions} from '../actions/index';

export interface PosState {
  cart: any[];
}

export const initialState: PosState = {
  cart: []
};

export const posFeatureKey = 'pos';
export const posReducer = createReducer(
  initialState,
  on(StorePosActions.getCartItems, (state, action) => {
    return {
      cart: action.cart
    };
  }),
  on(StorePosActions.addItemToCart, (state, action) => {
    return {
      cart: [action.cart, ...state.cart]
    };
  }),
  on(StorePosActions.removeItemFromCart, (state, action) => {
    return {
      cart: []
    };
  }),
  on(StorePosActions.clearCart, (state, action) => {
    return {
      cart: []
    };
  })
);


export const metaReducers: MetaReducer<PosState>[] = !environment.production ? [] : [];


