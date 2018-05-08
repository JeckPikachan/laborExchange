import {Vacancy} from "../model/vacancy";
import {CV} from "../model/CV";
/**
 * Created by chery on 08.05.2018.
 */

export class JobOffer {
  private _vacancy: Vacancy;
  private _CV: CV;

  constructor(vacancy: Vacancy, cv: CV) {
    this._vacancy = vacancy;
    this._CV = cv;
  }

  get vacancy(): Vacancy {
    return this._vacancy;
  }

  set vacancy(value: Vacancy) {
    this._vacancy = value;
  }

  get CV(): CV {
    return this._CV;
  }

  set CV(value: CV) {
    this._CV = value;
  }
}
