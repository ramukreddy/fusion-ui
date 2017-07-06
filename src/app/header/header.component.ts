import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserService } from "app/services";
import { User } from "app/models";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInUser: User;

  constructor(private authenticationService: AuthenticationService, private router: Router, 
  private userService: UserService) { }

  ngOnInit() {
        console.log("header model on init");;

    this.loggedInUser = this.userService.getLocalUser();
    console.log("header model :");
    console.log(this.loggedInUser);
  }

  onLogout() {
    console.log("Onlogout ")
    this.authenticationService.logout();
    this.router.navigateByUrl("/");



  }
}
