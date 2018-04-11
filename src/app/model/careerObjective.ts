export class CareerObjective {
    private _position: string;
    private _salary: number;
    private _hoursPerWeek: number;

    constructor(obj?: any) {
        this._position = obj && obj._position;
        this._salary = obj && obj._salary;
        this._hoursPerWeek = obj && obj._hoursPerWeek;
    }

    public get position(): string {
        return this._position;
    }

    public set position(position: string) {
        this._position = position;
    }

    public get salary(): number {
        return this._salary;
    }

    public set salary(salary: number) {
        this._salary = salary;
    }

    public get hoursPerWeek(): number {
        return this._hoursPerWeek;
    }

    public set hoursPerWeek(hoursPerWeek: number) {
        this._hoursPerWeek = hoursPerWeek;
    }
}
