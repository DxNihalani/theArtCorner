import { Component } from '@angular/core';
import { UserService } from '../user.service';

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
    pwd: ''
  };

  isRegistered = false; // Add this flag
  errorMessage = ''; // Add this flag

  constructor(private userService: UserService) { }

  onSubmit(registrationForm: any) {
    if (registrationForm.valid) {
      this.userService.addUser(this.user).subscribe(response => {
        this.isRegistered = true; // Set the flag to true on successful registration
        this.errorMessage = ''; // Clear the error message
        alert('You are registered successfully!'); // Show alert message
        window.open('/login', '_blank'); // Open login page in a new tab
      });
    } else {
      this.isRegistered = false; // Ensure the success message is not shown
      this.errorMessage = 'Please enter all valid details.';
    }
  }
}