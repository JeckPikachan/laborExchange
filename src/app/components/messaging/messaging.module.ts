/**
 * Created by chery on 28.05.2018.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MessagingComponent} from "./messaging.component";
import {LaborExchangeModule} from "../../services/labor-exchange.service";
import {EmployeeNavModule} from "../employee-nav/employee-nav.module";
import {EmployerNavModule} from "../employer-nav/employer-nav.module";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    LaborExchangeModule,
    EmployeeNavModule,
    EmployerNavModule
  ],
  declarations: [MessagingComponent],
  exports: [MessagingComponent]
})
export class MessagingModule {}
