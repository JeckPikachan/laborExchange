/**
 * Created by chery on 06.05.2018.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CVListComponent} from "./cv-list.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {EmployerNavModule} from "../employer-nav/employer-nav.module";
import {FormsModule} from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    EmployerNavModule,
    FormsModule
  ],
  declarations: [CVListComponent],
  exports: [CVListComponent]
})
export class CVListModule {}
