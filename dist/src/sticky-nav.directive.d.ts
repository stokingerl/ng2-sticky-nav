import { Renderer, ElementRef, OnInit, OnDestroy } from '@angular/core';
export declare class StickyNavDirective implements OnInit, OnDestroy {
    private elementRef;
    private renderer;
    private offsetTop;
    private lastScroll;
    private isSticky;
    private scrollSubscription;
    stickyClass: string;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    private manageScrollEvent();
    private setSticky();
    private unsetSticky();
    private setStyle(key, value);
    private setClass(add);
    ngOnDestroy(): void;
}
