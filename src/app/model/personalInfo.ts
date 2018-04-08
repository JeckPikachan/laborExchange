export class PersonalInfo {
    private _name: string;
    private _surname: string;
    private _dateOfBirth: Date;
    private _sex: SexEnum;
    private _city: string;

    constructor(obj?: any) {
        this._name = obj && obj._name;
        this._surname = obj && obj._surname;
        this._dateOfBirth = obj && obj._dateOfBirth && new Date(obj._dateOfBirth);
        this._sex = obj && obj._sex;
        this._city = obj && obj._city;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get surname(): string {
        return this._surname;
    }

    public set surname(surname: string) {
        this._surname = surname;
    }

    public get dateOfBirth(): Date {
        return this._dateOfBirth;
    }

    public set dateOfBirth(dateOfBirth: Date) {
        this._dateOfBirth = new Date(dateOfBirth);
    }

    public get sex(): SexEnum {
        return this._sex;
    }

    public set sex(sex: SexEnum) {
        this._sex = sex;
    }

    public get city(): string {
        return this._city;
    }

    public set city(city: string) {
        this._city = city;
    }
}

export enum SexEnum {
    MALE,
    FEMALE,
    OTHER,
    NONE
}
