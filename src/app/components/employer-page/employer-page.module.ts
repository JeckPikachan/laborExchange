/**
 * Created by chery on 06.05.2018.
 */
import {NgModule} from "@angular/core";
import {EmployerPageComponent} from "./employer-page.component";
import {CommonModule} from "@angular/common";
import {LaborExchangeModule} from "../../services/labor-exchange.service";
@NgModule({
  imports: [
    CommonModule,
    LaborExchangeModule
  ],
  declarations: [EmployerPageComponent],
  exports: [EmployerPageComponent]
})
export class EmployerPageModule {
}
