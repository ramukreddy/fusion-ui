import { Component, OnInit } from '@angular/core';
import { ConceptService } from "../../services/concept.service";
import { AlertService } from "../../services";
import { Concept } from "../../models";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-concept-listing',
  templateUrl: './concept-listing.component.html',
  styleUrls: ['./concept-listing.component.css']
})
export class ConceptListingComponent implements OnInit {
  type: string;
  concepts: Concept[];
  constructor(private router: Router, private route: ActivatedRoute,
    private conceptService: ConceptService, private alertService: AlertService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.type = params['type'];
        console.log("ngOnInit " + this.type);
        if (this.type) {
          switch (this.type) {

            case "my":
              this.conceptService.getRegisteredConcepts().subscribe(data => {
                this.concepts = data;
                console.log(this.concepts);
              }, error => {
                this.alertService.error(error);
              });
              break;

            case "available":
              this.conceptService.getAllConcepts().subscribe(data => {
                this.concepts = data;
                if (this.concepts.length < 1) {
                  this.alertService.success("You do not have any concepts available this time");

                }
              }, error => {
                this.alertService.error(error);
              });
              break;
            case "open":
              this.conceptService.getOpenConcepts().subscribe(data => {
                this.concepts = new Array<Concept>();
                if (this.concepts && this.concepts.length < 1) {
                  this.alertService.success("You do not have any concepts available this time ");

                }
                console.log(this.concepts);
              }, error => {
                this.alertService.error(error);
              });
              break;
            default:
              this.alertService.success("You do not have any concepts available this time ");
              break;

          }

        }
      }
      );
  }
}
