import { Component, OnInit } from '@angular/core';
import {Vacancy} from "../../model/vacancy";
import {Employer} from "../../model/employer";
import {LaborExchangeService} from "../../services/labor-exchange.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {Message, messages} from "../../util/messages";
import {MessageService} from "../../services/message.service";

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
  public ready = false;

  constructor(private laborExchange: LaborExchangeService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.currentUserLogin = this.route.snapshot.paramMap.get('login');
    this.laborExchange.getEmployerByLogin(this.currentUserLogin).subscribe(data => {
      this.employer = data;
      this.vacancies = this.laborExchange.getVacancyListByEmployerLogin(this.employer.login);
      this.ready = true;
    });

    this.messages = this.messageService.getMessagesByLogin(this.currentUserLogin);
  }

  public goToCVList(): void {
    console.log("hello");
    this.router.navigate(['CVList']);
  }

}
