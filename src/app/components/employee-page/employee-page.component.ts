import {Component, OnInit} from '@angular/core';
import {CV} from "../../model/CV";
import {LaborExchangeService} from "../../services/labor-exchange.service";
import {Employee} from "../../model/employee";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {Message} from "../../util/messages";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {

  private currentUserLogin: string;
  public cvs: Array<CV>;
  public employee: Employee;
  public messages: Message[];
  public ready = false;

  constructor(private laborExchange: LaborExchangeService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.currentUserLogin = this.route.snapshot.paramMap.get('login');
    this.laborExchange.getEmployeeByLogin(this.currentUserLogin).subscribe(data => {
      this.employee = <Employee>data;
      this.cvs = this.laborExchange.getCVListByEmployeeLogin(this.currentUserLogin);
      this.ready = true;
    });

    this.messages = this.messageService.getMessagesByLogin(this.currentUserLogin);
  }

  public goToVacancyList(): void {
    console.log("hello");
    this.router.navigate(['vacancyList']);
  }

  public signOut(): void {
    // console.log(JSON.stringify(this.authService.getSignedInUser().login));
    this.authService.signOutUser();
  }

}
