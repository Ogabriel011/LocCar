import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosClienteComponent } from './carros-cliente/carros-cliente.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch:'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'CarrosClientes', component: CarrosClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
