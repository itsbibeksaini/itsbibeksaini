"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 9771);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contact/contact.component */ 1782);
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/gallery/gallery.component */ 6183);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    }, {
        path: 'work',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.WorkComponent
    }, {
        path: 'projects',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.ProjectsComponent
    }, {
        path: 'skills',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.SkillsComponent
    }, {
        path: 'about-me',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.AboutMeComponent
    }, {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent
    }, {
        path: 'gallery',
        component: _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__.GalleryComponent
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { useHash: true }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ 1866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 9201);





class AppComponent {
    constructor(themeSwitcher, renderer) {
        this.themeSwitcher = themeSwitcher;
        this.renderer = renderer;
        let loadSystemDefaultTheme = themeSwitcher.getCurrentTheme() == null;
        if (loadSystemDefaultTheme) {
            var body = document.getElementsByTagName('body')[0];
            let isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            themeSwitcher.switchTheme(isDarkTheme);
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (evt) => {
                themeSwitcher.switchTheme(evt.matches);
            });
        }
        else
            this.themeSwitcher.setTheme();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.ThemeSwitcherService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "container-fluid", "h-100", "p-0"], ["fxFlex", "60px"], ["fxFlex", "", 2, "overflow", "hidden", "overflow-y", "auto"], [1, "canvas-area"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent], styles: [".canvas-area[_ngcontent-%COMP%] {\n  margin: auto;\n  height: 100%;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL01hYyUyMERyaXZlL2l0c2JpYmVrc2Fpbmkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbnZhcy1hcmVhIHtcbiAgLy8gbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4iLCIuY2FudmFzLWFyZWEge1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ 2681);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 9201);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/work/work.component */ 4060);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects/projects.component */ 4935);
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/skills/skills.component */ 1727);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _directives_link_link_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/link/link.directive */ 2751);
/* harmony import */ var _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about-me/about-me.component */ 3714);
/* harmony import */ var _components_custom_list_custom_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/custom-list/custom-list.component */ 7404);
/* harmony import */ var _components_custom_list_directive_select_item_select_item_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/custom-list/directive/select-item/select-item.directive */ 8598);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contact/contact.component */ 1782);
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/gallery/gallery.component */ 6183);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _components_gallery_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/gallery/image-viewer/image-viewer.component */ 6608);
/* harmony import */ var _components_projects_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/projects/project-card/project-card.component */ 834);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _components_projects_show_details_show_details_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/projects/show-details/show-details.directive */ 3075);
/* harmony import */ var _components_projects_dialogs_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/projects/dialogs/project-details/project-details.component */ 7493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);


































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__.FlexLayoutModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatListModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__.MatSlideToggleModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRippleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButtonModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_29__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialogModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__.MatChipsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent,
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _components_work_work_component__WEBPACK_IMPORTED_MODULE_4__.WorkComponent,
        _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__.ProjectsComponent,
        _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__.SkillsComponent,
        _directives_link_link_directive__WEBPACK_IMPORTED_MODULE_7__.LinkDirective,
        _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_8__.AboutMeComponent,
        _components_custom_list_custom_list_component__WEBPACK_IMPORTED_MODULE_9__.CustomListComponent,
        _components_custom_list_directive_select_item_select_item_directive__WEBPACK_IMPORTED_MODULE_10__.SelectItemDirective,
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__.ContactComponent,
        _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__.GalleryComponent,
        _components_gallery_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_13__.ImageViewerComponent,
        _components_projects_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_14__.ProjectCardComponent,
        _components_projects_show_details_show_details_directive__WEBPACK_IMPORTED_MODULE_15__.ShowDetailsDirective,
        _components_projects_dialogs_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_16__.ProjectDetailsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__.FlexLayoutModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatListModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__.MatSlideToggleModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRippleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButtonModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_29__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialogModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__.MatChipsModule] }); })();


/***/ }),

/***/ 3714:
/*!***********************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutMeComponent": () => (/* binding */ AboutMeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);


class AboutMeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 18, vars: 0, consts: [["fxLayout", "column", 1, "container-fluid", "h-100", "p-0", "max-supported-width"], ["fxFlex", "80px", 1, "padding2030"], [1, "mat-display-1"], ["fxFlex", "", 1, "padding2030", "about-me"], [2, "max-width", "500px", "margin", "auto"], ["src", "assets/illustrations/hello-illustration.svg"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Hi, My name is Bibek Saini and I am Full Stack Software Engineer and currently I am working as Senior Software Engineer at Scandinavian company called CatalystOne. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " I am a passionate software engineer who love to learn, experiment and build something that creates value for people. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Other than that I love playing and collecting PC games. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Nowadays, I am experimenting on micro-frontend and in process of learning React.js so I can build smaller independent components/modules that are easy to manage and can be re-used. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Besides, I am working on micro-service architecture SaaS application which is built on various technologies like Java Spring Framework, ASP.net Core as backend micro-service and Angular as front-end client app. Micro apps are shipped as docker containers images and leverages Kubernetes for automating deployment, scaling, and management of micro apps. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective], styles: ["@media screen and (max-width: 425px) {\n  .about-me[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 15px 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vTWFjJTIwRHJpdmUvaXRzYmliZWtzYWluaS9zcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsNEJBQUE7RUNDTjtBQUNGIiwiZmlsZSI6ImFib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MjVweCkge1xuICAgIC5hYm91dC1tZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgICAgXG4gICAgICAgIHBhZGRpbmc6MTVweCAwcHggIWltcG9ydGFudDtcbiAgICB9XG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmFib3V0LW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweCAwcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 1782:
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 9121);





class ContactComponent {
    constructor() {
        this.faMobileAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faMobileAlt;
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faEnvelope;
    }
    ngOnInit() {
    }
    sendMail() {
        window.location.href = "mailto:itsbibeksaini@gmail.com";
    }
    sendText() {
        window.location.href = "sms:+919478889924";
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 28, vars: 2, consts: [["fxLayout", "column", 1, "container-fluid", "h-100", "p-0", "max-supported-width"], ["fxFlex", "80px", 1, "padding2030"], [1, "mat-display-1"], ["fxFlex", "", 1, "padding2030", "contact-me"], [1, "content"], ["src", "assets/illustrations/contact-me.svg"], [1, "text-center", "content"], ["fxLayoutAlign", "center", "fxLayout", "row wrap", 1, "container-fluid"], ["fxFlex", "fit-content", "fxFlex.xs", "100%", 1, "p-2"], ["matRipple", "", 1, "contact-capsule", 3, "click"], [1, "mr-1", 2, "font-size", "21px", 3, "icon"], [1, "mat-h1", "m-0"], [1, "mat-small", "m-0"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Contact me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Have some questions or just want to say hi? You can either text me or send me an e-mail, I'll try my best to get back to you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Looking forward to hear from you! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7)(14, "div", 8)(15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_div_click_15_listener() { return ctx.sendText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "+91 9478889924");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8)(22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_div_click_22_listener() { return ctx.sendMail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "itsbibeksaini@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faMobileAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faEnvelope);
    } }, dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple], styles: [".contact-me[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: auto;\n}\n.contact-me[_ngcontent-%COMP%]   .contact-capsule[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-radius: 0.25rem;\n  padding: 20px 30px;\n  cursor: pointer;\n}\n@media screen and (max-width: 425px) {\n  .contact-me[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 15px 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9NYWMlMjBEcml2ZS9pdHNiaWJla3NhaW5pL3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNBUjtBREdJO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RSO0FES0E7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsNEJBQUE7RUNGTjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1tZXtcbiAgICAuY29udGVudHtcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDsgXG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cbiAgICAuY29udGFjdC1jYXBzdWxle1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQyNXB4KSB7XG4gICAgLmNvbnRhY3QtbWV7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICAgIFxuICAgICAgICBwYWRkaW5nOjE1cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufSIsIi5jb250YWN0LW1lIC5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmNvbnRhY3QtbWUgLmNvbnRhY3QtY2Fwc3VsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNvbnRhY3QtbWUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4IDBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"] });


/***/ }),

/***/ 7404:
/*!*****************************************************************!*\
  !*** ./src/app/components/custom-list/custom-list.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomListComponent": () => (/* binding */ CustomListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _state_custom_list_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state/custom-list-query */ 1598);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _directive_select_item_select_item_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive/select-item/select-item.directive */ 8598);





const _c0 = function (a0) { return { "selected": a0 }; };
function CustomListComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 1)(1, "div", 2)(2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("select-item", item_r1.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, item_r1.IS_SELECTED));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.TITLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.SUB_TITLE);
} }
class CustomListComponent {
    constructor(customListQuery) {
        this.customListQuery = customListQuery;
        customListQuery.select(state => state.ITEMS).subscribe(res => {
            this.customList = res;
        });
    }
    ngOnInit() {
    }
}
CustomListComponent.ɵfac = function CustomListComponent_Factory(t) { return new (t || CustomListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_state_custom_list_query__WEBPACK_IMPORTED_MODULE_0__.CustomListQuery)); };
CustomListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomListComponent, selectors: [["custom-list"]], decls: 2, vars: 1, consts: [[3, "ngClass", "select-item", 4, "ngFor", "ngForOf"], [3, "ngClass", "select-item"], [1, "item-wrapper"], [1, "mat-h2", "display-block", "m-0", "ellipses"], [1, "mat-small", "display-block", "m-0", "label", "ellipses"]], template: function CustomListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CustomListComponent_li_1_Template, 6, 6, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultClassDirective, _directive_select_item_select_item_directive__WEBPACK_IMPORTED_MODULE_1__.SelectItemDirective], styles: ["ul[_ngcontent-%COMP%] {\n  background-color: var(--background-color);\n  border-radius: 0.25rem;\n  height: 100%;\n  padding-left: 1.5rem;\n  padding-top: 2rem;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0.25rem;\n  padding-left: 1.25rem;\n  cursor: pointer;\n  border-top-left-radius: 40px;\n  border-bottom-left-radius: 40px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-bottom: 0.25rem;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-of-type)   .item-wrapper[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n}\nul[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  border-top-left-radius: 40px;\n  border-bottom-left-radius: 40px;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);\n  background-color: var(--primary-color);\n  color: black;\n}\nul[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]   .item-wrapper[_ngcontent-%COMP%] {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vTWFjJTIwRHJpdmUvaXRzYmliZWtzYWluaS9zcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tLWxpc3QvY3VzdG9tLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLDRCQUFBO0VBQ0EsK0JBQUE7QUNBSjtBREVJO0VBQ0Usc0JBQUE7QUNBTjtBREVNO0VBQ0UsNkJBQUE7QUNBUjtBRElJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7QUNGTjtBRElNO0VBQ0UsWUFBQTtBQ0ZSIiwiZmlsZSI6ImN1c3RvbS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgcGFkZGluZy10b3A6IDJyZW07XG5cbiAgJiBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNDBweDtcblxuICAgICY6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG5cbiAgICAgICYgLml0ZW0td3JhcHBlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0MHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNDBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIGNvbG9yOiBibGFjaztcblxuICAgICAgJiAuaXRlbS13cmFwcGVyIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwidWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgcGFkZGluZy10b3A6IDJyZW07XG59XG51bCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQwcHg7XG59XG51bCBsaTpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxudWwgbGk6bm90KDpsYXN0LW9mLXR5cGUpIC5pdGVtLXdyYXBwZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbnVsIGxpLnNlbGVjdGVkIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBjb2xvcjogYmxhY2s7XG59XG51bCBsaS5zZWxlY3RlZCAuaXRlbS13cmFwcGVyIHtcbiAgYm9yZGVyOiBub25lO1xufSJdfQ== */"] });


/***/ }),

/***/ 8598:
/*!***************************************************************************************!*\
  !*** ./src/app/components/custom-list/directive/select-item/select-item.directive.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectItemDirective": () => (/* binding */ SelectItemDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _state_custom_list_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/custom-list-store */ 8989);
/* harmony import */ var src_app_components_projects_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/projects/services */ 7854);



class SelectItemDirective {
    constructor(customListService, projectSelector) {
        this.customListService = customListService;
        this.projectSelector = projectSelector;
    }
    click() {
        this.customListService.selectItem(this.selectedItem);
        this.projectSelector.selectProject(this.selectedItem);
    }
}
SelectItemDirective.ɵfac = function SelectItemDirective_Factory(t) { return new (t || SelectItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_state_custom_list_store__WEBPACK_IMPORTED_MODULE_0__.CustomListStore), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_components_projects_services__WEBPACK_IMPORTED_MODULE_1__.ProjectSelectorService)); };
SelectItemDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: SelectItemDirective, selectors: [["", "select-item", ""]], hostBindings: function SelectItemDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectItemDirective_click_HostBindingHandler() { return ctx.click(); });
    } }, inputs: { selectedItem: ["select-item", "selectedItem"] } });


/***/ }),

/***/ 1598:
/*!*******************************************************************!*\
  !*** ./src/app/components/custom-list/state/custom-list-query.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomListQuery": () => (/* binding */ CustomListQuery)
/* harmony export */ });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 6114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _custom_list_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-list-store */ 8989);



class CustomListQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(customListStore) {
        super(customListStore);
        this.customListStore = customListStore;
    }
}
CustomListQuery.ɵfac = function CustomListQuery_Factory(t) { return new (t || CustomListQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_custom_list_store__WEBPACK_IMPORTED_MODULE_1__.CustomListStore)); };
CustomListQuery.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CustomListQuery, factory: CustomListQuery.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3582:
/*!*******************************************************************!*\
  !*** ./src/app/components/custom-list/state/custom-list-state.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultCustomListState": () => (/* binding */ defaultCustomListState)
/* harmony export */ });
function defaultCustomListState() {
    return {
        ITEMS: []
    };
}


/***/ }),

/***/ 8989:
/*!*******************************************************************!*\
  !*** ./src/app/components/custom-list/state/custom-list-store.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomListStore": () => (/* binding */ CustomListStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 6114);
/* harmony import */ var _custom_list_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-list-state */ 3582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let CustomListStore = class CustomListStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Store {
    constructor() {
        super((0,_custom_list_state__WEBPACK_IMPORTED_MODULE_1__.defaultCustomListState)());
    }
    selectItem(id) {
        this.unselectAll();
        this.update(state => {
            let item = state.ITEMS.find(x => x.ID === id);
            if (item !== undefined)
                item.IS_SELECTED = true;
        });
    }
    unselectItem(id) {
        this.update(state => {
            let selectedItem = state.ITEMS.find(x => x.ID === id);
            if (selectedItem !== undefined)
                selectedItem.IS_SELECTED = false;
        });
    }
    unselectAll() {
        this.update(state => {
            let selectedItem = state.ITEMS.find(x => x.IS_SELECTED);
            if (selectedItem !== undefined)
                selectedItem.IS_SELECTED = false;
        });
    }
};
CustomListStore.ɵfac = function CustomListStore_Factory(t) { return new (t || CustomListStore)(); };
CustomListStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CustomListStore, factory: CustomListStore.ɵfac, providedIn: 'root' });
CustomListStore = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: 'custom-list' })
], CustomListStore);



