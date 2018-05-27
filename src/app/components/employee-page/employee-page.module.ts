import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EmployeePageComponent} from "./employee-page.component";
import {AuthService} from "../../services/auth.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {EmployeeNavModule} from "../employee-nav/employee-nav.module";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    EmployeeNavModule
  ],
  declarations: [EmployeePageComponent],
  exports: [EmployeePageComponent]
})
export class EmployeePageModule {}
