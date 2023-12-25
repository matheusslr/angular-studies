import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientService } from './clients.service';
import { ClientsModule } from './clients/clients.module';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from './template/template.module';
import { WorkProvidedModule } from './work-provided/work-provided.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule,
    HttpClientModule,
    WorkProvidedModule
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
