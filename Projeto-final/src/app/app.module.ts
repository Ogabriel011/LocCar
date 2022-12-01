import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from  '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { LocadoraComponent } from './components/locadora/locadora.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReservasComponent } from './components/reservas/reservas.component';
import { ReservasClienteComponent } from './components/reservas-cliente/reservas-cliente.component';
import { CarrosComponent } from './components/carros/carros.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CarrosClienteComponent } from './carros-cliente/carros-cliente.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CarrosClienteComponent,
    FooterComponent,
    LocadoraComponent,
    PerfilUsuarioComponent,
    HeaderComponent,
    ReservasComponent,
    ReservasClienteComponent,
    CarrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
