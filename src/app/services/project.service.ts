import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map'

import { Project } from '../models/project';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs/Observable";


@Injectable()
export class ProjectService {
    apiUrl = environment.apiUrl + '/api/projects';
    // apiUrl = "https://s3.amazonaws.com/praximlearning/projects.json";
    constructor(private http: Http) { }

    getAllByUserId(userId: Number): Observable<Project[]> {
        return this.http.get(this.apiUrl + "/user/" + userId).map(function (res) {
            var data = res.json();
            console.log(data);
            return data;
        })
    }

    getAllByStudentId(userId: Number): Observable<Project[]> {
        return this.http.get(this.apiUrl + "/students/" + userId).map(function (res) {
            var data = res.json();
            console.log(data);
            return data;
        })
    }

    getById(id: Number) {
        return this.http.get(this.apiUrl + "/" + id, this.jwt())
            .map((response: Response) => {
                let resJson = response.json();
                console.log(resJson);
                if (resJson) {
                    let resProject = resJson[0];
                    let project: Project = new Project();
                    project.ProjectId = resProject.ProjectId;
                    project.title = resProject.ProjectTitle;
                    project.description = resProject.ProjectDescription;
                    project.startDate = new Date(resProject.ProjectStartDate);
                    project.endDate = new Date(resProject.ProjectEndDate);
                    return project;

                }
            })
            .catch((error: Response) => {
                let errMsg: string;
                if (error instanceof Response) {
                    const body = error.json() || '';
                    const err = body.error || JSON.stringify(body);
                    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
                } else {
                    console.log("something went wrong " + error);
                    // errMsg = error.message ? error.message : error.toString();
                }
                return Observable.throw(errMsg);
            }
            );
    }

    create(project: Project) {
        return this.http.post(this.apiUrl, project).map((response: Response) => response.json());
    }

    update(project: Project) {
        return this.http.put(this.apiUrl + project.ProjectId, project, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete(this.apiUrl + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }




}