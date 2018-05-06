import { Component, OnInit } from '@angular/core';
import {CV} from "../../model/CV";
import {LaborExchangeService} from "../../services/labor-exchange.service";
import {DataShareService} from "../../services/data-share.service";
import {Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CVListComponent implements OnInit {

  public CVList: Array<CV>;

  constructor(private laborExchange: LaborExchangeService,
              private location: Location,
              private dataShare: DataShareService,
              private router: Router) { }

  ngOnInit() {
    this.CVList = this.laborExchange.getFullCVList();
  }

  public goBack(): void {
    this.location.back();
  }

  public showDetailed(cv: CV): void {
    console.log('cv: ', cv);
    this.dataShare.CV = cv;
    this.router.navigate(['detailedCV']);
  }

}
