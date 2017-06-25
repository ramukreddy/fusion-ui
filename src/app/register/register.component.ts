import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { AlertService, UserService } from '../services/index';
import { Message } from "primeng/primeng";

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
    model: any = {};
    loading = false;

    msgs: Message[] = [];

    submitted: boolean;
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {

    }
    register() {
        this.loading = true;
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
