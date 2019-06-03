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


  //Metodo de prueba.
  homeService(): Observable<any>{
    let Header = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(this.url+"/home", {headers: Header});    // , {headers: Header}
  }


  //Metodo para obtener todo el personal de la base de datos.
  getPersonal(): Observable<any>{
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(this.url+"/personal", {headers: headers});
  }

  //Metodo para guardar un nuevo empleado en la base de datos.
  saveEmployee(form): Observable<any>{
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    let employee = JSON.stringify(form);
    return this._http.post(this.url+"/empleado", employee, {headers: headers});
  }

  //Metodo para retornar un solo empleado de la base de datos.
  getEmployee(id): Observable<any>{
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(this.url+'/empleado/'+id, {headers: headers});
  }

  //Metodo para actualizar los datos de un empleado.
  updateEmployee(employee, id): Observable<any>{
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    let params = JSON.stringify(employee);
    return this._http.put(this.url+"/empleado/"+id, params, {headers:headers});
  }

}
 