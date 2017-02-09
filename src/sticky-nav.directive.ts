import { Directive, Input, Renderer, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
    selector: '[ngStickyNav]'
})

export class StickyNavDirective implements OnInit {
    private offsetTop: number;
    private lastScroll: number = 0;
    private isSticky: boolean = false;
    @Input('stickyClass') stickyClass: string;

    constructor(private elementRef: ElementRef, private renderer: Renderer) {

    }

    ngOnInit(): void {
        this.offsetTop = this.elementRef.nativeElement.offsetTop;

        Observable.fromEvent(window, 'scroll').subscribe(() => this.manageScrollEvent());
    }

    private manageScrollEvent(): void {
        const scroll = window.pageYOffset;

        if (scroll > this.lastScroll && !this.isSticky && scroll >= this.offsetTop) {
            this.setSticky();
        } else if (scroll < this.lastScroll && this.isSticky && scroll <= this.offsetTop) {
            this.unsetSticky();
        }
        this.lastScroll = scroll;
    }

    private setSticky(): void {
        this.isSticky = true;
        this.setStyle('position', 'fixed');
        this.setStyle('top', '0');
        this.setClass(true);
    }

    private unsetSticky(): void {
        this.isSticky = false;
        this.setStyle('position', 'static');
        this.setClass(false);
    }

    private setStyle(key: string, value: string): void {
        this.renderer.setElementStyle(this.elementRef.nativeElement, key, value);
    }

    private setClass(add: boolean): void {
        this.renderer.setElementClass(this.elementRef.nativeElement, this.stickyClass, add);
    }

}
