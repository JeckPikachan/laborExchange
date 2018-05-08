import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {VacancyDetailedComponent} from "./vacancy-detailed.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [VacancyDetailedComponent],
  exports: [VacancyDetailedComponent]
})
export class VacancyDetailedModule {}
