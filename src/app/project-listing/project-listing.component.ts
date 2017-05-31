import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProjectService} from '../services/project.service'
import { Project } from '../models/project';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.css']
})
export class ProjectListingComponent implements OnInit {

projects: Array<any>;
error:string;
  constructor(private router: Router,private projectSerive: ProjectService) {
            
    
   }

  ngOnInit() {
    this.projectSerive.getAll().subscribe(
      data =>this.projects=data,
      error =>this.error = error.statusText
      
    );
  }

}
