"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StickyNavModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var sticky_nav_directive_1 = require("./src/sticky-nav.directive");
var i0 = require("@angular/core");
__exportStar(require("./src/sticky-nav.directive"), exports);
var StickyNavModule = /** @class */ (function () {
    function StickyNavModule() {
    }
    StickyNavModule.forRoot = function () {
        return {
            ngModule: StickyNavModule
        };
    };
    StickyNavModule.ɵmod = i0.ɵɵdefineNgModule({ type: StickyNavModule });
    StickyNavModule.ɵinj = i0.ɵɵdefineInjector({ factory: function StickyNavModule_Factory(t) { return new (t || StickyNavModule)(); }, imports: [[
                common_1.CommonModule
            ]] });
    return StickyNavModule;
}());
exports.StickyNavModule = StickyNavModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StickyNavModule, { declarations: [sticky_nav_directive_1.StickyNavDirective], imports: [common_1.CommonModule], exports: [sticky_nav_directive_1.StickyNavDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StickyNavModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [
                    common_1.CommonModule
                ],
                declarations: [
                    sticky_nav_directive_1.StickyNavDirective
                ],
                exports: [
                    sticky_nav_directive_1.StickyNavDirective
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=index.js.map