webpackJsonp([1,5],{

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "\n.panel-body {\n\tpadding:5px;\n}\n.panel.with-nav-tabs .panel-heading{\n    padding: 5px 5px 0 5px;\n}\n.panel.with-nav-tabs .nav-tabs{\n\tborder-bottom: none;\n}\n.panel.with-nav-tabs .nav-justified{\n\tmargin-bottom: -1px;\n}\n/********************************************************************/\n/*** PANEL SUCCESS ***/\n.with-nav-tabs.panel-success .nav-tabs > li > a,\n.with-nav-tabs.panel-success .nav-tabs > li > a:hover,\n.with-nav-tabs.panel-success .nav-tabs > li > a:focus {\n\tcolor: #3c763d;\n}\n.with-nav-tabs.panel-success .nav-tabs > .open > a,\n.with-nav-tabs.panel-success .nav-tabs > .open > a:hover,\n.with-nav-tabs.panel-success .nav-tabs > .open > a:focus,\n.with-nav-tabs.panel-success .nav-tabs > li > a:hover,\n.with-nav-tabs.panel-success .nav-tabs > li > a:focus {\n\tcolor: #3c763d;\n\tbackground-color: #d6e9c6;\n\tborder-color: transparent;\n}\n.with-nav-tabs.panel-success .nav-tabs > li.active > a,\n.with-nav-tabs.panel-success .nav-tabs > li.active > a:hover,\n.with-nav-tabs.panel-success .nav-tabs > li.active > a:focus {\n\tcolor: #3c763d;\n\tbackground-color: #fff;\n\tborder-color: #d6e9c6;\n\tborder-bottom-color: transparent;\n}\n.with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu {\n    background-color: #dff0d8;\n    border-color: #d6e9c6;\n}\n.with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > li > a {\n    color: #3c763d;   \n}\n.with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > li > a:hover,\n.with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > li > a:focus {\n    background-color: #d6e9c6;\n}\n.with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > .active > a,\n.with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > .active > a:hover,\n.with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #3c763d;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_concept_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConceptEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConceptEditComponent = (function () {
    function ConceptEditComponent(router, route, conceptService, alertService) {
        this.router = router;
        this.route = route;
        this.conceptService = conceptService;
        this.alertService = alertService;
    }
    ConceptEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* Concept */]();
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    ConceptEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../list/available'], { relativeTo: this.route });
    };
    ConceptEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.conceptService.create(this.model).subscribe(function (data) {
            _this.alertService.success("Your new concept has been created, will automatically redirect to your concepts  "),
                console.log(data);
            _this.model = new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* Concept */]();
            setTimeout(function (router) {
                _this.router.navigate(['../list/available'], { relativeTo: _this.route });
            }, 3000); //5s
        }, function (error) {
            _this.alertService.error(" unknown error " + error);
        });
        console.log(this.model);
    };
    ConceptEditComponent.prototype.initForm = function () {
    };
    return ConceptEditComponent;
}());
ConceptEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-concept-edit',
        template: __webpack_require__(427),
        styles: [__webpack_require__(328)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_concept_service__["a" /* ConceptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_concept_service__["a" /* ConceptService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["a" /* AlertService */]) === "function" && _d || Object])
], ConceptEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=concept-edit.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConceptHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConceptHomeComponent = (function () {
    function ConceptHomeComponent(route, userService, conceptService) {
        this.route = route;
        this.userService = userService;
        this.conceptService = conceptService;
    }
    ConceptHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInUser = this.userService.getLocalUser();
        this.concept = new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* Concept */]();
        this.route.params
            .subscribe(function (params) {
            _this.conceptId = params['id'];
            console.log("ngOnInit " + _this.conceptId);
        });
        if (this.conceptId) {
            this.initConcept();
        }
    };
    ConceptHomeComponent.prototype.initConcept = function () {
        this.concept = new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* Concept */]();
        this.concept.ConceptTitle = " To better understand how the brain controls movement.";
        this.concept.ConceptDescription = "Movement disorders have many different causes and symptoms. Researchers still do not fully understand which parts of the brain are involved in fine movement. They want to learn about which brain regions could be abnormal in people with movement disorders.";
        this.loadUniversities();
        // this.conceptService.
    };
    ConceptHomeComponent.prototype.loadUniversities = function () {
        var _this = this;
        this.conceptService.getUniversitiesForConceptById(this.conceptId).subscribe(function (data) {
            console.log(data);
            _this.universities = data;
        }, function (error) {
            console.log(error);
        });
    };
    return ConceptHomeComponent;
}());
ConceptHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-concept-home',
        template: __webpack_require__(428),
        styles: [__webpack_require__(329)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["c" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services__["d" /* ConceptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["d" /* ConceptService */]) === "function" && _c || Object])
], ConceptHomeComponent);

var _a, _b, _c;
//# sourceMappingURL=concept-home.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_concept_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConceptAvailableListingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConceptAvailableListingComponent = (function () {
    function ConceptAvailableListingComponent(router, route, conceptService, alertService, userService) {
        this.router = router;
        this.route = route;
        this.conceptService = conceptService;
        this.alertService = alertService;
        this.userService = userService;
    }
    ConceptAvailableListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInUser = this.userService.getLocalUser();
        if (this.loggedInUser.isAdmin()) {
            this.header = " My Concepts";
        }
        if (this.loggedInUser.isTeacher()) {
            this.header = " Available Concepts";
        }
        this.conceptService.getOpenConcepts().subscribe(function (data) {
            _this.concepts = data;
            console.log(_this.concepts);
            if (_this.concepts.length < 1) {
                _this.alertService.success("You do not have any concepts available this time");
            }
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    ConceptAvailableListingComponent.prototype.onTabChange = function (event) {
        console.log(event);
    };
    return ConceptAvailableListingComponent;
}());
ConceptAvailableListingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-available-concept-listing',
        template: __webpack_require__(429),
        styles: [__webpack_require__(110)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_concept_service__["a" /* ConceptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_concept_service__["a" /* ConceptService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* UserService */]) === "function" && _e || Object])
], ConceptAvailableListingComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=concept-available-listing.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_concept_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConceptListingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConceptListingComponent = (function () {
    function ConceptListingComponent(router, route, conceptService, alertService, userService) {
        this.router = router;
        this.route = route;
        this.conceptService = conceptService;
        this.alertService = alertService;
        this.userService = userService;
    }
    ConceptListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInUser = this.userService.getLocalUser();
        this.route.params
            .subscribe(function (params) {
            _this.type = params['type'];
            console.log("ngOnInit " + _this.type);
        });
        if (this.type) {
            switch (this.type) {
                case "my":
                    this.conceptService.getRegisteredConcepts().subscribe(function (data) {
                        _this.concepts = data;
                        console.log(_this.concepts);
                    }, function (error) {
                        _this.alertService.error(error);
                    });
                    break;
                case "available":
                    this.conceptService.getAllConcepts().subscribe(function (data) {
                        _this.concepts = data;
                        if (_this.concepts.length < 1) {
                            _this.alertService.success("You do not have any concepts available this time");
                        }
                    }, function (error) {
                        _this.alertService.error(error);
                    });
                    break;
                case "open":
                    this.conceptService.getOpenConcepts().subscribe(function (data) {
                        _this.concepts = new Array();
                        if (_this.concepts && _this.concepts.length < 1) {
                            _this.alertService.success("You do not have any concepts available this time ");
                        }
                        console.log(_this.concepts);
                    }, function (error) {
                        _this.alertService.error(error);
                    });
                    break;
                default:
                    this.alertService.success("You do not have any concepts available this time ");
                    break;
            }
        }
    };
    ConceptListingComponent.prototype.onTabChange = function (event) {
        console.log(event);
    };
    return ConceptListingComponent;
}());
ConceptListingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-concept-listing',
        template: __webpack_require__(430),
        styles: [__webpack_require__(110)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_concept_service__["a" /* ConceptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_concept_service__["a" /* ConceptService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* UserService */]) === "function" && _e || Object])
], ConceptListingComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=concept-listing.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_concept_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConceptRegisteredListingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConceptRegisteredListingComponent = (function () {
    function ConceptRegisteredListingComponent(router, route, conceptService, alertService, userService) {
        this.router = router;
        this.route = route;
        this.conceptService = conceptService;
        this.alertService = alertService;
        this.userService = userService;
    }
    ConceptRegisteredListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.header = " My Registered concepts";
        this.loggedInUser = this.userService.getLocalUser();
        this.conceptService.getRegisteredConcepts().subscribe(function (data) {
            _this.concepts = data;
            _this.concepts.forEach(function (concept) {
                concept.user = _this.loggedInUser;
            });
            console.log(_this.concepts);
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    ConceptRegisteredListingComponent.prototype.onTabChange = function (event) {
        console.log(event);
    };
    return ConceptRegisteredListingComponent;
}());
ConceptRegisteredListingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-concept-registered-listing',
        template: __webpack_require__(431),
        styles: [__webpack_require__(110)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_concept_service__["a" /* ConceptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_concept_service__["a" /* ConceptService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* UserService */]) === "function" && _e || Object])
], ConceptRegisteredListingComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=concept-registered-listing.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConceptsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConceptsComponent = (function () {
    function ConceptsComponent(userService) {
        this.userService = userService;
    }
    ConceptsComponent.prototype.ngOnInit = function () {
        this.loggedInUser = this.userService.getLocalUser();
    };
    return ConceptsComponent;
}());
ConceptsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-concepts',
        template: __webpack_require__(432),
        styles: [__webpack_require__(330)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["c" /* UserService */]) === "function" && _a || Object])
], ConceptsComponent);

