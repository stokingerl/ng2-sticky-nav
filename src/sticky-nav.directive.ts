import { Directive, Input, Renderer, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Directive({
    selector: '[ngStickyNav]'
})

export class StickyNavDirective implements OnInit, OnDestroy {
    private originalPosition: number;
    private lastScroll: number = 0;
    private isSticky: boolean = false;
    private scrollSubscription: Subscription;
    private wrapper: HTMLElement;
    @Input('stickyClass') stickyClass: string;

    constructor(private elementRef: ElementRef, private renderer: Renderer) {

    }

    ngOnInit(): void {
        this.scrollSubscription = fromEvent(window, 'scroll').subscribe(() => this.manageScrollEvent());
    }

    private manageScrollEvent(): void {
        const scroll = window.pageYOffset;

        if (scroll > this.lastScroll && !this.isSticky && scroll >= this.elementRef.nativeElement.offsetTop) {
            this.setSticky();
        } else if (scroll < this.lastScroll && this.isSticky && scroll <= this.originalPosition) {
            this.unsetSticky();
        }
        this.lastScroll = scroll;
    }

    private setSticky(): void {
        this.isSticky = true;
        this.originalPosition = this.elementRef.nativeElement.offsetTop;
        this.wrapper = this.elementRef.nativeElement.cloneNode(true);
        this.setStyle('position', 'fixed');
        this.setStyle('top', '0');
        this.setClass(true);
        this.renderer.setElementStyle(this.wrapper, 'visibility', 'hidden');
        this.elementRef.nativeElement.parentElement.insertBefore(this.wrapper, this.elementRef.nativeElement);
    }

    private unsetSticky(): void {
        this.isSticky = false;
        this.originalPosition = 0;
        this.elementRef.nativeElement.parentElement.removeChild(this.wrapper);
        this.setStyle('position', 'static');
        this.setClass(false);
    }

    private setStyle(key: string, value: string): void {
        this.renderer.setElementStyle(this.elementRef.nativeElement, key, value);
    }

    private setClass(add: boolean): void {
        this.renderer.setElementClass(this.elementRef.nativeElement, this.stickyClass, add);
    }

    ngOnDestroy() {
        if (this.scrollSubscription) {
            this.scrollSubscription.unsubscribe();
        }
    }
}
