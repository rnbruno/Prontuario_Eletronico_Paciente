import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { CreateAcountComponent } from './create-acount/create-acount.component';

const routes: Routes = [
  {path: 'login', component:  LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'create-acount', component: CreateAcountComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
