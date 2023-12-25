import { Component, OnInit } from '@angular/core';
import { Client } from '../../clients/client';
import { ClientService } from '../../clients.service';
import { WorkProvided } from '../work-provided';

@Component({
  selector: 'app-work-provided-form',
  templateUrl: './work-provided-form.component.html',
  styleUrl: './work-provided-form.component.css'
})
export class WorkProvidedFormComponent implements OnInit {
  clients: Client[] = [];
  workProvided: WorkProvided;

  constructor(private clientService: ClientService) { 
    this.workProvided = new WorkProvided();
  }
  
  ngOnInit(): void {
    this.clientService.getClients()
      .subscribe(response => this.clients = response);
  }

  onSubmit(){
    console.log(this.workProvided);
  }
}
