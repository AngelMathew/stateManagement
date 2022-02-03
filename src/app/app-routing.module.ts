import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './items/items.component'

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'item',component:ItemsComponent},
  {path:'cart',component:CartComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
