import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CheckboxModule, SpinnerModule, PanelModule, CalendarModule,
  AutoCompleteModule,Header,Footer,DialogModule,StepsModule,
  EditorModule, SharedModule, GrowlModule, MessagesModule,
  ConfirmDialogModule, ConfirmationService, DropdownModule,
  DataScrollerModule
} from 'primeng/primeng';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { routing } from './app.routing';

import { AlertComponent } from './directives/index';
import { DropdownDirective } from './directives/index';
import { AuthGuard } from './guards/index';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { HomeComponent } from './home/index';
import { RegisterComponent } from './register/index';
import { ProjectListingComponent } from './projects/project-listing/project-listing.component';
import { ProjectService } from './services/project.service';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { HeaderComponent } from './header/header.component';
import { ConceptCardComponent } from './concepts/concept-card/concept-card.component';
import { ConceptListingComponent } from './concepts/concept-listing/concept-listing.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { ProjectsComponent } from './projects/projects.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { ProjectHomeComponent } from './projects/project-home/project-home.component';
import { StudentsComponent } from './students/students.component';
import { StudentListingComponent } from './students/student-listing/student-listing.component';
import { ConceptEditComponent } from './concepts/concept-edit/concept-edit.component';
import { ConceptService } from './services/concept.service';
import { JwtService } from "./utils/jwt.service";
import { StudentCohortService } from "./services/student-cohort.service";




@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    DropdownDirective,
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
    ConceptsComponent,
    ProjectHomeComponent,
    StudentsComponent,
    StudentListingComponent,
    ConceptEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing,
    EditorModule,
    SharedModule,
    PanelModule,
    CalendarModule,
    AutoCompleteModule,
    GrowlModule,
    MessagesModule,
    CheckboxModule,
    SpinnerModule,
    ConfirmDialogModule,
    DropdownModule,
    DataScrollerModule,
    DialogModule,
    StepsModule

  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    ProjectService,
    ConceptService,
    JwtService,
    ConfirmationService,
    StudentCohortService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