/***/ }),

/***/ 6183:
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryComponent": () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var src_app_data_gallery_mockups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/gallery/mockups */ 2336);
/* harmony import */ var _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-viewer/image-viewer.component */ 6608);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);





class GalleryComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.availableSizes = ['grid__item--lg', 'grid__item--sm', 'grid__item--xs'];
        this.displayableMockups = src_app_data_gallery_mockups__WEBPACK_IMPORTED_MODULE_0__.MOCKUPS;
        let lastIndex = 0;
        for (let i = 0; i < this.displayableMockups.length; i++) {
            let randomIndex = this.getRandomNumber(lastIndex);
            this.displayableMockups[i].SIZE = this.availableSizes[randomIndex];
            lastIndex = randomIndex;
        }
    }
    getRandomNumber(lastNumber) {
        let randomNumber = Math.floor(Math.random() * this.availableSizes.length);
        while (lastNumber === randomNumber) {
            randomNumber = Math.floor(Math.random() * this.availableSizes.length);
        }
        return randomNumber;
    }
    ngOnInit() {
    }
    prevThumb(key) {
        let linkedImages = this.displayableMockups.filter(x => x.ID === key)[0].LINKED_IMG;
        if (linkedImages.length > 0)
            this.dialog.open(_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_1__.ImageViewerComponent, {
                data: linkedImages,
                autoFocus: false,
                disableClose: true
            });
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
GalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 2, vars: 0, consts: [["fxLayout", "column", 1, "container-fluid", "p-0", "h-100"], ["src", "https://mockups.itsbibeksaini.com/#/", 1, "h-100", "w-100"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective], styles: [".gallery-wrapper[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n@media (max-width: 768px) {\n  .gallery-wrapper[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\nimg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: block;\n  object-fit: cover;\n  border-radius: 0.25rem;\n}\n.grid[_ngcontent-%COMP%] {\n  max-width: var(--wrapper);\n  display: grid;\n  grid-template-columns: repeat(var(--noOfColumns), minmax(0, 1fr));\n  grid-auto-flow: dense;\n  grid-auto-rows: minmax(var(--rh), auto);\n  grid-gap: var(--gutter);\n  margin: var(--gutter);\n}\n@media (min-width: 60em) {\n  .grid[_ngcontent-%COMP%] {\n    margin: var(--gutter) auto;\n  }\n}\n.grid__item[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  cursor: pointer;\n  border: 1px solid;\n}\n.grid__item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22) !important;\n}\n.grid__item--lg[_ngcontent-%COMP%] {\n  grid-column: span 4;\n  grid-row: span 4;\n  position: relative;\n}\n@media (max-width: 768px) {\n  .grid__item--lg[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 425px) {\n  .grid__item--lg[_ngcontent-%COMP%] {\n    grid-column: span 1;\n    grid-row: span 1;\n  }\n  .grid__item--lg[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.grid__item--sm[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  grid-row: span 2;\n}\n.grid__item--xs[_ngcontent-%COMP%] {\n  grid-column: span 1;\n  grid-row: span 1;\n}\n@media (min-width: 60em) {\n  .grid__item--right[_ngcontent-%COMP%] {\n    grid-column: 3/span 2;\n  }\n}\n.grid__item--db[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  background-color: lightBlue;\n  padding: 1.5em;\n}\n@media (min-width: 60em) {\n  .grid__item--db[_ngcontent-%COMP%] {\n    background-color: transparent;\n    padding: 0;\n  }\n}\n.caption[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 1.5em;\n  border-radius: 0.25rem;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9NYWMlMjBEcml2ZS9pdHNiaWJla3NhaW5pL3NyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGO0FEQ0U7RUFIRjtJQUlJLFVBQUE7RUNFRjtBQUNGO0FEQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDRUY7QURDQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlFQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FBQTtFQUlBLHVCQUFBO0VBQ0EscUJBQUE7QUNERjtBREdFO0VBWkY7SUFhSSwwQkFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUVBLGlCQUFBO0FDREY7QURHRTtFQUNFLHNGQUFBO0FDREo7QURLQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtBQ0hGO0FES0U7RUFDRTtJQUNFLGFBQUE7RUNISjtBQUNGO0FETUU7RUFaRjtJQWFJLG1CQUFBO0lBQ0EsZ0JBQUE7RUNIRjtFREtFO0lBQ0UsYUFBQTtFQ0hKO0FBQ0Y7QURPQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRE9BO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0pGO0FEUUU7RUFERjtJQUVJLHFCQUFBO0VDSkY7QUFDRjtBRE9BO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUNKRjtBRE1FO0VBTEY7SUFNSSw2QkFBQTtJQUNBLFVBQUE7RUNIRjtBQUNGO0FETUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QUNIRiIsImZpbGUiOiJnYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbGxlcnktd3JhcHBlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG5pbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5ncmlkIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS13cmFwcGVyKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tbm9PZkNvbHVtbnMpLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdyaWQtYXV0by1mbG93OiBkZW5zZTtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heChcbiAgICB2YXIoLS1yaCksXG4gICAgYXV0b1xuICApOyAvLyBJZiB0aGUgY29udGVudCBpcyB0YWxsZXIgdGhlbiB0aGUgYm94IHdpbGwgZ3JvdyB0byBmaXQuIFRoaXMgaXMgb25seSBnb2luZyB0byB3b3JrIGlmIHRoZSBjb2x1bW4gdmFsdWUgaXMgMWZyXG4gIGdyaWQtZ2FwOiB2YXIoLS1ndXR0ZXIpO1xuICBtYXJnaW46IHZhcigtLWd1dHRlcik7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwZW0pIHtcbiAgICBtYXJnaW46IHZhcigtLWd1dHRlcikgYXV0bztcbiAgfVxufVxuXG4uZ3JpZF9faXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLy8gdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAxNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIyKSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5ncmlkX19pdGVtLS1sZyB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDQ7XG4gIGdyaWQtcm93OiBzcGFuIDQ7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jYXB0aW9uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcbiAgICBncmlkLXJvdzogc3BhbiAxO1xuXG4gICAgLmNhcHRpb24ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLmdyaWRfX2l0ZW0tLXNtIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcbn1cblxuLmdyaWRfX2l0ZW0tLXhzIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcbiAgZ3JpZC1yb3c6IHNwYW4gMTtcbn1cblxuLmdyaWRfX2l0ZW0tLXJpZ2h0IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwZW0pIHtcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gMjtcbiAgfVxufVxuXG4uZ3JpZF9faXRlbS0tZGIge1xuICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodEJsdWU7XG4gIHBhZGRpbmc6IDEuNWVtO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MGVtKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG4uY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbiIsIi5nYWxsZXJ5LXdyYXBwZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5nYWxsZXJ5LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uZ3JpZCB7XG4gIG1heC13aWR0aDogdmFyKC0td3JhcHBlcik7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLW5vT2ZDb2x1bW5zKSwgbWlubWF4KDAsIDFmcikpO1xuICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgodmFyKC0tcmgpLCBhdXRvKTtcbiAgZ3JpZC1nYXA6IHZhcigtLWd1dHRlcik7XG4gIG1hcmdpbjogdmFyKC0tZ3V0dGVyKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MGVtKSB7XG4gIC5ncmlkIHtcbiAgICBtYXJnaW46IHZhcigtLWd1dHRlcikgYXV0bztcbiAgfVxufVxuXG4uZ3JpZF9faXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4uZ3JpZF9faXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAxNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIyKSAhaW1wb3J0YW50O1xufVxuXG4uZ3JpZF9faXRlbS0tbGcge1xuICBncmlkLWNvbHVtbjogc3BhbiA0O1xuICBncmlkLXJvdzogc3BhbiA0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmdyaWRfX2l0ZW0tLWxnIC5jYXB0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmdyaWRfX2l0ZW0tLWxnIHtcbiAgICBncmlkLWNvbHVtbjogc3BhbiAxO1xuICAgIGdyaWQtcm93OiBzcGFuIDE7XG4gIH1cbiAgLmdyaWRfX2l0ZW0tLWxnIC5jYXB0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5ncmlkX19pdGVtLS1zbSB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gIGdyaWQtcm93OiBzcGFuIDI7XG59XG5cbi5ncmlkX19pdGVtLS14cyB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XG4gIGdyaWQtcm93OiBzcGFuIDE7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MGVtKSB7XG4gIC5ncmlkX19pdGVtLS1yaWdodCB7XG4gICAgZ3JpZC1jb2x1bW46IDMvc3BhbiAyO1xuICB9XG59XG5cbi5ncmlkX19pdGVtLS1kYiB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Qmx1ZTtcbiAgcGFkZGluZzogMS41ZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjBlbSkge1xuICAuZ3JpZF9faXRlbS0tZGIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuLmNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59Il19 */"] });


/***/ }),

/***/ 6608:
/*!***************************************************************************!*\
  !*** ./src/app/components/gallery/image-viewer/image-viewer.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageViewerComponent": () => (/* binding */ ImageViewerComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);








function ImageViewerComponent_ngb_carousel_4_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prevImg_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", prevImg_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ImageViewerComponent_ngb_carousel_4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImageViewerComponent_ngb_carousel_4_1_ng_template_0_Template, 2, 1, "ng-template", 8);
} }
function ImageViewerComponent_ngb_carousel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageViewerComponent_ngb_carousel_4_1_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.prevImages);
} }
class ImageViewerComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTimes;
        this.prevImages = data;
    }
    ngOnInit() {
    }
    closeDialog() {
        this.dialogRef.close();
    }
}
ImageViewerComponent.ɵfac = function ImageViewerComponent_Factory(t) { return new (t || ImageViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef)); };
ImageViewerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageViewerComponent, selectors: [["app-image-viewer"]], decls: 7, vars: 2, consts: [["mat-dialog-title", "", 1, "p-1", "ps-3", "text-start", "dialog-header"], [3, "icon", "click"], ["fxLayout", "row wrap", 1, "container-fluid", "p-3", "h-100", "m-0"], ["fxFlex", "70%", "fxFlex.xs", "100%", "fxFlex.sm", "100%", 2, "box-shadow", "0 3px 8px rgba(0,0,0,0.4)"], [4, "ngIf"], ["fxFlex", "30%", "fxFlex.xs", "100%", "fxFlex.sm", "100%", 1, "p-3", 2, "position", "relative"], ["src", "assets/illustrations/under-construction.svg"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "Random first slide", 2, "width", "100%", "border-radius", "0.25rem", 3, "src"]], template: function ImageViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageViewerComponent_Template_fa_icon_click_1_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImageViewerComponent_ngb_carousel_4_Template, 2, 1, "ngb-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.prevImages.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbSlide, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle], styles: ["mat-dialog-content[_ngcontent-%COMP%] {\n  min-width: 320px;\n  max-height: 100vh;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);\n  margin: 0 !important;\n}\n\n.dialog-header[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXZpZXdlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL01hYyUyMERyaXZlL2l0c2JpYmVrc2Fpbmkvc3JjL2FwcC9jb21wb25lbnRzL2dhbGxlcnkvaW1hZ2Utdmlld2VyL2ltYWdlLXZpZXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURPQTtFQUNFLHdDQUFBO0VBQ0Esb0JBQUE7QUNKRjs7QURNRTtFQUNFLGVBQUE7QUNKSiIsImZpbGUiOiJpbWFnZS12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZGlhbG9nLWNvbnRlbnQge1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgLy8gbWF4LXdpZHRoOiAxNDQwcHg7XG4gIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gIC8vIG92ZXJmbG93LXk6IHNjcm9sbDtcblxuICBcbn1cblxuLmRpYWxvZy1oZWFkZXIge1xuICBib3gtc2hhZG93OiAwIDNweCA4cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcblxuICAmIGZhLWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIiwibWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWluLXdpZHRoOiAzMjBweDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG59XG5cbi5kaWFsb2ctaGVhZGVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG4uZGlhbG9nLWhlYWRlciBmYS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ 7672:
/*!*****************************************************!*\
  !*** ./src/app/components/gallery/models/mockup.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mockup": () => (/* binding */ Mockup)
/* harmony export */ });
class Mockup {
    constructor() {
        this._LINKED_IMG = [];
    }
    get ID() {
        return this._ID;
    }
    set ID(v) {
        this._ID = v;
    }
    get IMG_THUMB() {
        return this._IMG_THUMB;
    }
    set IMG_THUMB(v) {
        this._IMG_THUMB = v;
    }
    get SIZE() {
        return this._SIZE;
    }
    set SIZE(v) {
        this._SIZE = v;
    }
    get LINKED_IMG() {
        return this._LINKED_IMG;
    }
    set LINKED_IMG(v) {
        this._LINKED_IMG = v;
    }
}


/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _directives_link_link_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/link/link.directive */ 2751);







