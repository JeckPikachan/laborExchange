import { CV } from './CV';
import { PersonalInfo } from './personalInfo';
import { Contact } from './contacts/contact';
import { Education } from './education';
import { ContactFactory } from './contacts/contactFactory';
import { User } from './user';

export class Employee extends User {
    private _personalInfo: PersonalInfo;
    private _contacts: Contact[];
    private _educations: Education[];

    constructor(obj?: any) {
        super(obj);
        this._personalInfo = obj && new PersonalInfo(obj._personalInfo);
        this._contacts = obj && obj._contacts && obj._contacts.map(contact => ContactFactory.getContactFromModel(contact));
        this._educations = obj && obj._educations && obj._educations.map(edu => new Education(edu));
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
}
