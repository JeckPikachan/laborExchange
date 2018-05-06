import {Employee} from '../model/employee';
import {Employer} from '../model/employer';
import {CV} from '../model/CV';
import {Vacancy} from '../model/vacancy';

export enum RoleEnum {
  employee,
  employer
}

export class Constants {
  public static employeeList: Array<Employee> = [
    new Employee({
      _login: "yee1",
      _password: "1",
      _personalInfo: {
        _name: "Jack"
      }
    }),
    new Employee({
      _login: "yee2",
      _password: "1",
      _personalInfo: {
        _name: "Robert"
      }
    }),
    new Employee({
      _login: "yee3",
      _password: "1",
      _personalInfo: {
        _name: "William"
      }
    })
  ];

  public static employerList: Array<Employer> = [
    new Employer({
      _login: "yer1",
      _password: "1"
    }),
    new Employer({
      _login: "yer2",
      _password: "1"
    })
  ];

  public static cvList: Array<CV> = [
    new CV("yee1", {
      _careerObjective: {
        _position: "Builder",
        _salary: 500,
        _hoursPerWeek: 40
      }
    }),
    new CV("yee2", {
      _careerObjective: {
        _position: "Teacher",
        _salary: 300,
        _hoursPerWeek: 40
      }
    }),
    new CV("yee3", {
      _careerObjective: {
        _position: "Web-master",
        _salary: 800,
        _hoursPerWeek: 20
      }
    }),
    new CV("yee3", {
      _careerObjective: {
        _position: "Administrator",
        _salary: 600,
        _hoursPerWeek: 20
      }
    })
  ];

  public static vacancyList: Array<Vacancy> = [
    new Vacancy("yer1", {
      _position: "Builder",
      _city: "Minsk",
      _hoursPerWeek: 40
    }),
    new Vacancy("yer1", {
      _position: "Teacher",
      _city: "Moscow",
      _hoursPerWeek: 40
    }),
    new Vacancy("yer2", {
      _position: "Web-master",
      _city: "Minsk",
      _hoursPerWeek: 20
    }),
    new Vacancy("yer2", {
      _position: "Administrator",
      _city: "Minsk",
      _hoursPerWeek: 20
    }),
  ];
}
