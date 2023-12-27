import { Component } from '@angular/core';
import { WorkProvidedService } from '../work-provided.service';
import { WorkProvidedResponse } from './work-provided-response';

@Component({
  selector: 'app-work-provided-list',
  templateUrl: './work-provided-list.component.html',
  styleUrl: './work-provided-list.component.css'
})
export class WorkProvidedListComponent {
  clientName: string = "";
  months: number[];
  month!: number;
  workResponses!: WorkProvidedResponse[];
  errorMessage!: string | null;

  constructor(
    private workService: WorkProvidedService
  ) {
    this.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  search() {
    this.workService.findByClientNameAndMonth(this.clientName, this.month)
      .subscribe(
        response => {
          this.workResponses = response;
          
          if (this.workResponses.length < 1)
            this.errorMessage = 'No records found';
          else
            this.errorMessage = null;
        });
  }
}
