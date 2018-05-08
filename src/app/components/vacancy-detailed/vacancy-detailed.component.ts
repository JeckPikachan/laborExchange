import {Component, OnInit} from "@angular/core";
import {DataShareService} from "../../services/data-share.service";
import {Vacancy} from "../../model/vacancy";
import {Location} from "@angular/common";
import {AuthService} from "../../services/auth.service";
import {MessageService} from "../../services/message.service";
import {JobOffer} from "../../util/JobOffer";
import {CV} from "../../model/CV";
import {LaborExchangeService} from "../../services/labor-exchange.service";
import {Employee} from "../../model/employee";

@Component({
  selector: 'app-vacancy-detailed',
  templateUrl: './vacancy-detailed.component.html',
  styleUrls: ['./vacancy-detailed.component.css']
})
export class VacancyDetailedComponent implements OnInit {

  public vacancy: Vacancy;
  public hasResponded = false;
  public chosenCV: CV;
  public userCVs: CV[];

  constructor(private dataShare: DataShareService,
              private location: Location,
              private authService: AuthService,
              private messageService: MessageService,
              private laborExchange: LaborExchangeService) {
  }

  ngOnInit() {
    this.vacancy = this.dataShare.vacancy;
    this.userCVs = this.laborExchange.getCVListByEmployee(<Employee>this.authService.getSignedInUser());
    this.chosenCV = this.userCVs[0];
    console.log("CVs", this.userCVs);
  }

  public goBack(): void {
    this.location.back();
  }

  public respondVacancy(): void {
    console.log("CV", this.chosenCV);
    this.messageService.sendMessage(
      "I think this one's interesting!",
      this.authService.getSignedInUser().login,
      this.vacancy.ownerLogin,
      new Date(),
      new JobOffer(this.vacancy, this.chosenCV));

    this.hasResponded = true;
  }

}
