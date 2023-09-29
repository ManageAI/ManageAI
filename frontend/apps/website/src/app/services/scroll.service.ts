import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  public scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);

    if (element) {
      const rect = element.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect().top;
      const offset = elementId === 'contact' || elementId === 'home' ? 0 : 75;

      const scrollPosition = rect.top - bodyRect - offset;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  }
}
