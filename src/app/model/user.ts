export abstract class User {
    protected _login: string;
    protected _password: number;

    constructor(obj?: any) {
        this._login = obj && obj._login;
        this._password = obj && obj._password;
    }
}
