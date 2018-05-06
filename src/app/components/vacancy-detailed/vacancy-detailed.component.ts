import { Component, OnInit } from '@angular/core';
import {DataShareService} from "../../services/data-share.service";
import {Vacancy} from "../../model/vacancy";
import {Location} from "@angular/common";

@Component({
  selector: 'app-vacancy-detailed',
  templateUrl: './vacancy-detailed.component.html',
  styleUrls: ['./vacancy-detailed.component.css']
})
export class VacancyDetailedComponent implements OnInit {

  public vacancy: Vacancy;

  constructor(private dataShare: DataShareService,
              private location: Location) { }

  ngOnInit() {
    this.vacancy = this.dataShare.vacancy;
  }

  public goBack(): void {
    this.location.back();
  }

}
