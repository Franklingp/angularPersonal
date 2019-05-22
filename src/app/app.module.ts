import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { PersonalComponent } from './component/personal/personal.component';
import { EditComponent } from './component/edit/edit.component';

import { PersonalService } from './services/personal.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    PersonalComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
