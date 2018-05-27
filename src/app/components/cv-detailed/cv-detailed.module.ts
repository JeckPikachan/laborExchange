/**
 * Created by chery on 21.05.2018.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CVDetailedComponent} from "./cv-detailed.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CVDetailedComponent],
  exports: [CVDetailedComponent]
})
export class CVDetailedModule {}
