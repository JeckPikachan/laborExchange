import { Component, OnInit } from '@angular/core';
import {CV} from "../../model/CV";
import {LaborExchangeService} from "../../services/labor-exchange.service";
import {DataShareService} from "../../services/data-share.service";
import {Router} from "@angular/router";
import { Location } from '@angular/common';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Vacancy} from "../../model/vacancy";
import {AuthService} from "../../services/auth.service";
import {MessageService} from "../../services/message.service";
import {JobOffer} from "../../util/JobOffer";

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CVListComponent implements OnInit {

  public CVList: Array<CV> = [];

  public chosenVacancy: Vacancy;
  public textMessage: string;
  public userVacancies: Vacancy[];
  private chosenCV: CV;
  private chosenIndex: number;
  private responded: boolean[];

  constructor(private laborExchange: LaborExchangeService,
              private authService: AuthService,
              private modalService: NgbModal,
              private messageService: MessageService) { }

  ngOnInit() {
    this.laborExchange.getFullCVList().subscribe(cvs => {
      this.CVList = cvs;
      console.log(cvs);
    });
    this.userVacancies = this.laborExchange.getVacancyListByEmployerLogin(this.authService.getSignedInUserLogin());
    this.chosenVacancy = this.userVacancies[0];
    this.responded = this.userVacancies.map(() => false);
  }

  public openCvModal(cv: CV, index: number, content: any): void {
    this.modalService.open(content, { centered: true });
    this.chosenCV = cv;
    this.chosenIndex = index;
  }

  public clearData(): void {
    this.chosenVacancy = this.userVacancies[0];
    this.textMessage = '';
  }

  public respondChosenCV(): void {
    this.messageService.sendMessage(
      this.textMessage,
      this.authService.getSignedInUserLogin(),
      this.chosenCV.ownerLogin,
      new Date(),
      new JobOffer(this.chosenVacancy, this.chosenCV));

    this.responded[this.chosenIndex] = true;
    this.clearData();
  }

}
