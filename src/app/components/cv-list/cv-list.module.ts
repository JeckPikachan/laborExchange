/**
 * Created by chery on 06.05.2018.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CVListComponent} from "./cv-list.component";
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CVListComponent],
  exports: [CVListComponent]
})
export class CVListModule {}