function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 17);
} }
function HomeComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 18);
} }
class HomeComponent {
    constructor() {
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faGithub;
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faLinkedin;
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faFacebook;
        this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faInstagram;
        this.isLoading = true;
    }
    ngOnInit() {
        let firstLoad = localStorage.getItem("firstLoad") == null;
        if (firstLoad) {
            setTimeout(() => {
                this.isLoading = false;
            }, 500);
            localStorage.setItem("firstLoad", "false");
        }
        else {
            this.isLoading = false;
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 27, vars: 6, consts: [["fxLayout", "column", 1, "container-fluid", "p-0", "home-card", "centralize", "max-supported-width"], ["fxFlex", "", "fxLayout.xs", "column", "fxLayout", "row", 1, "container-fluid", "p-0"], ["fxFlex", "360px", "fxFlex.xs", "100%", 1, "text-center", "me-2"], ["class", "profile-image-skeleton", 4, "ngIf"], ["src", "assets/profile-image/profile-image.jpg", "class", "profile-image animate__animated animate__zoomIn animate__faster", 4, "ngIf"], ["fxFlex", "", 1, "card-info"], [1, "vertical-center"], [1, "mat-h3", "display-block", "m-0"], [1, "mat-display-1", "display-block", "m-0"], [1, "mat-h1", "display-block", "m-0"], [1, "mat-h4", "display-block", "mt-2"], ["fxflex", "", 1, "text-center"], ["type", "button", "mat-icon-button", "", "link", "github"], [2, "font-size", "30px", 3, "icon"], ["type", "button", "mat-icon-button", "", "link", "linkdin"], ["type", "button", "mat-icon-button", "", "link", "facebook"], ["type", "button", "mat-icon-button", "", "link", "instagram"], [1, "profile-image-skeleton"], ["src", "assets/profile-image/profile-image.jpg", 1, "profile-image", "animate__animated", "animate__zoomIn", "animate__faster"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeComponent_img_4_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Hi, my name is");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Bibek Saini.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "I build things for web");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "I'm a full stack software engineer based in Mohali, IN specializing in designing architecture, developing and deploying SAAS applications, and everything in between.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Currently, I'm working as Senior Software Engineer at CatalystOne focused on building HCM Cloud product.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faGithub);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faLinkedin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faFacebook);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faInstagram);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _directives_link_link_directive__WEBPACK_IMPORTED_MODULE_0__.LinkDirective], styles: [".home-card[_ngcontent-%COMP%] {\n  width: 630px;\n}\n.home-card[_ngcontent-%COMP%]   .profile-image-skeleton[_ngcontent-%COMP%] {\n  height: 350px;\n  width: 350px;\n  border-radius: 50%;\n  margin: auto;\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80%), lightgray;\n  background-repeat: repeat-y;\n  background-size: 50px 200px;\n  background-position: 0 0;\n  animation: shine 1s infinite;\n}\n.home-card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\n  position: relative;\n}\n.home-card[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  border-radius: 50%;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);\n}\n@keyframes shine {\n  to {\n    background-position: 100% 0, 0 0;\n  }\n}\n@media screen and (max-width: 425px) {\n  .home-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .home-card[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%], .home-card[_ngcontent-%COMP%]   .profile-image-skeleton[_ngcontent-%COMP%] {\n    width: 230px !important;\n    height: 230px !important;\n  }\n  .home-card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n  .home-card[_ngcontent-%COMP%]   .centralize[_ngcontent-%COMP%], .home-card[_ngcontent-%COMP%]   .vertical-center[_ngcontent-%COMP%] {\n    flex: 1 1 100% !important;\n    min-width: 100% !important;\n    max-width: 100% !important;\n    position: relative;\n    transform: none;\n    top: 0;\n    left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9NYWMlMjBEcml2ZS9pdHNiaWJla3NhaW5pL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsa0lBQUE7RUFRQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ1BKO0FEVUU7RUFDRSxrQkFBQTtBQ1JKO0FEV0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNUSjtBRGFBO0VBQ0U7SUFDRSxnQ0FBQTtFQ1ZGO0FBQ0Y7QURhQTtFQUNFO0lBQ0UsV0FBQTtFQ1hGO0VEYUU7SUFDRSx1QkFBQTtJQUNBLHdCQUFBO0VDWEo7RURjRTtJQUNFLDZCQUFBO0VDWko7RURlRTtJQUNFLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSwwQkFBQTtJQUVBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0VDZEo7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtY2FyZHtcbiAgd2lkdGg6IDYzMHB4O1xuXG4gICYgLnByb2ZpbGUtaW1hZ2Utc2tlbGV0b257XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcblxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggICAgICAgIFxuICAgICAgdG8gcmlnaHQsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDUwJSxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgODAlXG4gICAgKSxcbiAgICBsaWdodGdyYXk7XG5cbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7ICAgICAgICBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwcHggMjAwcHg7ICAgICAgICBcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7ICBcbiAgICBhbmltYXRpb246IHNoaW5lIDFzIGluZmluaXRlO1xuICB9XG5cbiAgLmNhcmQtaW5mb3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAucHJvZmlsZS1pbWFnZXtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwwLDAsMC40KTsgIFxuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hpbmUge1x0XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDAsIC8qIG1vdmUgaGlnaGxpZ2h0IHRvIHJpZ2h0ICovIDAgMDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQyNXB4KSB7XG4gIC5ob21lLWNhcmR7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmIC5wcm9maWxlLWltYWdlLCAucHJvZmlsZS1pbWFnZS1za2VsZXRvbntcbiAgICAgIHdpZHRoOiAyMzBweCAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAyMzBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYgLmNhcmQtaW5mb3tcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jZW50cmFsaXplLCAudmVydGljYWwtY2VudGVye1xuICAgICAgZmxleDogMSAxIDEwMCUgIWltcG9ydGFudDtcbiAgICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7ICAgIFxuICAgICAgXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICB0b3A6MDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfSBcbiAgfVxufSIsIi5ob21lLWNhcmQge1xuICB3aWR0aDogNjMwcHg7XG59XG4uaG9tZS1jYXJkIC5wcm9maWxlLWltYWdlLXNrZWxldG9uIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgd2lkdGg6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDgwJSksIGxpZ2h0Z3JheTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwcHggMjAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgYW5pbWF0aW9uOiBzaGluZSAxcyBpbmZpbml0ZTtcbn1cbi5ob21lLWNhcmQgLmNhcmQtaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob21lLWNhcmQgLnByb2ZpbGUtaW1hZ2Uge1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMzUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuQGtleWZyYW1lcyBzaGluZSB7XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDAsIDAgMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmhvbWUtY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhvbWUtY2FyZCAucHJvZmlsZS1pbWFnZSwgLmhvbWUtY2FyZCAucHJvZmlsZS1pbWFnZS1za2VsZXRvbiB7XG4gICAgd2lkdGg6IDIzMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyMzBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5ob21lLWNhcmQgLmNhcmQtaW5mbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhvbWUtY2FyZCAuY2VudHJhbGl6ZSwgLmhvbWUtY2FyZCAudmVydGljYWwtY2VudGVyIHtcbiAgICBmbGV4OiAxIDEgMTAwJSAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 9771:
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutMeComponent": () => (/* reexport safe */ _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_0__.AboutMeComponent),
/* harmony export */   "HomeComponent": () => (/* reexport safe */ _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent),
/* harmony export */   "ProjectsComponent": () => (/* reexport safe */ _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent),
/* harmony export */   "SidebarComponent": () => (/* reexport safe */ _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent),
/* harmony export */   "SkillsComponent": () => (/* reexport safe */ _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__.SkillsComponent),
/* harmony export */   "WorkComponent": () => (/* reexport safe */ _work_work_component__WEBPACK_IMPORTED_MODULE_5__.WorkComponent)
/* harmony export */ });
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-me/about-me.component */ 3714);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 8263);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ 4935);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 9201);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills/skills.component */ 1727);
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work/work.component */ 4060);








/***/ }),

/***/ 7493:
/*!******************************************************************************************!*\
  !*** ./src/app/components/projects/dialogs/project-details/project-details.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailsComponent": () => (/* binding */ ProjectDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);










function ProjectDetailsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This project has been archived and there is no activity ongoing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faArchive);
} }
function ProjectDetailsComponent_div_21_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", tech_r5.IMAGE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", tech_r5.TITLE);
} }
function ProjectDetailsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "header")(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tech used");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectDetailsComponent_div_21_div_6_Template, 2, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.clickedProject.TECH_USED);
} }
function ProjectDetailsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "header")(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Architecture diagram");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.clickedProject.ARCHITECTURE_DIAGRAM, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectDetailsComponent_div_23_ngb_carousel_8_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r8.IMAGE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectDetailsComponent_div_23_ngb_carousel_8_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectDetailsComponent_div_23_ngb_carousel_8_1_ng_template_0_Template, 2, 1, "ng-template", 30);
} }
function ProjectDetailsComponent_div_23_ngb_carousel_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailsComponent_div_23_ngb_carousel_8_1_Template, 1, 0, null, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.clickedProject.GALLERY);
} }
function ProjectDetailsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "header")(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "div", 26)(7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectDetailsComponent_div_23_ngb_carousel_8_Template, 2, 1, "ngb-carousel", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.images);
} }
class ProjectDetailsComponent {
    constructor(project) {
        this.project = project;
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTimes;
        this.faArchive = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faArchive;
        this.images = ['assets/projects/taskmanager/tm_microservices.png', 'assets/projects/taskmanager/premission-center.png'];
        this.clickedProject = project.project;
    }
    ngOnInit() {
    }
}
ProjectDetailsComponent.ɵfac = function ProjectDetailsComponent_Factory(t) { return new (t || ProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
ProjectDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectDetailsComponent, selectors: [["app-project-details"]], decls: 24, vars: 8, consts: [["mat-dialog-title", "", 1, "m-0"], ["fxFlex", "", 1, "container-fluid", "shadow-1", "position-relative", "p-2"], ["fxFlex", "1.2rem"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "vertical-center"], [2, "font-size", "1.2rem", 3, "icon"], ["fxFlex", "", 1, "text-center", "position-relative"], [1, "vertical-center", "w-100"], [1, "mat-h1", "display-block", "m-0", 2, "white-space", "nowrap"], [1, "mat-small", "display-block", "m-0", 2, "white-space", "nowrap"], ["mat-dialog-content", "", "fxLayout", "column", 1, "m-0", "p-0", "container-fluid", 2, "width", "100%"], ["fxFlex", "", 1, "padding2030"], ["class", "alert alert-warning", 4, "ngIf"], [1, "padding1015", 2, "background-color", "var(--background-color)", "border-radius", "0.25rem"], [1, "mat-h1"], [1, "mat-body"], ["style", "background-color: var(--background-color);border-radius: 0.25rem;", "class", "padding1015 mt-3", 4, "ngIf"], [1, "alert", "alert-warning"], [3, "icon"], [1, "ms-1"], [1, "padding1015", "mt-3", 2, "background-color", "var(--background-color)", "border-radius", "0.25rem"], ["fxLayout", "row wrap", "fxLayoutAlign", "center", 1, "container-fluid", "p-0", "text-center", "tech-used"], ["fxFlex", "50px", "class", "p-1 skill", 4, "ngFor", "ngForOf"], ["fxFlex", "50px", 1, "p-1", "skill"], ["matTooltipPosition", "below", 1, "pointer", 3, "src", "matTooltip"], [1, "text-center"], [2, "width", "100%", 3, "src"], ["fxLayoutAlign", "center", 1, "container-fluid"], ["fxFlex", "500px", "fxFlex.sm", "100%", "fxFlex.xs", "100%", 2, "border-radius", "0.25rem"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "Random first slide", 2, "width", "100%", "border-radius", "0.25rem", 3, "src"]], template: function ProjectDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9)(12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProjectDetailsComponent_div_13_Template, 4, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "header")(16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProjectDetailsComponent_div_21_Template, 7, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProjectDetailsComponent_div_22_Template, 7, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProjectDetailsComponent_div_23_Template, 9, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.clickedProject.TITLE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.clickedProject.SUB_TITLE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clickedProject.ARCHIEVED);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.clickedProject.DESCRIPTION);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clickedProject.TECH_USED.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clickedProject.ARCHITECTURE_DIAGRAM);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clickedProject.GALLERY.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbSlide, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8990:
/*!*************************************************************!*\
  !*** ./src/app/components/projects/models/gallery-image.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryImage": () => (/* binding */ GalleryImage)
/* harmony export */ });
class GalleryImage {
    get IMAGE() {
        return this._IMAGE;
    }
    set IMAGE(v) {
        this._IMAGE = v;
    }
    get PLACEHOLDER() {
        return this._PLACEHOLDER;
    }
    set PLACEHOLDER(v) {
        this._PLACEHOLDER = v;
    }
    get PLACEHOLDER_COLOR() {
        return this._PLACEHOLDER_COLOR;
    }
    set PLACEHOLDER_COLOR(v) {
        this._PLACEHOLDER_COLOR = v;
    }
}


/***/ }),

/***/ 1369:
/*!*******************************************************!*\
  !*** ./src/app/components/projects/models/project.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor() {
        this._TECH_USED = [];
        this._GALLERY = [];
        this._VIEW_DETAILS = true;
    }
    get ID() {
        return this._ID;
    }
    set ID(v) {
        this._ID = v;
    }
    get TITLE() {
        return this._TITLE;
    }
    set TITLE(v) {
        this._TITLE = v;
    }
    get SUB_TITLE() {
        return this._SUB_TITLE;
    }
    set SUB_TITLE(v) {
        this._SUB_TITLE = v;
    }
    get DESCRIPTION() {
        return this._DESCRIPTION;
    }
    set DESCRIPTION(v) {
        this._DESCRIPTION = v;
    }
    get SELECTED() {
        return this._SELECTED;
    }
    set SELECTED(v) {
        this._SELECTED = v;
    }
    get ARCHIEVED() {
        return this._ARCHIEVED;
    }
    set ARCHIEVED(v) {
        this._ARCHIEVED = v;
    }
    get TECH_USED() {
        return this._TECH_USED;
    }
    set TECH_USED(v) {
        this._TECH_USED = v;
    }
    get GALLERY() {
        return this._GALLERY;
    }
    set GALLERY(v) {
        this._GALLERY = v;
    }
    get PROJECT_STRUCTURE_LINK() {
        return this._PROJECT_STRUCTURE_LINK;
    }
    set PROJECT_STRUCTURE_LINK(v) {
        this._PROJECT_STRUCTURE_LINK = v;
    }
    get APP_LINK() {
        return this._APP_LINK;
    }
    set APP_LINK(v) {
        this._APP_LINK = v;
    }
    get ARCHITECTURE_DIAGRAM() {
        return this._ARCHITECTURE_DIAGRAM;
    }
    set ARCHITECTURE_DIAGRAM(v) {
        this._ARCHITECTURE_DIAGRAM = v;
    }
    get REPO_LINK() {
        return this._REPO_LINK;
    }
    set REPO_LINK(v) {
        this._REPO_LINK = v;
    }
    get VIEW_DETAILS() {
        return this._VIEW_DETAILS;
    }
    set VIEW_DETAILS(v) {
        this._VIEW_DETAILS = v;
    }
}


/***/ }),

/***/ 834:
/*!****************************************************************************!*\
  !*** ./src/app/components/projects/project-card/project-card.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectCardComponent": () => (/* binding */ ProjectCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _show_details_show_details_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../show-details/show-details.directive */ 3075);








function ProjectCardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "mat-chip-list")(2, "mat-chip", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Archieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function ProjectCardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", tech_r3.IMAGE, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", tech_r3.TITLE);
} }
function ProjectCardComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showDetails", ctx_r2.projectData);
} }
class ProjectCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectCardComponent.ɵfac = function ProjectCardComponent_Factory(t) { return new (t || ProjectCardComponent)(); };
ProjectCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectCardComponent, selectors: [["project-card"]], inputs: { projectData: "projectData" }, decls: 14, vars: 6, consts: [[1, "project-card"], [1, "mat-h2", "display-block", "m-0"], [1, "mat-small", "display-block", "m-0"], ["class", "mt-1 archieved-chip", 4, "ngIf"], [1, "mb-0"], [1, "pt-2", "pb-2", "project-intro"], [1, "mat-body"], ["fxLayout", "row wrap", "fxLayoutAlign", "center", 1, "container-fluid", "p-0", "text-center", "tech-used"], ["fxFlex", "50px", "class", "p-1 skill", 4, "ngFor", "ngForOf"], ["class", "p-2 view-project", 4, "ngIf"], [1, "mt-1", "archieved-chip"], ["color", "primary", "selected", ""], ["fxFlex", "50px", 1, "p-1", "skill"], ["matTooltipPosition", "below", 1, "pointer", 3, "src", "matTooltip"], [1, "p-2", "view-project"], ["mat-raised-button", "", "color", "primary", 1, "w-100", 3, "showDetails"]], template: function ProjectCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0)(1, "header")(2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProjectCardComponent_div_6_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProjectCardComponent_div_12_Template, 2, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProjectCardComponent_div_13_Template, 4, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.projectData.TITLE);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.projectData.SUB_TITLE);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.projectData.ARCHIEVED);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.projectData.DESCRIPTION);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projectData.TECH_USED);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.projectData.VIEW_DETAILS);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChip, _show_details_show_details_directive__WEBPACK_IMPORTED_MODULE_0__.ShowDetailsDirective], styles: [".project-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: 1px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n.project-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .archieved-chip[_ngcontent-%COMP%] {\n  display: none;\n}\n.project-card[_ngcontent-%COMP%]   .project-intro[_ngcontent-%COMP%] {\n  display: none;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n  position: absolute;\n  left: -30px;\n  right: -30px;\n  top: -30px;\n  z-index: 1;\n}\n@media screen and (max-width: 425px) {\n  .project-card[_ngcontent-%COMP%]:hover {\n    left: 0;\n    right: 0;\n    top: -30px;\n  }\n}\n.project-card[_ngcontent-%COMP%]:hover   .project-intro[_ngcontent-%COMP%] {\n  display: block;\n}\n.project-card[_ngcontent-%COMP%]:hover   .tech-used[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.project-card[_ngcontent-%COMP%]:hover   .view-project[_ngcontent-%COMP%], .project-card[_ngcontent-%COMP%]:hover   header[_ngcontent-%COMP%]   .archieved-chip[_ngcontent-%COMP%] {\n  display: block;\n}\n.project-card[_ngcontent-%COMP%]   .tech-used[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.project-card[_ngcontent-%COMP%]   .tech-used[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  border-radius: 0.25rem;\n  text-align: center;\n  height: 50px;\n  width: 50px;\n  position: relative;\n}\n.project-card[_ngcontent-%COMP%]   .tech-used[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);\n}\n.project-card[_ngcontent-%COMP%]   .tech-used[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  bottom: 50%;\n  transform: translate(-50%, -50%);\n}\n.project-card[_ngcontent-%COMP%]   .view-project[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtY2FyZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL01hYyUyMERyaXZlL2l0c2JpYmVrc2Fpbmkvc3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3QtY2FyZC9wcm9qZWN0LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBQ0NGO0FER0k7RUFDRSxhQUFBO0FDRE47QURJRTtFQUNFLGFBQUE7QUNGSjtBREtFO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNISjtBREtJO0VBUkY7SUFTSSxPQUFBO0lBQ0EsUUFBQTtJQUNBLFVBQUE7RUNGSjtBQUNGO0FES0k7RUFDRSxjQUFBO0FDSE47QURNSTtFQUNFLHdCQUFBO0FDSk47QURPSTs7RUFFRSxjQUFBO0FDTE47QURTRTtFQUNFLHdCQUFBO0FDUEo7QURRSTtFQUNFLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNOTjtBRE9NO0VBQ0Usd0NBQUE7QUNMUjtBRFFNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDTlI7QURXRTtFQUNFLGFBQUE7QUNUSiIsImZpbGUiOiJwcm9qZWN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC1jYXJkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBcblxuICBoZWFkZXIge1xuICAgICYgLmFyY2hpZXZlZC1jaGlwIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gICYgLnByb2plY3QtaW50cm8ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMzBweDtcbiAgICByaWdodDogLTMwcHg7XG4gICAgdG9wOiAtMzBweDtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRvcDogLTMwcHg7XG4gICAgfVxuICAgICAgXG5cbiAgICAmIC5wcm9qZWN0LWludHJvIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICYgLnRlY2gtdXNlZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJiAudmlldy1wcm9qZWN0LFxuICAgIGhlYWRlciAuYXJjaGlldmVkLWNoaXAge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgJiAudGVjaC11c2VkIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgJiAuc2tpbGwge1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgIH1cblxuICAgICAgJiBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBib3R0b206IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJiAudmlldy1wcm9qZWN0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIucHJvamVjdC1jYXJkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLnByb2plY3QtY2FyZCBoZWFkZXIgLmFyY2hpZXZlZC1jaGlwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5wcm9qZWN0LWNhcmQgLnByb2plY3QtaW50cm8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnByb2plY3QtY2FyZDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTMwcHg7XG4gIHJpZ2h0OiAtMzBweDtcbiAgdG9wOiAtMzBweDtcbiAgei1pbmRleDogMTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5wcm9qZWN0LWNhcmQ6aG92ZXIge1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAtMzBweDtcbiAgfVxufVxuLnByb2plY3QtY2FyZDpob3ZlciAucHJvamVjdC1pbnRybyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnByb2plY3QtY2FyZDpob3ZlciAudGVjaC11c2VkIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuLnByb2plY3QtY2FyZDpob3ZlciAudmlldy1wcm9qZWN0LFxuLnByb2plY3QtY2FyZDpob3ZlciBoZWFkZXIgLmFyY2hpZXZlZC1jaGlwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucHJvamVjdC1jYXJkIC50ZWNoLXVzZWQge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4ucHJvamVjdC1jYXJkIC50ZWNoLXVzZWQgLnNraWxsIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2plY3QtY2FyZCAudGVjaC11c2VkIC5za2lsbDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4ucHJvamVjdC1jYXJkIC50ZWNoLXVzZWQgLnNraWxsIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGJvdHRvbTogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5wcm9qZWN0LWNhcmQgLnZpZXctcHJvamVjdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"] });


/***/ }),

/***/ 4935:
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2186);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ 7854);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-card/project-card.component */ 834);








function ProjectsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "project-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("projectData", project_r1);
} }
class ProjectsComponent {
    constructor(projectSelector) {
        this.projectSelector = projectSelector;
        this.images = ['assets/projects/taskmanager/tm_microservices.png', 'assets/projects/taskmanager/premission-center.png'];
        this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faLongArrowAltLeft;
        this.faExternalLinkAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faExternalLinkAlt;
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faGithub;
        this.faArchive = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArchive;
        this.hasSelectedProject = false;
        projectSelector.getSelectedProject().subscribe(project => {
            if (project !== undefined) {
                this.hasSelectedProject = true;
                this.selectedProject = project;
            }
        });
        projectSelector.getAllProjects().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(projects => {
            this.projects = projects;
        });
    }
    ngOnInit() {
    }
    backButton() {
        this.hasSelectedProject = false;
        this.projectSelector.unselectProjects();
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.ProjectSelectorService)); };
ProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 8, vars: 1, consts: [["fxLayout", "column", 1, "container-fluid", "h-100", "p-0", "max-supported-width"], ["fxFlex", "80px", 1, "padding2030"], [1, "mat-display-1"], ["fxFlex", ""], ["fxLayoutAlign", "center", "fxLayout", "row wrap", 1, "container-fluid", "padding1015", "mt-3"], ["fxFlex", "320px", "class", "p-3", "style", "position: relative;", 4, "ngFor", "ngForOf"], ["fxFlex", "320px", 1, "p-3", 2, "position", "relative"], [3, "projectData"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProjectsComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_1__.ProjectCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7854:
/*!*******************************************************!*\
  !*** ./src/app/components/projects/services/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectSelectorService": () => (/* reexport safe */ _project_selector_project_selector_service__WEBPACK_IMPORTED_MODULE_0__.ProjectSelectorService)
/* harmony export */ });
/* harmony import */ var _project_selector_project_selector_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-selector/project-selector.service */ 6733);



/***/ }),

/***/ 6733:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/projects/services/project-selector/project-selector.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectSelectorService": () => (/* binding */ ProjectSelectorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var src_app_data_projects_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/projects/projects */ 1496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _state_projects_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/projects-store */ 6805);
/* harmony import */ var src_app_components_projects_state_projects_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/projects/state/projects-query */ 589);





class ProjectSelectorService {
    constructor(projectStore, projectQuery) {
        this.projectStore = projectStore;
        this.projectQuery = projectQuery;
        this.selectedProjectID = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject("");
        this.addProjects();
    }
    addProjects() {
        this.projectStore.update(state => {
            return {
                PROJECTS: src_app_data_projects_projects__WEBPACK_IMPORTED_MODULE_0__.PROJECTS_DETAILS
            };
        });
    }
    getSelectedProject() {
        return this.projectQuery.select(state => state.PROJECTS.find(x => x.SELECTED));
    }
    selectProject(id) {
        this.projectStore.selectProject(id);
        this.selectedProjectID.next(id);
    }
    unselectProjects() {
        this.projectStore.unselectAll();
    }
    currentSelectedID() {
        return this.selectedProjectID.asObservable();
    }
    getAllProjects() {
        return this.projectQuery.select(state => state.PROJECTS);
    }
}
ProjectSelectorService.ɵfac = function ProjectSelectorService_Factory(t) { return new (t || ProjectSelectorService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_state_projects_store__WEBPACK_IMPORTED_MODULE_1__.ProjectsStore), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_components_projects_state_projects_query__WEBPACK_IMPORTED_MODULE_2__.ProjectsQuery)); };
ProjectSelectorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ProjectSelectorService, factory: ProjectSelectorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3075:
/*!****************************************************************************!*\
  !*** ./src/app/components/projects/show-details/show-details.directive.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowDetailsDirective": () => (/* binding */ ShowDetailsDirective)
/* harmony export */ });
/* harmony import */ var _dialogs_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dialogs/project-details/project-details.component */ 7493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);



class ShowDetailsDirective {
    constructor(dialog) {
        this.dialog = dialog;
    }
    click() {
        this.openDialog();
    }
    openDialog() {
        this.dialog.open(_dialogs_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_0__.ProjectDetailsComponent, {
            data: {
                project: this.showDetails,
            },
            disableClose: true,
            maxWidth: '1000px',
            autoFocus: false
        });
    }
}
ShowDetailsDirective.ɵfac = function ShowDetailsDirective_Factory(t) { return new (t || ShowDetailsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog)); };
ShowDetailsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ShowDetailsDirective, selectors: [["", "showDetails", ""]], hostBindings: function ShowDetailsDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowDetailsDirective_click_HostBindingHandler() { return ctx.click(); });
    } }, inputs: { showDetails: "showDetails" } });


/***/ }),

/***/ 589:
/*!*************************************************************!*\
  !*** ./src/app/components/projects/state/projects-query.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsQuery": () => (/* binding */ ProjectsQuery)
/* harmony export */ });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 6114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-store */ 6805);



class ProjectsQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(projectsStore) {
        super(projectsStore);
        this.projectsStore = projectsStore;
    }
}
ProjectsQuery.ɵfac = function ProjectsQuery_Factory(t) { return new (t || ProjectsQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_projects_store__WEBPACK_IMPORTED_MODULE_1__.ProjectsStore)); };
ProjectsQuery.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProjectsQuery, factory: ProjectsQuery.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3826:
/*!*************************************************************!*\
  !*** ./src/app/components/projects/state/projects-state.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultProjectsState": () => (/* binding */ defaultProjectsState)
/* harmony export */ });
function defaultProjectsState() {
    return {
        PROJECTS: []
    };
}


/***/ }),

/***/ 6805:
/*!*************************************************************!*\
  !*** ./src/app/components/projects/state/projects-store.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsStore": () => (/* binding */ ProjectsStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 6114);
/* harmony import */ var _projects_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-state */ 3826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let ProjectsStore = class ProjectsStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Store {
    constructor() {
        super((0,_projects_state__WEBPACK_IMPORTED_MODULE_1__.defaultProjectsState)());
    }
    selectProject(id) {
        this.unselectAll();
        this.update(state => {
            let project = state.PROJECTS.find(x => x.ID === id);
            if (project !== undefined)
                project.SELECTED = true;
        });
    }
    unSelectProject(id) {
        this.update(state => {
            let selectedProject = state.PROJECTS.find(x => x.ID === id);
            if (selectedProject !== undefined)
                selectedProject.SELECTED = false;
        });
    }
    unselectAll() {
        this.update(state => {
            let selectProject = state.PROJECTS.find(x => x.SELECTED);
            if (selectProject !== undefined)
                selectProject.SELECTED = false;
        });
    }
};
ProjectsStore.ɵfac = function ProjectsStore_Factory(t) { return new (t || ProjectsStore)(); };
ProjectsStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProjectsStore, factory: ProjectsStore.ɵfac, providedIn: 'root' });
ProjectsStore = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: 'projects' })
], ProjectsStore);



/***/ }),

/***/ 9201:
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services */ 1866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _directives_link_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/link/link.directive */ 2751);










class SidebarComponent {
    constructor(themeSwitcher) {
        this.themeSwitcher = themeSwitcher;
        this.faLaptopHouse = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faLaptopHouse;
        this.faLaptopCode = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faLaptopCode;
        this.faCogs = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCogs;
        this.faFilePdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faFilePdf;
        this.faProjectDiagram = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faProjectDiagram;
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faHome;
        this.faAddressCard = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faAddressCard;
        this.faAddressBook = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faAddressBook;
        this.faImages = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faImages;
        this.switchState = false;
        this.switchState = themeSwitcher.getCurrentTheme() != null && themeSwitcher.getCurrentTheme() === src_app_services__WEBPACK_IMPORTED_MODULE_0__.ThemeSwitcherService.THEME_DARK;
    }
    ngOnInit() {
    }
    switchTheme(evt) {
        this.switchState = evt.checked;
        this.themeSwitcher.switchTheme(evt.checked);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_0__.ThemeSwitcherService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["sidebar"]], decls: 27, vars: 10, consts: [["fxLayout", "column", "fxLayoutGap", "20px", 1, "sidebar", "container-fluid", "p-0"], ["fxFlex", "", 2, "overflow", "hidden", "overflow-y", "auto"], [1, "animate__animated", "animate__zoomIn", "animate__faster"], ["matTooltip", "Home", "routerLink", "/", "matTooltipPosition", "right", 3, "icon"], [1, "animate__animated", "animate__zoomIn", "animate__faster", "p-2"], ["src", "assets/profile-image/profile-image_40x40.jpg", "routerLink", "about-me", "matTooltip", "About Me", "matTooltipPosition", "right", 1, "profile-icon"], ["matTooltip", "Work", "routerLink", "work", "matTooltipPosition", "right", 3, "icon"], ["routerLink", "projects", "matTooltip", "Projects", "matTooltipPosition", "right", 3, "icon"], ["routerLink", "skills", "matTooltip", "Skills", "matTooltipPosition", "right", 3, "icon"], ["routerLink", "contact", "matTooltip", "Contact", "matTooltipPosition", "right", 3, "icon"], ["routerLink", "gallery", "matTooltip", "Gallery", "matTooltipPosition", "right", 3, "icon"], ["matTooltip", "Resume", "matTooltipPosition", "right", "link", "resume", 3, "icon"], ["fxFlex", "155px"], ["matTooltip", "Project docs", "matTooltipPosition", "right", "link", "project-docs", 3, "icon"], [1, "pl-0", "pr-0"], [3, "checked", "change"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1)(2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ul", 12)(19, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li", 14)(22, "div")(23, "mat-slide-toggle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SidebarComponent_Template_mat_slide_toggle_change_23_listener($event) { return ctx.switchTheme($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div")(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faLaptopHouse);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faLaptopCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faCogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faAddressBook);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faFilePdf);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faProjectDiagram);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.switchState);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.switchState ? "Light Mode" : "Dark Mode");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _directives_link_link_directive__WEBPACK_IMPORTED_MODULE_1__.LinkDirective], styles: [".sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  box-shadow: 8px 0px 10px 0px rgba(0, 0, 0, 0.2);\n  background-color: #424242;\n  position: relative;\n  color: #f5f5f5;\n}\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  text-align: center;\n  padding: 16px;\n}\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);\n  cursor: pointer;\n}\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  font-size: 21px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9NYWMlMjBEcml2ZS9pdHNiaWJla3NhaW5pL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQ0k7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ0NSO0FEQVE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0VaO0FERFk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0FDR2hCO0FEQVk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0VoQiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXJ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDhweCAwcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAjZjVmNWY1O1xuXG4gICAgdWx7ICAgICAgICAgICAgICAgIFxuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICYgbGl7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7ICAgICAgICAgIFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgICYgLnByb2ZpbGUtaWNvbntcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsMCwwLDAuNCk7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmIGZhLWljb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIuc2lkZWJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNoYWRvdzogOHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmNWY1ZjU7XG59XG4uc2lkZWJhciB1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5zaWRlYmFyIHVsIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uc2lkZWJhciB1bCBsaSAucHJvZmlsZS1pY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lkZWJhciB1bCBsaSBmYS1pY29uIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ 6989:
/*!***************************************************!*\
  !*** ./src/app/components/skills/models/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Skill": () => (/* reexport safe */ _skill__WEBPACK_IMPORTED_MODULE_1__.Skill),
