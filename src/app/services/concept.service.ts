import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from "@angular/http";
import { Concept, Student, University } from "../models";
import { Observable } from "rxjs/Rx";
import { JwtService } from "../utils/jwt.service";

@Injectable()
export class ConceptService {
  private apiUrl = environment.apiUrl + '/api/concepts';

  constructor(private http: Http, private jwtService: JwtService) { }

  getConceptById(id: number) {
    return this.http.get(this.apiUrl + "/"+id, this.jwtService.jwt())
      .toPromise()
      .then(res => <Concept[]>res.json())
      .catch(this.handleError);
  }

  getAllConcepts(): Observable<Concept[]> {
    return this.http.get(this.apiUrl + "/user/" + this.jwtService.getLocalUser().UserId, this.jwtService.jwt())
      .map(this.extractData)
      .catch(this.handleError);
  }
  getOpenConcepts(): Observable<Concept[]> {
    return this.http.get(this.apiUrl + "/user/" + this.jwtService.getLocalUser().UserId, this.jwtService.jwt())
      .map(this.extractData)
      .catch(this.handleError);
  }
  getRegisteredConcepts(): Observable<Concept[]> {
    return this.http.get(this.apiUrl + "/registered/user/" + this.jwtService.getLocalUser().UserId, this.jwtService.jwt())
      .map(this.extractData)
      .catch(this.handleError);
  }

  RegisterToConcept(conceptId): Observable<Concept> {
    let user = this.jwtService.getLocalUser();
    var regConcept = {};
    regConcept["conceptId"] = conceptId;
    regConcept["userId"] = user.UserId;

    //JSON.parse('{"conceptId:"' + conceptId + ',"userId:"' + user.UserId +'}');
    return this.http.post(this.apiUrl + "/register", regConcept, this.jwtService.jwt())
      .map(this.extractData)
      .catch(this.handleError);

  }

  getUniversitiesForConceptById(id: number): Observable<University[]> {
    return this.http.get("/assets/projects.json", this.jwtService.jwt())
      .map(this.extractData)
      .catch(this.handleError);
  }


  create(concept: Concept): Observable<Concept> {
    concept.user = this.jwtService.getLocalUser();
    return this.http.post(this.apiUrl, concept, this.jwtService.jwt())
      .map(this.extractData)
      .catch(this.handleError);

  }

  selectedConcept = new EventEmitter<Concept>();

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
