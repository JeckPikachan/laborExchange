import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'employee-nav',
  templateUrl: './employee-nav.component.html',
  styleUrls: ['./employee-nav.component.css']
})
export class EmployeeNavComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  public signOut(): void {
    // console.log(JSON.stringify(this.authService.getSignedInUser().login));
    this.authService.signOutUser();
  }

  public goToVacancyList(): void {
    console.log("hello");
    this.router.navigate(['vacancyList']);
  }

  public goHome(): void {
    const login = this.authService.getSignedInUserLogin();
    if (login) {
      this.router.navigate(['employeePage/' + login]);
    } else {
      this.router.navigate(['login']);
    }
  }

}
