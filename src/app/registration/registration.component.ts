import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    firstName: '',
    lastName: '',
    address: '',
    contact: '',
    email: '',
    password: ''
  };

  isRegistered = false; // Add this flag

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    this.userService.addUser(this.user).subscribe(response => {
      console.log('User added successfully', response);
      this.isRegistered = true; // Set the flag to true on successful registration
      alert('You are registered successfully!'); // Show alert message
      // this.router.navigate(['/login']); // Navigate to login page
      window.open('/login', '_blank');
    });
  }
}