/**
 * Created by chery on 08.05.2018.
 */
import {Injectable} from "@angular/core";
import {Message, messages} from "../util/messages";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";
import {JobOffer} from "../util/JobOffer";
import {Vacancy} from "../model/vacancy";
import {CV} from "../model/CV";

const serverApiUrl = 'http://localhost:3000/api';

@Injectable({providedIn: 'root'})
export class MessageService {

  constructor(private http: HttpClient) {}

  public sendMessage(message: string, from: string, to: string, date: Date, data?: any): void {
    const newMessage = new Message(message, from, to, date, data);
    this.http.post(serverApiUrl + '/messages', newMessage).subscribe();
  }

  public getMessagesByLogin(login: string): Observable<Message[]> {
    return this.http.get(serverApiUrl + '/messages/' + login).pipe(
      map(data => (<Array<any>>data).map(message => {
        const vacancy: Vacancy = new Vacancy(message._data._vacancy._ownerLogin, message._data._vacancy);
        const cv: CV = new CV(message._data._CV._ownerLogin, message._data._CV);
        const messageData: JobOffer = new JobOffer(vacancy, cv);
        return new Message(message._message, message._from, message._to, message._date, messageData);
      }))
    );
  }
}
