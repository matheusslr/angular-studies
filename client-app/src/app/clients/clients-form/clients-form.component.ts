import { Component, OnInit } from '@angular/core';
import { ClientService } from '../clients.service';
import { Client } from '../client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrl: './clients-form.component.css'
})
export class ClientsFormComponent implements OnInit {
  client: Client;
  success: boolean = false;
  errors: String[] = [];
  id!: number;

  constructor(
    private service: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.client = new Client();
  }
  ngOnInit(): void {
    let params = this.activatedRoute.params;
    params.subscribe(
      pathVariable => {
        if (pathVariable['id']) {
          this.id = pathVariable['id']
          this.service.getClientById(this.id)
            .subscribe(
              response => this.client = response,
              errorResponse => this.client = new Client()
            )
        }
      }
    )
  }

  backToList() {
    return this.router.navigate(['/clients-list'])
  }

  onSubmit() {
    if (this.id) {
      this.service.update(this.client)
        .subscribe(
          response => {
            this.success = true;
            this.errors = [];
          },
          errorResponse => {
            this.errors = errorResponse.error.errors;
            this.success = false;
          }
        );
    } else {
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

}
