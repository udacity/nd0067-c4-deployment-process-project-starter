(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed-item/feed-item.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed-item/feed-item.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card class=\"photo-card\" *ngIf=\"feedItem\">\r\n  <ion-img [src]=\"feedItem.url\"></ion-img>\r\n  <ion-card-content>\r\n    <p>{{feedItem.caption}}</p>\r\n  </ion-card-content>\r\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed-list/feed-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed-list/feed-list.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"feed\">\r\n  <app-feed-item \r\n    *ngFor=\"let item of feedItems\"\r\n    [feedItem]=\"item\">\r\n  </app-feed-item>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button \r\n  color=\"primary\" \r\n  type=\"submit\"\r\n  [disabled]=\"!isLoggedIn\"\r\n  (click)=\"presentUploadForm($event)\">\r\n  Create a New Post\r\n</ion-button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed-upload/feed-upload.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed-upload/feed-upload.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"uploadForm\" (submit)=\"onSubmit($event)\">`\r\n    <label>\r\n        <input type=\"file\" (change)=\"selectImage($event)\" accept=\"image/*\" style=\"display:none\"/>\r\n        <img *ngIf=\"previewDataUrl\" [src]=\"previewDataUrl\" style=\"width:50px; height: 50px;\" />\r\n        <a *ngIf=\"!previewDataUrl\" ion-button color=\"secondary\">\r\n            Select a Photo\r\n        </a>\r\n    </label>\r\n    <ion-item>\r\n        <ion-label position=\"floating\" color=\"primary\">Caption</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"caption\" required></ion-input>\r\n      </ion-item>\r\n      <ion-button \r\n        color=\"primary\" \r\n        type=\"submit\"\r\n        [disabled]=\"!uploadForm.valid || !file\">\r\n        Post\r\n      </ion-button>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <app-feed-upload-button></app-feed-upload-button>\r\n    <app-feed-list></app-feed-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/feed/feed-item/feed-item.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/feed/feed-item/feed-item.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".photo-card {\n  max-width: 500px;\n  overflow: hidden;\n  background: var(--ion-color-primary-contrast);\n  margin: 30px 0px;\n}\n\n.photo-card ion-img {\n  max-height: 532px;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLWl0ZW0vQzpcXFVzZXJzXFxBaG1lZFxcRGVza3RvcFxcRldELWFkdmFuY2VkdHJhY2stZGVwbG95bWVudC1wcm9qZWN0XFx1ZGFncmFtXFx1ZGFncmFtLWZyb250ZW5kL3NyY1xcYXBwXFxmZWVkXFxmZWVkLWl0ZW1cXGZlZWQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVlZC9mZWVkLWl0ZW0vZmVlZC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmVlZC9mZWVkLWl0ZW0vZmVlZC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3RvLWNhcmR7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbiAgfVxyXG5cclxuLnBob3RvLWNhcmQgaW9uLWltZyB7XHJcbiAgbWF4LWhlaWdodDogNTMycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICBcclxufVxyXG4iLCIucGhvdG8tY2FyZCB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgbWFyZ2luOiAzMHB4IDBweDtcbn1cblxuLnBob3RvLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDUzMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/feed/feed-item/feed-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/feed/feed-item/feed-item.component.ts ***!
  \*******************************************************/
/*! exports provided: FeedItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedItemComponent", function() { return FeedItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeedItemComponent = /** @class */ (function () {
    function FeedItemComponent() {
    }
    FeedItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeedItemComponent.prototype, "feedItem", void 0);
    FeedItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed-item',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feed-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed-item/feed-item.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feed-item.component.scss */ "./src/app/feed/feed-item/feed-item.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeedItemComponent);
    return FeedItemComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed-list/feed-list.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/feed/feed-list/feed-list.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".feed {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  background: var(--ion-color-light-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLWxpc3QvQzpcXFVzZXJzXFxBaG1lZFxcRGVza3RvcFxcRldELWFkdmFuY2VkdHJhY2stZGVwbG95bWVudC1wcm9qZWN0XFx1ZGFncmFtXFx1ZGFncmFtLWZyb250ZW5kL3NyY1xcYXBwXFxmZWVkXFxmZWVkLWxpc3RcXGZlZWQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVlZC9mZWVkLWxpc3QvZmVlZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVDQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9mZWVkL2ZlZWQtbGlzdC9mZWVkLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAuZmVlZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XHJcbiAgfSIsIi5mZWVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/feed/feed-list/feed-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/feed/feed-list/feed-list.component.ts ***!
  \*******************************************************/
/*! exports provided: FeedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedListComponent", function() { return FeedListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_feed_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/feed.provider.service */ "./src/app/feed/services/feed.provider.service.ts");



var FeedListComponent = /** @class */ (function () {
    function FeedListComponent(feed) {
        this.feed = feed;
        this.subscriptions = [];
    }
    FeedListComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.subscriptions.push(this.feed.currentFeed$.subscribe(function (items) {
                            _this.feedItems = items;
                        }));
                        return [4 /*yield*/, this.feed.getFeed()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedListComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var subscription = _a[_i];
            subscription.unsubscribe();
        }
    };
    FeedListComponent.ctorParameters = function () { return [
        { type: _services_feed_provider_service__WEBPACK_IMPORTED_MODULE_2__["FeedProviderService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FeedListComponent.prototype, "feedItems", void 0);
    FeedListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feed-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed-list/feed-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feed-list.component.scss */ "./src/app/feed/feed-list/feed-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feed_provider_service__WEBPACK_IMPORTED_MODULE_2__["FeedProviderService"]])
    ], FeedListComponent);
    return FeedListComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvZmVlZC11cGxvYWQvZmVlZC11cGxvYWQtYnV0dG9uL2ZlZWQtdXBsb2FkLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FeedUploadButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedUploadButtonComponent", function() { return FeedUploadButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feed_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../feed-upload.component */ "./src/app/feed/feed-upload/feed-upload.component.ts");
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");





var FeedUploadButtonComponent = /** @class */ (function () {
    function FeedUploadButtonComponent(modalController, auth) {
        this.modalController = modalController;
        this.auth = auth;
    }
    FeedUploadButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.currentUser$.subscribe(function (user) {
            _this.isLoggedIn = user !== null;
        });
    };
    FeedUploadButtonComponent.prototype.ngOnDestroy = function () {
        if (this.loginSub) {
            this.loginSub.unsubscribe();
        }
    };
    FeedUploadButtonComponent.prototype.presentUploadForm = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _feed_upload_component__WEBPACK_IMPORTED_MODULE_3__["FeedUploadComponent"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FeedUploadButtonComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    FeedUploadButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed-upload-button',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feed-upload-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feed-upload-button.component.scss */ "./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], FeedUploadButtonComponent);
    return FeedUploadButtonComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed-upload/feed-upload.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/feed/feed-upload/feed-upload.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvZmVlZC11cGxvYWQvZmVlZC11cGxvYWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/feed/feed-upload/feed-upload.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/feed/feed-upload/feed-upload.component.ts ***!
  \***********************************************************/
/*! exports provided: FeedUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedUploadComponent", function() { return FeedUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_feed_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/feed.provider.service */ "./src/app/feed/services/feed.provider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var FeedUploadComponent = /** @class */ (function () {
    function FeedUploadComponent(feed, formBuilder, loadingController, modalController) {
        this.feed = feed;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.modalController = modalController;
    }
    FeedUploadComponent.prototype.ngOnInit = function () {
        this.uploadForm = this.formBuilder.group({
            caption: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    FeedUploadComponent.prototype.setPreviewDataUrl = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            _this.previewDataUrl = reader.result;
        };
        reader.readAsDataURL(file);
    };
    FeedUploadComponent.prototype.selectImage = function (event) {
        var file = event.srcElement.files;
        if (!file) {
            return;
        }
        this.file = file[0];
        this.setPreviewDataUrl(this.file);
    };
    FeedUploadComponent.prototype.onSubmit = function ($event) {
        var _this = this;
        $event.preventDefault();
        this.loadingController.create();
        if (!this.uploadForm.valid || !this.file) {
            return;
        }
        this.feed.uploadFeedItem(this.uploadForm.controls.caption.value, this.file)
            .then(function (result) {
            _this.modalController.dismiss();
            _this.loadingController.dismiss();
        });
    };
    FeedUploadComponent.prototype.cancel = function () {
        this.modalController.dismiss();
    };
    FeedUploadComponent.ctorParameters = function () { return [
        { type: _services_feed_provider_service__WEBPACK_IMPORTED_MODULE_3__["FeedProviderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    FeedUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed-upload',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feed-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed-upload/feed-upload.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feed-upload.component.scss */ "./src/app/feed/feed-upload/feed-upload.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feed_provider_service__WEBPACK_IMPORTED_MODULE_3__["FeedProviderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], FeedUploadComponent);
    return FeedUploadComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed.module.ts":
/*!*************************************!*\
  !*** ./src/app/feed/feed.module.ts ***!
  \*************************************/
/*! exports provided: FeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedModule", function() { return FeedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feed_list_feed_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed-list/feed-list.component */ "./src/app/feed/feed-list/feed-list.component.ts");
/* harmony import */ var _feed_item_feed_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed-item/feed-item.component */ "./src/app/feed/feed-item/feed-item.component.ts");
/* harmony import */ var _feed_upload_feed_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feed-upload/feed-upload.component */ "./src/app/feed/feed-upload/feed-upload.component.ts");
/* harmony import */ var _feed_upload_feed_upload_button_feed_upload_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feed-upload/feed-upload-button/feed-upload-button.component */ "./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.ts");
/* harmony import */ var _services_feed_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/feed.provider.service */ "./src/app/feed/services/feed.provider.service.ts");










var entryComponents = [_feed_upload_feed_upload_component__WEBPACK_IMPORTED_MODULE_7__["FeedUploadComponent"]];
var components = [_feed_list_feed_list_component__WEBPACK_IMPORTED_MODULE_5__["FeedListComponent"], _feed_item_feed_item_component__WEBPACK_IMPORTED_MODULE_6__["FeedItemComponent"], _feed_upload_feed_upload_component__WEBPACK_IMPORTED_MODULE_7__["FeedUploadComponent"], _feed_upload_feed_upload_button_feed_upload_button_component__WEBPACK_IMPORTED_MODULE_8__["FeedUploadButtonComponent"]];
var FeedModule = /** @class */ (function () {
    function FeedModule() {
    }
    FeedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: components,
            exports: components,
            entryComponents: entryComponents,
            providers: [_services_feed_provider_service__WEBPACK_IMPORTED_MODULE_9__["FeedProviderService"]]
        })
    ], FeedModule);
    return FeedModule;
}());



/***/ }),

/***/ "./src/app/feed/services/feed.provider.service.ts":
/*!********************************************************!*\
  !*** ./src/app/feed/services/feed.provider.service.ts ***!
  \********************************************************/
/*! exports provided: FeedProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedProviderService", function() { return FeedProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/api.service */ "./src/app/api/api.service.ts");




var FeedProviderService = /** @class */ (function () {
    function FeedProviderService(api) {
        this.api = api;
        this.currentFeed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    FeedProviderService.prototype.getFeed = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var req, items;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get('/feed')];
                    case 1:
                        req = _a.sent();
                        items = req.rows;
                        this.currentFeed$.next(items);
                        return [2 /*return*/, Promise.resolve(this.currentFeed$)];
                }
            });
        });
    };
    FeedProviderService.prototype.uploadFeedItem = function (caption, file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, feed;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.upload('/feed', file, {
                            caption: caption,
                            url: file.name,
                        })];
                    case 1:
                        res = _a.sent();
                        feed = [res].concat(this.currentFeed$.value);
                        this.currentFeed$.next(feed);
                        return [2 /*return*/, res];
                }
            });
        });
    };
    FeedProviderService.ctorParameters = function () { return [
        { type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    FeedProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], FeedProviderService);
    return FeedProviderService;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _feed_feed_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../feed/feed.module */ "./src/app/feed/feed.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _feed_feed_module__WEBPACK_IMPORTED_MODULE_6__["FeedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



var HomePage = /** @class */ (function () {
    function HomePage() {
        this.appName = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].appName;
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map