var _a;
//# sourceMappingURL=concepts.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_component__ = __webpack_require__(245);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__ = __webpack_require__(246);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__(247);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(249);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService, userService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.userService = userService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.loggedInUser = _this.userService.getLocalUser();
            if (_this.loggedInUser.isAdmin()) {
                _this.router.navigate(["/concepts/list/available"]);
            }
            else {
                _this.router.navigate(["/projects"]);
            }
        }, function (error) {
            if (error.status == 401) {
                _this.alertService.error("Please try again, or request your forgotten username or password.");
            }
            else {
                _this.alertService.error(error);
            }
            _this.loading = false;
            console.log(error);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(164),
        styles: [__webpack_require__(333)]
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(164)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* UserService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_index__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_concept_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectEditComponent = (function () {
    function ProjectEditComponent(router, route, alertService, projectService, userService, conceptService, studentCohortService) {
        this.router = router;
        this.route = route;
        this.alertService = alertService;
        this.projectService = projectService;
        this.userService = userService;
        this.conceptService = conceptService;
        this.studentCohortService = studentCohortService;
        this.editMode = false;
    }
    ProjectEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("i am in init");
        this.model = new __WEBPACK_IMPORTED_MODULE_3__models_index__["d" /* Project */]();
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.selectedConceptId = params['conceptId'];
            console.log("ngOnInit id = " + _this.id + " or conceptId " + _this.selectedConceptId);
            _this.editMode = params['id'] != null;
        });
        if (this.editMode) {
            this.editProject();
        }
        if (this.selectedConceptId) {
            this.initForConcept();
        }
    };
    ProjectEditComponent.prototype.onSubmit = function () {
        var _this = this;
        var localUser = this.userService.getLocalUser();
        console.log(this.userService.getLocalUser());
        this.model.user = new __WEBPACK_IMPORTED_MODULE_3__models_index__["a" /* User */](localUser.userId);
        console.log(this.model.user);
        if (this.model.ProjectId) {
            this.projectService.update(this.model).subscribe(function (data) { return _this.alertService.success("Your new project has been created "); }, function (error) { return _this.alertService.error(error); });
        }
        else {
            this.projectService.create(this.model).subscribe(function (data) { return _this.alertService.success("Your new project has been created "); }, function (error) { return _this.alertService.error(error); });
        }
    };
    ProjectEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    ProjectEditComponent.prototype.editProject = function () {
        var _this = this;
        console.log(this.editMode);
        this.projectService.getById(this.id).subscribe(function (data) { _this.model = data; }, function (error) { return console.log(error); });
    };
    ProjectEditComponent.prototype.initForConcept = function () {
        var _this = this;
        this.conceptService.getConceptById(this.selectedConceptId).then(function (concepts) {
            if (concepts) {
                _this.concept = concepts[0];
            }
            if (_this.concept) {
                _this.model.title = _this.concept.ConceptTitle;
                _this.model.description = _this.concept.ConceptDescription;
                _this.model.registerToConceptId = _this.concept.ConceptId;
            }
        });
    };
    ProjectEditComponent.prototype.filterStudentMultiple = function (event) {
        var _this = this;
        var query = event.query;
        this.studentCohortService.getStudentCohorts().then(function (students) {
            _this.filteredStudentsMultiple = _this.filterStudents(query, students);
        });
    };
    ProjectEditComponent.prototype.filterStudents = function (query, students) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < students.length; i++) {
            var student = students[i];
            if (student.FirstName) {
                if (student.FirstName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                    filtered.push(student);
                }
            }
        }
        return filtered;
    };
    return ProjectEditComponent;
}());
ProjectEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-edit',
        template: __webpack_require__(437),
        styles: [__webpack_require__(335)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* ProjectService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_concept_service__["a" /* ConceptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_concept_service__["a" /* ConceptService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* StudentCohortService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* StudentCohortService */]) === "function" && _g || Object])
], ProjectEditComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=project-edit.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectHomeComponent = (function () {
    function ProjectHomeComponent(route) {
        this.route = route;
        this.activeIndex = 1;
        // Initialize Firebase
        this.config = {
            apiKey: "AIzaSyDD_DrNb0OH0hiA2nqknaI0tG9vHfkKXtM",
            authDomain: "praxim-2e6fd.firebaseapp.com",
            databaseURL: "https://praxim-2e6fd.firebaseio.com",
            projectId: "praxim-2e6fd",
            storageBucket: "",
            messagingSenderId: "792112706857"
        };
        this.firebase = window["firebase"];
        this.CodeMirror = window["CodeMirror"];
        this.Firepad = window["Firepad"];
    }
    ProjectHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            console.log("ngOnInit " + _this.id);
        });
        this.items = [{
                label: 'Personal',
                command: function (event) {
                    _this.activeIndex = 0;
                }
            },
            {
                label: 'Seat',
                command: function (event) {
                    _this.activeIndex = 1;
                }
            },
            {
                label: 'Payment',
                command: function (event) {
                    _this.activeIndex = 2;
                }
            },
            {
                label: 'Confirmation',
                command: function (event) {
                    _this.activeIndex = 3;
                }
            }
        ];
        this.initializeFirePad();
    };
    ProjectHomeComponent.prototype.initializeFirePad = function () {
        this.firebase.initializeApp(this.config);
        // Get Firebase Database reference.
        var firepadRef = this.firebase.database().ref();
        // Create CodeMirror (with lineWrapping on).
        var codeMirror = this.CodeMirror(document.getElementById('firepad'), { lineWrapping: true });
        // Create Firepad (with rich text toolbar and shortcuts enabled).
        var firepad = this.Firepad.fromCodeMirror(firepadRef, codeMirror, { richTextShortcuts: true, richTextToolbar: true, defaultText: 'Hello, World!' });
        //// Initialize contents.
        firepad.on('ready', function () {
            if (firepad.isHistoryEmpty()) {
                firepad.setHtml('<span style="font-size: 24px;">Rich-text editing with <span style="color: red">Firepad!</span></span><br/>\n' +
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
    };
    return ProjectHomeComponent;
}());
ProjectHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-home',
        template: __webpack_require__(438),
        styles: [__webpack_require__(336)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object])
], ProjectHomeComponent);

var _a;
//# sourceMappingURL=project-home.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectListingComponent = (function () {
    function ProjectListingComponent(router, projectSerive, userService) {
        this.router = router;
        this.projectSerive = projectSerive;
        this.userService = userService;
    }
    ProjectListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        var localUser = this.userService.getLocalUser();
        this.projectSerive.getAllByUserId(localUser.userId).subscribe(function (data) { return _this.projects = data; }, function (error) { return _this.error = error.statusText; });
    };
    return ProjectListingComponent;
}());
ProjectListingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-listing',
        template: __webpack_require__(440),
        styles: [__webpack_require__(338)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* ProjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* UserService */]) === "function" && _c || Object])
], ProjectListingComponent);

var _a, _b, _c;
//# sourceMappingURL=project-listing.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



__WEBPACK_IMPORTED_MODULE_1__models__["a" /* User */];
var ProjectsComponent = (function () {
    function ProjectsComponent(userService) {
        this.userService = userService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.loggedInUser = this.userService.getLocalUser();
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(441),
        styles: [__webpack_require__(339)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* UserService */]) === "function" && _a || Object])
], ProjectsComponent);

