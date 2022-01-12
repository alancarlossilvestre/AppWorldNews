(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/pages/tab2/tab2.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.module.ts ***!
  \*******************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "./src/app/pages/tab2/tab2.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/pages/tab2/tab2.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"dark\">\n    <ion-title>\n      Encabezados\n    </ion-title>\n  </ion-toolbar>\n\n\n  <ion-segment scrollable \n               mode=\"md\" \n               color=\"primary\"\n               (ionChange)=\"cambioCategoria( $event )\">\n\n    <ion-segment-button mode=\"md\"\n                        *ngFor=\"let categoria of categorias\"\n                        [value]=\"categoria\">\n      <ion-label text-capitalize>{{ categoria }}</ion-label>\n    </ion-segment-button>\n\n\n  </ion-segment>\n\n\n</ion-header>\n\n<ion-content color=\"dark\">\n\n  <app-noticias [noticias]=\"noticias\"></app-noticias>\n\n\n  <ion-infinite-scroll threshold=\"150px\" \n                       (ionInfinite)=\"loadData( $event )\">\n    <ion-infinite-scroll-content loadingSpinner=\"crescent\"\n                                 loadingText=\"Cargando data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tab2/tab2.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment-button {\n  background-color: var(--ion-color-dark) !important;\n  color: white !important;\n}\n\n.segment-button-checked {\n  color: var(--ion-color-primary) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFiMi9DOlxcVXNlcnNcXEFsYW4gQ1NcXERvY3VtZW50c1xcRGVzYXJyb2xsbyBBbmRyb2lkXFxJb25pY1xcMDQtbm90aWNpYXMvc3JjXFxhcHBcXHBhZ2VzXFx0YWIyXFx0YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGtEQUFBO0VBQ0EsdUJBQUE7QUNISjs7QURNQTtFQUNJLDBDQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhciggLS1pb24tY29sb3ItZGFyayApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICBjb2xvcjogdmFyKCAtLWlvbi1jb2xvci1wcmltYXJ5ICkgIWltcG9ydGFudDtcbn0iLCJpb24tc2VnbWVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tab2/tab2.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.ts ***!
  \*****************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_noticias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/noticias.service */ "./src/app/services/noticias.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tab2Page = /** @class */ (function () {
    function Tab2Page(noticiasService) {
        this.noticiasService = noticiasService;
        this.categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology',];
        this.noticias = [];
    }
    Tab2Page.prototype.ngOnInit = function () {
        this.segment.value = this.categorias[0];
        this.cargarNoticias(this.categorias[0]);
    };
    Tab2Page.prototype.cambioCategoria = function (event) {
        this.noticias = [];
        this.cargarNoticias(event.detail.value);
    };
    Tab2Page.prototype.cargarNoticias = function (categoria, event) {
        var _this = this;
        this.noticiasService.getTopHeadlinesCategoria(categoria)
            .subscribe(function (resp) {
            var _a;
            // console.log(resp);
            (_a = _this.noticias).push.apply(_a, resp.articles);
            if (event) {
                event.target.complete();
            }
        });
    };
    Tab2Page.prototype.loadData = function (event) {
        this.cargarNoticias(this.segment.value, event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSegment"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSegment"])
    ], Tab2Page.prototype, "segment", void 0);
    Tab2Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/pages/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/pages/tab2/tab2.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_noticias_service__WEBPACK_IMPORTED_MODULE_2__["NoticiasService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map