import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from '../authservice.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    uname: '',
    address: '',
    contact: '',
    email: '',
    pwd: ''
  };

  isRegistered = false; // Add this flag
  errorMessage = false; // Add this flag
  // msg = '';

  constructor(    private userService: UserService,
    private router: Router,
    private authService: AuthService) { }

  onSubmit(registrationForm: any) {
    if (registrationForm.valid) {
      this.userService.addUser(this.user).subscribe(response => {
        this.isRegistered = true; 
        this.errorMessage = false;
        // this.msg = ''; 
        alert('You are registered successfully!'); 
        this.router.navigate(['/login']); 
      });
    } else {
      this.isRegistered = false; 
      this.errorMessage = true;
      // this.msg = 'User Not Registered!'
    }
  }
}