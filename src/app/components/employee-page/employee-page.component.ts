import {Component, OnInit} from '@angular/core';
import {CV} from "../../model/CV";
import {LaborExchangeService} from "../../services/labor-exchange.service";
import {Employee} from "../../model/employee";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {

  private currentUserLogin: string;
  public vacancies: Array<CV>;
  public employee: Employee;

  constructor(private laborExchange: LaborExchangeService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.currentUserLogin = this.route.snapshot.paramMap.get('login');
    this.employee = this.laborExchange.getEmployeeByLogin(this.currentUserLogin);
    this.vacancies = this.laborExchange.getCVListByEmployee(this.employee);
  }

  public goToVacancyList(): void {
    console.log("hello");
    this.router.navigate(['vacancyList']);
  }

  public signOut(): void {
    // console.log(JSON.stringify(this.authService.getSignedInUser().login));
    this.authService.signOutUser();
  }

}
