import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format:any;
  constructor(private el:ElementRef) { }

    @HostListener('blur') onBlur(){
      let value:string = this.el.nativeElement.value;
      if (this.format == 'loWercase')
      this.el.nativeElement.value = value.toLowerCase()
      else
      this.el.nativeElement.value = value.toUpperCase()
    }
  }
