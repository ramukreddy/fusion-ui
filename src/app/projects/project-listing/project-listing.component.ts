import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService, UserService } from '../../services/index'
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.css']
})
export class ProjectListingComponent implements OnInit {

  projects: Project[];
  error: string;
  constructor(private router: Router, private projectSerive: ProjectService, private userService: UserService) {


  }

  ngOnInit() {

    let localUser = this.userService.getLocalUser();
    this.projectSerive.getAllByUserId(localUser.userId).subscribe(
      data => this.projects = data,
      error => this.error = error.statusText

    );
  }

}
