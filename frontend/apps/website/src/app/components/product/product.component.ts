import {
  Component,
  HostListener,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'web-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('right', style({ transform: 'translateX(150%)' })),
      state('left', style({ transform: 'translateX(-150%)' })),
      state('in', style({ transform: 'translateX(0)' })),
      transition('* => in', animate('600ms ease-in')),
      transition('in => left', animate('600ms ease-out')),
      transition('in => right', animate('600ms ease-out')),
    ]),
  ],
})
export class ProductComponent {
  @ViewChildren('cardElement') cards!: QueryList<ElementRef>;

  animationStates: { [key: number]: string } = {};

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.cards.forEach((card, index) => {
      const nativeElement = card.nativeElement;
      const rect = nativeElement.getBoundingClientRect();

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        this.animationStates[index] = 'in';
      }
    });
  }
}
