import { Component, OnInit } from '@angular/core';
import { ConceptService } from "../../services/concept.service";
import { AlertService, UserService } from "../../services";
import { Concept, User } from "../../models";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: 'app-concept-listing',
    templateUrl: './concept-listing.component.html',
    styleUrls: ['./concept-listing.component.css']
})
export class ConceptRegisteredListingComponent implements OnInit {
    type: string;
    concepts: Concept[];
    loggedInUser: User;

    constructor(private router: Router, private route: ActivatedRoute,
        private conceptService: ConceptService,
        private alertService: AlertService,
        private userService: UserService) { }

    ngOnInit() {
        this.loggedInUser = this.userService.getLocalUser();


        this.conceptService.getRegisteredConcepts().subscribe(data => {
            this.concepts = data;
            console.log(this.concepts);
        }, error => {
            this.alertService.error(error);
        });

    }
    onTabChange(event) {
        console.log(event);
    }
}
