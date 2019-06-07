import { Renderer, ElementRef, OnInit, OnDestroy } from '@angular/core';
export declare class StickyNavDirective implements OnInit, OnDestroy {
    private elementRef;
    private renderer;
    private originalPosition;
    private lastScroll;
    private isSticky;
    private scrollSubscription;
    private wrapper;
    stickyClass: string;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    private manageScrollEvent;
    private setSticky;
    private unsetSticky;
    private setStyle;
    private setClass;
    ngOnDestroy(): void;
}
