import { Contact } from './contact';
import { Phone } from './phone';
import { Mail } from './mail';

export class ContactFactory {
    private static contactsDict = {
        [Phone.type]: Phone,
        [Mail.type]: Mail
    };

    public static getContactFromModel(obj: any): Contact {
        return new ContactFactory.contactsDict[obj._type](obj);
    }
}
