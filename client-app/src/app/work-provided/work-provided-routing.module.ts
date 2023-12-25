import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkProvidedFormComponent } from './work-provided-form/work-provided-form.component';
import { WorkProvidedListComponent } from './work-provided-list/work-provided-list.component';

const routes: Routes = [
  { path: 'work-provided-form', component: WorkProvidedFormComponent },
  { path: 'work-provided-list', component: WorkProvidedListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkProvidedRoutingModule { }
