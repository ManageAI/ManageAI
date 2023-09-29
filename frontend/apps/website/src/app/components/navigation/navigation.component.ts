import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'web-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isSelect!: string;

  links: string[] = ['home', 'about-us', 'product', 'contact'];

  constructor(private scrollService: ScrollService) {}

  public onLinkClick(target: string): void {
    this.isSelect = target;
    this.scrollService.scrollToElement(target);
  }
}
