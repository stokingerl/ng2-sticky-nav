import { Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';
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
    private unsetSticky;
    private setStyle;
    private addClass;
    private removeClass;
    ngOnDestroy(): void;
}
