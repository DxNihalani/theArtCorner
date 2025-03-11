import { Injectable } from '@angular/core';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: any = null;

  constructor(private userService: UserService){
    this.loadUserFromLocalStorage();
  }

  setLoggedInUser(user: any) {
    this.loggedInUser = user;
   localStorage.setItem('loggedInUser', JSON.stringify(user));
  }


  getLoggedInUser() {
    return this.loggedInUser;
  }

  isLoggedIn() {
    return this.loggedInUser !== null;
  }

  logout() {
    this.loggedInUser = null;
    localStorage.removeItem('loggedInUser');
  }

  private loadUserFromLocalStorage() {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      this.loggedInUser = JSON.parse(user);
    }}
}