import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './guards/index';
import {LoginComponent} from './login/login.component';
import {ProjectListingComponent} from './project-listing/project-listing.component';
import {ConceptListingComponent} from './concept-listing/concept-listing.component';

const appRoutes: Routes = [
  //  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'projects', component: ProjectListingComponent },
    { path: 'concepts', component: ConceptListingComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes); 