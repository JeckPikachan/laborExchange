import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LaborExchangeModule} from "../../services/labor-exchange.service";
import {LoginComponent} from "./login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    LaborExchangeModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthService]
})
export class LoginModule {}
