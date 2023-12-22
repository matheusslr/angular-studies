import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from '../../clients.service';
import { Client } from '../client';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.css'
})
export class ClientsListComponent implements OnInit{
  clients: Client[] = [];

  constructor(
    private clientService : ClientsService,
    private router : Router
    ){}

  ngOnInit(): void {
    this.clientService.getClients()
    .subscribe(
      response => {this.clients = response}
    )
  }

  register(){
    this.router.navigate(['/clients-form'])
  }
}
