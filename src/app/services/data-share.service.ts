import {Injectable, NgModule} from '@angular/core';
import {Vacancy} from "../model/vacancy";

@Injectable()
export class DataShareService {

  private _vacancy: Vacancy;

  get vacancy(): Vacancy {
    return this._vacancy;
  }

  set vacancy(value: Vacancy) {
    this._vacancy = value;
  }

  constructor() { }

}

@NgModule({
  providers: [DataShareService]
})
export class DataShareServiceModule {}
