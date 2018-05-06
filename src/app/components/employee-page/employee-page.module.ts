import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EmployeePageComponent} from "./employee-page.component";
import {AuthService} from "../../services/auth.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmployeePageComponent],
  exports: [EmployeePageComponent],
  providers: [AuthService]
})
export class EmployeePageModule {}
