import { Human } from './human';
import { CV } from './CV';

export class Employee extends Human {
    private _CVs: CV[];

    constructor(obj?: any) {
        super(obj);
        this._CVs = obj && obj._CVs && obj._CVs.map(cv => new CV(cv));
    }

    public get CVs(): CV[] {
        return this._CVs;
    }

    public addCV(cv: CV): void {
        this._CVs.push(cv);
    }

    public deleteCV(cv: CV): void {
        this._CVs = this._CVs.filter(el => el !== cv);
    }
}
