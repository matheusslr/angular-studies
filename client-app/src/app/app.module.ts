import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ClientsModule } from './clients/clients.module';
import { ClientService } from './clients/clients.service';
import { HomeComponent } from './home/home.component';
import { InterceptorModule } from './interceptors/interceptor.module';
import { LayoutComponent } from './layout/layout.component';
import { TemplateModule } from './template/template.module';
import { WorkProvidedModule } from './work-provided/work-provided.module';
import { WorkProvidedService } from './work-provided/work-provided.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule,
    HttpClientModule,
    WorkProvidedModule,
    FormsModule,
    InterceptorModule
  ],
  providers: [
    ClientService,
    WorkProvidedService,
    AuthService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
