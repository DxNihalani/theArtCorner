import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: any = null;
  private storedUser: any = null;

  constructor() { }

  setLoggedInUser(user: any) {
    this.loggedInUser = user;
    this.storedUser = user; // Store the user information
  }

  getLoggedInUser() {
    return this.loggedInUser;
  }

  getStoredUser() {
    return this.storedUser;
  }

  isLoggedIn() {
    return this.loggedInUser !== null;
  }

  logout() {
    this.loggedInUser = null;
  }
}