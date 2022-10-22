import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'providers',
  loadChildren:()=>import('./provider/provider.module').then(m=>m.ProviderModule)
  },
  {path: 'products',
  loadChildren:()=>import('./product/product.module').then(x => x.ProductModule)},
{path: 'users',
  loadChildren:()=>import('./user/user.module').then(x => x.UserModule)},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
