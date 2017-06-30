import { Component, OnInit, Input } from '@angular/core';
import { Concept } from "../../models";
import { ConfirmationService } from "primeng/primeng";
import { ConceptService } from "../../services/concept.service";
import { AlertService } from "../../services";

@Component({
  selector: 'app-concept-card',
  templateUrl: './concept-card.component.html',
  styleUrls: ['./concept-card.component.css']
})
export class ConceptCardComponent implements OnInit {

  @Input('concept') concept: Concept;
  constructor(private confirmationService: ConfirmationService,
    private conceptService: ConceptService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  RegisterToConcept(conceptId) {

    if (conceptId) {

      this.confirmationService.confirm({
        message: 'We have successfully registered, Would you like to create project?',
        header: 'Confirmation',
        icon: 'fa fa-question-circle',
        accept: () => {
          this.alertService.success("i need call something else");
        },
        reject: () => {
          this.alertService.success("We have successfully registered, ");
        }
      });
    } else {
      this.alertService.error("We are having trouble registering concept");
    }

  }

}
