import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  usernameLogged!: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.usernameLogged = this.authService.getUsername();
  }

  logout(): void {
    this.authService.logout()
  }
}
