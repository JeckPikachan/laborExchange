export class Education {
    private _institution: string;
    private _facultee: string;
    private _specialization: string;
    private _graduationYear: number;

    constructor(obj?: any) {
        this._institution = obj && obj._institution;
        this._facultee = obj && obj._facultee;
        this._specialization = obj && obj._specialization;
        this._graduationYear = obj && obj._graduationYear;
    }

    public get institution(): string {
        return this._institution;
    }

    public set institution(institution: string) {
        this._institution = institution;
    }

    public get facultee(): string {
        return this._facultee;
    }

    public set facultee(facultee: string) {
        this._facultee = facultee;
    }

    public get specialization(): string {
        return this._specialization;
    }

    public set specialization(specialization: string) {
        this._specialization = specialization;
    }

    public get graduationYear(): number {
        return this._graduationYear;
    }

    public set graduationYear(graduationYear: number) {
        this._graduationYear = graduationYear;
    }
}
