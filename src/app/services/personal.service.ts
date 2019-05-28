//Servicio de peticiones a seridor

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/employee';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
	public url: string;

  constructor( private _http: HttpClient ){
    this.url = Global.url;
  }


  //Metodo de prueba
  homeService(): Observable<any>{
    let Header = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(this.url+"/home", {headers: Header});    // , {headers: Header}
  }


  //Metodo para obtener todo el personal de la base de datos
  getPersonal(): Observable<any>{
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(this.url+"/personal", {headers: headers});
  }

}
 