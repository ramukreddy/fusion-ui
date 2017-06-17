import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Form, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AlertService } from "../../services/index";

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  model: any = {};


  constructor(private router: Router, private route: ActivatedRoute,private alertService:AlertService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
    var project = JSON.stringify(this.model);
    console.log(project);
     this.alertService.success("Project successfully created");




  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });

  }

}
