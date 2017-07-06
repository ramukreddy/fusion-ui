import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MenuItem } from "primeng/primeng";
@Component({
    selector: 'app-project-home',
    templateUrl: './project-home.component.html',
    styleUrls: ['./project-home.component.css']

})
export class ProjectHomeComponent implements OnInit {

    id: number;

    items: MenuItem[];
    activeIndex: number = 1;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params
            .subscribe(
            (params: Params) => {
                this.id = +params['id'];
                console.log("ngOnInit " + this.id);
            }
            );


        this.items = [{
            label: 'Personal',
            command: (event: any) => {
                this.activeIndex = 0;

            }
        },
        {
            label: 'Seat',
            command: (event: any) => {
                this.activeIndex = 1;
            }
        },
        {
            label: 'Payment',
            command: (event: any) => {
                this.activeIndex = 2;
            }
        },
        {
            label: 'Confirmation',
            command: (event: any) => {
                this.activeIndex = 3;
            }
        }
        ];
    }

}
