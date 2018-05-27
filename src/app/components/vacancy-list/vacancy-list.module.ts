import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {VacancyListComponent} from "./vacancy-list.component";
import {LaborExchangeModule} from "../../services/labor-exchange.service";
import {DataShareServiceModule} from "../../services/data-share.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {EmployeeNavModule} from "../employee-nav/employee-nav.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    LaborExchangeModule,
    DataShareServiceModule,
    NgbModule,
    EmployeeNavModule,
    FormsModule
  ],
  declarations: [VacancyListComponent],
  exports: [VacancyListComponent]
})
export class VacancyListModule {}
