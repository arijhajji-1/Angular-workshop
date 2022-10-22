import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateUserComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule

  ]
})
export class UserModule { }
