"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StickyNavDirective = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var i0 = require("@angular/core");
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
        this.removeIds();
        this.setStyle('position', 'fixed');
        this.setStyle('top', '0');
        this.addClass();
        this.renderer.setStyle(this.wrapper, 'visibility', 'hidden');
        this.elementRef.nativeElement.parentElement.insertBefore(this.wrapper, this.elementRef.nativeElement);
    };
    StickyNavDirective.prototype.removeIds = function () {
        var _this = this;
        var _a = this.wrapper.getBoundingClientRect(), initHeight = _a.height, initWidth = _a.width;
        Array.from(this.wrapper.querySelectorAll('*')).forEach(function (el) { return _this.renderer.removeAttribute(el, 'id'); });
        var _b = this.wrapper.getBoundingClientRect(), postHeight = _b.height, postWidth = _b.width;
        if (initWidth !== postWidth || initHeight !== postHeight) {
            throw new Error("Size mismatch between sticky element and clone - please ensure you aren't using IDs for styling.");
        }
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
    StickyNavDirective.ɵfac = function StickyNavDirective_Factory(t) { return new (t || StickyNavDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    StickyNavDirective.ɵdir = i0.ɵɵdefineDirective({ type: StickyNavDirective, selectors: [["", "ngStickyNav", ""]], inputs: { stickyClass: "stickyClass", stickyEnabled: "stickyEnabled" } });
    return StickyNavDirective;
}());
exports.StickyNavDirective = StickyNavDirective;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StickyNavDirective, [{
        type: core_1.Directive,
        args: [{
                selector: '[ngStickyNav]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { stickyClass: [{
            type: core_1.Input,
            args: ['stickyClass']
        }], stickyEnabled: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=sticky-nav.directive.js.map