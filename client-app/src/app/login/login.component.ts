import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = new User();
  error!: boolean | null;

  constructor(private loginService: LoginService) {}

  onSubmit() {
    this.loginService.login(this.user)
    .subscribe(response => console.log(response));
  }
}
