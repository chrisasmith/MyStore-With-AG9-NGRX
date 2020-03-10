import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StorePosComponent} from './store-pos/store-pos.component';


const routes: Routes = [
  {
    path: '',
    component: StorePosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
