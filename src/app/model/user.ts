export abstract class User {
    protected _login: string;
    protected _password: number;

    constructor(obj?: any) {
        this._login = obj && obj._login;
        this._password = obj && obj._password;
    }

    public get login(): string {
        return this._login;
    }

    public get password(): number {
        return this._password;
    }

    public set password(password: number) {
        this._password = password;
    }
}
