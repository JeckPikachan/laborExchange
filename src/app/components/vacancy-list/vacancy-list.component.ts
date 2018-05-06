import { Component, OnInit } from '@angular/core';
import { LaborExchangeService } from '../../services/labor-exchange.service';
import { Vacancy } from '../../model/vacancy';
import { Location } from '@angular/common';
import {DataShareService} from "../../services/data-share.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {

  public vacancyList: Array<Vacancy>;

  constructor(private laborExchange: LaborExchangeService,
              private location: Location,
              private dataShare: DataShareService,
              private router: Router) { }

  ngOnInit() {
    this.vacancyList = this.laborExchange.getFullVacancyList();
  }

  public goBack(): void {
    this.location.back();
  }

  public showDetailed(vacancy: Vacancy): void {
    console.log('vac: ', vacancy);
    this.dataShare.vacancy = vacancy;
    this.router.navigate(['detailedVacancy']);
  }

}
