import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { AlertService, UserService } from '../services/index';
import { Message } from "primeng/primeng";
import { User } from "../models";

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
    model: User;
    loading = false;
    inviteeToken: string;
    msgs: Message[] = [];

    submitted: boolean;
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService, private route: ActivatedRoute) {
        console.log(this.route.snapshot.params);

    }

    ngOnInit() {
        console.log("nginit");
        this.model = new User(-1);
        this.route.params
            .subscribe(
            (params: Params) => {
                this.inviteeToken = params['id'];
                console.log("ngOnInit " + params['id']);
            }
            );
         this.inviteeToken = 'c23ef382-f40f-421b-b9eb-139d17b7b859';
        if (this.inviteeToken) {
            this.userService.getByInviteeToken(this.inviteeToken).subscribe(data => {
                this.model = new User(data[0].UserId)
                this.model.email = data[0].UserName;
                this.model.firstName = data[0].FirstName;
                this.model.lastName = data[0].LastName;
            }, error => {
                    console.log(error);
                     this.alertService.error("Invalid token");

            });
        }


    }
    register() {
        this.loading = true;
        if (this.model.userId && this.model.userId != -1) {
            this.userService.update(this.model)
                .subscribe(
                data => {
                    //this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Registration successful' });

                     this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    //this.msgs.push({ severity: 'error', summary: 'Error', detail: error });

                     this.alertService.error(error);
                    this.loading = false;
                });
        } else {
            this.userService.create(this.model)
                .subscribe(
                data => {
                    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Registration successful' });

                    // this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.msgs.push({ severity: 'error', summary: 'Error', detail: error });

                    // this.alertService.error(error);
                    this.loading = false;
                });
        }

    }

}
