import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [CartComponent, CartItemComponent],
  exports: [CartComponent, CartItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ]
})
export class CartModule { }
