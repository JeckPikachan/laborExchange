import { PersonalInfo } from './personalInfo';
import { Contact } from './contacts/contact';
import { Education } from './education';
import { ContactFactory } from './contacts/contactFactory';

export class Human {
    private _personalInfo: PersonalInfo;
    private _contacts: Contact[];
    private _educations: Education[];
    private _login: string;
    private _password: number;

    constructor(obj?: any) {
        this._personalInfo = obj && new PersonalInfo(obj._personalInfo);
        this._contacts = obj && obj._contacts && obj._contacts.map(contact => ContactFactory.getContactFromModel(contact));
        this._educations = obj && obj._educations && obj._educations.map(edu => new Education(edu));
        this._login = obj && obj._login;
        this._password = obj && obj._password;
    }

    public get personalInfo(): PersonalInfo {
        return this._personalInfo;
    }

    public set personalInfo(personalInfo: PersonalInfo) {
        this._personalInfo = personalInfo;
    }

    public get contacts(): Contact[] {
        return this._contacts;
    }

    public set contacts(contacts: Contact[]) {
        this._contacts = contacts;
    }

    public addContact(contact: Contact) {
        this._contacts.push(contact);
    }

    public deleteContact(contact: Contact) {
        this._contacts = this._contacts.filter((cont) => cont !== contact);
    }

    public get educations(): Education[] {
        return this._educations;
    }

    public set educations(educations: Education[]) {
        this._educations = educations;
    }

    public addEducation(education: Education): void {
        this._educations.push(education);
    }

    public deleteEducation(education: Education): void {
        this._educations = this._educations.filter(edu => edu !== education);
    }

    public get login(): string {
        return this._login;
    }

    public set login(login: string) {
        this._login = login;
    }

    public get password(): number {
        return this._password;
    }

    public set password(password: number) {
        this._password = password;
    }
}