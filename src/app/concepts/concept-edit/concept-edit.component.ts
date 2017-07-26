import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Form, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Concept } from "../../models";
import { ConceptService } from "../../services/concept.service";
import { AlertService } from "../../services";


@Component({
  selector: 'app-concept-edit',
  templateUrl: './concept-edit.component.html',
  styleUrls: ['./concept-edit.component.css']
})
export class ConceptEditComponent implements OnInit {
  id: Number;
  editMode: boolean;
  model: Concept;
  constructor(private router: Router, private route: ActivatedRoute,
    private conceptService: ConceptService, private alertService: AlertService) { }

  ngOnInit() {
    this.model = new Concept();

    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
      );
  }

  onCancel() {
    this.router.navigate(['../list/available'], { relativeTo: this.route });

  }

  onSubmit() {
    this.conceptService.create(this.model).subscribe(data => {

      this.alertService.success("Your new concept has been created, will automatically redirect to your concepts  "),
        console.log(data);
      this.model = new Concept();
      setTimeout((router: Router) => {
        this.router.navigate(['../list/available'], { relativeTo: this.route });
      }, 3000);  //5s
    }, error => {
      this.alertService.error(" unknown error " + error);
    })
    console.log(this.model);
  }
  initForm() {

  }

}
