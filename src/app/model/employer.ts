import {User} from "./user";

export class Employer extends User {
    private _info: string;
    private _name: string;

    constructor(obj?: any) {
        super(obj);
        this._info = obj && obj._info;
        this._name = obj && obj._name;
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

}
