import { Component, OnInit } from '@angular/core';
import { UserService } from "app/services";
import { User } from "app/models";

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  loggedInUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loggedInUser = this.userService.getLocalUser();

  }

}
