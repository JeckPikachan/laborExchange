import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {VacancyListComponent} from "./vacancy-list.component";
import {LaborExchangeModule} from "../../services/labor-exchange.service";
import {VacancyDetailedModule} from "../vacancy-detailed/vacancy-detailed.module";
import {DataShareServiceModule} from "../../services/data-share.service";

@NgModule({
  imports: [
    CommonModule,
    LaborExchangeModule,
    DataShareServiceModule
  ],
  declarations: [VacancyListComponent],
  exports: [VacancyListComponent]
})
export class VacancyListModule {}
