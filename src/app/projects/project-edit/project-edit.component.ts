import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Form, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AlertService } from "../../services/index";
import { Project, User } from "../../models/index";
import { ProjectService, UserService } from "../../services/index";


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  id: Number;
  editMode = false;
  model: Project;


  constructor(private router: Router, private route: ActivatedRoute, private alertService: AlertService,
    private projectService: ProjectService, private userService: UserService) { }

  ngOnInit() {
    console.log("ngOnInit ");

    this.model = new Project();
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log("ngOnInit " + this.id);
        this.editMode = params['id'] != null;
        this.initForm();
      }
      );
  }

  onSubmit() {
    let localUser = this.userService.getLocalUser();
    console.log(this.userService.getLocalUser());
    this.model.user = new User(localUser.UserId);
    console.log(this.model.user);

    this.projectService.create(this.model).subscribe(
      data => this.alertService.success("Your new project has been created "),
      error => this.alertService.error(error));

  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });

  }
  initForm() {
    console.log(" is it edit mode " + this.editMode);
    console.log(" Project ID is  " + this.id);

    if (this.editMode) {
      this.projectService.getById(this.id).subscribe(
        data => console.log(data),
        error => console.log(error)
      );

    } else {
      // this.model.ProjectTitle = "";
      // this.model.ProjectDescription = "";
    }

  }
}
