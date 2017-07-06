import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/index';
import { environment } from '../../environments/environment';
import { JwtService } from "../utils/jwt.service";


@Injectable()
export class UserService {
    apiUrl = environment.apiUrl + '/api/users';

    constructor(private http: Http, private jwtService: JwtService) { }

    getAll() {
        return this.http.get(this.apiUrl, this.jwtService.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(this.apiUrl + id, this.jwtService.jwt()).map((response: Response) => response.json());
    }
    getByInviteeToken(inviteeToken: string) {
        return this.http.get(this.apiUrl + "/token/" + inviteeToken, this.jwtService.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(this.apiUrl, user, this.jwtService.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put(this.apiUrl, user, this.jwtService.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete(this.apiUrl + id, this.jwtService.jwt()).map((response: Response) => response.json());
    }

    getLocalUser() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.user[0]) {
            let localUser = currentUser.user[0];
            let user = new User(localUser.UserId);
            user.FirstName = localUser.FirstName;
            user.LastName = localUser.LastName;
            user.email = localUser.UserName;
            user.RoleName = localUser.RoleName;

            return user;
        }
    }
}