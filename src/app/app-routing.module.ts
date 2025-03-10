import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CartComponent } from './cart/cart.component';

import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  //{ path: '', redirectTo: '/registration', pathMatch: 'full' } ,
  { path: 'products', component: ProductsComponent},
  { path: 'dashboard', component: DashboardComponent},
  {path:'cart', component:CartComponent},
  {path:'logout', component:LogoutComponent}
]

  // Default route



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}