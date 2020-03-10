import {
  createReducer,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {getProductsList} from '../actions/my-store.actions';

export interface AppState {
  products: any[];
}

export const initialState: AppState = {
  products: []
};

export const productReducer = createReducer(
  initialState,
  on(getProductsList, (state, action) => {
    return {
      products: action.products
    };
  })
);


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
