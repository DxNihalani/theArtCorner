import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from '../authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  pwd = '';
  userId:string='';

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService

  ) { }

  onSubmit() {
    this.userService.getUsers().subscribe(users => {
      const user = users.find((u: any) => u.email === this.email && u.pwd === this.pwd);
      if (user) {

        this.authService.setLoggedInUser(user);
        alert('Login successful');
        // Redirect to the desired page
        console.log(user);
        localStorage.setItem("userId",user.id);
        console.log(localStorage.getItem("userId"));
        this.router.navigate(['/dashboard']); // Replace with your desired path
      } else {
        alert('Invalid credentials');
      }
    });
  }
}