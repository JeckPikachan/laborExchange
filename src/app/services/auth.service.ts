import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from "../model/user";
import {LaborExchangeService} from "./labor-exchange.service";
import {RoleEnum} from "../util/constants";
import {map} from "rxjs/internal/operators";
import {Observable} from "rxjs/index";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isSignedIn: boolean;
  public signedInUser: User;
  public signedUserRole: RoleEnum;
  private redirectUrl = '/';
  private signInUrl = '/login';

  constructor(private router: Router, private laborExchange: LaborExchangeService) {

  }

  isUserAuthenticated(login: string, password: string, role: RoleEnum): Observable<boolean> {

      let user: User;
      switch (role) {
        case RoleEnum.employee:
          return this.laborExchange.getEmployeeByLogin(login).pipe(map(employee => {
            user = employee;
            return this.checkPassword(user, password, role);
          }));
        case RoleEnum.employer:
          return this.laborExchange.getEmployerByLogin(login).pipe(map(employee => {
            user = employee;
            return this.checkPassword(user, password, role);
          }));
      }
  }

  private checkPassword(user: User, password: string, role: RoleEnum): boolean {
    if (user && user.password === password) {
      localStorage.setItem('signedUser', JSON.stringify({login: user.login, password: password, role: role}));
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

  isUserSignedIn(): boolean | Observable<boolean> {
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

  getSignedInUserLogin(): string {
    return this.signedInUser && this.signedInUser.login ||
      localStorage.getItem('signedUser') && JSON.parse(localStorage.getItem('signedUser')).login;
  }

  signOutUser(): void {
    this.isSignedIn = false;
    localStorage.removeItem('signedUser');
    const url: string = this.getSignInUrl();
    this.router.navigate([url]);
  }

}
