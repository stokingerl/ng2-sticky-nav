# ng2-sticky-nav

A super simple, native, Angular 2+ directive for navs (or anything) that become sticky as you scroll down.

## Installation

To install this directive in your project, run:

```bash
$ npm install ng2-sticky-nav --save
```

## Using this directive

and then from your Angular module:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { StickyNavModule } from 'ng2-sticky-nav';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // import module here
    StickyNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once you have imported the module, you can use the directive like so:

```html
<nav class="custom-nav-class" ngStickyNav></nav>
```

The div with `ngStickyNav` will now stick to the top once you reach its original position while scrolling down. It will also return to its original position when scrolling up.

## Important Recommendations

### Controlling height

Since your nav will be removed from the static DOM when it sticks, I recommend setting up your html/css to account for the lost height like so:

```html
<!-- wrap your header in another div-->
<div class="sticky-nav-wrapper">
  <nav class="sticky-nav" ngStickyNav></nav>
</div>
```

Corresponding css:

```css
:root {
  /* setting var for nav height, you can do this however you want */
  --sticky-nav-height: 40px;
}

.sticky-nav-wrapper {
  /* set min height on wrapper so that the page
     doesn't awkwardly snap and lose height */
  min-height: var(--sticky-nav-height);
}

.sticky-nav {
  height: var(--sticky-nav-height);

  /* other styles */
}
```

### Controlling z-index

Since your nav will be floating on top of other components, be sure that you style your nav so that its z-index is greater than the components it will go over.

In an attempt to make this directive as simple and generic as possible, this is NOT done out of the box.

## Optional Attributes

### stickyClass

stickyClass gives you the ability to assign a css class to your navbar when sticky. The styling will automatically be removed when the navbar is not sticky. For example, you can use this to add a box shadow to your nav when sticky like so:

```html
<!-- sample.component.html -->
<div class="sticky-nav-wrapper">
  <nav class="sticky-nav" ngStickyNav stickyClass="sticky-box-shadow"></nav>
</div>
```

```css
/* sample.component.css */
.sticky-nav-wrapper {
  min-height: 40px;
}

.sticky-nav {
  height: 40px;
}

.sticky-box-shadow {
  box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.5);
}
```

Now your nav will have a slight shadow when in sticky mode. This example can be useful for when your nav is the same color as the components it will be sitting on top of.

###stickyEnabled

stickyEnabled gives you the ability to toggle whether the navbar should stick based on external logic.

```html
<nav class="custom-nav-class" ngStickyNav [stickyEnabled]="customStickyLogic"></nav>
```

Note: If the condition changes, the element will only update after scrolling past it's original position.  For example, if stickyEnabled is true and the user scrolls past the element, it will become sticky.  If the condition changes to false, the element will remain sticky until it has returned to its original position, and subsequent scrolling will not cause the element to stick.


```typescript
/* sample.component.ts */

export class sampleComponent{

  customStickyLogic:boolean 
  
  ngDoCheck(){
   this.customStickyLogic = this.performLogicCheck();
  }
}

```

## License

MIT © [Liam Stokinger](mailto:liamstokinger@gmail.com)
