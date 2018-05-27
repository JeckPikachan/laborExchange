import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {EmployeeNavComponent} from "./employee-nav.component";

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [EmployeeNavComponent],
  exports: [EmployeeNavComponent]
})
export class EmployeeNavModule {}
