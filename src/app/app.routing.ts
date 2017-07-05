import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './guards/index';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectListingComponent } from './projects/project-listing/project-listing.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { ProjectHomeComponent } from './projects/project-home/project-home.component';
import { ConceptListingComponent } from './concepts/concept-listing/concept-listing.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { ConceptEditComponent } from './concepts/concept-edit/concept-edit.component';
import { StudentsComponent } from './students/students.component';
import { StudentListingComponent } from './students/student-listing/student-listing.component';




const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'register/:id', component: RegisterComponent


  },
  {
    path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard], children: [
      { path: '', component: ProjectListingComponent },
      { path: 'new', component: ProjectEditComponent },
      { path: ':id', component: ProjectHomeComponent },
      { path: ':id/edit', component: ProjectEditComponent }

    ]
  },
  {
    path: 'concepts', component: ConceptsComponent, children: [
      { path: ':type', component: ConceptListingComponent },
      { path: 'new', component: ConceptEditComponent }

    ]
  },
  {
    path: 'students', component: StudentsComponent, children: [
      { path: '', component: StudentListingComponent },
      { path: 'invite', component: RegisterComponent }

    ]
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes); 