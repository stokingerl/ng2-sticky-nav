"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var StickyNavDirective = /** @class */ (function () {
    function StickyNavDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.lastScroll = 0;
        this.isSticky = false;
    }
    StickyNavDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.offsetTop = this.elementRef.nativeElement.offsetTop;
        rxjs_1.fromEvent(window, 'scroll').subscribe(function () { return _this.manageScrollEvent(); });
    };
    StickyNavDirective.prototype.manageScrollEvent = function () {
        var scroll = window.pageYOffset;
        if (scroll > this.lastScroll && !this.isSticky && scroll >= this.offsetTop) {
            this.setSticky();
        }
        else if (scroll < this.lastScroll && this.isSticky && scroll <= this.offsetTop) {
            this.unsetSticky();
        }
        this.lastScroll = scroll;
    };
    StickyNavDirective.prototype.setSticky = function () {
        this.isSticky = true;
        this.setStyle('position', 'fixed');
        this.setStyle('top', '0');
        this.setClass(true);
    };
    StickyNavDirective.prototype.unsetSticky = function () {
        this.isSticky = false;
        this.setStyle('position', 'static');
        this.setClass(false);
    };
    StickyNavDirective.prototype.setStyle = function (key, value) {
        this.renderer.setElementStyle(this.elementRef.nativeElement, key, value);
    };
    StickyNavDirective.prototype.setClass = function (add) {
        this.renderer.setElementClass(this.elementRef.nativeElement, this.stickyClass, add);
    };
    __decorate([
        core_1.Input('stickyClass'),
        __metadata("design:type", String)
    ], StickyNavDirective.prototype, "stickyClass", void 0);
    StickyNavDirective = __decorate([
        core_1.Directive({
            selector: '[ngStickyNav]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
    ], StickyNavDirective);
    return StickyNavDirective;
}());
exports.StickyNavDirective = StickyNavDirective;
//# sourceMappingURL=sticky-nav.directive.js.map