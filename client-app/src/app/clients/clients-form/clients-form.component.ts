import { Component } from '@angular/core';
import { Client } from '../client';
import { ClientsService } from '../../clients.service';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrl: './clients-form.component.css'
})
export class ClientsFormComponent {
  client: Client;

  constructor(private service: ClientsService) {
    this.client = new Client();
  }

  onSubmit() {
    this.service.save(this.client)
    .subscribe(response => {
      console.log(response);
    });
  }

}
