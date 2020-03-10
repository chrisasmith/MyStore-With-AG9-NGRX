import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewerComponent } from './product-viewer.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [ProductViewerComponent, ProductComponent],
  exports: [ProductViewerComponent, ProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ]
})
export class ProductViewerModule { }
