import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EmployeePageComponent} from "./employee-page.component";
import {AuthService} from "../../services/auth.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [EmployeePageComponent],
  exports: [EmployeePageComponent]
})
export class EmployeePageModule {}
