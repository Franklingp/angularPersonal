import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { PersonalService } from '../../services/personal.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
  providers: [PersonalService]
})
export class CreateEmployeeComponent implements OnInit {
	public empleado: Employee;
	public success: number;

  constructor( private _personalService: PersonalService) {
  	this.empleado = new Employee("","", "", null, "", null);
  	this.success = 0;
  }

  ngOnInit() {
  }

  //Metodo para suir un nuevo empleado a la base de datos.
  onSubmit(form){
  	this._personalService.saveEmployee(this.empleado).subscribe(
  		result =>{
  			//console.log(result);
  			this.success = 1;
  			},
  		error => {
  			this.success = -1;
  			return console.log(<any>error);
  		}
  	);
  }
}
