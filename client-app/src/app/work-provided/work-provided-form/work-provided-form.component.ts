import { Component, OnInit } from '@angular/core';
import { Client } from '../../clients/client';
import { ClientService } from '../../clients/clients.service';
import { WorkProvided } from '../work-provided';
import { WorkProvidedService } from '../work-provided.service';

@Component({
  selector: 'app-work-provided-form',
  templateUrl: './work-provided-form.component.html',
  styleUrl: './work-provided-form.component.css'
})
export class WorkProvidedFormComponent implements OnInit {
  workProvided: WorkProvided;
  clients: Client[] = [];
  errors: String[] = [];
  success: boolean = false;

  constructor(
    private clientService: ClientService,
    private workService: WorkProvidedService
  ) {
    this.workProvided = new WorkProvided();
  }

  ngOnInit(): void {
    this.clientService.getClients()
      .subscribe(response => this.clients = response)
  }

  onSubmit() {
    this.workService.save(this.workProvided)
      .subscribe(response => {
        this.success = true;
        this.errors = [];
        this.workProvided = new WorkProvided();

      }, errorResponse => {
        this.errors = errorResponse.error.errors;
        this.success = false;
      });
  }
}
