import { Component, OnInit } from '@angular/core';
import {CV} from "../../model/CV";
import {LaborExchangeService} from "../../services/labor-exchange.service";
import {DataShareService} from "../../services/data-share.service";
import {Router} from "@angular/router";
import { Location } from '@angular/common';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

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
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.CVList = this.laborExchange.getFullCVList();
  }

  public openCvModal(cv: CV, content: any): void {
    this.modalService.open(content, { centered: true });
  }

}
