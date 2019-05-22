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
	public personal: Employee[];

  constructor(
  		private _PersonalService: PersonalService
  	){ }

  ngOnInit() {

  	this._PersonalService.getPersonal().subscribe(
  		response =>{
  			console.log(response);
  		},
  		error =>{
  			console.log(<any>error);
  		}

  	);

  }

}
