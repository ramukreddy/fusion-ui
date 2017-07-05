import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Message } from 'primeng/primeng';
import { Student } from "../models";
import { AlertService, StudentCohortService } from "../services";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  model: Student;
  display: boolean = false;
  msgs: Message[] = [];

  constructor(private router: Router,
    private alertService: AlertService,
    private studentCohortService: StudentCohortService) { }

  ngOnInit() {
    this.model = new Student(-1);
  }


 
}
