import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Form, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Concept } from "../../models";


@Component({
  selector: 'app-concept-edit',
  templateUrl: './concept-edit.component.html',
  styleUrls: ['./concept-edit.component.css']
})
export class ConceptEditComponent implements OnInit {
  id: Number;
  editMode: boolean;
  model: Concept;
  constructor(private router: Router, private route: ActivatedRoute) { }

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
    this.router.navigate(['../'], { relativeTo: this.route });

  }

  onSubmit() {
    console.log(this.model);
  }
  initForm() {

  }

}
