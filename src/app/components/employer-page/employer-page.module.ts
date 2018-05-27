/**
 * Created by chery on 06.05.2018.
 */
import {NgModule} from "@angular/core";
import {EmployerPageComponent} from "./employer-page.component";
import {CommonModule} from "@angular/common";
import {LaborExchangeModule} from "../../services/labor-exchange.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {EmployerNavComponent} from "../employer-nav/employer-nav.component";
import {EmployerNavModule} from "../employer-nav/employer-nav.module";
@NgModule({
  imports: [
    CommonModule,
    LaborExchangeModule,
    NgbModule,
    EmployerNavModule
  ],
  declarations: [EmployerPageComponent],
  exports: [EmployerPageComponent]
})
export class EmployerPageModule {
}
