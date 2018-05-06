import { Component, OnInit } from '@angular/core';
import {Vacancy} from "../../model/vacancy";
import {Employer} from "../../model/employer";
import {LaborExchangeService} from "../../services/labor-exchange.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {Message, messages} from "../../util/messages";

@Component({
  selector: 'app-employer-page',
  templateUrl: './employer-page.component.html',
  styleUrls: ['./employer-page.component.css']
})
export class EmployerPageComponent implements OnInit {

  private currentUserLogin: string;
  public vacancies: Array<Vacancy>;
  public employer: Employer;
  public messages: Array<Message> = [];

  constructor(private laborExchange: LaborExchangeService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.currentUserLogin = this.route.snapshot.paramMap.get('login');
    this.employer = this.laborExchange.getEmployerByLogin(this.currentUserLogin);
    this.vacancies = this.laborExchange.getVacancyListByEmployer(this.employer);

    this.messages = messages.filter((message) => message.to === this.currentUserLogin);
  }

  public goToCVList(): void {
    console.log("hello");
    this.router.navigate(['CVList']);
  }

  public signOut(): void {
    // console.log(JSON.stringify(this.authService.getSignedInUser().login));
    this.authService.signOutUser();
  }


}