var _a;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_component__ = __webpack_require__(257);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__register_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_project__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectService = (function () {
    // apiUrl = "https://s3.amazonaws.com/praximlearning/projects.json";
    function ProjectService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + '/api/projects';
    }
    ProjectService.prototype.getAllByUserId = function (userId) {
        return this.http.get(this.apiUrl + "/user/" + userId).map(function (res) {
            var data = res.json();
            console.log(data);
            return data;
        });
    };
    ProjectService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/" + id, this.jwt())
            .map(function (response) {
            var resJson = response.json();
            console.log(resJson);
            if (resJson) {
                var resProject = resJson[0];
                var project = new __WEBPACK_IMPORTED_MODULE_3__models_project__["a" /* Project */]();
                project.ProjectId = resProject.ProjectId;
                project.title = resProject.ProjectTitle;
                project.description = resProject.ProjectDescription;
                project.startDate = new Date(resProject.ProjectStartDate);
                project.endDate = new Date(resProject.ProjectEndDate);
                return project;
            }
        })
            .catch(function (error) {
            var errMsg;
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
                var body = error.json() || '';
                var err = body.error || JSON.stringify(body);
                errMsg = error.status + " - " + (error.statusText || '') + " " + err;
            }
            else {
                console.log("something went wrong " + error);
                // errMsg = error.message ? error.message : error.toString();
            }
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(errMsg);
        });
    };
    ProjectService.prototype.create = function (project) {
        return this.http.post(this.apiUrl, project).map(function (response) { return response.json(); });
    };
    ProjectService.prototype.update = function (project) {
        return this.http.put(this.apiUrl + project.ProjectId, project, this.jwt()).map(function (response) { return response.json(); });
    };
    ProjectService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + id, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    ProjectService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        }
    };
    return ProjectService;
}());
ProjectService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ProjectService);

var _a;
//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_student_cohort_service__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentListingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentListingComponent = (function () {
    function StudentListingComponent(studentCohortService) {
        this.studentCohortService = studentCohortService;
        this.display = false;
        this.msgs = [];
    }
    StudentListingComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__models__["c" /* Student */](-1);
        this.loadStudents();
    };
    StudentListingComponent.prototype.showDialog = function () {
        this.display = true;
    };
    StudentListingComponent.prototype.invite = function (ngForm) {
        var _this = this;
        console.log(ngForm);
        this.studentCohortService.inviteStudents(this.model, undefined)
            .then(function (student) {
            console.log(student);
            _this.msgs.push({ severity: 'success', summary: 'Invitation sent', detail: '' });
            // ngForm.form.reset();
            _this.students.push(student);
            //this.loadStudents();
            // this.display = false;
        })
            .catch(function (error) {
            console.log(error._body);
            console.log(error._body);
            console.log(error._body.message);
            _this.msgs.push({ severity: 'error', summary: 'Invitation failed', detail: error.Response });
        });
    };
    StudentListingComponent.prototype.loadStudents = function () {
        var _this = this;
        this.studentCohortService.getStudentCohorts()
            .then(function (students) {
            console.log(students);
            _this.students = students;
        }, function (error) { console.log(error); });
    };
    return StudentListingComponent;
}());
StudentListingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-student-listing',
        template: __webpack_require__(443),
        styles: [__webpack_require__(340)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_student_cohort_service__["a" /* StudentCohortService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_student_cohort_service__["a" /* StudentCohortService */]) === "function" && _a || Object])
], StudentListingComponent);

var _a;
//# sourceMappingURL=student-listing.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentsComponent = (function () {
    function StudentsComponent(router, alertService, studentCohortService) {
        this.router = router;
        this.alertService = alertService;
        this.studentCohortService = studentCohortService;
        this.display = false;
        this.msgs = [];
    }
    StudentsComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* Student */](-1);
    };
    return StudentsComponent;
}());
StudentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-students',
        template: __webpack_require__(444),
        styles: [__webpack_require__(341)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services__["e" /* StudentCohortService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["e" /* StudentCohortService */]) === "function" && _c || Object])
], StudentsComponent);

var _a, _b, _c;
//# sourceMappingURL=students.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-wrapper\">\n    <form class=\"login\" name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\">\n        <label class=\"title\">\n            <h3 class=\"welcome\">Welcome to</h3>\n            Praxim Learning\n            <h5 class=\"hint\">Use your Username and password to sign in or create one now</h5>\n        </label>\n        <div class=\"login-group\">\n\n            <input class=\"username\" type=\"email\" placeholder=\"Email\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\"\n                #username=\"ngModel\" required email=\"true\" />\n            <input type=\"password\" placeholder=\"Password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\n                required />\n            <div class=\"checkbox\">\n                <input type=\"checkbox\" id=\"rememberme\">\n                <label for=\"rememberme\">\n                    Remember me\n                </label>\n            </div>\n                <alert></alert>\n            <button type=\"submit\" class=\"btn btn-primary\">NEXT</button>\n            <a [routerLink]=\"['/register']\" class=\"signup\">Create new accout</a> \n        </div>\n    </form>\n</div>"

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__(258);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__(259);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(260);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_service__ = __webpack_require__(142);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__project_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_cohort_service__ = __webpack_require__(91);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__student_cohort_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__concept_service__ = __webpack_require__(46);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__concept_service__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 220;


