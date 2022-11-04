import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { UserServiceService } from '../Core/Services/user-service.service';


@NgModule({
  declarations: [
    UpdateUserComponent,
    UsersListComponent,
    AddUserComponent
  ],
  providers:[UserServiceService],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class UserModule { }
