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


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LocadoraComponent,
    HeaderComponent,
    PerfilUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
