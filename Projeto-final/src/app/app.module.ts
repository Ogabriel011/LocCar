import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/componentes/header/header.component';
import { ReservasComponent } from './pages/componentes/reservas/reservas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservasClienteComponent } from './pages/componentes/reservas-cliente/reservas-cliente.component';
import { CarrosComponent } from './pages/componentes/carros/carros.component';

@NgModule({
  declarations: [
    AppComponent,
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
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
