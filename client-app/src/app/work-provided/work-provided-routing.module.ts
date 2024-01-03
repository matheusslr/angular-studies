import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkProvidedFormComponent } from './work-provided-form/work-provided-form.component';
import { WorkProvidedListComponent } from './work-provided-list/work-provided-list.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  { path: 'works', component: LayoutComponent, children: [
      { path: 'form', component: WorkProvidedFormComponent },
      { path: 'list', component: WorkProvidedListComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkProvidedRoutingModule { }
