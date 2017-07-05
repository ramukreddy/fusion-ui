import { Component, OnInit } from '@angular/core';
import { Student } from '../../models';
import { StudentCohortService } from "../../services/student-cohort.service";
import { Message } from 'primeng/primeng';



@Component({
  selector: 'app-student-listing',
  templateUrl: './student-listing.component.html',
  styleUrls: ['./student-listing.component.css']
})
export class StudentListingComponent implements OnInit {

  students: Student[];
  model: Student;
  display: boolean = false;
  msgs: Message[] = [];


  constructor(private studentCohortService: StudentCohortService) { }
  ngOnInit() {
    this.model = new Student(-1);
    this.loadStudents();

  }

  showDialog() {
    this.display = true;
  }

  invite(ngForm) {
    console.log(ngForm);
    this.studentCohortService.inviteStudents(this.model, undefined)
      .then(student => {
        console.log(student)
        this.msgs.push({ severity: 'success', summary: 'Invitation sent', detail: '' });
       // ngForm.form.reset();
        this.students.push(student)
        //this.loadStudents();

        // this.display = false;

      })
      .catch(error => {
        console.log(error._body);
        console.log(error._body);
        console.log(error._body.message);

        this.msgs.push({ severity: 'error', summary: 'Invitation failed', detail: error.Response });
      });
  }

  private loadStudents() {
    this.studentCohortService.getStudentCohorts()
      .then(
      students => {
        console.log(students);
        this.students = students;
      },
      error => { console.log(error) }
      );
  }


}
