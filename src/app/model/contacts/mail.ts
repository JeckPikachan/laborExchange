import { Contact } from "./contact";

export class Mail extends Contact {
    private static readonly _type: 'Mail' = 'Mail';

    private _email: string;

    constructor(obj?: any) {
        super();
        this._email = obj && obj._email;
    }

    public get info(): string {
        return this._email;
    }

    public set info(email: string) {
        this._email = email;
    }

    public get type(): 'Mail' {
        return Mail._type;
    }

    public static get type(): 'Mail' {
        return Mail._type;
    }
}
