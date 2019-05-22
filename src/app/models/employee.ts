'use strict'

export class Employee{

	//modelo de empleado con el que vamos a trabajar en nuestra base de datos

	constructor(

			public name: string,
			public surname: string,
			public age: number,
			public position: string,
			public identification: number,
		){}
}