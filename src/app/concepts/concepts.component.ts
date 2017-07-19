import { Component, OnInit } from '@angular/core';
import { User } from "../models";
import { UserService } from "../services";

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent implements OnInit {
    loggedInUser:User;

  constructor(private userService:UserService) { }

  ngOnInit() {
        this.loggedInUser=this.userService.getLocalUser();

  }

}
