import { Injectable, Output, EventEmitter  } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';


@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }
  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();

    login(username: string, password: string) {
        let bodyString = JSON.stringify({ username: username, password: password })
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(environment.apiUrl + '/login', bodyString, options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user);
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                                        this.change.emit(user);

                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
    isAuthenticated() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            return currentUser.token != null;

        }
        return false;
    }
}