/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(51);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(425),
        styles: [__webpack_require__(326)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clarity_angular__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_index__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_index__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_index__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_index__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_index__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__projects_project_listing_project_listing_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_project_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__projects_project_card_project_card_component__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__header_header_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__concepts_concept_card_concept_card_component__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__concepts_concept_listing_concept_listing_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__concepts_concept_listing_concept_registered_listing_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__concepts_concept_listing_concept_available_listing_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__projects_project_edit_project_edit_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__projects_projects_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__concepts_concepts_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__projects_project_home_project_home_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__students_students_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__students_student_listing_student_listing_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__concepts_concept_edit_concept_edit_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_concept_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__utils_jwt_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_student_cohort_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__concepts_concept_home_concept_home_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__projects_project_home_project_timeline_project_timeline_component__ = __webpack_require__(256);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__directives_index__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_10__directives_index__["b" /* DropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_13__home_index__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__register_index__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__projects_project_listing_project_listing_component__["a" /* ProjectListingComponent */],
            __WEBPACK_IMPORTED_MODULE_17__projects_project_card_project_card_component__["a" /* ProjectCardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_19__concepts_concept_card_concept_card_component__["a" /* ConceptCardComponent */],
            __WEBPACK_IMPORTED_MODULE_20__concepts_concept_listing_concept_listing_component__["a" /* ConceptListingComponent */],
            __WEBPACK_IMPORTED_MODULE_21__concepts_concept_listing_concept_registered_listing_component__["a" /* ConceptRegisteredListingComponent */],
            __WEBPACK_IMPORTED_MODULE_22__concepts_concept_listing_concept_available_listing_component__["a" /* ConceptAvailableListingComponent */],
            __WEBPACK_IMPORTED_MODULE_23__projects_project_edit_project_edit_component__["a" /* ProjectEditComponent */],
            __WEBPACK_IMPORTED_MODULE_24__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__concepts_concepts_component__["a" /* ConceptsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__projects_project_home_project_home_component__["a" /* ProjectHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_27__students_students_component__["a" /* StudentsComponent */],
            __WEBPACK_IMPORTED_MODULE_28__students_student_listing_student_listing_component__["a" /* StudentListingComponent */],
            __WEBPACK_IMPORTED_MODULE_29__concepts_concept_edit_concept_edit_component__["a" /* ConceptEditComponent */],
            __WEBPACK_IMPORTED_MODULE_33__concepts_concept_home_concept_home_component__["a" /* ConceptHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_34__projects_project_home_project_timeline_project_timeline_component__["a" /* ProjectTimelineComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["a" /* ClarityModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["EditorModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["PanelModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["AutoCompleteModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["GrowlModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["MessagesModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CheckboxModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SpinnerModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DataScrollerModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["StepsModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["FieldsetModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["AccordionModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__guards_index__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_12__services_index__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_12__services_index__["b" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_12__services_index__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_16__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_30__services_concept_service__["a" /* ConceptService */],
            __WEBPACK_IMPORTED_MODULE_31__utils_jwt_service__["a" /* JwtService */],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_32__services_student_cohort_service__["a" /* StudentCohortService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_index__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_index__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_index__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projects_projects_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_project_listing_project_listing_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projects_project_edit_project_edit_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_project_home_project_home_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__concepts_concept_listing_concept_listing_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__concepts_concepts_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__concepts_concept_edit_concept_edit_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__students_students_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__students_student_listing_student_listing_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__concepts_concept_home_concept_home_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__concepts_concept_listing_concept_registered_listing_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__concepts_concept_listing_concept_available_listing_component__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_index__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_index__["a" /* HomeComponent */] },
    {
        path: 'register/:id', component: __WEBPACK_IMPORTED_MODULE_2__register_index__["a" /* RegisterComponent */]
    },
    {
        path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__register_index__["a" /* RegisterComponent */]
    },
    {
        path: 'projects', component: __WEBPACK_IMPORTED_MODULE_5__projects_projects_component__["a" /* ProjectsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__projects_project_listing_project_listing_component__["a" /* ProjectListingComponent */] },
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_7__projects_project_edit_project_edit_component__["a" /* ProjectEditComponent */] },
            { path: 'new/concept/:conceptId', component: __WEBPACK_IMPORTED_MODULE_7__projects_project_edit_project_edit_component__["a" /* ProjectEditComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_8__projects_project_home_project_home_component__["a" /* ProjectHomeComponent */] },
            { path: ':id/edit', component: __WEBPACK_IMPORTED_MODULE_7__projects_project_edit_project_edit_component__["a" /* ProjectEditComponent */] }
        ]
    },
    {
        path: 'concepts', component: __WEBPACK_IMPORTED_MODULE_10__concepts_concepts_component__["a" /* ConceptsComponent */], children: [
            {
                path: 'list', component: __WEBPACK_IMPORTED_MODULE_9__concepts_concept_listing_concept_listing_component__["a" /* ConceptListingComponent */], children: [
                    { path: 'registered', component: __WEBPACK_IMPORTED_MODULE_15__concepts_concept_listing_concept_registered_listing_component__["a" /* ConceptRegisteredListingComponent */] },
                    { path: 'available', component: __WEBPACK_IMPORTED_MODULE_16__concepts_concept_listing_concept_available_listing_component__["a" /* ConceptAvailableListingComponent */] }
                ]
            },
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_11__concepts_concept_edit_concept_edit_component__["a" /* ConceptEditComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_14__concepts_concept_home_concept_home_component__["a" /* ConceptHomeComponent */] }
        ]
    },
    {
        path: 'students', component: __WEBPACK_IMPORTED_MODULE_12__students_students_component__["a" /* StudentsComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_13__students_student_listing_student_listing_component__["a" /* StudentListingComponent */] },
            { path: 'invite', component: __WEBPACK_IMPORTED_MODULE_2__register_index__["a" /* RegisterComponent */] }
        ]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConceptCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConceptCardComponent = (function () {
    function ConceptCardComponent(router, confirmationService, conceptService, alertService, userService) {
        this.router = router;
        this.confirmationService = confirmationService;
        this.conceptService = conceptService;
        this.alertService = alertService;
        this.userService = userService;
    }
    ConceptCardComponent.prototype.ngOnInit = function () {
        this.loggedInUser = this.userService.getLocalUser();
        if (this.concept && this.concept.user) {
            var registeredUserId = this.concept.user.userId;
            if (registeredUserId == this.loggedInUser.userId) {
                this.isAlreadyRegistered = true;
            }
        }
    };
    ConceptCardComponent.prototype.RegisterToConcept = function (selectedconcept) {
        var _this = this;
        this.selectedconcept = selectedconcept;
        console.log(this.selectedconcept.ConceptId);
        if (selectedconcept) {
            this.conceptService.RegisterToConcept(this.selectedconcept.ConceptId).subscribe(function (data) {
                _this.confirmationService.confirm({
                    message: 'We have successfully registered, Would you like to create project?',
                    header: 'Confirmation',
                    icon: 'fa fa-question-circle',
                    accept: function () {
                        _this.conceptService.selectedConcept.emit(_this.selectedconcept);
                        _this.router.navigate(['../projects/new/concept/' + _this.selectedconcept.ConceptId]);
                    },
                    reject: function () {
                        _this.alertService.success("We have successfully registered! ");
                    }
                });
            }, function (error) {
                _this.alertService.error("We are having trouble registering concept");
            });
        }
        else {
            this.alertService.error("We are having trouble registering concept");
        }
    };
    return ConceptCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('concept'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models__["b" /* Concept */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models__["b" /* Concept */]) === "function" && _a || Object)
], ConceptCardComponent.prototype, "concept", void 0);
ConceptCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-concept-card',
        template: __webpack_require__(426),
        styles: [__webpack_require__(327)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services__["d" /* ConceptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["d" /* ConceptService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["a" /* AlertService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["c" /* UserService */]) === "function" && _f || Object])
], ConceptCardComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=concept-card.component.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'alert',
        template: __webpack_require__(433)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    return DropdownDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "isOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appDropdown]'
    })
], DropdownDirective);

//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(authenticationService, router, userService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.userService = userService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        console.log("header model on init");
        ;
        this.loggedInUser = this.userService.getLocalUser();
        console.log("header model :");
        console.log(this.loggedInUser);
    };
    HeaderComponent.prototype.onLogout = function () {
        console.log("Onlogout ");
        this.authenticationService.logout();
        this.router.navigateByUrl("/");
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(434),
        styles: [__webpack_require__(331)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services__["b" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services__["b" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_services__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services__["c" /* UserService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(435),
        styles: [__webpack_require__(332)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* UserService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Company */
var Company = (function () {
    function Company() {
    }
    return Company;
}());

//# sourceMappingURL=company.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Concept; });
var Concept = (function () {
    function Concept() {
    }
    return Concept;
}());

//# sourceMappingURL=concept.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Student; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Student;
}(__WEBPACK_IMPORTED_MODULE_0__models__["a" /* User */]));

//# sourceMappingURL=student.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export University */
var University = (function () {
    function University() {
    }
    return University;
}());

//# sourceMappingURL=university.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(userIdentifucation) {
        this.fullName = this.LastName + "," + this.FirstName;
        this.userId = userIdentifucation;
    }
    ;
    User.prototype.isAdmin = function () {
        if (this.RoleName == 'CompanyAdmin')
            return true;
    };
    User.prototype.isTeacher = function () {
        if (this.RoleName == 'Teacher')
            return true;
    };
    User.prototype.isStudent = function () {
        if (this.RoleName == 'Student')
            return true;
    };
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_project__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectCardComponent = (function () {
    function ProjectCardComponent() {
    }
    ProjectCardComponent.prototype.ngOnInit = function () {
    };
    return ProjectCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('project'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]) === "function" && _a || Object)
], ProjectCardComponent.prototype, "project", void 0);
ProjectCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-card',
        template: __webpack_require__(436),
        styles: [__webpack_require__(334)]
    }),
    __metadata("design:paramtypes", [])
], ProjectCardComponent);

var _a;
//# sourceMappingURL=project-card.component.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectTimelineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectTimelineComponent = (function () {
    function ProjectTimelineComponent() {
    }
    ProjectTimelineComponent.prototype.ngOnInit = function () {
    };
    return ProjectTimelineComponent;
}());
ProjectTimelineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-timeline',
        template: __webpack_require__(439),
        styles: [__webpack_require__(337)]
    }),
    __metadata("design:paramtypes", [])
], ProjectTimelineComponent);

