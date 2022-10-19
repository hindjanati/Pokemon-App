import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})

export class BorderCardDirective {

  private initialColor: string ='#f5f5f5f5';
  private defaultColor: string ='#009688';
  private defaultHeight: number=180;

  constructor(private ele: ElementRef) {
    this.setHight(this.defaultHeight);
    this.setBorder(this.initialColor)
   }
   @Input('pkmBorderCard') borderColor: string;// avec alias
   @Input() pkm: string; // sans alias

   @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor)
   }

  setHight(height: Number){
    this.ele.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string){
    this.ele.nativeElement.style.border = `solid 4px ${color}`;
  }  

}
