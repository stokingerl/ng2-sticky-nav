import { Renderer, ElementRef, OnInit } from '@angular/core';
export declare class StickyNavDirective implements OnInit {
    private elementRef;
    private renderer;
    private offsetTop;
    private lastScroll;
    private isSticky;
    stickyClass: string;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    private manageScrollEvent();
    private setSticky();
    private unsetSticky();
    private setStyle(key, value);
    private setClass(add);
}
