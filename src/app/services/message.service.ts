/**
 * Created by chery on 08.05.2018.
 */
import {Injectable} from "@angular/core";
import {Message, messages} from "../util/messages";

@Injectable({providedIn: 'root'})
export class MessageService {
  public sendMessage(message: string, from: string, to: string, date: Date, data?: any): void {
    const newMessage = new Message(message, from, to, date, data);
    messages.push(newMessage);
  }

  public getMessagesByLogin(login: string): Message[] {
    return messages.filter(message => message.to === login);
  }
}
