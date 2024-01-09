import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = new User();
  errors!: string[];

  constructor(private authService: AuthService, private route: Router) { }

  onSubmit() {
    this.authService.login(this.user)
      .subscribe(
        response => {
          console.log(response);
          this.route.navigate(['/home']);
          this.errors = [];
        },
        errorResponse => this.errors = errorResponse.error.errors);
  }
}
