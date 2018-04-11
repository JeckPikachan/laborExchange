import { User } from "./user";
import { Vacancy } from "./vacancy";

export class Employer extends User {
    private _info: string;
    private _name: string;
    private _vacancies: Vacancy[];

    constructor(obj?: any) {
        super(obj);
        this._info = obj && obj._info;
        this._name = obj && obj._name;
        this._vacancies = obj && obj._vacancies && obj._vacancies.map(vac => new Vacancy(vac));
    }

    public get info(): string {
        return this._info;
    }

    public set info(info: string) {
        this._info = info;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get vacancies(): Vacancy[] {
        return this._vacancies;
    }

    public addVacancy(vacancy: Vacancy): void {
        this._vacancies.push(vacancy);
    }

    public deleteVacancy(vacancy: Vacancy): void {
        this._vacancies = this._vacancies.filter(vac => vac !== vacancy);
    }
}
