import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {VacancyDetailedComponent} from "./vacancy-detailed.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VacancyDetailedComponent],
  exports: [VacancyDetailedComponent]
})
export class VacancyDetailedModule {}
