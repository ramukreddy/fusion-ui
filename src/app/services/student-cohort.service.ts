import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from "@angular/http";
import { Concept, Student, Project } from "../models";
import { Observable } from "rxjs/Rx";
import { JwtService } from "../utils/jwt.service";
@Injectable()
export class StudentCohortService {
  private apiUrl = environment.apiUrl + '/api/studentcohort';


  constructor(private http: Http, private jwtService: JwtService) { }

  getStudentCohorts() {

    return this.http.get(this.apiUrl + "/teacher/" + this.jwtService.getLocalUser().UserId + "/students", this.jwtService.jwt())
      .toPromise()
      .then(res => <Student[]>res.json())
  }

  inviteStudents(student: Student, project: Project) {
    var studentCohort = {
      students: []
    };
    studentCohort['teacherId'] = this.jwtService.getLocalUser().UserId;
    var studentJson = {
      "firstName": student.firstName,
      "lastName": student.lastName,
      "emailId": student.email
    };
    studentCohort.students.push(studentJson);

    return this.http.post(this.apiUrl, studentCohort).toPromise().
    then(res =><Student>res.json() ).catch(error=>error);

  }

  private extractData(res: Response) { 
    let body = res.json();
    return body || {};
  }
  private handleError(error: Response) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      console.log("something went wrong ")
      // errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
