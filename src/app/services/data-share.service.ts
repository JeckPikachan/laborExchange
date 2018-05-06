import {Injectable, NgModule} from '@angular/core';
import {Vacancy} from "../model/vacancy";
import {CV} from "../model/CV";

@Injectable()
export class DataShareService {

  private _vacancy: Vacancy;
  private _CV: CV;

  get CV(): CV {
    return this._CV;
  }

  set CV(value: CV) {
    this._CV = value;
  }

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
