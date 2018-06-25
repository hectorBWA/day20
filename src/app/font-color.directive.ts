import { Directive, ElementRef, Renderer, Renderer2 } from '@angular/core';

@Directive({
  selector: '[FontColor]'
})
export class FontColorDirective {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    
   }

   ngOnInit(){
     this.renderer.setStyle(this.elementRef.nativeElement,'color', '#EEBA33');
   }

}
