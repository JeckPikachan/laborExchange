import {NgModule} from "@angular/core";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {EmployerNavComponent} from "./employer-nav.component";

@NgModule({
  imports: [
    NgbModule,
    CommonModule
  ],
  declarations: [EmployerNavComponent],
  exports: [EmployerNavComponent]
})
export class EmployerNavModule {}