/* harmony export */   "SkillsCategory": () => (/* reexport safe */ _skills_category__WEBPACK_IMPORTED_MODULE_0__.SkillsCategory)
/* harmony export */ });
/* harmony import */ var _skills_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills-category */ 8180);
/* harmony import */ var _skill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skill */ 6557);




/***/ }),

/***/ 6557:
/*!***************************************************!*\
  !*** ./src/app/components/skills/models/skill.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Skill": () => (/* binding */ Skill)
/* harmony export */ });
class Skill {
    get TITLE() {
        return this._TITLE;
    }
    set TITLE(v) {
        this._TITLE = v;
    }
    get IMAGE() {
        return this._IMAGE;
    }
    set IMAGE(v) {
        this._IMAGE = v;
    }
}


/***/ }),

/***/ 8180:
/*!*************************************************************!*\
  !*** ./src/app/components/skills/models/skills-category.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsCategory": () => (/* binding */ SkillsCategory)
/* harmony export */ });
class SkillsCategory {
    constructor() {
        this._SKILLS = [];
    }
    get TITLE() {
        return this._TITLE;
    }
    set TITLE(v) {
        this._TITLE = v;
    }
    get SUB_TITLE() {
        return this._SUB_TITLE;
    }
    set SUB_TITLE(v) {
        this._SUB_TITLE = v;
    }
    get SKILLS() {
        return this._SKILLS;
    }
    set SKILLS(v) {
        this._SKILLS = v;
    }
}


/***/ }),

/***/ 1727:
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsComponent": () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var src_app_data_skills_skills_categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/skills/skills-categories */ 9372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);






function SkillsComponent_div_12_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", skill_r3.IMAGE, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", skill_r3.TITLE);
} }
function SkillsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "mat-card")(2, "mat-card-title", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SkillsComponent_div_12_div_5_Template, 2, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const skillCategory_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](skillCategory_r1.TITLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", skillCategory_r1.SKILLS);
} }
class SkillsComponent {
    constructor() {
        this.skillCatergories = src_app_data_skills_skills_categories__WEBPACK_IMPORTED_MODULE_0__.SKILLS;
    }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 13, vars: 1, consts: [["fxLayout", "column", 1, "container-fluid", "p-0", "max-supported-width"], ["fxFlex", "80px", 1, "padding2030"], [1, "mat-display-1"], ["fxFlex", "", "fxLayout", "column", 1, "container-fluid", "p-0"], [1, "padding2030", "text-center"], [1, "mat-display-1", "display-block", "m-0"], [1, "mat-small", "display-block", "m-0"], ["fxFlex", "", "fxLayoutAlign", "center", "fxLayout", "row wrap", 1, "container-fluid", "p-0"], ["fxFlex", "280px", "fxFlex.xs", "100%", "class", "p-2", 4, "ngFor", "ngForOf"], ["fxFlex", "280px", "fxFlex.xs", "100%", 1, "p-2"], [1, "p-1"], ["fxLayout", "row wrap", "fxLayoutAlign", "center", 1, "container-fluid", "p-0", "text-center"], ["fxFlex", "50px", "class", "p-1 skill", 4, "ngFor", "ngForOf"], ["fxFlex", "50px", 1, "p-1", "skill"], ["matTooltipPosition", "below", 1, "pointer", 3, "src", "matTooltip"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "header", 4)(7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Full stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Some of technologies I used for my work.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SkillsComponent_div_12_Template, 6, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.skillCatergories);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle], styles: [".skill[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  border-radius: 0.25rem;\n  text-align: center;\n  height: 50px;\n  width: 50px;\n  position: relative;\n}\n.skill[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);\n}\n.skill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  bottom: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL01hYyUyMERyaXZlL2l0c2JpYmVrc2Fpbmkvc3JjL2FwcC9jb21wb25lbnRzL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLHdDQUFBO0FDRVI7QURDSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQ0NSIiwiZmlsZSI6InNraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5za2lsbHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6aG92ZXJ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsMCwwLDAuNCk7XG4gICAgfVxuXG4gICAgJiBpbWd7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGJvdHRvbTogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG59IiwiLnNraWxsIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNraWxsOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi5za2lsbCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBib3R0b206IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59Il19 */"] });


/***/ }),

/***/ 4060:
/*!***************************************************!*\
  !*** ./src/app/components/work/work.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkComponent": () => (/* binding */ WorkComponent)
/* harmony export */ });
/* harmony import */ var src_app_data_work_experience__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/work_experience */ 5969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function WorkComponent_ng_template_1_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const description_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", description_r4, " ");
} }
function WorkComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3)(3, "div", 4)(4, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, WorkComponent_ng_template_1_li_10_Template, 2, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const experience_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", experience_r1.START_DATE, " - ", experience_r1.END_DATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](experience_r1.POSITION);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](experience_r1.COMPANY);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", experience_r1.JOB_DESCRIPTION);
} }
class WorkComponent {
    constructor() {
        this.workExperience = src_app_data_work_experience__WEBPACK_IMPORTED_MODULE_0__.WORK_EXPERIENCE;
    }
    ngOnInit() {
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 2, vars: 1, consts: [[1, "timeline", "animate__animated", "animate__zoomIn"], ["ngFor", "", 3, "ngForOf"], [1, "timeline__item", "timeline__item--year"], [1, "timeline__item"], [1, "timeline__header"], ["title", "Software Engineer.", 1, "timeline__title"], [1, "m-0"], [1, "timeline__blurb"], [1, "mt-2"], [4, "ngFor", "ngForOf"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WorkComponent_ng_template_1_Template, 11, 5, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.workExperience);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1rem;\n  margin: 0 auto;\n  max-width: 1000px;\n}\n\n.timeline[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  border: 1px solid var(--accent-color);\n  right: 10px;\n  top: 0;\n}\n\n.timeline[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media screen and (min-width: 768px) {\n  .timeline[_ngcontent-%COMP%]:before {\n    left: calc(50% - 1px);\n    right: auto;\n  }\n}\n\n.timeline__item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 2px solid var(--accent-color);\n  border-image: linear-gradient(to right, var(--primary-color) 0%, var(--accent-color) 100%);\n  border-image-slice: 1;\n  position: relative;\n  margin: 2rem 1rem 1rem 0rem;\n  clear: both;\n}\n\n.timeline__item[_ngcontent-%COMP%]:after, .timeline__item[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n}\n\n.timeline__item[_ngcontent-%COMP%]:before {\n  right: -10px;\n  top: calc(50% - 5px);\n  border-style: solid;\n  border-color: var(--accent-color) var(--accent-color) transparent transparent;\n  border-width: 10px;\n  transform: rotate(45deg);\n}\n\n@media screen and (min-width: 768px) {\n  .timeline__item[_ngcontent-%COMP%] {\n    width: 44%;\n    margin: 1rem;\n  }\n  .timeline__item[_ngcontent-%COMP%]:nth-of-type(2n) {\n    float: right;\n    margin: 1rem;\n    border-image: linear-gradient(to right, var(--accent-color) 0%, var(--primary-color) 100%);\n    border-image-slice: 1;\n  }\n  .timeline__item[_ngcontent-%COMP%]:nth-of-type(2n):before {\n    right: auto;\n    left: -10px;\n    border-color: transparent transparent var(--accent-color) var(--accent-color);\n  }\n}\n\n.timeline__item--year[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 280px;\n  margin: 0 1rem 0 auto;\n  font-size: 1.2rem;\n  background-color: var(--bg-color);\n  line-height: 1;\n  border-image: none;\n  border-radius: 0.25rem;\n}\n\n.timeline__item--year[_ngcontent-%COMP%]:before {\n  display: none;\n}\n\n@media screen and (min-width: 768px) {\n  .timeline__item--year[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: 0 auto;\n  }\n  .timeline__item--year[_ngcontent-%COMP%]:nth-of-type(2n) {\n    float: none;\n    margin: 0 auto;\n    border-image: none;\n  }\n  .timeline__item--year[_ngcontent-%COMP%]:nth-of-type(2n):before {\n    display: none;\n  }\n}\n\n.timeline__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font: 400 30px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.timeline__blurb[_ngcontent-%COMP%] {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0.5rem 0 0;\n}\n\n.timeline__header[_ngcontent-%COMP%] {\n  padding: 1rem !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  border-radius: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmsuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9NYWMlMjBEcml2ZS9pdHNiaWJla3NhaW5pL3NyYy9hcHAvY29tcG9uZW50cy93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxrQkFBQTtBQ0pKOztBRE9BO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDSko7O0FETUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBQ0pSOztBRE9JO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDTFI7O0FEUUk7RUFFSTtJQUNFLHFCQUFBO0lBQ0EsV0FBQTtFQ1BSO0FBQ0Y7O0FEV0E7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSwwRkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNSSjs7QURVSTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtBQ1RSOztBRFlJO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2RUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUNWUjs7QURjSTtFQXpCSjtJQTBCUSxVQUFBO0lBQ0EsWUFBQTtFQ1hOO0VEWU07SUFDSSxZQUFBO0lBQ0EsWUFBQTtJQUNBLDBGQUFBO0lBQ0EscUJBQUE7RUNWVjtFRFlVO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDRiw2RUFBQTtFQ1ZaO0FBQ0Y7O0FEZUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNaSjs7QURjSTtFQUNJLGFBQUE7QUNaUjs7QURlSTtFQWRKO0lBZVEsa0JBQUE7SUFDQSxjQUFBO0VDWk47RURjTTtJQUNJLFdBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7RUNaVjtFRGNVO0lBQ0UsYUFBQTtFQ1paO0FBQ0Y7O0FEaUJBO0VBQ0ksU0FBQTtFQUNBLHdEQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNkSjs7QURpQkE7RUFDSSx3REFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNkSjs7QURpQkE7RUFDSSx3QkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7QUNkSiIsImZpbGUiOiJ3b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiRsaW5lQ29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG5cbiRicmVha3BvaW50OiA3NjhweDtcblxuaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpbWVsaW5lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMDBweDsgICAgXG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpbmVDb2xvcjtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIHRvcDogMDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVha3BvaW50KSB7XG4gICAgICAgIC8vIHBhZGRpbmc6IDJyZW07XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDFweCk7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50aW1lbGluZV9faXRlbSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkbGluZUNvbG9yO1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IgMCUsICRsaW5lQ29sb3IgMTAwJSk7XG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDJyZW0gMXJlbSAxcmVtIDByZW07XG4gICAgY2xlYXI6IGJvdGg7XG5cbiAgICAmOmFmdGVyLFxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIHJpZ2h0OiAtMTBweDtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDVweCk7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGxpbmVDb2xvciAkbGluZUNvbG9yIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItd2lkdGg6IDEwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG5cbiAgICBcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludCl7XG4gICAgICAgIHdpZHRoOiA0NCU7XG4gICAgICAgIG1hcmdpbjogMXJlbTsgICAgICAgIFxuICAgICAgICAmOm50aC1vZi10eXBlKDJuKSB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGxpbmVDb2xvciAwJSwgJGNvbG9yIDEwMCUpO1xuICAgICAgICAgICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAkbGluZUNvbG9yICRsaW5lQ29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50aW1lbGluZV9faXRlbS0teWVhciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgbWFyZ2luOiAwIDFyZW0gMCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBib3JkZXItaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludCl7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgJjpudGgtb2YtdHlwZSgybikge1xuICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1pbWFnZTogbm9uZTtcbiAgICAgICAgXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50aW1lbGluZV9fdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250OiA0MDAgMzBweC80MHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGltZWxpbmVfX2JsdXJiIHtcbiAgICBmb250OiA0MDAgMTZweC8yOHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgbWFyZ2luOiAuNXJlbSAwIDA7XG59XG5cbi50aW1lbGluZV9faGVhZGVye1xuICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59IiwiaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTAwMHB4O1xufVxuLnRpbWVsaW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAwO1xufVxuLnRpbWVsaW5lOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnRpbWVsaW5lOmJlZm9yZSB7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAxcHgpO1xuICAgIHJpZ2h0OiBhdXRvO1xuICB9XG59XG5cbi50aW1lbGluZV9faXRlbSB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1wcmltYXJ5LWNvbG9yKSAwJSwgdmFyKC0tYWNjZW50LWNvbG9yKSAxMDAlKTtcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMnJlbSAxcmVtIDFyZW0gMHJlbTtcbiAgY2xlYXI6IGJvdGg7XG59XG4udGltZWxpbmVfX2l0ZW06YWZ0ZXIsIC50aW1lbGluZV9faXRlbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4udGltZWxpbmVfX2l0ZW06YmVmb3JlIHtcbiAgcmlnaHQ6IC0xMHB4O1xuICB0b3A6IGNhbGMoNTAlIC0gNXB4KTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpIHZhcigtLWFjY2VudC1jb2xvcikgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci13aWR0aDogMTBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnRpbWVsaW5lX19pdGVtIHtcbiAgICB3aWR0aDogNDQlO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgfVxuICAudGltZWxpbmVfX2l0ZW06bnRoLW9mLXR5cGUoMm4pIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1hY2NlbnQtY29sb3IpIDAlLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSAxMDAlKTtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG4gIH1cbiAgLnRpbWVsaW5lX19pdGVtOm50aC1vZi10eXBlKDJuKTpiZWZvcmUge1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6IC0xMHB4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdmFyKC0tYWNjZW50LWNvbG9yKSB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICB9XG59XG5cbi50aW1lbGluZV9faXRlbS0teWVhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgbWFyZ2luOiAwIDFyZW0gMCBhdXRvO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xuICBsaW5lLWhlaWdodDogMTtcbiAgYm9yZGVyLWltYWdlOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuLnRpbWVsaW5lX19pdGVtLS15ZWFyOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAudGltZWxpbmVfX2l0ZW0tLXllYXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAudGltZWxpbmVfX2l0ZW0tLXllYXI6bnRoLW9mLXR5cGUoMm4pIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXItaW1hZ2U6IG5vbmU7XG4gIH1cbiAgLnRpbWVsaW5lX19pdGVtLS15ZWFyOm50aC1vZi10eXBlKDJuKTpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnRpbWVsaW5lX190aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udDogNDAwIDMwcHgvNDBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50aW1lbGluZV9fYmx1cmIge1xuICBmb250OiA0MDAgMTZweC8yOHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBtYXJnaW46IDAuNXJlbSAwIDA7XG59XG5cbi50aW1lbGluZV9faGVhZGVyIHtcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufSJdfQ== */"] });


/***/ }),

/***/ 8605:
/*!***************************************!*\
  !*** ./src/app/constants/urllinks.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FACEBOOK": () => (/* binding */ FACEBOOK),
