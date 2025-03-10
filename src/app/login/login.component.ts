import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  pwd = '';

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    this.userService.getUsers().subscribe(users => {
      const user = users.find((u: any) => u.email === this.email && u.pwd === this.pwd);
      if (user) {
        alert('Login successful');
        // Redirect to the desired page
      } else {
        alert('Invalid credentials');
      }
    });
  }
}