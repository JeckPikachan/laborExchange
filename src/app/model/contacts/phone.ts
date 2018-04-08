import { Contact } from "./contact";

export class Phone extends Contact {
    private static readonly _type: 'Phone' = 'Phone';

    private _phoneNumber: string;

    constructor(obj?: any) {
        super();
        this._phoneNumber = obj && obj._phoneNumber;
    }

    public get info(): string {
        return this._phoneNumber;
    }

    public set info(phoneNumber: string) {
        this._phoneNumber = phoneNumber;
    }

    public get type(): 'Phone' {
        return Phone._type;
    }

    public static get type(): 'Phone' {
        return Phone._type;
    }
}
