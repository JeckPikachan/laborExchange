import { Component, OnInit } from '@angular/core';
import {LaborExchangeService} from "../../services/labor-exchange.service";
import {AuthService} from "../../services/auth.service";
import {MessageService} from "../../services/message.service";
import {RoleEnum} from "../../util/constants";
import {Message} from "../../util/messages";

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {

  public roles: any = RoleEnum;
  public role: RoleEnum;
  public messages: Message[];
  public show: boolean[];

  constructor(private laborExchange: LaborExchangeService,
              private authService: AuthService,
              private messageService: MessageService) { }

  ngOnInit() {
    const login: string = this.authService.getSignedInUserLogin();
    this.role = this.authService.getSignedInUserRole();

    this.messageService.getMessagesByLogin(login).subscribe(data => {
      this.messages = data;
      this.show = this.messages.map(() => false);
    });
  }

  public showMessage(index: number): void {
    this.show[index] = true;
  }

  public hideMessage(index: number): void {
    this.show[index] = false;
  }

}
