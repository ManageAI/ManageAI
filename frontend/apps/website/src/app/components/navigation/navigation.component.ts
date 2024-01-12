import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { CapitalizeFirstLetterPipe } from '../../pipes/capitalize-first-letter.pipe';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'web-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    standalone: true,
    imports: [
        NgClass,
        NgFor,
        CapitalizeFirstLetterPipe,
    ],
})
export class NavigationComponent {
  isSelect!: string;

  links: string[] = ['home', 'about-us', 'product', 'contact'];

  isNavbarOpen!: boolean;

  constructor(private scrollService: ScrollService) {}

  public onLinkClick(target: string): void {
    this.isSelect = target;
    this.scrollService.scrollToElement(target);
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  public openNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
