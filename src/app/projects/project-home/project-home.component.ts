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
    // Initialize Firebase
    config = {
        apiKey: "AIzaSyDD_DrNb0OH0hiA2nqknaI0tG9vHfkKXtM",
        authDomain: "praxim-2e6fd.firebaseapp.com",
        databaseURL: "https://praxim-2e6fd.firebaseio.com",
        projectId: "praxim-2e6fd",
        storageBucket: "",
        messagingSenderId: "792112706857"
    };
    firebase = window["firebase"];
    CodeMirror = window["CodeMirror"];
    Firepad = window["Firepad"];

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

        this.initializeFirePad();
    }

    initializeFirePad() {
        this.firebase.initializeApp(this.config);
        // Get Firebase Database reference.
        var firepadRef = this.firebase.database().ref();

        // Create CodeMirror (with lineWrapping on).
        var codeMirror = this.CodeMirror(document.getElementById('firepad'), { lineWrapping: true });

        // Create Firepad (with rich text toolbar and shortcuts enabled).
        var firepad = this.Firepad.fromCodeMirror(firepadRef, codeMirror,
            { richTextShortcuts: true, richTextToolbar: true, defaultText: 'Hello, World!' });
    
             //// Initialize contents.
      firepad.on('ready', function() {
        if (firepad.isHistoryEmpty()) {
          firepad.setHtml(
              '<span style="font-size: 24px;">Rich-text editing with <span style="color: red">Firepad!</span></span><br/>\n' +
              '<br/>' +
              '<div style="font-size: 18px">' +
              'Supports:<br/>' +
              '<ul>' +
                '<li>Different ' +
                  '<span style="font-family: impact">fonts,</span>' +
                  '<span style="font-size: 24px;"> sizes, </span>' +
                  '<span style="color: blue">and colors.</span>' +
                '</li>' +
                '<li>' +
                  '<b>Bold, </b>' +
                  '<i>italic, </i>' +
                  '<u>and underline.</u>' +
                '</li>' +
                '<li>Lists' +
                  '<ol>' +
                    '<li>One</li>' +
                    '<li>Two</li>' +
                  '</ol>' +
                '</li>' +
                '<li>Undo / redo</li>' +
                '<li>Cursor / selection synchronization.</li>' +
                '<li><checkbox></checkbox> It supports customized entities.</li>' +
                '<li>And it\'s all fully collaborative!</li>' +
              '</ul>' +
              '</div>');
        }
      });
    }

}


