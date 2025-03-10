import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './authguard.service';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegistrationComponent },

 // { path: '', redirectTo: '/registration', pathMatch: 'full' } ,

  { path: 'dashboard', component: DashboardComponent},
  { path: 'products', component: ProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'logout', component:LogoutComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }