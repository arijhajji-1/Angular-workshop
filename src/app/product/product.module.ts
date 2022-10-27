import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductTDComponentComponent } from './add-product-tdcomponent/add-product-tdcomponent.component';


@NgModule({
  declarations: [
    ProductListComponent,
    AddProductTDComponentComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule

  ]
})
export class ProductModule { }
