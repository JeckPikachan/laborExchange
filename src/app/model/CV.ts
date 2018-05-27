import {CareerObjective} from "./careerObjective";
import {Expirience} from "./expirience";
import {Employee} from "./employee";

export class CV {
  private _id: string;
  private _careerObjective: CareerObjective;
  private _experience: Expirience[];
  private _detailedInfo: string;
  private _ownerLogin: string;

  constructor(ownerLogin: string, obj?: any) {
    this._id = obj && obj._id || ownerLogin + Date.now();
    this._ownerLogin = ownerLogin;
    this._careerObjective = obj && obj._careerObjective && new CareerObjective(obj._careerObjective);
    this._experience = obj && obj._experience && obj._experience.map(exp => new Expirience(exp));
    this._detailedInfo = obj && obj._detailedInfo;
  }

  public get id(): string {
    return this._id;
  }

  public get ownerLogin(): string {
    return this._ownerLogin;
  }

  public get careerObjective(): CareerObjective {
    return this._careerObjective;
  }

  public get experience(): Expirience[] {
    return this._experience;
  }

  public addExpirience(exp: Expirience): void {
    this._experience.push(exp);
  }

  public deleteExpirience(exp: Expirience): void {
    this._experience = this._experience.filter(expirience => exp !== expirience);
  }

  public get detailedInfo(): string {
    return this._detailedInfo;
  }

  public set detailedInfo(detailedInfo: string) {
    this._detailedInfo = detailedInfo;
  }
}
