import { CareerObjective } from "./careerObjective";
import { Expirience } from "./expirience";
import { Employee } from "./employee";

export class CV {
    private _careerObjective: CareerObjective;
    private _expirience: Expirience[];
    private _detailedInfo: string;
    private _ownerLogin: string;

    constructor(ownerLogin: string, obj?: any) {
        this._ownerLogin = ownerLogin;
        this._careerObjective = obj && obj._careerObjective && new CareerObjective(obj._careerObjective);
        this._expirience = obj && obj._expirience && obj._expirience.map(exp => new Expirience(exp));
        this._detailedInfo = obj && obj._detailedInfo;
    }

    public get ownerLogin(): string {
        return this._ownerLogin;
    }

    public get careerObjective(): CareerObjective {
        return this._careerObjective;
    }

    public get expirience(): Expirience[] {
        return this._expirience;
    }

    public addExpirience(exp: Expirience): void {
        this._expirience.push(exp);
    }

    public deleteExpirience(exp: Expirience): void {
        this._expirience = this._expirience.filter(expirience => exp !== expirience);
    }

    public get detailedInfo(): string {
        return this._detailedInfo;
    }

    public set detailedInfo(detailedInfo: string) {
        this._detailedInfo = detailedInfo;
    }
}