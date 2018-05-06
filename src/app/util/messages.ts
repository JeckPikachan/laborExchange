import {User} from "../model/user";
/**
 * Created by chery on 06.05.2018.
 */
export let messages: Array<Message> = [];

export class Message {
  private _message: string;
  private _from: string;
  private _to: string;
  private _data: any;

  constructor(message: string, from: string, to: string, data?: any) {
    this._message = message;
    this. _from = from;
    this._to = to;
    this._data = data;
  }


  get data(): any {
    return this._data;
  }

  set data(value: any) {
    this._data = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get from(): string {
    return this._from;
  }

  set from(value: string) {
    this._from = value;
  }

  get to(): string {
    return this._to;
  }

  set to(value: string) {
    this._to = value;
  }
}
