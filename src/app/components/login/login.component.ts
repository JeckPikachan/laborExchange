import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LaborExchangeService} from "../../services/labor-exchange.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {RoleEnum} from "../../util/constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public errorMessage: string;

  public loginForm: FormGroup = this.fb.group({
    login: [''],
    password: ['']
  });

  constructor(
    private fb: FormBuilder,
    private laborExchange: LaborExchangeService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(e: any): void {
    e.preventDefault();
    const login = this.loginForm.get('login').value;
    const password = this.loginForm.get('password').value;

    if (!this.authService.isUserAuthenticated(login, password, RoleEnum.employee)) {
      this.loginForm.reset();
      this.errorMessage = "Wrong login or password";
    } else {
      this.router.navigate([this.authService.getRedirectUrl(), login]);
    }
  }

}
