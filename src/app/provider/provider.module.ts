import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderListComponent } from './provider-list/provider-list.component';


@NgModule({
  declarations: [
    ProviderListComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule
  ]
})
export class ProviderModule { }
