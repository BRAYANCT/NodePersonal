import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { CrearComponent } from './components/crear/crear.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CrearProyectoComponent } from './components/crear-proyecto/crear-proyecto.component';

const routes: Routes = [

  {path:'',component:SobremiComponent},
  {path:'sobre-mi',component:SobremiComponent},  
  {path:'proyectos',component:ProyectosComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'crear-proyecto',component:CrearProyectoComponent},
  {path:'crear',component:CrearComponent},
  {path:'**',component:SobremiComponent},




];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
