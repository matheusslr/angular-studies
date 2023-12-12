import { Component } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrl: './clients-form.component.css'
})
export class ClientsFormComponent {
  client: Client;
  name: string;

  constructor() {
    this.client = new Client();
    this.client.name = "FirstName";
    this.name = "LastName";
  }

  clicked (){
    alert("Clicked");
  }

}
