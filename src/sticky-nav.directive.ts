import { Directive, Input, Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';
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
  @Input() stickyEnabled: boolean = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.scrollSubscription = fromEvent(window, 'scroll').subscribe(() => this.manageScrollEvent());
  }

  private manageScrollEvent(): void {
    const scroll = window.pageYOffset;
    if (
      this.stickyEnabled &&
      scroll > this.lastScroll &&
      !this.isSticky &&
      scroll >= this.elementRef.nativeElement.offsetTop
    ) {
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
    this.addClass();
    this.renderer.setStyle(this.wrapper, 'visibility', 'hidden');
    this.elementRef.nativeElement.parentElement.insertBefore(this.wrapper, this.elementRef.nativeElement);
  }

  private unsetSticky(): void {
    this.isSticky = false;
    this.originalPosition = 0;
    this.elementRef.nativeElement.parentElement.removeChild(this.wrapper);
    this.setStyle('position', 'static');
    this.removeClass();
  }

  private setStyle(key: string, value: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, key, value);
  }

  private addClass(): void {
    this.renderer.addClass(this.elementRef.nativeElement, this.stickyClass);
  }
  
  private removeClass(): void {
    this.renderer.removeClass(this.elementRef.nativeElement, this.stickyClass);
  }

  ngOnDestroy() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }
}
