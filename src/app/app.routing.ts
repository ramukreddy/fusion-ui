import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './guards/index';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectListingComponent } from './projects/project-listing/project-listing.component';
import { ConceptListingComponent } from './concepts/concept-listing/concept-listing.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
const appRoutes: Routes = [
  //  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'projects', component: ProjectsComponent, children: [
      { path: '', component: ProjectListingComponent },
      { path: 'new', component: ProjectEditComponent },
      { path: ':id/edit', component: ProjectEditComponent }

    ]
  },
  { path: 'concepts', component: ConceptListingComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes); 