import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from "../model/user";
import {LaborExchangeService} from "./labor-exchange.service";
import {RoleEnum} from "../util/constants";


@Injectable()
export class AuthService {

  private isSignedIn: boolean;
  private signedInUser: User;
  private signedUserRole: RoleEnum;
  private redirectUrl = '/';
  private signInUrl = '/login';

  constructor(private router: Router, private laborExchange: LaborExchangeService) {

  }

  isUserAuthenticated(login: string, password: string, role: RoleEnum): boolean {

      let user: User;
      switch (role) {
        case RoleEnum.employee:
          user = this.laborExchange.getEmployeeByLogin(login);
          break;
        case RoleEnum.employer:
          user = this.laborExchange.getEmployerByLogin(login);
          break;
      }
      if (user && user.password === password) {
        localStorage.setItem('signedUser', JSON.stringify({login: login, password: password, role: role}));
        this.signedInUser = user;
        this.signedUserRole = role;
        switch (role) {
          case RoleEnum.employee:
            this.redirectUrl = 'employeePage';
            break;
          case RoleEnum.employer:
            this.redirectUrl = 'employerPage';
            break;
        }
        this.isSignedIn = true;
      } else {
        this.isSignedIn = false;
      }

      return this.isSignedIn;
  }

  isUserSignedIn(): boolean {
    if (this.isSignedIn == null) {
      const isSigned = localStorage.getItem('signedUser');
      if (isSigned) {
        try {
          const data = JSON.parse(isSigned);
          if (!(data.login && data.password)) {
            throw new Error("Invalid data.");
          }
          return this.isUserAuthenticated(data.login, data.password, data.role);
        } catch (e) {
          console.log(e.message);
          this.isSignedIn = false;
          return false;
        }
      } else {
        this.isSignedIn = false;
        return false;
      }
    } else {
      return this.isSignedIn;
    }
  }

  getSignedUserRole(): RoleEnum {
    return this.signedUserRole;
  }

  getRedirectUrl(): string {
    return this.redirectUrl;
  }

  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

  getSignInUrl(): string {
    return this.signInUrl;
  }

  getSignedInUser(): User {
    return this.signedInUser;
  }

  signOutUser(): void {
    this.isSignedIn = false;
    localStorage.removeItem('signedUser');
    const url: string = this.getSignInUrl();
    this.router.navigate([url]);
  }

}
