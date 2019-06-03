import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { PersonalService } from "../../services/personal.service";
import { Employee } from "../../models/employee";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [PersonalService]
})

export class EditComponent implements OnInit {
	public empleado: Employee;
	public confirma_peticion: boolean;
	public success: number;
	public id: string;

	constructor(private _personalService: PersonalService,
				private _route: ActivatedRoute,
				private _router: Router){
		this.confirma_peticion = false;
		this.success = 0;
	}

	ngOnInit() {
		this._route.params.subscribe(
			params => {
				return this.id = params.id;
			}
		);

		this.getEmployee(this.id);
	}

	//Metodo para obtener el registro de la base de datos para editarlo
	getEmployee(id){
		this._personalService.getEmployee(id).subscribe(
			response => {
				this.empleado = response.employee;
				this.confirma_peticion = true;
			},
			error => {
				return console.log(<any>error);
			}
		);
	}

	//Metodo para actualizar el registro de la base de datos
	onSubmit(){
		this._personalService.updateEmployee(this.empleado, this.id).subscribe(
			response => {
				//console.log(response);
				this.success = 1;
			},
			error => {
				return console.log(<any>error);
			}
		);
		
	}

}

