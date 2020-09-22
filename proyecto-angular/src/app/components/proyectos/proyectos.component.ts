import { Component, OnInit } from '@angular/core';

import { ProyectosService } from '../../services/proyectos';

import { Proyectos } from '../../models/proyectos';

import { Global } from '../../services/global';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  providers:[ProyectosService]
})
export class ProyectosComponent implements OnInit {
  public proyectos:Proyectos[];
  public url:string;

  constructor(
    public _proyectosService:ProyectosService
  ) { 
    this.url=Global.url;

  }

  ngOnInit(): void {
    this.getProyectos();
  }
  getProyectos(){
    this._proyectosService.getProyectos().subscribe(response=>{
     if (response.proyectos) {
       this.proyectos=response.proyectos;
       
     }
    },
    error=>{
      console.log(<any>error);
    })
  }


}
