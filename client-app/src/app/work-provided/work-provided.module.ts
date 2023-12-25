import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkProvidedRoutingModule } from './work-provided-routing.module';
import { WorkProvidedFormComponent } from './work-provided-form/work-provided-form.component';
import { WorkProvidedListComponent } from './work-provided-list/work-provided-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    WorkProvidedFormComponent,
    WorkProvidedListComponent
  ],
  imports: [
    CommonModule,
    WorkProvidedRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    WorkProvidedFormComponent,
    WorkProvidedListComponent
  ]
})
export class WorkProvidedModule { }
