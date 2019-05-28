import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../services/personal.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  providers: [PersonalService]
})
export class PersonalComponent implements OnInit {
	public personal_activo: Employee[];
  public peticion_succeful: boolean;

  constructor( private _PersonalService: PersonalService ){ 
    this.peticion_succeful = false;
  }


  ngOnInit(){
    this.home();
    this.getPeronal();
  }
 

  //Meto que recibe la peticion de prueba
  home(){
      this._PersonalService.homeService().subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(<any>error);
        }
      );
  }


  //Metodo que recibe el listado completo del personal de la base de datos para listarlo en la web
  getPeronal(){
    this._PersonalService.getPersonal().subscribe(
      response => {
        this.personal_activo = response.Personal;
        this.peticion_succeful = true;
        console.log(this.personal_activo);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
