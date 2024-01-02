import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;

  onSubmit() {
    return console.log(this.username);
  }
}
