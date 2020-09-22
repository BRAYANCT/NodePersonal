import { Component, OnInit } from '@angular/core';
import {Proyectos} from '../../models/proyectos';

import {ProyectosService} from '../../services/proyectos';

import { from } from 'rxjs';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {

  public titulo:String;
  public proyectos:Proyectos;

  constructor(
    private _proyectosService:ProyectosService
  ) { 
    this.titulo="Crear Proyectos";
    this.proyectos=new Proyectos('','','','','',2020,'');
  }

  ngOnInit(): void {
  }
  onSubmit(form){
    console.log(this.proyectos);
  }
}
