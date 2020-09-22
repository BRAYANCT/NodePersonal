import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Proyectos} from '../models/proyectos';
import {Global}from './global';

@Injectable()

export class ProyectosService{

    public url:string;

    constructor(
        private _http:HttpClient
    ) {
        this.url=Global.url;
    }

    testService(){
        return 'Probando el servicio de angular';
    }
    /* subir proyectos de angular */
    saveProyectos(proyectos:Proyectos):Observable<any> {

        let params =JSON.stringify(proyectos);
        let headers=new HttpHeaders().set('Content-type','application/json');
        return this._http.post(this.url+'saveProyecto',params,{headers:headers})


    }
    getProyectos():Observable<any> {
        
        let headers=new HttpHeaders().set('Content-Type','application/json');
        
        return this._http.get(this.url+'proyectos',{headers:headers});

    }
}



























