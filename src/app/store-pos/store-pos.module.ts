import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorePosComponent } from './store-pos.component';
import {ProductViewerModule} from '../product-viewer/product-viewer.module';
import {CartModule} from '../cart/cart.module';
import { StoreModule } from '@ngrx/store';
import * as fromPos from './reducers';
import {posReducer} from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {StorePosEffects} from './store-pos.effects';



@NgModule({
  imports: [
    CommonModule,
    ProductViewerModule,
    CartModule,
    StoreModule.forFeature(fromPos.posFeatureKey, posReducer),
    EffectsModule.forFeature([StorePosEffects])

  ],
  declarations: [StorePosComponent],
  exports: [StorePosComponent],
})
export class StorePosModule { }
