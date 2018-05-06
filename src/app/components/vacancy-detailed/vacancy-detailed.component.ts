import { Component, OnInit } from '@angular/core';
import {DataShareService} from "../../services/data-share.service";
import {Vacancy} from "../../model/vacancy";
import {Location} from "@angular/common";
import {Message, messages} from "../../util/messages";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-vacancy-detailed',
  templateUrl: './vacancy-detailed.component.html',
  styleUrls: ['./vacancy-detailed.component.css']
})
export class VacancyDetailedComponent implements OnInit {

  public vacancy: Vacancy;
  public hasResponded = false;

  constructor(private dataShare: DataShareService,
              private location: Location,
              private authService: AuthService) { }

  ngOnInit() {
    this.vacancy = this.dataShare.vacancy;
  }

  public goBack(): void {
    this.location.back();
  }

  public respondVacancy(): void {
    const message = new Message("I think this one's interesting!",
      this.authService.getSignedInUser().login,
      this.vacancy.ownerLogin,
      this.vacancy);

    messages.push(message);

    this.hasResponded = true;
  }

}
