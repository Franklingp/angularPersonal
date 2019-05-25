import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
	public url: string;

  constructor( private _http: HttpClient ){
    this.url = "http://localhost:3700/api";
  }


  homeService(): Observable<any>{
    let Header = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get("http://localhost:3700/api/home", {headers: Header});    // , {headers: Header}
  }


  getPersonal(): Observable<any>{
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(this.url+"/empleado", {headers: headers});
  }

  getTest(): Observable<any>{
    return this._http.get("https://reqres.in/api/users/2");
  }

}
 