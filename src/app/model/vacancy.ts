import { Employer } from "./employer";

export class Vacancy {
    private _position: string;
    private _city: string;
    private _hoursPerWeek: number;
    private _desiredExpirience: number;
    private _salary: number;
    private _description: string;
    private _employer: Employer;

    constructor(employer: Employer, obj?: any) {
        this._employer = employer;
        this._position = obj && obj._position;
        this._city = obj && obj._city;
        this._hoursPerWeek = obj && obj._hoursPerWeek;
        this._desiredExpirience = obj && obj._desiredExpirience;
        this._salary = obj && obj._salary;
        this._description = obj && obj._description;
    }

    public get employer(): Employer {
        return this._employer;
    }

    public get position(): string {
        return this._position;
    }

    public set position(position: string) {
        this._position = position;
    }

    public get city(): string {
        return this._city;
    }

    public set city(city: string) {
        this._city = city;
    }

    public get hoursPerWeek(): number {
        return this._hoursPerWeek;
    }

    public set hoursPerWeek(hpw: number) {
        this._hoursPerWeek = hpw;
    }

    public get desiredExpirience(): number {
        return this._desiredExpirience;
    }

    public set desiredExpirience(desiredExpirience: number) {
        this._desiredExpirience = desiredExpirience;
    }

    public get salary(): number {
        return this._salary;
    }

    public set salary(salary: number) {
        this._salary = salary;
    }

    public get description(): string {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }
}