/* harmony export */   "GITHUB": () => (/* binding */ GITHUB),
/* harmony export */   "INSTAGRM": () => (/* binding */ INSTAGRM),
/* harmony export */   "LINKEDIN": () => (/* binding */ LINKEDIN),
/* harmony export */   "PROJECT_DOCS": () => (/* binding */ PROJECT_DOCS),
/* harmony export */   "RESUME": () => (/* binding */ RESUME)
/* harmony export */ });
const GITHUB = "https://github.com/itsbibeksaini";
const LINKEDIN = "https://www.linkedin.com/in/itsbibeksaini";
const FACEBOOK = "https://www.facebook.com/itsbibeksaini";
const INSTAGRM = "https://www.instagram.com/itsbibeksaini/";
const RESUME = "assets/resume.pdf";
const PROJECT_DOCS = "assets/documentation/overview.html";


/***/ }),

/***/ 9260:
/*!************************************!*\
  !*** ./src/app/data/experience.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Experience": () => (/* binding */ Experience)
/* harmony export */ });
class Experience {
    constructor() {
        this._JOB_DESCRIPTION = new Array();
    }
    get START_DATE() {
        return this._START_DATE;
    }
    set START_DATE(v) {
        this._START_DATE = v;
    }
    get END_DATE() {
        return this._END_DATE;
    }
    set END_DATE(v) {
        this._END_DATE = v;
    }
    get POSITION() {
        return this._POSITION;
    }
    set POSITION(v) {
        this._POSITION = v;
    }
    get COMPANY() {
        return this._COMPANY;
    }
    set COMPANY(v) {
        this._COMPANY = v;
    }
    get JOB_DESCRIPTION() {
        return this._JOB_DESCRIPTION;
    }
    addJobDescription(description) {
        this._JOB_DESCRIPTION.push(description);
    }
    get INDEX() {
        return this._INDEX;
    }
    set INDEX(v) {
        this._INDEX = v;
    }
}


/***/ }),

/***/ 4428:
/*!*******************************************!*\
  !*** ./src/app/data/gallery/filenames.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FILENAMES": () => (/* binding */ FILENAMES)
/* harmony export */ });
const FILENAMES = new Map();
FILENAMES.set('permission_center.png', []);
FILENAMES.set('musicstore_home2.png', []);
FILENAMES.set('mailer-mail-selected.png', []);
FILENAMES.set('loginpage_dark.png', ['loginpage_dark.png', 'loginpage_light.png']);


/***/ }),

/***/ 2336:
/*!*****************************************!*\
  !*** ./src/app/data/gallery/mockups.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MOCKUPS": () => (/* binding */ MOCKUPS)
/* harmony export */ });
/* harmony import */ var src_app_components_gallery_models_mockup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/gallery/models/mockup */ 7672);
/* harmony import */ var _filenames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filenames */ 4428);


const MOCKUPS = [];
let index = 0;
for (let mockupFile of _filenames__WEBPACK_IMPORTED_MODULE_1__.FILENAMES.keys()) {
    let mockup = new src_app_components_gallery_models_mockup__WEBPACK_IMPORTED_MODULE_0__.Mockup();
    mockup.ID = "THUMB_" + index;
    mockup.IMG_THUMB = "assets/gallery/thumbnails/" + mockupFile;
    let linkedImages = _filenames__WEBPACK_IMPORTED_MODULE_1__.FILENAMES.get(mockupFile);
    if (linkedImages !== undefined) {
        for (let linkedImg of linkedImages) {
            mockup.LINKED_IMG.push("assets/gallery/preview/" + linkedImg);
        }
    }
    MOCKUPS.push(mockup);
    index++;
}


/***/ }),

/***/ 4403:
/*!*******************************************!*\
  !*** ./src/app/data/projects/chat-bot.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatBot": () => (/* binding */ chatBot)
/* harmony export */ });
/* harmony import */ var src_app_components_projects_models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/projects/models/project */ 1369);
/* harmony import */ var _skills_backend_skills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../skills/backend-skills */ 6278);
/* harmony import */ var _skills_frontend_skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skills/frontend-skills */ 4501);



const chatBot = new src_app_components_projects_models_project__WEBPACK_IMPORTED_MODULE_0__.Project();
chatBot.ID = "chat_bot";
chatBot.TITLE = "Chat bot";
chatBot.SUB_TITLE = "Java EE and Android app";
chatBot.DESCRIPTION = "Import-Export Utility is a desktop application which helps user to either export their relational database tables to excel sheets and also helps to import excel sheets to relational database tables.";
chatBot.ARCHIEVED = true;
chatBot.TECH_USED.push(_skills_backend_skills__WEBPACK_IMPORTED_MODULE_1__.skill_java);
chatBot.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_html5);
chatBot.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_css3);
chatBot.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_js);
chatBot.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_jquery);


/***/ }),

/***/ 2852:
/*!********************************************************!*\
  !*** ./src/app/data/projects/import-export-utility.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "importExportUtility": () => (/* binding */ importExportUtility)
/* harmony export */ });
/* harmony import */ var src_app_components_projects_models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/projects/models/project */ 1369);

const importExportUtility = new src_app_components_projects_models_project__WEBPACK_IMPORTED_MODULE_0__.Project();
importExportUtility.ID = "import_export_utility";
importExportUtility.TITLE = "Import export utility";
importExportUtility.SUB_TITLE = "Java EE app";
importExportUtility.DESCRIPTION = "Import-Export Utility is a desktop application which helps user to either export their relational database tables to excel sheets and also helps to import excel sheets to relational database tables.";
importExportUtility.ARCHIEVED = true;


/***/ }),

/***/ 5025:
/*!**************************************************!*\
  !*** ./src/app/data/projects/invoice-manager.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invoiceManager": () => (/* binding */ invoiceManager)
/* harmony export */ });
/* harmony import */ var src_app_components_projects_models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/projects/models/project */ 1369);
/* harmony import */ var _skills_backend_skills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../skills/backend-skills */ 6278);
/* harmony import */ var _skills_frontend_skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skills/frontend-skills */ 4501);



const invoiceManager = new src_app_components_projects_models_project__WEBPACK_IMPORTED_MODULE_0__.Project();
invoiceManager.ID = "invoice_manager";
invoiceManager.TITLE = "Invoice Manager";
invoiceManager.SUB_TITLE = "ASP.NET MVC app";
invoiceManager.DESCRIPTION = "Invoice Manager is a web application which helps user to manage their invoices. It has CRUD operations for creating, updating, deleting and viewing invoices. It also has a feature to generate invoices in PDF format.";
invoiceManager.TECH_USED.push(_skills_backend_skills__WEBPACK_IMPORTED_MODULE_1__.skill_aspnetmvc);
invoiceManager.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_html5);
invoiceManager.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_css3);
invoiceManager.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_js);
invoiceManager.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_jquery);


/***/ }),

/***/ 9509:
/*!*************************************************!*\
  !*** ./src/app/data/projects/mailer-details.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mailer": () => (/* binding */ mailer)
/* harmony export */ });
/* harmony import */ var src_app_components_projects_models_gallery_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/projects/models/gallery-image */ 8990);
/* harmony import */ var src_app_components_projects_models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/projects/models/project */ 1369);
/* harmony import */ var _skills_frontend_skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skills/frontend-skills */ 4501);



const mailer = new src_app_components_projects_models_project__WEBPACK_IMPORTED_MODULE_1__.Project();
mailer.ID = "mailer";
mailer.TITLE = "Mailer",
    mailer.SUB_TITLE = "Angular app";
mailer.DESCRIPTION = "Mailer app is built on angular framewrok providing mail viewing experience. The project is built as SPA where content is refreshed and their state is maintained. App has state management implemented using datorama/akita.";
mailer.APP_LINK = "http://mailer.itsbibeksaini.com";
mailer.PROJECT_STRUCTURE_LINK = "https://mailer.itsbibeksaini.com/assets/documentation/overview.html";
mailer.REPO_LINK = "https://github.com/itsbibeksaini/mailer";
mailer.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_angular);
mailer.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_akita);
mailer.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_typescript);
mailer.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_bootstrap);
mailer.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_sass);
addGalelryImage("assets/projects/mailer/mailer-home.png");
addGalelryImage("assets/projects/mailer/mailer-folder-selected.png");
addGalelryImage("assets/projects/mailer/mailer-mail-selected.png");
function addGalelryImage(imgSrc) {
    let galleryImage = new src_app_components_projects_models_gallery_image__WEBPACK_IMPORTED_MODULE_0__.GalleryImage();
    galleryImage.IMAGE = imgSrc;
    mailer.GALLERY.push(galleryImage);
}


/***/ }),

/***/ 3055:
/*!******************************************************!*\
  !*** ./src/app/data/projects/music-store-details.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "musicstore": () => (/* binding */ musicstore)
/* harmony export */ });
/* harmony import */ var src_app_components_projects_models_gallery_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/projects/models/gallery-image */ 8990);
/* harmony import */ var src_app_components_projects_models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/projects/models/project */ 1369);
/* harmony import */ var _skills_backend_skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skills/backend-skills */ 6278);
/* harmony import */ var _skills_database_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../skills/database-tools */ 7413);
/* harmony import */ var _skills_frontend_skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../skills/frontend-skills */ 4501);





const musicstore = new src_app_components_projects_models_project__WEBPACK_IMPORTED_MODULE_1__.Project();
musicstore.ID = "music_store";
musicstore.TITLE = "Music Store",
    musicstore.SUB_TITLE = "ASP.NET MVC";
musicstore.DESCRIPTION = "Music Store Web App let users access their favourite music albums and listen them over the internet. User's can create personalized playlist, add album or songs to their favourites";
musicstore.ARCHIEVED = true;
addGalelryImage("assets/projects/musicstore/musicstore_home1.png");
addGalelryImage("assets/projects/musicstore/musicstore_home2.png");
musicstore.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_4__.skill_html5);
musicstore.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_4__.skill_bootstrap);
musicstore.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_4__.skill_jquery);
musicstore.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_4__.skill_js);
musicstore.TECH_USED.push(_skills_backend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_aspnetmvc);
musicstore.TECH_USED.push(_skills_backend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_csharpnet);
musicstore.TECH_USED.push(_skills_backend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_entityframework);
musicstore.TECH_USED.push(_skills_backend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_linq);
musicstore.TECH_USED.push(_skills_database_tools__WEBPACK_IMPORTED_MODULE_3__.skill_sql);
musicstore.TECH_USED.push(_skills_database_tools__WEBPACK_IMPORTED_MODULE_3__.skill_ssms);
function addGalelryImage(imgSrc) {
    let galleryImage = new src_app_components_projects_models_gallery_image__WEBPACK_IMPORTED_MODULE_0__.GalleryImage();
    galleryImage.IMAGE = imgSrc;
    musicstore.GALLERY.push(galleryImage);
}


/***/ }),

/***/ 6448:
/*!*********************************************!*\
  !*** ./src/app/data/projects/pdf-editor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pdfEditor": () => (/* binding */ pdfEditor)
/* harmony export */ });
/* harmony import */ var src_app_components_projects_models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/projects/models/project */ 1369);

const pdfEditor = new src_app_components_projects_models_project__WEBPACK_IMPORTED_MODULE_0__.Project();
pdfEditor.ID = "pdf_editor";
pdfEditor.TITLE = "PDF Editor";
pdfEditor.SUB_TITLE = "Java EE app";
pdfEditor.DESCRIPTION = "A simple PDF editor written in Java EE";


/***/ }),

/***/ 1496:
/*!*******************************************!*\
  !*** ./src/app/data/projects/projects.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PROJECTS_DETAILS": () => (/* binding */ PROJECTS_DETAILS)
/* harmony export */ });
/* harmony import */ var _mailer_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mailer-details */ 9509);
/* harmony import */ var _music_store_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music-store-details */ 3055);
/* harmony import */ var _task_manager_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-manager-details */ 6206);
/* harmony import */ var _pdf_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pdf-editor */ 6448);
/* harmony import */ var _todo_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-app */ 6919);
/* harmony import */ var _import_export_utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import-export-utility */ 2852);
/* harmony import */ var _chat_bot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-bot */ 4403);
/* harmony import */ var _invoice_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invoice-manager */ 5025);








const PROJECTS_DETAILS = [];
PROJECTS_DETAILS.push(_task_manager_details__WEBPACK_IMPORTED_MODULE_2__.taskManager);
PROJECTS_DETAILS.push(_mailer_details__WEBPACK_IMPORTED_MODULE_0__.mailer);
PROJECTS_DETAILS.push(_invoice_manager__WEBPACK_IMPORTED_MODULE_7__.invoiceManager);
PROJECTS_DETAILS.push(_music_store_details__WEBPACK_IMPORTED_MODULE_1__.musicstore);
PROJECTS_DETAILS.push(_pdf_editor__WEBPACK_IMPORTED_MODULE_3__.pdfEditor);
PROJECTS_DETAILS.push(_todo_app__WEBPACK_IMPORTED_MODULE_4__.todoApp);
PROJECTS_DETAILS.push(_import_export_utility__WEBPACK_IMPORTED_MODULE_5__.importExportUtility);
PROJECTS_DETAILS.push(_chat_bot__WEBPACK_IMPORTED_MODULE_6__.chatBot);


/***/ }),

