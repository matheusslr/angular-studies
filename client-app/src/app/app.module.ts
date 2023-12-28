import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientService } from './clients/clients.service';
import { ClientsModule } from './clients/clients.module';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from './template/template.module';
import { WorkProvidedModule } from './work-provided/work-provided.module';
import { WorkProvidedService } from './work-provided/work-provided.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule,
    HttpClientModule,
    WorkProvidedModule,
    FormsModule
  ],
  providers: [
    ClientService,
    WorkProvidedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
