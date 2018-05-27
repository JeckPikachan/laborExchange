import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'employer-nav',
  templateUrl: './employer-nav.component.html',
  styleUrls: ['./employer-nav.component.css']
})
export class EmployerNavComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  public signOut(): void {
    // console.log(JSON.stringify(this.authService.getSignedInUser().login));
    this.authService.signOutUser();
  }

  public goToCVList(): void {
    console.log("hello");
    this.router.navigate(['CVList']);
  }

  public goHome(): void {
    const login = this.authService.getSignedInUserLogin();
    if (login) {
      this.router.navigate(['employerPage/' + login]);
    } else {
      this.router.navigate(['login']);
    }
  }

}
