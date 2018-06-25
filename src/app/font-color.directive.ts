import { Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[fontColor]'
})
export class FontColorDirective {


   constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.renderer.setStyle(this.elementRef.nativeElement,'font-size', '100px');

    this.renderer.setStyle(this.elementRef.nativeElement,'color', '#FF0000');  }


}
