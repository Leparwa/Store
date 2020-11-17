import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { PayComponent } from './pay/pay.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'edit', component:ProductDetailsComponent
  },
  {
    path:'Pay', component:PayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