//# sourceMappingURL=project-timeline.component.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService, route) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.route = route;
        this.loading = false;
        this.msgs = [];
        console.log(this.route.snapshot.params);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("nginit");
        this.model = new __WEBPACK_IMPORTED_MODULE_3__models__["a" /* User */](-1);
        this.route.params
            .subscribe(function (params) {
            _this.inviteeToken = params['id'];
            console.log("ngOnInit " + params['id']);
        });
        // this.inviteeToken = 'c23ef382-f40f-421b-b9eb-139d17b7b859';
        if (this.inviteeToken) {
            this.userService.getByInviteeToken(this.inviteeToken).subscribe(function (data) {
                _this.model = new __WEBPACK_IMPORTED_MODULE_3__models__["a" /* User */](data[0].UserId);
                _this.model.email = data[0].UserName;
                _this.model.FirstName = data[0].FirstName;
                _this.model.LastName = data[0].LastName;
            }, function (error) {
                console.log(error);
                _this.alertService.error("Invalid token");
            });
        }
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        if (this.model.userId && this.model.userId != -1) {
            this.userService.update(this.model)
                .subscribe(function (data) {
                //this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Registration successful' });
                _this.alertService.success('Registration successful', true);
                _this.router.navigate(['/login']);
            }, function (error) {
                //this.msgs.push({ severity: 'error', summary: 'Error', detail: error });
                _this.alertService.error(error);
                _this.loading = false;
            });
        }
        else {
            this.userService.create(this.model)
                .subscribe(function (data) {
                _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Registration successful' });
                // this.alertService.success('Registration successful', true);
                _this.router.navigate(['/login']);
            }, function (error) {
                _this.msgs.push({ severity: 'error', summary: 'Error', detail: error });
                // this.alertService.error(error);
                _this.loading = false;
            });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(442)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var bodyString = JSON.stringify({ username: username, password: password });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/login', bodyString, options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            console.log(user);
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            return currentUser.token != null;
        }
        return false;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_jwt_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/api/users';
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.apiUrl, this.jwtService.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + id, this.jwtService.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getByInviteeToken = function (inviteeToken) {
        return this.http.get(this.apiUrl + "/token/" + inviteeToken, this.jwtService.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post(this.apiUrl, user, this.jwtService.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.apiUrl, user, this.jwtService.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + id, this.jwtService.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getLocalUser = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.user[0]) {
            var localUser = currentUser.user[0];
            var user = new __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* User */](localUser.UserId);
            user.FirstName = localUser.FirstName;
            user.LastName = localUser.LastName;
            user.email = localUser.UserName;
            user.RoleName = localUser.RoleName;
            return user;
        }
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__utils_jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__utils_jwt_service__["a" /* JwtService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(254);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__(90);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__project__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__concept__ = __webpack_require__(251);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__concept__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company__ = __webpack_require__(250);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student__ = __webpack_require__(252);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__student__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__university__ = __webpack_require__(253);
/* unused harmony namespace reexport */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "body {\n  padding-top: 20px;\n}\n\n.footer {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-top: 40px;\n  border-top: 1px solid #eee;\n}\n\n/* Main marketing message and sign up button */\n.jumbotron {\n  text-align: center;\n  background-color: transparent;\n}\n.jumbotron .btn {\n  padding: 14px 24px;\n  font-size: 21px;\n}\n\n/* Customize the nav-justified links to be fill the entire space of the .navbar */\n\n.nav-justified {\n  background-color: #eee;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n.nav-justified > li > a {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  margin-bottom: 0;\n  font-weight: bold;\n  color: #777;\n  text-align: center;\n  background-color: #e5e5e5; /* Old browsers */\n  background-image:         linear-gradient(to bottom, #f5f5f5 0%,#e5e5e5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f5f5', endColorstr='#e5e5e5',GradientType=0 ); /* IE6-9 */\n  background-repeat: repeat-x; /* Repeat the gradient */\n  border-bottom: 1px solid #d5d5d5;\n}\n.nav-justified > .active > a,\n.nav-justified > .active > a:hover,\n.nav-justified > .active > a:focus {\n  background-color: #ddd;\n  background-image: none;\n  box-shadow: inset 0 3px 7px rgba(0,0,0,.15);\n}\n.nav-justified > li:first-child > a {\n  border-radius: 5px 5px 0 0;\n}\n.nav-justified > li:last-child > a {\n  border-bottom: 0;\n  border-radius: 0 0 5px 5px;\n}\n\n@media (min-width: 768px) {\n  .nav-justified {\n    max-height: 52px;\n  }\n  .nav-justified > li > a {\n    border-right: 1px solid #d5d5d5;\n    border-left: 1px solid #fff;\n  }\n  .nav-justified > li:first-child > a {\n    border-left: 0;\n    border-radius: 5px 0 0 5px;\n  }\n  .nav-justified > li:last-child > a {\n    border-right: 0;\n    border-radius: 0 5px 5px 0;\n  }\n}\n\n/* Responsive: Portrait tablets and up */\n@media screen and (min-width: 768px) {\n  /* Remove the padding we set earlier */\n  .masthead,\n  .marketing,\n  .footer {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".card-img{    display: block;\n    height: 20%;\n    width: 100%;\n    max-width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "/*\n * Base structure\n */\n\n/* Move down content because we have a fixed navbar that is 50px tall */\nbody {\n  padding-top: 50px;\n}\n\n\n/*\n * Global add-ons\n */\n\n.sub-header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n  height:50px;\n}\n\n\n/*\n * Sidebar\n */\n\n/* Hide for mobile, show later */\n.sidebar {\n  display: none;\n}\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px; /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n.nav-sidebar > .active > a,\n.nav-sidebar > .active > a:hover,\n.nav-sidebar > .active > a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n\n/*\n * Main content\n */\n\n.main {\n  padding: 20px;\n}\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n.main .page-header {\n  margin-top: 0;\n}\n\n\n/*\n * Placeholder dashboard ideas\n */\n\n.placeholders {\n  margin-bottom: 30px;\n  text-align: center;\n}\n.placeholders h4 {\n  margin-bottom: 0;\n}\n.placeholder {\n  margin-bottom: 20px;\n}\n.placeholder img {\n  display: inline-block;\n  border-radius: 50%;\n}\n\n/* Special class on .container surrounding .navbar, used for positioning it into place. */\n.navbar-wrapper {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 20;\n}\n\n/* Flip around the padding for proper display in narrow viewports */\n.navbar-wrapper > .container {\n  padding-right: 0;\n  padding-left: 0;\n}\n.navbar-wrapper .navbar {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.navbar-wrapper .navbar .container {\n  width: auto;\n}\n\n.navbar-login\n{\n    width: 305px;\n    padding: 10px;\n    padding-bottom: 0px;\n}\n\n.navbar-login-session\n{\n    padding: 10px;\n    padding-bottom: 0px;\n    padding-top: 0px;\n}\n\n.icon-size\n{\n    font-size: 87px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "body {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #eee;\n}\n\n.form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px;\n}\n.form-signin .checkbox {\n  font-weight: normal;\n}\n.form-signin .form-control {\n  position: relative;\n  height: auto;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".thumbnail {\n  min-height: 380px;\n}\n\n.label {\n  display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "\n.ui-autocomplete-multiple-container{\n        width: 100%;\n\n}\n.ui-autocomplete-input-token{\n        width: 100%;\n\n}\n.ui-autocomplete-input-token input {\n    border: 0 none;\n    width: 100%;\n    outline: medium none;\n    background-color: transparent;\n    margin: 0px 0px 0px 5px;\n    padding: 0;\n    box-shadow: none;\n    border-radius: 0;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".ui-steps .ui-steps-item {\n    width: 25%;\n  }\n        \n.ui-steps.steps-custom {\n    margin-top: 10px;\n    margin-bottom: 50px;\n}\n         \n.ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {\n    height: 10px;\n    padding: 0 1em;\n}\n         \n.ui-steps.steps-custom .ui-steps-item .ui-steps-number {\n    background-color: #0081c2;\n    color: #FFFFFF;\n    display: inline-block;\n    width: 36px;\n    border-radius: 50%;\n    margin-top: -14px;\n    margin-bottom: 10px;\n}\n        \n.ui-steps.steps-custom .ui-steps-item .ui-steps-title {\n    color: #555555;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".timeline {\n  list-style: none;\n  padding: 20px 0 20px;\n  position: relative;\n}\n\n.timeline:before {\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 3px;\n  background-color: #eeeeee;\n  left: 50%;\n  margin-left: -1.5px;\n}\n\n.timeline > li {\n  margin-bottom: 20px;\n  position: relative;\n}\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline > li:after {\n  clear: both;\n}\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline > li:after {\n  clear: both;\n}\n\n.timeline > li > .timeline-panel {\n  width: 30%;\n  float: left;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  padding: 20px;\n  position: relative;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\n}\n\n.timeline > li > .timeline-panel:before {\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  display: inline-block;\n  border-top: 15px solid transparent;\n  border-left: 15px solid #ccc;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  content: \" \";\n}\n\n.timeline > li > .timeline-panel:after {\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  display: inline-block;\n  border-top: 14px solid transparent;\n  border-left: 14px solid #fff;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  content: \" \";\n}\n\n.timeline > li > .timeline-badge {\n  color: #fff;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  font-size: 1.4em;\n  text-align: center;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  margin-left: -25px;\n  background-color: #999999;\n  z-index: 100;\n  border-top-right-radius: 50%;\n  border-top-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  border-bottom-left-radius: 50%;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  border-left-width: 0;\n  border-right-width: 15px;\n  left: -15px;\n  right: auto;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  border-left-width: 0;\n  border-right-width: 14px;\n  left: -14px;\n  right: auto;\n}\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important;\n}\n\n.timeline-badge.success {\n  background-color: #3f903f !important;\n}\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important;\n}\n\n.timeline-badge.danger {\n  background-color: #d9534f !important;\n}\n\n.timeline-badge.info {\n  background-color: #5bc0de !important;\n}\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit;\n}\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0;\n}\n\n.timeline-body > p + p {\n  margin-top: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n    <app-header></app-header>\n    <!-- <div class=\"progress loop\">\n        <progress></progress>\n    </div>\n    -->\n\n    <div class=\"content-container\">\n\n            <router-outlet></router-outlet>\n    </div>"

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n\n  <div class=\"card\">\n    <div class=\"card-header\">\n      {{ concept.ConceptTitle }}\n    </div>\n\n    <div class=\"card-block\" style=\"height:300px;overflow:scroll;\">\n      <div class=\"card-media-block\">\n        <img src=\"/assets/images/logo.png\" class=\"card-media-image\">\n        <div class=\"card-media-description\">\n          <span class=\"card-media-title\">\n                            Company Name\n                        </span>\n          <span class=\"card-media-text\">\n        {{ concept.ConceptFromDate | date }} to {{ concept.ConceptToDate | date }}\n                        </span>\n        </div>\n      </div>\n\n      <div class=\"card-text\">\n        {{ concept.ConceptDescription}}\n\n      </div>\n    </div>\n\n\n    <div class=\"card-footer\">\n      <a class=\"btn btn-sm btn-link\" type=\"button\" (click)=\"RegisterToConcept(concept)\" *ngIf=\"!isAlreadyRegistered && loggedInUser.isTeacher()\">Register</a>\n      <a class=\"btn btn-sm btn-link\" type=\"button\" routerLink='/concepts/{{concept.ConceptId}}'>Go to concept home</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<alert></alert>\n  <div class=\"col-xs-12\">\n    <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n        </div>\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"conceptTitle\"> Title</label>\n            <input type=\"text\" name=\"conceptTitle\" class=\"form-control\" [(ngModel)]=\"model.conceptTitle\" #conceptTitle=\"ngModel\" required\n            />\n            <div *ngIf=\"f.submitted && !conceptTitle.valid\" class=\"help-block\">Concept title is required</div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"conceptDescription\"> Description</label>\n\n            <p-editor name=\"conceptDescription\" [(ngModel)]=\"model.conceptDescription\" [style]=\"{'height':'320px'}\" #conceptDescription=\"ngModel\"></p-editor>\n\n\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"conceptStartDate\">Start date</label>\n            <p-calendar name=\"conceptStartDate\" [(ngModel)]=\"model.conceptStartDate \" (ngModelChange)=\"model.conceptStartDate = $event\"\n              #conceptStartDate=\"ngModel\" [showIcon]=\"true\"></p-calendar>\n\n\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"conceptEndDate\">End date</label>\n            <p-calendar name=\"conceptEndDate\" [(ngModel)]=\"model.conceptEndDate \" (ngModelChange)=\"model.conceptEndDate = $event\" #conceptEndDate=\"ngModel\"\n              [showIcon]=\"true\"></p-calendar>\n\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"conceptOpenToInstitution\">Open to institution</label>\n            <p-checkbox name=\"conceptOpenToInstitution\" [(ngModel)]=\"model.conceptOpenToInstitution\" binary=\"true\" #conceptOpenToInstitution=\"ngModel\"></p-checkbox>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"conceptMaxParticipants\">Max participants</label>\n            <p-spinner [min]=\"0\" [max]=\"100\" name=\"conceptMaxParticipants\" [(ngModel)]=\"model.conceptMaxParticipants\" #conceptMaxParticipants=\"ngModel\"></p-spinner>\n\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!f.valid\">Save</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Cancel</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ 428:
/***/ (function(module, exports) {

module.exports = "<div>\n    <div>\n        <h3>\n        {{concept.ConceptTitle}}\n        </h3>\n    </div>\n\n    <div>\n        {{concept.ConceptDescription}}\n        <hr/>\n        <ng-template [ngIf]=\"loggedInUser.isAdmin()\">\n\n            <div>\n                <h4> Particiapting Institutions</h4>\n            </div>\n            <ng-template [ngIf]=\"universities\">\n\n\n                <p-accordion [multiple]=\"true\">\n                    <div *ngFor=\"let university of universities \">\n\n                        <p-accordionTab [selected]=\"true\">\n                            <p-header>\n                                {{university.Name}}\n                            </p-header>\n                            <div *ngFor=\"let project of university.projects \">\n                                <app-project-card [project]=\"project\"></app-project-card>\n                            </div>\n                        </p-accordionTab>\n                    </div>\n                </p-accordion>\n            </ng-template>\n\n            <ng-template [ngIf]=\"!universities\">\n                <div class=\"alert alert-info\" role=\"alert\">No particpants yet</div>\n\n            </ng-template>\n        </ng-template>\n    </div>\n\n</div>"

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

module.exports = "<div class=\"dox-wrapper\">\n  <div class=\"dox-wrapper dox-header new-component-layout\">\n\n    <section>\n      <h5>{{header}}</h5>\n    </section>\n  </div>\n\n  <section class=\"dox-content\">\n    <div class=\"content-wrapper\">\n      <div *ngFor=\"let concept of concepts \">\n        <app-concept-card [concept]=\"concept\"></app-concept-card>\n      </div>\n      <router-outlet></router-outlet>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ 430:
/***/ (function(module, exports) {

module.exports = "\n    <router-outlet></router-outlet>\n\n"

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"dox-wrapper\">\n    <div class=\"dox-wrapper dox-header new-component-layout\">\n\n      <section>\n        <h5>{{header}}</h5>\n      </section>\n    </div>\n\n    <section class=\"dox-content\">\n      <div class=\"content-wrapper\">\n        <div *ngFor=\"let concept of concepts \">\n          <app-concept-card [concept]=\"concept\"></app-concept-card>\n        </div>\n        <router-outlet></router-outlet>\n      </div>\n    </section>\n  </div>\n"

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-md-12\">\n  <a routerLink='/concepts/new' class=\"btn btn-success\" style=\"margin-bottom:10px;\" *ngIf=\"loggedInUser.isAdmin()\">Create New Concept</a>\n  <p-confirmDialog></p-confirmDialog>\n  <router-outlet></router-outlet>\n</div>\n</div></div>"

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ 434:
/***/ (function(module, exports) {

module.exports = "<header class=\"header header-6\">\n  <div class=\"branding\">\n    <a href=\"...\" class=\"nav-link\">\n      <clr-icon shape=\"vm-bug\">\n      </clr-icon>\n      <span class=\"title\">Praxim Learning</span>\n    </a>\n  </div>\n  <div class=\"header-actions\">\n    <ng-template [ngIf]=\"authenticationService.isAuthenticated()\">\n\n      <clr-dropdown clrMenuPosition=\"bottom-right\">\n        <button class=\"nav-text\" clrDropdownToggle>\n          {{ loggedInUser.email }}               \n          <clr-icon shape=\"caret down\"></clr-icon>\n            </button>\n        <clr-dropdown-menu>\n          <a href=\"...\" clrDropdownItem>Preferences</a>\n          <a (click)=\"onLogout()\" clrDropdownItem>Log out</a>\n        </clr-dropdown-menu>\n      </clr-dropdown>\n    </ng-template>\n    <ng-template [ngIf]=\"!authenticationService.isAuthenticated()\">\n      <a href routerLink=\"/login\" class=\"nav-link nav-text\">LOGIN\n            \n          </a>\n    </ng-template>\n  </div>\n\n</header>\n<ng-template [ngIf]=\"authenticationService.isAuthenticated()\">\n\n  <nav class=\"subnav\">\n    <ul class=\"nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" href=\"#\">Dashboard</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/projects\">Projects</a>\n      </li>\n      <clr-dropdown clrMenuPosition=\"bottom-right\">\n        <button class=\"nav-text\" clrDropdownToggle>\n          Concepts              \n          <clr-icon shape=\"caret down\"></clr-icon>\n            </button>\n        <clr-dropdown-menu>\n          <li routerLinkActive=\"active\" *ngIf=\"loggedInUser.isTeacher()\"><a routerLink=\"/concepts/list/registered\">My Registered concepts</a></li>\n          <li routerLinkActive=\"active\" *ngIf=\"loggedInUser.isTeacher()\"><a routerLink=\"/concepts/list/available\">Available concepts</a></li>\n          <li routerLinkActive=\"active\" *ngIf=\"loggedInUser.isAdmin()\"><a routerLink=\"/concepts/list/available\">My Concepts</a>\n        </clr-dropdown-menu>\n      </clr-dropdown>\n    </ul>\n  </nav>\n</ng-template>"

/***/ }),

/***/ 435:
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"col-sm-8 col-sm-offset-2\" style=\"padding-top: 60px;\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n\n  <div class=\"card\">\n\n    <div class=\"card-header\">\n{{ project.ProjectTitle }}\n    </div>\n\n    <div class=\"card-block\" style=\"height:300px;overflow:scroll;\">\n      <div class=\"card-media-block\">\n        <img src=\"/assets/images/logo.png\" class=\"card-media-image\">\n        <div class=\"card-media-description\">\n          <span class=\"card-media-title\">\n                            Project Owner : \n                        </span>\n          <span class=\"card-media-text\">\n        {{ concept.ConceptFromDate | date }} to {{ concept.ConceptToDate | date }}\n                        </span>\n        </div>\n      </div>\n\n      <div class=\"card-text\">\n{{ project.ProjectDescription}}\n      </div>\n    </div>\n\n   <div class=\"card-block\">\n      <div class=\"card-title\">\n        Team Members\n      </div>\n      <div class=\"card-text\">\n        <div *ngFor=\"let student of project.students \">\n          <a class=\"btn btn-sm btn-link\" type=\"button\" routerLink='/projects/{{project.ProjectId}}'>{{student.FirstName}},{{student.LastName}}</a>\n\n        </div>\n        <ng-template [ngIf]=\"!project.students\">\n          Members not assigned yet!\n        </ng-template>\n      </div>\n    </div>\n\n    <div class=\"card-footer\">\n      <a class=\"btn btn-sm btn-link\" type=\"button\" routerLink='/projects/{{project.ProjectId}}'>Go to project home</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

module.exports = "\n<form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n    <alert></alert>\n\n  <div class=\"form-group\">\n    <label for=\"title\">Project Title</label>\n    <input type=\"text\" name=\"title\" class=\"form-control\" [(ngModel)]=\"model.title\" #title=\"ngModel\" required style=\"width:75%;\" />\n    <div *ngIf=\"f.submitted && !title.valid\" class=\"help-block\">Project Title is required</div>\n\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"description\">Project Description</label>\n    <p-editor name=\"description\" [(ngModel)]=\"model.description\" [style]=\"{'height':'320px'}\" #description=\"ngModel\"></p-editor>\n\n\n  </div>\n\n\n  <div class=\"form-group\">\n    <label for=\"startDate\">Project start date</label>\n    <!--  <p-calendar name=\"startDate\" [(ngModel)]=\"model.startDate \" (ngModelChange)=\"model.startDate = $event\" #startDate=\"ngModel\"\n      [showIcon]=\"true\"></p-calendar>\n      -->\n    <input type=\"date\" name=\"startDate\" class=\"form-control\" [(ngModel)]=\"model.startDate\" #startDate=\"ngModel\"  style=\"width:25%;\" />\n\n  </div>\n\n\n\n  <div class=\"form-group\">\n    <label for=\"endDate\">Project end date</label>\n    <!--<p-calendar name=\"endDate\" [(ngModel)]=\"model.endDate \" (ngModelChange)=\"model.endDate = $event\" #endDate=\"ngModel\" [showIcon]=\"true\"></p-calendar>-->\n    <input type=\"date\" name=\"endDate\" class=\"form-control\" [(ngModel)]=\"model.endDate\" #endDate=\"ngModel\" style=\"width:25%;\"/>\n\n  </div>\n\n  <div class=\"form-group\">\n    <label style=\"float:left;\" for=\"students\">Select students</label>\n        <div style=\"width:75%\">\n\n      <p-autoComplete [style]=\"{'width':'100%'}\" name=\"students\" #students=\"ngModel\" [(ngModel)]=\"model.students\" [suggestions]=\"filteredStudentsMultiple\"\n        (completeMethod)=\"filterStudentMultiple($event)\" [minLength]=\"1\" placeholder=\"Start typing student names \" field=\"FirstName\"\n        [multiple]=\"true\">\n        <ul>\n     <!-- <li *ngFor=\"let student of model.students\">{{student.FirstName}},{{student.LastName}}</li>-->\n    </ul>\n      </p-autoComplete>\n        </div>\n  </div>\n\n  <div class=\"row\">\n\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!f.valid\">Save</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Cancel</button>\n  </div>\n</form>\n"

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"panel panel-primary\" style=\"margin-top:10px\">\n\n    <div class=\"panel-heading\">\n      <h3>Project Title</h3>\n\n    </div>\n\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <h4>Project status</h4>\n      </div>\n      <div class=\"row steps-custom ui-steps ui-widget ui-helper-clearfix ui-steps-readonly\">\n        <ul role=\"tablist\">\n          <!---->\n          <li class=\"ui-steps-item ui-state-highlight\">\n            <!---->\n            <a class=\"ui-menuitem-link\" href=\"#\">\n          <span class=\"ui-steps-number\">1</span>\n          <span class=\"ui-steps-title\">Created</span>\n        </a>\n            <!---->\n          </li>\n          <li class=\"ui-steps-item ui-state-highlight\">\n            <!---->\n            <a class=\"ui-menuitem-link\" href=\"#\">\n          <span class=\"ui-steps-number\">2</span>\n          <span class=\"ui-steps-title\">In Progress</span>\n        </a>\n            <!---->\n          </li>\n          <li class=\"ui-steps-item ui-state-default ui-state-disabled\">\n            <!---->\n            <a class=\"ui-menuitem-link\" href=\"#\">\n          <span class=\"ui-steps-number\">3</span>\n          <span class=\"ui-steps-title\">Review</span>\n        </a>\n            <!---->\n          </li>\n          <li class=\"ui-steps-item ui-state-default ui-state-disabled\">\n            <!---->\n            <a class=\"ui-menuitem-link\" href=\"#\">\n          <span class=\"ui-steps-number\">4</span>\n          <span class=\"ui-steps-title\">Submitted</span>\n        </a>\n            <!---->\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"row\" style=\"margin-top:10px;\">\n\n        <div class=\"col-md-8\">\n          <p-accordion>\n            <p-accordionTab header=\"Project description \">\n              Project description\n            </p-accordionTab>\n\n          </p-accordion>\n        </div>\n        <div class=\"col-md-4\">\n          <h4> Team Memebers</h4>\n        </div>\n      </div>\n    </div>\n<div id=\"firebase\"></div>\n\n  </div>\n  <div>\n    <app-project-timeline></app-project-timeline>\n  </div>\n</div>"

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"page-header\">\n    <h3 id=\"timeline\">Timeline</h3>\n  </div>\n  <ul class=\"timeline\">\n    <li>\n      <div class=\"timeline-badge\"><i class=\"glyphicon glyphicon-check\"></i></div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Mussum ipsum cacilds</h4>\n          <p><small class=\"text-muted\"><i class=\"glyphicon glyphicon-time\"></i> 11 hours ago via Twitter</small></p>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.\n            Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-inverted\">\n      <div class=\"timeline-badge warning\"><i class=\"glyphicon glyphicon-credit-card\"></i></div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Mussum ipsum cacilds</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.\n            Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n          <p>Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé, cursus quis, vehicula ac nisi. Aenean vel dui dui. Nullam leo erat, aliquet quis tempus a, posuere ut mi. Ut scelerisque neque et turpis posuere\n            pulvinar pellentesque nibh ullamcorper. Pharetra in mattis molestie, volutpat elementum justo. Aenean ut ante turpis. Pellentesque laoreet mé vel lectus scelerisque interdum cursus velit auctor. Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit. Etiam ac mauris lectus, non scelerisque augue. Aenean justo massa.</p>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"timeline-badge danger\"><i class=\"glyphicon glyphicon-credit-card\"></i></div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Mussum ipsum cacilds</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.\n            Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-inverted\">\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Mussum ipsum cacilds</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.\n            Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"timeline-badge info\"><i class=\"glyphicon glyphicon-floppy-disk\"></i></div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Mussum ipsum cacilds</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.\n            Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n          <hr>\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"glyphicon glyphicon-cog\"></i> <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a href=\"#\">Action</a></li>\n              <li><a href=\"#\">Another action</a></li>\n              <li><a href=\"#\">Something else here</a></li>\n              <li class=\"divider\"></li>\n              <li><a href=\"#\">Separated link</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Mussum ipsum cacilds</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.\n            Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-inverted\">\n      <div class=\"timeline-badge success\"><i class=\"glyphicon glyphicon-thumbs-up\"></i></div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Mussum ipsum cacilds</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.\n            Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let project of projects \">\n\n  <app-project-card [project]=\"project\"></app-project-card>\n  </div>\n<div class=\"alert alert-danger\" *ngIf=\"error\">{{ error }}</div>"

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    \n    <a routerLink='/projects/new' class=\"btn btn-success\" *ngIf=\"loggedInUser.isTeacher()\">Create New Project</a>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n    <form class=\"login\" name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n\n        <label class=\"title\">\n            <h3 class=\"welcome\">Welcome to</h3>\n            Praxim Learning\n        </label>\n\n        <div class=\"login-group\">\n            <div>\n                First Name\n            </div>\n            <div>\n                <input type=\"text\" class=\"form-control\" name=\"FirstName\" [(ngModel)]=\"model.FirstName\" #FirstName=\"ngModel\" required />\n            </div>\n            <div>\n                <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"f.submitted && !FirstName.valid\">\n                    <i class=\"fa fa-close\"></i> Firstname is required\n                </div>\n            </div>\n        </div>\n        <div class=\"login-group\">\n            <div>\n                Last Name\n            </div>\n            <div>\n                <input type=\"text\" class=\"form-control\" name=\"LastName\" [(ngModel)]=\"model.LastName\" #LastName=\"ngModel\" required />\n            </div>\n            <div >\n                <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"f.submitted && !LastName.valid\">\n                    <i class=\"fa fa-close\"></i> Lastname is required\n                </div>\n            </div>\n        </div>\n\n        <div class=\"login-group\">\n            <div>\n                Email\n            </div>\n            <div>\n                <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required email=\"true\" />\n\n            </div>\n\n            <div>\n                <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"f.submitted && !email.valid\">\n                    <i class=\"fa fa-close\"></i> Email is required\n                </div>\n            </div>\n        </div>\n\n        <div class=\"login-group\">\n            <div>\n                Password\n            </div>\n            <div>\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n\n\n            </div>\n\n            <div>\n                <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"f.submitted && !password.valid\">\n                    <i class=\"fa fa-close\"></i> password is required\n                </div>\n            </div>\n        </div>\n        <alert></alert>\n\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-2\"> &nbsp; </div>\n            <div class=\"ui-grid-col-6\">\n                <button [disabled]=\"loading\" class=\"btn btn-primary btn-lg btn-block\">Register</button>\n            </div>\n        </div>\n\n    </form>\n\n</div>"

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" *ngIf=\"error\">\n  {{ error }}</div>\n<button type=\"button\" (click)=\"showDialog() \" class=\"btn btn-success btn-lg\" icon=\"fa-external-link-square\" style=\"margin-bottom:5px;\">Invite new student</button>\n\n<ng-template [ngIf]=\"students.length>0\">\n\n  <p-dataScroller [value]=\"students\" [rows]=\"10\" [buffer]=\"0.4\">\n    <p-header>\n      Scroll Down to to Load More\n    </p-header>\n    <ng-template let-student pTemplate=\"item\">\n      <div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px;border-bottom:1px solid #D5D5D5;\">\n        <div class=\"ui-grid-row\">\n          <div class=\"ui-grid-col-3\" style=\"text-align:center\"><i class=\"fa fa-search\" (click)=\"selectCar(student)\" style=\"cursor:pointer;float:left;margin-top:20px\"></i></div>\n          <div class=\"ui-grid-col-9\">\n            <div class=\"ui-grid ui-grid-responsive ui-fluid\">\n              <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-2\">Name: </div>\n                <div class=\"ui-grid-col-10\">{{student.FirstName}} , {{student.LastName}}</div>\n              </div>\n              <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-2\">email: </div>\n                <div class=\"ui-grid-col-10\">{{student.email}}</div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </p-dataScroller>\n</ng-template>\n<ng-template [ngIf]=\"students.length<1\">\n  <h3><span >You have not invited students yet! </span></h3>\n</ng-template>\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && invite(f)\" #f=\"ngForm\" novalidate>\n\n    <p-dialog header=\"Invite student\" [(visible)]=\"display\" modal=\"modal\" width=\"500\" [responsive]=\"true\">\n      <p-messages [(value)]=\"msgs\"></p-messages>\n\n      <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px\">\n        <div class=\"ui-grid-col-2\">\n          First Name\n        </div>\n        <div class=\"ui-grid-col-6\">\n          <input type=\"text\" class=\"form-control\" name=\"FirstName\" [(ngModel)]=\"model.FirstName\" #FirstName=\"ngModel\" required />\n        </div>\n        <div class=\"ui-grid-col-4\">\n          <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"f.submitted && !FirstName.valid\">\n            <i class=\"fa fa-close\"></i> Firstname is required\n          </div>\n        </div>\n      </div>\n      <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px\">\n        <div class=\"ui-grid-col-2\">\n          Last Name\n        </div>\n        <div class=\"ui-grid-col-6\">\n          <input type=\"text\" class=\"form-control\" name=\"LastName\" [(ngModel)]=\"model.LastName\" #LastName=\"ngModel\" required />\n        </div>\n        <div class=\"ui-grid-col-4\">\n          <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"f.submitted && !LastName.valid\">\n            <i class=\"fa fa-close\"></i> Lastname is required\n          </div>\n        </div>\n      </div>\n\n      <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px\">\n        <div class=\"ui-grid-col-2\">\n          Email\n        </div>\n        <div class=\"ui-grid-col-6\">\n          <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required email=\"true\" />\n\n        </div>\n\n        <div class=\"ui-grid-col-4\">\n          <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"f.submitted && !email.valid\">\n            <i class=\"fa fa-close\"></i> Email is required\n          </div>\n        </div>\n      </div>\n      <p-footer>\n        <button [disabled]=\"loading\" class=\"btn btn-primary btn-lg\">Invite</button>\n        <button [disabled]=\"loading\" class=\"btn btn-primary btn-lg\" (click)=\"display=false\">Cancel</button>\n      </p-footer>\n    </p-dialog>\n  </form>"

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_jwt_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConceptService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConceptService = (function () {
    function ConceptService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + '/api/concepts';
        this.selectedConcept = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ConceptService.prototype.getConceptById = function (id) {
        return this.http.get(this.apiUrl + "/" + id, this.jwtService.jwt())
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ConceptService.prototype.getAllConcepts = function () {
        return this.http.get(this.apiUrl + "/user/" + this.jwtService.getLocalUser().UserId, this.jwtService.jwt())
            .map(this.extractData)
            .catch(this.handleError);
    };
    ConceptService.prototype.getOpenConcepts = function () {
        return this.http.get(this.apiUrl + "/user/" + this.jwtService.getLocalUser().UserId, this.jwtService.jwt())
            .map(this.extractData)
            .catch(this.handleError);
    };
    ConceptService.prototype.getRegisteredConcepts = function () {
        return this.http.get(this.apiUrl + "/registered/user/" + this.jwtService.getLocalUser().UserId, this.jwtService.jwt())
            .map(this.extractData)
            .catch(this.handleError);
    };
    ConceptService.prototype.RegisterToConcept = function (conceptId) {
        var user = this.jwtService.getLocalUser();
        var regConcept = {};
        regConcept["conceptId"] = conceptId;
        regConcept["userId"] = user.UserId;
        //JSON.parse('{"conceptId:"' + conceptId + ',"userId:"' + user.UserId +'}');
        return this.http.post(this.apiUrl + "/register", regConcept, this.jwtService.jwt())
            .map(this.extractData)
            .catch(this.handleError);
    };
    ConceptService.prototype.getUniversitiesForConceptById = function (id) {
        return this.http.get("/assets/projects.json", this.jwtService.jwt())
            .map(this.extractData)
            .catch(this.handleError);
    };
    ConceptService.prototype.create = function (concept) {
        concept.user = this.jwtService.getLocalUser();
        return this.http.post(this.apiUrl, concept, this.jwtService.jwt())
            .map(this.extractData)
            .catch(this.handleError);
    };
    ConceptService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ConceptService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            console.log("something went wrong ");
            // errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return ConceptService;
}());
ConceptService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__utils_jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__utils_jwt_service__["a" /* JwtService */]) === "function" && _b || Object])
], ConceptService);

var _a, _b;
//# sourceMappingURL=concept.service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    //apiUrl: 'http://test-praxim.us-east-1.elasticbeanstalk.com'
    apiUrl: 'http://localhost:8081'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JwtService = (function () {
    function JwtService() {
    }
    // private helper methods
    JwtService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        }
    };
    JwtService.prototype.getLocalUser = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.user[0]) {
            return currentUser.user[0];
        }
    };
    return JwtService;
}());
JwtService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], JwtService);

