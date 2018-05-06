export class Vacancy {
    private _position: string;
    private _city: string;
    private _hoursPerWeek: number;
    private _desiredExperience: number;
    private _salary: number;
    private _description: string;
    private _ownerLogin: string;

    constructor(ownerLogin: string, obj?: any) {
        this._ownerLogin = ownerLogin;
        this._position = obj && obj._position;
        this._city = obj && obj._city;
        this._hoursPerWeek = obj && obj._hoursPerWeek;
        this._desiredExperience = obj && obj._desiredExperience;
        this._salary = obj && obj._salary;
        this._description = obj && obj._description;
    }

    public get ownerLogin(): string {
        return this._ownerLogin;
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

    public get desiredExperience(): number {
        return this._desiredExperience;
    }

    public set desiredExperience(desiredExperience: number) {
        this._desiredExperience = desiredExperience;
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
