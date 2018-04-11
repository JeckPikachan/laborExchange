export class Expirience {
    private _position: string;
    private _companyName: string;
    private _region: string;
    private _dateFrom: Date;
    private _dateTo: Date;
    private _isStillWorking: boolean;

    constructor(obj?: any) {
        this._position = obj && obj._position;
        this._companyName = obj && obj._companyName;
        this._region = obj && obj._region;
        this._dateFrom = obj && obj._dateFrom && new Date(obj._dateFrom);
        this._dateTo = obj && obj._dateTo && new Date(obj._dateTo);
        this._isStillWorking = obj && obj._isStillWorking;
    }

    public get position(): string {
        return this._position;
    }

    public set position(position: string) {
        this._position = position;
    }

    public get companyName(): string {
        return this._companyName;
    }

    public set companyName(companyName: string) {
        this._companyName = companyName;
    }

    public get region(): string {
        return this._region;
    }

    public set region(region: string) {
        this._region = region;
    }

    public get dateFrom(): Date {
        return this._dateFrom;
    }

    public set dateFrom(dateFrom: Date) {
        this._dateFrom = new Date(dateFrom);
    }

    public get dateTo(): Date {
        return this._dateTo;
    }

    public set dateTo(dateTo: Date) {
        this._dateTo = new Date(dateTo);
    }

    public get isStillWorking(): boolean {
        return this._isStillWorking;
    }

    public set isStillWorking(isw: boolean) {
        this._isStillWorking = isw;
    }
}
