import { Component } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrl: './clients-form.component.css'
})
export class ClientsFormComponent {
  client: Client;

  constructor() {
    this.client = new Client();
  }

  clicked (){
    console.log(this.client);
  }

}
