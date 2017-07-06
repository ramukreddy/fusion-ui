import { Component, OnInit } from '@angular/core';
import { User } from "../models";
import { UserService } from "../services";
User
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  loggedInUser:User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.loggedInUser=this.userService.getLocalUser();
  }

}
