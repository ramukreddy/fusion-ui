import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { User, Concept, College } from "../../models";
import { UserService, ConceptService } from "../../services";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-concept-home',
  templateUrl: './concept-home.component.html',
  styleUrls: ['./concept-home.component.css']
})
export class ConceptHomeComponent implements OnInit {
  loggedInUser: User;
  conceptId: number;
  concept:    Concept;;
  universities: College[];
  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private conceptService: ConceptService) { }

  ngOnInit() {
    this.loggedInUser = this.userService.getLocalUser();
  

    this.route.params
      .subscribe(
      (params: Params) => {
        this.conceptId = params['id'];
        console.log("ngOnInit " + this.conceptId);
      });
    if (this.conceptId) {
      this.initConcept();
    }
  }

  initConcept() {
   this.conceptService.getConceptById(this.conceptId).subscribe(data=>{
     console.log(data);
     this.concept=data[0];
    });
   console.log(this.concept);
//    this.concept.ConceptTitle = " To better understand how the brain controls movement.";
//    this.concept.ConceptDescription = "Movement disorders have many different causes and symptoms. Researchers still do not fully understand which parts of the brain are involved in fine movement. They want to learn about which brain regions could be abnormal in people with movement disorders.";
    this.loadUniversities();
    // this.conceptService.

  }

  loadUniversities() {
    this.conceptService.getUniversitiesForConceptById(this.conceptId).subscribe(data => {
      console.log(data);

      this.universities = data;
    },
    error=>{
      console.log(error);
    })

  }
}
