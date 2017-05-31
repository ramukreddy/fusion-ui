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
import { ProjectListingComponent } from './projects/project-listing/project-listing.component';
import {ProjectService} from './services/project.service';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { HeaderComponent } from './header/header.component';
import { ConceptCardComponent } from './concepts/concept-card/concept-card.component';
import { ConceptListingComponent } from './concepts/concept-listing/concept-listing.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { ProjectsComponent } from './projects/projects.component';
import { ConceptsComponent } from './concepts/concepts.component';


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
    ProjectEditComponent,
    ProjectsComponent,
    ConceptsComponent
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
