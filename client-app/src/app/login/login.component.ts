import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username!: string;
  password!: string;
  error!: boolean | null;

  onSubmit() {
    console.log(this.username, this.password);
  }
}
