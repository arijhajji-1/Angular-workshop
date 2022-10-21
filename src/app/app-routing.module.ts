import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'products', component:ProductsListComponent},
  {path:'users', component:UsersListComponent},
  {path:'updateUser/:param', component:UpdateUserComponent},
{path:'providers',
loadChildren:()=>import('./provider/provider.module').then(m=>m.ProviderModule)
},
{path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
