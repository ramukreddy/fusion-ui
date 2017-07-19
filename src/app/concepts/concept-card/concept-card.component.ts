import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Concept, User } from "../../models";
import { ConfirmationService } from "primeng/primeng";
import { ConceptService, UserService } from "../../services";
import { AlertService } from "../../services";

@Component({
  selector: 'app-concept-card',
  templateUrl: './concept-card.component.html',
  styleUrls: ['./concept-card.component.css']
})
export class ConceptCardComponent implements OnInit {
  loggedInUser: User;

  selectedconcept: Concept;
  @Input('concept') concept: Concept;
  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private conceptService: ConceptService,
    private alertService: AlertService,
    private userService: UserService) { }

  ngOnInit() {
    this.loggedInUser = this.userService.getLocalUser();
  }

  RegisterToConcept(selectedconcept) {
    this.selectedconcept = selectedconcept;
    if (selectedconcept) {

      this.confirmationService.confirm({
        message: 'We have successfully registered, Would you like to create project?',
        header: 'Confirmation',
        icon: 'fa fa-question-circle',
        accept: () => {
          this.conceptService.selectedConcept.emit(this.selectedconcept);
          this.router.navigate(['../projects/new/concept/'+this.selectedconcept.ConceptId]);
        },
        reject: () => {
          this.alertService.success("We have successfully registered! ");
        }
      });
    } else {
      this.alertService.error("We are having trouble registering concept");
    }

  }

}