/***/ 6206:
/*!*******************************************************!*\
  !*** ./src/app/data/projects/task-manager-details.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskManager": () => (/* binding */ taskManager)
/* harmony export */ });
/* harmony import */ var src_app_components_projects_models_gallery_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/projects/models/gallery-image */ 8990);
/* harmony import */ var src_app_components_projects_models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/projects/models/project */ 1369);
/* harmony import */ var _skills_backend_skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skills/backend-skills */ 6278);
/* harmony import */ var _skills_database_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../skills/database-tools */ 7413);
/* harmony import */ var _skills_deployment_skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../skills/deployment-skills */ 9134);
/* harmony import */ var _skills_frontend_skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../skills/frontend-skills */ 4501);
/* harmony import */ var _skills_others_skills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../skills/others-skills */ 8390);







const taskManager = new src_app_components_projects_models_project__WEBPACK_IMPORTED_MODULE_1__.Project();
taskManager.ID = "task_manager";
taskManager.TITLE = "Task Manager",
    taskManager.SUB_TITLE = "Micro-services app";
taskManager.DESCRIPTION = "Task manager is built on micro-services architecture providing management services like invoice manager and task board. The whole project is divided into various micro-apps based on their individual responsibility that each micro app need to perform. App leverage RESTful pattern for communication with client and outer world while make use of gRPC framework for its internal communication.";
taskManager.PROJECT_STRUCTURE_LINK = "https://clientapp.structure.itsbibeksaini.com/overview.html";
taskManager.ARCHITECTURE_DIAGRAM = "assets/projects/taskmanager/tm_microservices.png";
addGalelryImage("assets/projects/taskmanager/signin.png");
addGalelryImage("assets/projects/taskmanager/home_dashboard.png");
addGalelryImage("assets/projects/taskmanager/create_new_profile.png");
addGalelryImage("assets/projects/taskmanager/profiles.png");
addGalelryImage("assets/projects/taskmanager/change_password.png");
addGalelryImage("assets/projects/taskmanager/change_password_success.png");
addGalelryImage("assets/projects/taskmanager/permission_center.png");
addGalelryImage("assets/projects/taskmanager/settings_home.png");
addGalelryImage("assets/projects/taskmanager/settings_general.png");
addGalelryImage("assets/projects/taskmanager/settings_theme.png");
taskManager.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_5__.skill_angular);
taskManager.TECH_USED.push(_skills_backend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_dotnet);
taskManager.TECH_USED.push(_skills_backend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_java);
taskManager.TECH_USED.push(_skills_backend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_springboot);
taskManager.TECH_USED.push(_skills_backend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_entityframework);
taskManager.TECH_USED.push(_skills_others_skills__WEBPACK_IMPORTED_MODULE_6__.skill_grpc);
taskManager.TECH_USED.push(_skills_frontend_skills__WEBPACK_IMPORTED_MODULE_5__.skill_typescript);
taskManager.TECH_USED.push(_skills_deployment_skills__WEBPACK_IMPORTED_MODULE_4__.skill_docker);
taskManager.TECH_USED.push(_skills_deployment_skills__WEBPACK_IMPORTED_MODULE_4__.skill_kubernetes);
taskManager.TECH_USED.push(_skills_database_tools__WEBPACK_IMPORTED_MODULE_3__.skill_sql);
taskManager.TECH_USED.push(_skills_database_tools__WEBPACK_IMPORTED_MODULE_3__.skill_mongodb);
taskManager.TECH_USED.push(_skills_deployment_skills__WEBPACK_IMPORTED_MODULE_4__.skill_azure);
taskManager.TECH_USED.push(_skills_deployment_skills__WEBPACK_IMPORTED_MODULE_4__.skill_aks);
taskManager.TECH_USED.push(_skills_deployment_skills__WEBPACK_IMPORTED_MODULE_4__.skill_azure_pipeline);
taskManager.TECH_USED.push(_skills_others_skills__WEBPACK_IMPORTED_MODULE_6__.skill_ocelot);
taskManager.TECH_USED.push(_skills_others_skills__WEBPACK_IMPORTED_MODULE_6__.skill_consul);
taskManager.TECH_USED.push(_skills_others_skills__WEBPACK_IMPORTED_MODULE_6__.skill_swagger);
function addGalelryImage(imgSrc) {
    let galleryImage = new src_app_components_projects_models_gallery_image__WEBPACK_IMPORTED_MODULE_0__.GalleryImage();
    galleryImage.IMAGE = imgSrc;
    taskManager.GALLERY.push(galleryImage);
}


/***/ }),

/***/ 6919:
/*!*******************************************!*\
  !*** ./src/app/data/projects/todo-app.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoApp": () => (/* binding */ todoApp)
/* harmony export */ });
/* harmony import */ var src_app_components_projects_models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/projects/models/project */ 1369);

const todoApp = new src_app_components_projects_models_project__WEBPACK_IMPORTED_MODULE_0__.Project();
todoApp.ID = "todo_app";
todoApp.TITLE = "Todo App";
todoApp.SUB_TITLE = "Java EE app";
todoApp.DESCRIPTION = "A simple todo app written in Java EE";


/***/ }),

/***/ 6278:
/*!***********************************************!*\
  !*** ./src/app/data/skills/backend-skills.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skill_aspnetmvc": () => (/* binding */ skill_aspnetmvc),
/* harmony export */   "skill_csharpnet": () => (/* binding */ skill_csharpnet),
/* harmony export */   "skill_dotnet": () => (/* binding */ skill_dotnet),
/* harmony export */   "skill_entityframework": () => (/* binding */ skill_entityframework),
/* harmony export */   "skill_java": () => (/* binding */ skill_java),
/* harmony export */   "skill_kotlin": () => (/* binding */ skill_kotlin),
/* harmony export */   "skill_linq": () => (/* binding */ skill_linq),
/* harmony export */   "skill_springboot": () => (/* binding */ skill_springboot)
/* harmony export */ });
/* harmony import */ var src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/skills/models */ 6989);

const skill_dotnet = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_dotnet.IMAGE = "assets/skills/backend/dotnet.png";
skill_dotnet.TITLE = "Dotnet core";
const skill_entityframework = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_entityframework.IMAGE = "assets/skills/backend/entityframework.png";
skill_entityframework.TITLE = "Entity framework";
const skill_java = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_java.IMAGE = "assets/skills/backend/java.png";
skill_java.TITLE = "Java";
const skill_springboot = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_springboot.IMAGE = "assets/skills/backend/springboot.png";
skill_springboot.TITLE = "Spring boot";
const skill_aspnetmvc = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_aspnetmvc.IMAGE = "assets/skills/backend/asp.net-mvc.png";
skill_aspnetmvc.TITLE = "ASP.NET MVC";
const skill_csharpnet = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_csharpnet.IMAGE = "assets/skills/backend/csharpnet.png";
skill_csharpnet.TITLE = "C#.NET";
const skill_linq = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_linq.IMAGE = "assets/skills/backend/linq.png";
skill_linq.TITLE = "C# LINQ";
const skill_kotlin = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_kotlin.IMAGE = "assets/skills/backend/kotlin.png";
skill_kotlin.TITLE = "Kotlin";


/***/ }),

/***/ 7413:
/*!***********************************************!*\
  !*** ./src/app/data/skills/database-tools.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skill_azuredatastudio": () => (/* binding */ skill_azuredatastudio),
/* harmony export */   "skill_mongodb": () => (/* binding */ skill_mongodb),
/* harmony export */   "skill_sql": () => (/* binding */ skill_sql),
/* harmony export */   "skill_ssms": () => (/* binding */ skill_ssms)
/* harmony export */ });
/* harmony import */ var src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/skills/models */ 6989);

const skill_azuredatastudio = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_azuredatastudio.TITLE = "Azure Data Studio";
skill_azuredatastudio.IMAGE = "assets/skills/database-tools/azuredatastudio.png";
const skill_mongodb = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_mongodb.TITLE = "MongoDB";
skill_mongodb.IMAGE = "assets/skills/database-tools/mongodb.png";
const skill_sql = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_sql.TITLE = "SQL";
skill_sql.IMAGE = "assets/skills/database-tools/sql.png";
const skill_ssms = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_ssms.TITLE = "Sql Server Management Studio";
skill_ssms.IMAGE = "assets/skills/database-tools/ssms.png";


/***/ }),

/***/ 9134:
/*!**************************************************!*\
  !*** ./src/app/data/skills/deployment-skills.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skill_aks": () => (/* binding */ skill_aks),
/* harmony export */   "skill_azure": () => (/* binding */ skill_azure),
/* harmony export */   "skill_azure_pipeline": () => (/* binding */ skill_azure_pipeline),
/* harmony export */   "skill_docker": () => (/* binding */ skill_docker),
/* harmony export */   "skill_helmcharts": () => (/* binding */ skill_helmcharts),
/* harmony export */   "skill_kubernetes": () => (/* binding */ skill_kubernetes)
/* harmony export */ });
/* harmony import */ var src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/skills/models */ 6989);

const skill_azure = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_azure.TITLE = "Azure";
skill_azure.IMAGE = "assets/skills/deployment/azure.png";
const skill_docker = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_docker.TITLE = "Docker";
skill_docker.IMAGE = "assets/skills/deployment/docker.png";
const skill_helmcharts = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_helmcharts.TITLE = "Helm Charts";
skill_helmcharts.IMAGE = "assets/skills/deployment/helmcharts.png";
const skill_kubernetes = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_kubernetes.TITLE = "Kubernetes";
skill_kubernetes.IMAGE = "assets/skills/deployment/kubernetes.png";
const skill_aks = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_aks.TITLE = "Azure Kubernetes Services";
skill_aks.IMAGE = "assets/skills/deployment/aks.png";
const skill_azure_pipeline = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_azure_pipeline.TITLE = "Azure Pipelines";
skill_azure_pipeline.IMAGE = "assets/skills/deployment/azure-pipeline.png";


/***/ }),

/***/ 4501:
/*!************************************************!*\
  !*** ./src/app/data/skills/frontend-skills.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skill_akita": () => (/* binding */ skill_akita),
/* harmony export */   "skill_angular": () => (/* binding */ skill_angular),
/* harmony export */   "skill_bootstrap": () => (/* binding */ skill_bootstrap),
/* harmony export */   "skill_css3": () => (/* binding */ skill_css3),
/* harmony export */   "skill_html5": () => (/* binding */ skill_html5),
/* harmony export */   "skill_jquery": () => (/* binding */ skill_jquery),
/* harmony export */   "skill_js": () => (/* binding */ skill_js),
/* harmony export */   "skill_react": () => (/* binding */ skill_react),
/* harmony export */   "skill_sass": () => (/* binding */ skill_sass),
/* harmony export */   "skill_typescript": () => (/* binding */ skill_typescript)
/* harmony export */ });
/* harmony import */ var src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/skills/models */ 6989);

const skill_angular = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_angular.IMAGE = "assets/skills/frontend/angular.png";
skill_angular.TITLE = "Angular";
const skill_react = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_react.IMAGE = "assets/skills/frontend/react.png";
skill_react.TITLE = "React";
const skill_css3 = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_css3.IMAGE = "assets/skills/frontend/css3.png";
skill_css3.TITLE = "CSS3";
const skill_html5 = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_html5.IMAGE = "assets/skills/frontend/html5.png";
skill_html5.TITLE = "CSS3";
const skill_jquery = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_jquery.IMAGE = "assets/skills/frontend/jquery.png";
skill_jquery.TITLE = "JQuery";
const skill_js = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_js.IMAGE = "assets/skills/frontend/js.png";
skill_js.TITLE = "JavaScript";
const skill_typescript = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_typescript.IMAGE = "assets/skills/frontend/typescript.png";
skill_typescript.TITLE = "TypeScript";
const skill_akita = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_akita.IMAGE = "assets/skills/frontend/akita.png";
skill_akita.TITLE = "datorama/akita";
const skill_bootstrap = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_bootstrap.IMAGE = "assets/skills/frontend/bootstrap.png";
skill_bootstrap.TITLE = "Bootstrap";
const skill_sass = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_sass.IMAGE = "assets/skills/frontend/sass.png";
skill_sass.TITLE = "SASS";


/***/ }),

/***/ 8390:
/*!**********************************************!*\
  !*** ./src/app/data/skills/others-skills.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skill_confluence": () => (/* binding */ skill_confluence),
/* harmony export */   "skill_consul": () => (/* binding */ skill_consul),
/* harmony export */   "skill_fork": () => (/* binding */ skill_fork),
/* harmony export */   "skill_git": () => (/* binding */ skill_git),
/* harmony export */   "skill_githubdesktop": () => (/* binding */ skill_githubdesktop),
/* harmony export */   "skill_grpc": () => (/* binding */ skill_grpc),
/* harmony export */   "skill_intelijidea": () => (/* binding */ skill_intelijidea),
/* harmony export */   "skill_jira": () => (/* binding */ skill_jira),
/* harmony export */   "skill_ocelot": () => (/* binding */ skill_ocelot),
/* harmony export */   "skill_postman": () => (/* binding */ skill_postman),
/* harmony export */   "skill_swagger": () => (/* binding */ skill_swagger),
/* harmony export */   "skill_visualstudiocode": () => (/* binding */ skill_visualstudiocode),
/* harmony export */   "skill_visualstudiomac": () => (/* binding */ skill_visualstudiomac)
/* harmony export */ });
/* harmony import */ var src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/skills/models */ 6989);

const skill_confluence = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_confluence.TITLE = "Confluence";
skill_confluence.IMAGE = "assets/skills/others/confluence.png";
const skill_consul = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_consul.TITLE = "Consul";
skill_consul.IMAGE = "assets/skills/others/consul.png";
const skill_fork = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_fork.TITLE = "Fork";
skill_fork.IMAGE = "assets/skills/others/fork.png";
const skill_git = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_git.TITLE = "Git";
skill_git.IMAGE = "assets/skills/others/git.png";
const skill_githubdesktop = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_githubdesktop.TITLE = "Github Desktop";
skill_githubdesktop.IMAGE = "assets/skills/others/githubdesktop.png";
const skill_grpc = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_grpc.TITLE = "GRPC Framework";
skill_grpc.IMAGE = "assets/skills/others/grpc.png";
const skill_intelijidea = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_intelijidea.TITLE = "Intelij Idea";
skill_intelijidea.IMAGE = "assets/skills/others/intelijidea.png";
const skill_jira = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_jira.TITLE = "Jira";
skill_jira.IMAGE = "assets/skills/others/jira.png";
const skill_ocelot = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_ocelot.TITLE = "Ocelot Api Gateway";
skill_ocelot.IMAGE = "assets/skills/others/ocelot.png";
const skill_postman = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_postman.TITLE = "Postman";
skill_postman.IMAGE = "assets/skills/others/postman.png";
const skill_swagger = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_swagger.TITLE = "Swagger(Open Api)";
skill_swagger.IMAGE = "assets/skills/others/swagger.png";
const skill_visualstudiocode = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_visualstudiocode.TITLE = "Visual Studio Code";
skill_visualstudiocode.IMAGE = "assets/skills/others/visualstudiocode.png";
const skill_visualstudiomac = new src_app_components_skills_models__WEBPACK_IMPORTED_MODULE_0__.Skill();
skill_visualstudiomac.TITLE = "Visual Studio for Mac";
skill_visualstudiomac.IMAGE = "assets/skills/others/visualstudiomac.png";


