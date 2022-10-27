import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductTDComponentComponent } from './add-product-tdcomponent/add-product-tdcomponent.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path:'productList',
    component:ProductListComponent
  },
  {
    path : '', component:AddProductTDComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
