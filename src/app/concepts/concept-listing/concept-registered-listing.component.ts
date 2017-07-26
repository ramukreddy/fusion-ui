import { Component, OnInit } from '@angular/core';
import { ConceptService } from "../../services/concept.service";
import { AlertService, UserService } from "../../services";
import { Concept, User } from "../../models";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: 'app-concept-registered-listing',
    templateUrl: './concept-registered-listing.component.html',
    styleUrls: ['./concept-listing.component.css']
})
export class ConceptRegisteredListingComponent implements OnInit {
    type: string;
    concepts: Concept[];
    loggedInUser: User;
    header:string;

    constructor(private router: Router, private route: ActivatedRoute,
        private conceptService: ConceptService,
        private alertService: AlertService,
        private userService: UserService) { }

    ngOnInit() {
        this.header = " My Registered concepts"
        this.loggedInUser = this.userService.getLocalUser();


        this.conceptService.getRegisteredConcepts().subscribe(data => {
            this.concepts = data;
            this.concepts.forEach(concept=>{
                concept.user = this.loggedInUser;
            })
            console.log(this.concepts);
        }, error => {
            this.alertService.error(error);
        });

    }
    onTabChange(event) {
        console.log(event);
    }
}
