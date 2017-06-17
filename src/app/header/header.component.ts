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
  currentUser: User;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')).user[0];


  }

  onLogout() {
    console.log("Onlogout ")
    this.authenticationService.logout();
    this.router.navigateByUrl("/");



  }
}
