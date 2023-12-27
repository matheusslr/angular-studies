import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../clients.service';
import { Client } from '../client';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.css'
})
export class ClientsListComponent implements OnInit {
  clients: Client[] = [];
  selectedClient!: Client;
  successMessage!: String;
  errorMessage!: String;

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clientService.getClients()
      .subscribe(
        response => { this.clients = response }
      )
  }

  register() {
    this.router.navigate(['/clients-form'])
  }

  prepareDeletation(client: Client) {
    this.selectedClient = client;
  }

  deleteClient() {
    this.clientService.delete(this.selectedClient.id)
      .subscribe(
        response => {
          this.successMessage = "Customer successfully deleted";
          this.ngOnInit();
        },
        error => this.errorMessage = "Error when deleting customer"
      )
  }
}
