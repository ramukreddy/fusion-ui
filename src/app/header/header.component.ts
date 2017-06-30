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
  model: User;

  constructor(private authenticationService: AuthenticationService, private router: Router, 
  private userService: UserService) { }

  ngOnInit() {
        console.log("header model on init");;

    this.model = this.userService.getLocalUser();
    console.log("header model :");
    console.log(this.model);
  }

  onLogout() {
    console.log("Onlogout ")
    this.authenticationService.logout();
    this.router.navigateByUrl("/");



  }
}
