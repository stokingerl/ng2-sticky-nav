import { Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class StickyNavDirective implements OnInit, OnDestroy {
    private elementRef;
    private renderer;
    private originalPosition;
    private lastScroll;
    private isSticky;
    private scrollSubscription;
    private wrapper;
    stickyClass: string;
    stickyEnabled: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    private manageScrollEvent;
    private setSticky;
    private removeIds;
    private unsetSticky;
    private setStyle;
    private addClass;
    private removeClass;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<StickyNavDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<StickyNavDirective, "[ngStickyNav]", never, { "stickyClass": "stickyClass"; "stickyEnabled": "stickyEnabled"; }, {}, never>;
}
