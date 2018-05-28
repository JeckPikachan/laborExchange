import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EmployeePageComponent} from "./employee-page.component";
import {AuthService} from "../../services/auth.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {EmployeeNavModule} from "../employee-nav/employee-nav.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ValidatorMessageModule} from "../validator-message/validator-message.module";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    EmployeeNavModule,
    ReactiveFormsModule,
    ValidatorMessageModule
  ],
  declarations: [EmployeePageComponent],
  exports: [EmployeePageComponent]
})
export class EmployeePageModule {}
