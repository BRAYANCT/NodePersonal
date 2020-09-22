import { Component, OnInit } from '@angular/core';
import {Proyectos} from '../../models/proyectos';
import {ProyectosService} from '../../services/proyectos';
import { from } from 'rxjs';
import {UploadService} from '../../services/upload';
import {Global} from '../../services/global'
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
  providers:[ProyectosService]
})
export class CrearComponent implements OnInit {
  
  public titulo:String;
  public proyectos:Proyectos;
  public status:String;
  public filesToUpload:Array<File>;

  constructor(
    private _proyectosService:ProyectosService,
    private _uploadService:UploadService
    
  ) { 
    this.titulo="Crear Proyectos";
    this.proyectos=new Proyectos('','','','','',2020,'');
  }

  ngOnInit(): void {
  }
  onSubmit(form){
    console.log(this.proyectos);
    this._proyectosService.saveProyectos(this.proyectos).subscribe(
      response=>{
        if (response.proyectos) {
          this.status='success';

          this._uploadService.makeFileRequest(Global.url+"imagen"+response.proyectos._id,[],this.filesToUpload,'imagen').then((result:any)=>{
            this.status='success';
            console.log(result);
            form.reset();
          });

        }else{
          this.status='files';
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
  fileChangeEvent(fileInput:any){

    this.filesToUpload=<Array<File>>fileInput.target.files;

  }
}
