import { Component, OnInit } from '@angular/core';
import {Vacancy} from "../../model/vacancy";
import {CV} from "../../model/CV";
import {DataShareService} from "../../services/data-share.service";
import {AuthService} from "../../services/auth.service";
import {MessageService} from "../../services/message.service";
import {LaborExchangeService} from "../../services/labor-exchange.service";
import {Employer} from "../../model/employer";
import {JobOffer} from "../../util/JobOffer";
import {Location} from "@angular/common";

@Component({
  selector: 'app-cv-detailed',
  templateUrl: './cv-detailed.component.html',
  styleUrls: ['./cv-detailed.component.css']
})
export class CVDetailedComponent implements OnInit {

  public cv: CV;
  public hasResponded = false;
  public chosenVacancy: Vacancy;
  public userVacancies: Vacancy[];

  constructor(private dataShare: DataShareService,
              private location: Location,
              private authService: AuthService,
              private messageService: MessageService,
              private laborExchange: LaborExchangeService) {
  }

  ngOnInit() {
    this.cv = this.dataShare.CV;
    this.userVacancies = this.laborExchange.getVacancyListByEmployerLogin(this.authService.getSignedInUserLogin());
    this.chosenVacancy = this.userVacancies[0];
    console.log("Vacancies", this.userVacancies);
  }

  public goBack(): void {
    this.location.back();
  }

  public respondCV(): void {
    console.log("Vacancy", this.chosenVacancy);
    this.messageService.sendMessage(
      "Hey, I like your CV. Maybe you can come to interview?",
      this.authService.getSignedInUser().login,
      this.cv.ownerLogin,
      new Date(),
      new JobOffer(this.chosenVacancy, this.cv));

    this.hasResponded = true;
  }

}
