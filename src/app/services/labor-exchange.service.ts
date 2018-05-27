import {Injectable, NgModule} from '@angular/core';
import {Employee} from '../model/employee';
import {CV} from '../model/CV';
import {Vacancy} from '../model/vacancy';
import {Employer} from '../model/employer';
import {Constants} from '../util/constants';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";

const serverApiUrl = 'http://localhost:3000/api';

@Injectable()
export class LaborExchangeService {

  constructor(private http: HttpClient) {
  }

  public getEmployeeByCV(cv: CV): Employee {
    return Constants.employeeList.find(employee => employee.login === cv.ownerLogin);
  }

  public getEmployeeByLogin(login: string): Observable<Employee> {
    return this.http.get(serverApiUrl + '/getEmployeeByLogin/' + login).pipe(
      map(data => new Employee(data))
    );
  }

  public getCVListByEmployee(employee: Employee): CV[] {
    return Constants.cvList.filter(cv => cv.ownerLogin === employee.login);
  }

  public getEmployerByVacancy(vacancy: Vacancy): Employer {
    return Constants.employerList.find(employer => employer.login === vacancy.ownerLogin);
  }

  public getEmployerByLogin(login: string): Observable<Employer> {
    return this.http.get(serverApiUrl + '/getEmployerByLogin/' + login).pipe(
      map(data => new Employer(data))
    );
  }

  public getVacancyListByEmployerLogin(login: string): Vacancy[] {
    return Constants.vacancyList.filter(vacancy => vacancy.ownerLogin === login);
  }

  public getFullVacancyList(): Vacancy[] {
    return Constants.vacancyList;
  }

  public getFullCVList(): CV[] {
    return Constants.cvList;
  }

}

@NgModule({
  imports: [HttpClientModule],
  providers: [LaborExchangeService]
})
export class LaborExchangeModule {
}
