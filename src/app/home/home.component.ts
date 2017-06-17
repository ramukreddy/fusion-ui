import { Component, OnInit } from '@angular/core';

import { User } from '../models/index';
import { UserService } from '../services/index';

@Component({
    selector: 'app-home',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser);
    }

    ngOnInit() {
    }


}