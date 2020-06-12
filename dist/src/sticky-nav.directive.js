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
        this.stickyEnabled = true;
    }
    StickyNavDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.scrollSubscription = rxjs_1.fromEvent(window, 'scroll').subscribe(function () { return _this.manageScrollEvent(); });
    };
    StickyNavDirective.prototype.manageScrollEvent = function () {
        var scroll = window.pageYOffset;
        if (this.stickyEnabled &&
            scroll > this.lastScroll &&
            !this.isSticky &&
            scroll >= this.elementRef.nativeElement.offsetTop) {
            this.setSticky();
        }
        else if (scroll < this.lastScroll && this.isSticky && scroll <= this.originalPosition) {
            this.unsetSticky();
        }
        this.lastScroll = scroll;
    };
    StickyNavDirective.prototype.setSticky = function () {
        this.isSticky = true;
        this.originalPosition = this.elementRef.nativeElement.offsetTop;
        this.wrapper = this.elementRef.nativeElement.cloneNode(true);
        this.setStyle('position', 'fixed');
        this.setStyle('top', '0');
        this.addClass();
        this.renderer.setStyle(this.wrapper, 'visibility', 'hidden');
        this.elementRef.nativeElement.parentElement.insertBefore(this.wrapper, this.elementRef.nativeElement);
    };
    StickyNavDirective.prototype.unsetSticky = function () {
        this.isSticky = false;
        this.originalPosition = 0;
        this.elementRef.nativeElement.parentElement.removeChild(this.wrapper);
        this.setStyle('position', 'static');
        this.removeClass();
    };
    StickyNavDirective.prototype.setStyle = function (key, value) {
        this.renderer.setStyle(this.elementRef.nativeElement, key, value);
    };
    StickyNavDirective.prototype.addClass = function () {
        this.renderer.addClass(this.elementRef.nativeElement, this.stickyClass);
    };
    StickyNavDirective.prototype.removeClass = function () {
        this.renderer.removeClass(this.elementRef.nativeElement, this.stickyClass);
    };
    StickyNavDirective.prototype.ngOnDestroy = function () {
        if (this.scrollSubscription) {
            this.scrollSubscription.unsubscribe();
        }
    };
    __decorate([
        core_1.Input('stickyClass'),
        __metadata("design:type", String)
    ], StickyNavDirective.prototype, "stickyClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], StickyNavDirective.prototype, "stickyEnabled", void 0);
    StickyNavDirective = __decorate([
        core_1.Directive({
            selector: '[ngStickyNav]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
    ], StickyNavDirective);
    return StickyNavDirective;
}());
exports.StickyNavDirective = StickyNavDirective;
//# sourceMappingURL=sticky-nav.directive.js.map