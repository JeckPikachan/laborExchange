import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VacancyListComponent} from './components/vacancy-list/vacancy-list.component';
import {VacancyListModule} from "./components/vacancy-list/vacancy-list.module";
import {EmployeePageModule} from "./components/employee-page/employee-page.module";
import {EmployeePageComponent} from "./components/employee-page/employee-page.component";
import {LoginModule} from "./components/login/login.module";
import {LoginComponent} from "./components/login/login.component";
import {VacancyDetailedModule} from "./components/vacancy-detailed/vacancy-detailed.module";
import {VacancyDetailedComponent} from "./components/vacancy-detailed/vacancy-detailed.component";
import {EmployerPageComponent} from "./components/employer-page/employer-page.component";
import {EmployerPageModule} from "./components/employer-page/employer-page.module";
import {CVListComponent} from "./components/cv-list/cv-list.component";
import {CVListModule} from "./components/cv-list/cv-list.module";

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'vacancyList', component: VacancyListComponent},
  {path: 'employeePage/:login', component: EmployeePageComponent},
  {path: 'employerPage/:login', component: EmployerPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'detailedVacancy', component: VacancyDetailedComponent},
  {path: 'CVList', component: CVListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    VacancyListModule,
    EmployeePageModule,
    EmployerPageModule,
    LoginModule,
    VacancyDetailedModule,
    CVListModule
  ],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule {
}
