import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Form, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';
import { AlertService } from "../../services/index";
import { Project, User } from "../../models/index";
import { ProjectService, UserService, StudentCohortService } from "../../services/index";
import { ConceptService } from "../../services/concept.service";


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  id: Number;
  editMode = false;
  model: Project;
  concepts: SelectItem[];
  selectedConceptId: number;
  filteredStudentsMultiple: any[];


  constructor(private router: Router, private route: ActivatedRoute,
    private alertService: AlertService,
    private projectService: ProjectService,
    private userService: UserService,
    private conceptService: ConceptService,
    private studentCohortService: StudentCohortService) { }

  ngOnInit() {


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

  filterStudentMultiple(event) {
    let query = event.query;
    this.studentCohortService.getStudentCohorts().then(students => {
      this.filteredStudentsMultiple = this.filterStudents(query, students);
    });
  }

  filterStudents(query, students: any[]): any[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    for (let i = 0; i < students.length; i++) {
      let student = students[i];
      if (student.FirstName) {
        if (student.FirstName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(student);
        }
      }

    }
    return filtered;
  }
}
