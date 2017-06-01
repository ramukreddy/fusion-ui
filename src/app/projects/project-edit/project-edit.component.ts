import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
    model: any = {};

  constructor() { }

  ngOnInit() {
  }

}
