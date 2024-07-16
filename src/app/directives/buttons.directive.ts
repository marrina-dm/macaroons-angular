import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[buttons]'
})
export class ButtonsDirective implements OnInit {
  @Input() defaultButton: string = 'rgb(113, 8, 30)';
  @Input() hoverButton: string = 'rgb(215, 72, 92)';

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.changeColorByButton(this.defaultButton);
  }

  @HostListener("mouseenter")
  onHover() {
    this.changeColorByButton(this.hoverButton);
  }

  @HostListener("mouseleave")
  onLeave() {
    this.changeColorByButton(this.defaultButton);
  }

  changeColorByButton(color: string) {
    this.element.nativeElement.style.background = color;
  }
}
