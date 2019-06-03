import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { EditComponent } from './component/edit/edit.component';
import { PersonalComponent } from './component/personal/personal.component';

const routes: Routes = [
    { path: "", redirectTo: "personal", pathMatch: 'full' },
	{path:"personal", component: PersonalComponent},
	{path:"crear", component: CreateEmployeeComponent},
	{path:"editar/:id", component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
