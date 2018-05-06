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

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'vacancyList', component: VacancyListComponent},
  {path: 'employeePage/:login', component: EmployeePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'detailedVacancy', component: VacancyDetailedComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    VacancyListModule,
    EmployeePageModule,
    LoginModule,
    VacancyDetailedModule
  ],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule {
}
