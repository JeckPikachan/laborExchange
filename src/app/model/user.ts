export abstract class User {
    protected _login: string;
    protected _password: string;

    constructor(obj?: any) {
        this._login = obj && obj._login;
        this._password = obj && obj._password;
    }

    public get login(): string {
        return this._login;
    }

    public get password(): string {
        return this._password;
    }

    public set password(password: string) {
        this._password = password;
    }
}
