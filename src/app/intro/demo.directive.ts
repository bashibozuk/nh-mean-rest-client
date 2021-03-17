import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective implements OnInit, OnChanges{

  @Input()
  magnitude = 0;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.display = 'block';
   
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.magnitude) {
      this.elementRef.nativeElement.style.backgroundColor = this.getColor();
    }
  }

  getColor(): string {
    if (this.magnitude <= 10) {
      return 'green';
    }

    if (this.magnitude <= 20) {
      return 'orange';
    }

    return 'red';
  }

}
