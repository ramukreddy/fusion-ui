import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Form, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';
import { AlertService } from "../../services/index";
import { Project, User, Concept } from "../../models/index";
import { ProjectService, UserService, StudentCohortService } from "../../services/index";
import { ConceptService } from "../../services/concept.service";


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ProjectEditComponent implements OnInit {
  id: Number;
  editMode = false;
  model: Project;
  concepts: SelectItem[];
  selectedConceptId: number;
  filteredStudentsMultiple: any[];
  concept: Concept;



  constructor(private router: Router, private route: ActivatedRoute,
    private alertService: AlertService,
    private projectService: ProjectService,
    private userService: UserService,
    private conceptService: ConceptService,
    private studentCohortService: StudentCohortService) { }

  ngOnInit() {
    console.log("i am in init");


    this.model = new Project();
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.selectedConceptId = params['conceptId'];

        console.log("ngOnInit id = " + this.id + " or conceptId " + this.selectedConceptId);
        this.editMode = params['id'] != null;
      }
      );

    if (this.editMode) {
      this.editProject();

    }
    if (this.selectedConceptId) {
      this.initForConcept();
    }


  }

  onSubmit() {
    let localUser = this.userService.getLocalUser();
    console.log(this.userService.getLocalUser());
    this.model.user = new User(localUser.userId);
    console.log(this.model.user);
    if (this.model.ProjectId) {
      this.projectService.update(this.model).subscribe(
        data => this.alertService.success("Your new project has been created "),
        error => this.alertService.error(error));
    } else {
      this.projectService.create(this.model).subscribe(
        data => this.alertService.success("Your new project has been created "),
        error => this.alertService.error(error));
    }


  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });

  }
  editProject() {
    console.log(this.editMode);

    this.projectService.getById(this.id).subscribe(
      data => { this.model = data; },
      error => console.log(error)
    );
  }
  initForConcept() {

    this.conceptService.getConceptById(this.selectedConceptId).then(concepts => {
      if (concepts) {
        this.concept = concepts[0];
      }
      if(this.concept){
              this.model.title = this.concept.ConceptTitle;
              this.model.description=this.concept.ConceptDescription;
              this.model.registerToConceptId=this.concept.ConceptId;
      }

    });
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
