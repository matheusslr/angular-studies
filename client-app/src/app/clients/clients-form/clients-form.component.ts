import { Component } from '@angular/core';
import { ClientsService } from '../../clients.service';
import { Client } from '../client';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrl: './clients-form.component.css'
})
export class ClientsFormComponent {
  client: Client;
  success: boolean = false;
  errors: String[] = [];

  constructor(private service: ClientsService) {
    this.client = new Client();
  }

  onSubmit() {
    this.service.save(this.client)
    .subscribe(
      response => {
        this.success = true;
        this.errors = [];
        this.client = response;
      },
      errorResponse => {
        this.errors = errorResponse.error.errors;
        this.success = false;
      }
    );
  }

}
