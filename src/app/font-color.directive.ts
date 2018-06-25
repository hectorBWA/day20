import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appFontColor]'
})
export class FontColorDirective {

  constructor(x: ElementRef, renderer: Renderer) {
    x.nativeElement.style.color = '#EEBA33';
   }

}
