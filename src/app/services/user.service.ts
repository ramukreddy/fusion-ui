import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/index';
import { environment } from '../../environments/environment';


@Injectable()
export class UserService {
    apiUrl = environment.apiUrl+'/api/users';
    constructor(private http: Http) { }

    getAll() {
        return this.http.get(this.apiUrl, this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(this.apiUrl+ id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(this.apiUrl, user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put(this.apiUrl + user.id, user, this.jwt()).map((response: Response) => response.json());
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