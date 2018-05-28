/**
 * Created by chery on 28.05.2018.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ValidatorMessageComponent} from "./validator-message.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ValidatorMessageComponent],
  exports: [ValidatorMessageComponent]
})
export class ValidatorMessageModule {}
