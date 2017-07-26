import { Component, OnInit } from '@angular/core';
import { ConceptService } from "../../services/concept.service";
import { AlertService, UserService } from "../../services";
import { Concept, User } from "../../models";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: 'app-available-concept-listing',
    templateUrl: './concept-available-listing.component.html',
    styleUrls: ['./concept-listing.component.css']
})
export class ConceptAvailableListingComponent implements OnInit {
    type: string;
    concepts: Concept[];
    loggedInUser: User;
    header: string;
    constructor(private router: Router, private route: ActivatedRoute,
        private conceptService: ConceptService,
        private alertService: AlertService,
        private userService: UserService) { }

    ngOnInit() {
        this.loggedInUser = this.userService.getLocalUser();

        if (this.loggedInUser.isAdmin()) {
            this.header = " My Concepts"

        }
        if (this.loggedInUser.isTeacher()) {
            this.header = " Available Concepts"

        }

        this.conceptService.getOpenConcepts().subscribe(data => {
            this.concepts = data;
            console.log(this.concepts);
            if (this.concepts.length < 1) {
                this.alertService.success("You do not have any concepts available this time");

            }
        }, error => {
            this.alertService.error(error);
        });

    }
    onTabChange(event) {
        console.log(event);
    }
}
