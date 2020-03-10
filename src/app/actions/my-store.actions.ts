import { createAction, props } from '@ngrx/store';

export const getProductsList = createAction(
  '[Store Service] Get Products List',
  props<{products: any[]}>()
);


