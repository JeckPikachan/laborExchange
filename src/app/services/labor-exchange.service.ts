import {Injectable, NgModule} from '@angular/core';
import { Employee } from '../model/employee';
import { CV } from '../model/CV';
import { Vacancy } from '../model/vacancy';
import { Employer } from '../model/employer';
import { Constants } from '../util/constants';

@Injectable()
export class LaborExchangeService {

  constructor() { }

  public getEmployeeByCV(cv: CV): Employee {
    return Constants.employeeList.find(employee => employee.login === cv.ownerLogin);
  }

  public getEmployeeByLogin(login: string): Employee {
    return Constants.employeeList.find(employee => login === employee.login);
  }

  public getCVListByEmployee(employee: Employee): CV[] {
    return Constants.cvList.filter(cv => cv.ownerLogin === employee.login);
  }

  public getEmployerByVacancy(vacancy: Vacancy): Employer {
    return Constants.employerList.find(employer => employer.login === vacancy.ownerLogin);
  }

  public getEmployerByLogin(login: string): Employer {
    return Constants.employerList.find(employer => login === employer.login);
  }

  public getVacancyListByEmployer(employer: Employer): Vacancy[] {
    return Constants.vacancyList.filter(vacancy => vacancy.ownerLogin === employer.login);
  }

  public getFullVacancyList(): Vacancy[] {
    return Constants.vacancyList;
  }

  public getFullCVList(): CV[] {
    return Constants.cvList;
  }

}

@NgModule({
  providers: [LaborExchangeService]
})
export class LaborExchangeModule {}
