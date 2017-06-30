import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css']

})
export class ProjectHomeComponent implements OnInit {

  id:number;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
     this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log("ngOnInit "+this.id);
      }
      );
  }

}
