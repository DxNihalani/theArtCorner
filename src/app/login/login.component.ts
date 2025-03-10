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
  password = '';

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    this.userService.getUsers().subscribe(users => {
      const user = users.find((u: any) => u.email === this.email && u.password === this.password);
      if (user) {
        console.log('Login successful');
        // Redirect to the desired page
      } else {
        console.log('Invalid credentials');
      }
    });
  }
}