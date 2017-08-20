import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/index';
//import * as AWS from "aws-sdk/global";

import { AlertService, AuthenticationService, UserService } from '../services/index';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loggedInUser: User;

    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService, private userService: UserService) { }

    ngOnInit() {

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
            data => {
                this.loggedInUser = this.userService.getLocalUser();
                if (this.loggedInUser.isAdmin()) {
                    this.router.navigate(["/concepts/list/available"]);

                }
                if (this.loggedInUser.isTeacher()) {
                    this.router.navigate(["/projects"]);

                }
                 if (this.loggedInUser.isStudent()) {
                    this.router.navigate(["/home"]);

                }
            },
            error => {
                if (error.status == 401) {
                    this.alertService.error("Please try again, or request your forgotten username or password.");

                } else {
                    this.alertService.error(error);

                }
                this.loading = false;
                console.log(error);
            });
    }
    fileEvent(event) {
        var files = event.srcElement.files;
        console.log(files);
    }
}
