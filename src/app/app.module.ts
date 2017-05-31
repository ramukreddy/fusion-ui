import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { routing } from './app.routing';

import { AlertComponent } from './directives/index';
import { AuthGuard } from './guards/index';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { HomeComponent } from './home/index';
import { RegisterComponent } from './register/index';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import {ProjectService} from './services/project.service';
import { ProjectCardComponent } from './project-card/project-card.component';
import { HeaderComponent } from './header/header.component';
import { ConceptCardComponent } from './concept-card/concept-card.component';
import { ConceptListingComponent } from './concept-listing/concept-listing.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProjectListingComponent,
    ProjectCardComponent,
    HeaderComponent,
    ConceptCardComponent,
    ConceptListingComponent,
    ProjectEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