//# sourceMappingURL=jwt.service.js.map

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(236);
module.exports = __webpack_require__(221);


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project() {
    }
    return Project;
}());

//# sourceMappingURL=project.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_jwt_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentCohortService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentCohortService = (function () {
    function StudentCohortService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + '/api/studentcohort';
    }
    StudentCohortService.prototype.getStudentCohorts = function () {
        return this.http.get(this.apiUrl + "/teacher/" + this.jwtService.getLocalUser().UserId + "/students", this.jwtService.jwt())
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    StudentCohortService.prototype.inviteStudents = function (student, project) {
        var studentCohort = {
            students: []
        };
        studentCohort['teacherId'] = this.jwtService.getLocalUser().UserId;
        var studentJson = {
            "firstName": student.FirstName,
            "lastName": student.LastName,
            "emailId": student.email
        };
        studentCohort.students.push(studentJson);
        return this.http.post(this.apiUrl, studentCohort).toPromise().
            then(function (res) { return res.json(); }).catch(function (error) { return error; });
    };
    StudentCohortService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    StudentCohortService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            console.log("something went wrong ");
            // errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return StudentCohortService;
}());
StudentCohortService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__utils_jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__utils_jwt_service__["a" /* JwtService */]) === "function" && _b || Object])
], StudentCohortService);

var _a, _b;
//# sourceMappingURL=student-cohort.service.js.map

/***/ })

},[761]);
//# sourceMappingURL=main.bundle.js.map