/***/ }),

/***/ 9372:
/*!**************************************************!*\
  !*** ./src/app/data/skills/skills-categories.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SKILLS": () => (/* binding */ SKILLS)
/* harmony export */ });
/* harmony import */ var _components_skills_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/skills/models */ 6989);
/* harmony import */ var _backend_skills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend-skills */ 6278);
/* harmony import */ var _frontend_skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frontend-skills */ 4501);
/* harmony import */ var _database_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database-tools */ 7413);
/* harmony import */ var _deployment_skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deployment-skills */ 9134);
/* harmony import */ var _others_skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./others-skills */ 8390);






const SKILLS = [];
let backendSkills = new _components_skills_models__WEBPACK_IMPORTED_MODULE_0__.SkillsCategory();
backendSkills.TITLE = "Backend";
backendSkills.SKILLS.push(_backend_skills__WEBPACK_IMPORTED_MODULE_1__.skill_dotnet);
backendSkills.SKILLS.push(_backend_skills__WEBPACK_IMPORTED_MODULE_1__.skill_entityframework);
backendSkills.SKILLS.push(_backend_skills__WEBPACK_IMPORTED_MODULE_1__.skill_aspnetmvc);
backendSkills.SKILLS.push(_backend_skills__WEBPACK_IMPORTED_MODULE_1__.skill_csharpnet);
backendSkills.SKILLS.push(_backend_skills__WEBPACK_IMPORTED_MODULE_1__.skill_linq);
backendSkills.SKILLS.push(_backend_skills__WEBPACK_IMPORTED_MODULE_1__.skill_java);
backendSkills.SKILLS.push(_backend_skills__WEBPACK_IMPORTED_MODULE_1__.skill_kotlin);
backendSkills.SKILLS.push(_backend_skills__WEBPACK_IMPORTED_MODULE_1__.skill_springboot);
let frontendSkills = new _components_skills_models__WEBPACK_IMPORTED_MODULE_0__.SkillsCategory();
frontendSkills.TITLE = "Frontend";
frontendSkills.SKILLS.push(_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_angular);
frontendSkills.SKILLS.push(_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_react);
frontendSkills.SKILLS.push(_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_css3);
frontendSkills.SKILLS.push(_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_html5);
frontendSkills.SKILLS.push(_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_jquery);
frontendSkills.SKILLS.push(_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_js);
frontendSkills.SKILLS.push(_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_typescript);
frontendSkills.SKILLS.push(_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_akita);
frontendSkills.SKILLS.push(_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_bootstrap);
frontendSkills.SKILLS.push(_frontend_skills__WEBPACK_IMPORTED_MODULE_2__.skill_sass);
let databaseToolsSkills = new _components_skills_models__WEBPACK_IMPORTED_MODULE_0__.SkillsCategory();
databaseToolsSkills.TITLE = "Database Tools";
databaseToolsSkills.SKILLS.push(_database_tools__WEBPACK_IMPORTED_MODULE_3__.skill_azuredatastudio);
databaseToolsSkills.SKILLS.push(_database_tools__WEBPACK_IMPORTED_MODULE_3__.skill_mongodb);
databaseToolsSkills.SKILLS.push(_database_tools__WEBPACK_IMPORTED_MODULE_3__.skill_sql);
databaseToolsSkills.SKILLS.push(_database_tools__WEBPACK_IMPORTED_MODULE_3__.skill_ssms);
let deploymentSkills = new _components_skills_models__WEBPACK_IMPORTED_MODULE_0__.SkillsCategory();
deploymentSkills.TITLE = "Deployment";
deploymentSkills.SKILLS.push(_deployment_skills__WEBPACK_IMPORTED_MODULE_4__.skill_azure);
deploymentSkills.SKILLS.push(_deployment_skills__WEBPACK_IMPORTED_MODULE_4__.skill_docker);
deploymentSkills.SKILLS.push(_deployment_skills__WEBPACK_IMPORTED_MODULE_4__.skill_helmcharts);
deploymentSkills.SKILLS.push(_deployment_skills__WEBPACK_IMPORTED_MODULE_4__.skill_kubernetes);
deploymentSkills.SKILLS.push(_deployment_skills__WEBPACK_IMPORTED_MODULE_4__.skill_aks);
deploymentSkills.SKILLS.push(_deployment_skills__WEBPACK_IMPORTED_MODULE_4__.skill_azure_pipeline);
let otherSkills = new _components_skills_models__WEBPACK_IMPORTED_MODULE_0__.SkillsCategory();
otherSkills.TITLE = "Others";
otherSkills.SKILLS.push(_others_skills__WEBPACK_IMPORTED_MODULE_5__.skill_confluence, _others_skills__WEBPACK_IMPORTED_MODULE_5__.skill_consul, _others_skills__WEBPACK_IMPORTED_MODULE_5__.skill_fork, _others_skills__WEBPACK_IMPORTED_MODULE_5__.skill_git, _others_skills__WEBPACK_IMPORTED_MODULE_5__.skill_githubdesktop, _others_skills__WEBPACK_IMPORTED_MODULE_5__.skill_grpc, _others_skills__WEBPACK_IMPORTED_MODULE_5__.skill_intelijidea, _others_skills__WEBPACK_IMPORTED_MODULE_5__.skill_jira, _others_skills__WEBPACK_IMPORTED_MODULE_5__.skill_ocelot, _others_skills__WEBPACK_IMPORTED_MODULE_5__.skill_postman, _others_skills__WEBPACK_IMPORTED_MODULE_5__.skill_swagger, _others_skills__WEBPACK_IMPORTED_MODULE_5__.skill_visualstudiocode, _others_skills__WEBPACK_IMPORTED_MODULE_5__.skill_visualstudiomac);
SKILLS.push(backendSkills);
SKILLS.push(frontendSkills);
SKILLS.push(databaseToolsSkills);
SKILLS.push(deploymentSkills);
SKILLS.push(otherSkills);


/***/ }),

/***/ 5969:
/*!*****************************************!*\
  !*** ./src/app/data/work_experience.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WORK_EXPERIENCE": () => (/* binding */ WORK_EXPERIENCE)
/* harmony export */ });
/* harmony import */ var _experience__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience */ 9260);

const WORK_EXPERIENCE = [];
let seniorSoftwareEngineer = new _experience__WEBPACK_IMPORTED_MODULE_0__.Experience();
seniorSoftwareEngineer.START_DATE = "December 2020";
seniorSoftwareEngineer.END_DATE = "Present";
seniorSoftwareEngineer.POSITION = "Senior Software Engineer.";
seniorSoftwareEngineer.COMPANY = "CatalystOne";
seniorSoftwareEngineer.INDEX = 4;
seniorSoftwareEngineer.addJobDescription("Developed frontend applications, re-usable components using Angular(8+), RxJS.");
seniorSoftwareEngineer.addJobDescription("Developed UI/UX components using HTML5, CSS3(Bootstrap, Material UI, Animation css).");
seniorSoftwareEngineer.addJobDescription("Built RESTful Api to perform CRUD operations.");
seniorSoftwareEngineer.addJobDescription("Mentored multiple teams for building strategies of various modules.");
seniorSoftwareEngineer.addJobDescription("Used Jira, Confluence for best practices, software documentation and sprint management.");
WORK_EXPERIENCE.push(seniorSoftwareEngineer);
let softwareEngineer = new _experience__WEBPACK_IMPORTED_MODULE_0__.Experience();
softwareEngineer.START_DATE = "May 2018";
softwareEngineer.END_DATE = "December 2020";
softwareEngineer.POSITION = "Software Developer.";
softwareEngineer.COMPANY = "CatalystOne";
softwareEngineer.addJobDescription("Developed candidate api backend so CatalystOne application can be integrated with 3rd party applications like ReachMee.");
softwareEngineer.addJobDescription("Designed and implemented Invoice Manager to help client's organisation digitise their invoice generation system and manage their sales data.");
softwareEngineer.addJobDescription("Modified existing code to increase performance of application by 70%.");
softwareEngineer.addJobDescription("Implemented private email feature in module workflows which let user access application as temporary/external user and which minimal access to resources.");
softwareEngineer.addJobDescription("Implemented support for visibility filters feature in workflow module to show or hide fields in user profile based on filter criteria.");
softwareEngineer.INDEX = 3;
WORK_EXPERIENCE.push(softwareEngineer);
let associateSoftwareEngineer = new _experience__WEBPACK_IMPORTED_MODULE_0__.Experience();
associateSoftwareEngineer.START_DATE = "July 2016";
associateSoftwareEngineer.END_DATE = "May 2018";
associateSoftwareEngineer.POSITION = "Associate Java Developer.";
associateSoftwareEngineer.COMPANY = "CatalystOne";
associateSoftwareEngineer.addJobDescription("Implemented support for multiple role profiles in workflows module so users can assign task to their different profiles.");
associateSoftwareEngineer.addJobDescription("Implemented new date calculation mechanism that converts entered days to deadline date for task based on start date so users can set deadline to various task.");
associateSoftwareEngineer.addJobDescription("Implemented new UI for module workflows so user experience can be enhanced using HTML5, CSS3, jQuery.");
associateSoftwareEngineer.addJobDescription("Implemented new feature in trigger mails to send notification mails when some data is scheduled in user profile so user get notified.");
associateSoftwareEngineer.addJobDescription("Developed custom system roles and integrated them to person type fields in CatalystOne application so that an organisation can create custom roles as per their organisation needs.");
associateSoftwareEngineer.INDEX = 2;
WORK_EXPERIENCE.push(associateSoftwareEngineer);
let trainee = new _experience__WEBPACK_IMPORTED_MODULE_0__.Experience();
trainee.START_DATE = "April 2016";
trainee.END_DATE = "July 2016";
trainee.POSITION = "Trainee Java Developer.";
trainee.COMPANY = "CatalystOne";
trainee.addJobDescription("Designed and implemented rewards and recognition(R&R) module that will help to increase motivation of employee to achieve the best achievement.");
trainee.addJobDescription("Documented various sections of application on Confluence to be used for training new hires.");
trainee.INDEX = 1;
WORK_EXPERIENCE.push(trainee);


/***/ }),

/***/ 2751:
/*!***************************************************!*\
  !*** ./src/app/directives/link/link.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkDirective": () => (/* binding */ LinkDirective)
/* harmony export */ });
/* harmony import */ var src_app_constants_urllinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/urllinks */ 8605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class LinkDirective {
    constructor() { }
    click() {
        if (this.link === 'github')
            window.open(src_app_constants_urllinks__WEBPACK_IMPORTED_MODULE_0__.GITHUB);
        else if (this.link === 'linkdin')
            window.open(src_app_constants_urllinks__WEBPACK_IMPORTED_MODULE_0__.LINKEDIN);
        else if (this.link === 'facebook')
            window.open(src_app_constants_urllinks__WEBPACK_IMPORTED_MODULE_0__.FACEBOOK);
        else if (this.link === 'instagram')
            window.open(src_app_constants_urllinks__WEBPACK_IMPORTED_MODULE_0__.INSTAGRM);
        else if (this.link === 'resume')
            window.open(src_app_constants_urllinks__WEBPACK_IMPORTED_MODULE_0__.RESUME);
        else if (this.link === 'project-docs')
            window.open(src_app_constants_urllinks__WEBPACK_IMPORTED_MODULE_0__.PROJECT_DOCS);
    }
}
LinkDirective.ɵfac = function LinkDirective_Factory(t) { return new (t || LinkDirective)(); };
LinkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LinkDirective, selectors: [["", "link", ""]], hostBindings: function LinkDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinkDirective_click_HostBindingHandler() { return ctx.click(); });
    } }, inputs: { link: "link" } });


/***/ }),

/***/ 1866:
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeSwitcherService": () => (/* reexport safe */ _theme_switcher_theme_switcher_service__WEBPACK_IMPORTED_MODULE_0__.ThemeSwitcherService)
/* harmony export */ });
/* harmony import */ var _theme_switcher_theme_switcher_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-switcher/theme-switcher.service */ 960);



/***/ }),

/***/ 960:
/*!*******************************************************************!*\
  !*** ./src/app/services/theme-switcher/theme-switcher.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeSwitcherService": () => (/* binding */ ThemeSwitcherService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ThemeSwitcherService {
    constructor(rendererFactory) {
        this.rendererFactory = rendererFactory;
        let theme = localStorage.getItem(ThemeSwitcherService.THEME_STORAGE_LABLE);
        if (theme == null)
            theme = ThemeSwitcherService.THEME_LIGHT;
        this._themeState = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(theme);
    }
    setTheme() {
        // default is light
        let theme = localStorage.getItem(ThemeSwitcherService.THEME_STORAGE_LABLE);
        let renderer = this.rendererFactory.createRenderer(null, null);
        var body = document.getElementsByTagName('body')[0];
        if (theme == null)
            theme = ThemeSwitcherService.THEME_LIGHT;
        this._themeState = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(theme);
        renderer.addClass(body, theme);
        localStorage.setItem(ThemeSwitcherService.THEME_STORAGE_LABLE, theme);
        this._themeState.next(theme);
    }
    switchTheme(value) {
        var body = document.getElementsByTagName('body')[0];
        let theme = localStorage.getItem(ThemeSwitcherService.THEME_STORAGE_LABLE);
        let renderer = this.rendererFactory.createRenderer(null, null);
        if (theme == null)
            theme = ThemeSwitcherService.THEME_LIGHT;
        if (theme == ThemeSwitcherService.THEME_LIGHT && value) {
            theme = ThemeSwitcherService.THEME_DARK;
            renderer.removeClass(body, ThemeSwitcherService.THEME_LIGHT);
        }
        else if (!value) {
            theme = ThemeSwitcherService.THEME_LIGHT;
            renderer.removeClass(body, ThemeSwitcherService.THEME_DARK);
        }
        renderer.addClass(body, theme);
        localStorage.setItem(ThemeSwitcherService.THEME_STORAGE_LABLE, theme);
        this._themeState.next(theme);
    }
    getCurrentTheme() {
        return localStorage.getItem(ThemeSwitcherService.THEME_STORAGE_LABLE);
    }
}
ThemeSwitcherService.THEME_DARK = "dark-theme";
ThemeSwitcherService.THEME_LIGHT = "light-theme";
ThemeSwitcherService.THEME_STORAGE_LABLE = "app-theme";
ThemeSwitcherService.ɵfac = function ThemeSwitcherService_Factory(t) { return new (t || ThemeSwitcherService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2)); };
ThemeSwitcherService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThemeSwitcherService, factory: ThemeSwitcherService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map