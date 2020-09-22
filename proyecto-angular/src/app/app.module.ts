import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CrearComponent } from './components/crear/crear.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CrearProyectoComponent } from './components/crear-proyecto/crear-proyecto.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    SobremiComponent,
    ProyectosComponent,
    CrearComponent,
    ContactoComponent,
    CrearProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
