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

  constructor(private userService: UserService) { }

  onSubmit() {
    this.userService.addUser(this.user).subscribe(response => {
      console.log('User added successfully', response);
      this.isRegistered = true; // Set the flag to true on successful registration
      alert('You are registered successfully!'); // Show alert message
      window.open('/login', '_blank'); // Open login page in a new tab
    });
  }
}