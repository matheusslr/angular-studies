import { Component } from '@angular/core';
import { Register } from './register';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  register: Register = new Register();
  errors!: string[];
  successMessage: boolean = false;

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.register(this.register)
      .subscribe(response => {
        console.log(response)
        this.successMessage = true;
        this.errors = [];
      }, errorResponse => {
        this.errors = errorResponse.error.errors;
        this.successMessage = false;
      })
  }
}
