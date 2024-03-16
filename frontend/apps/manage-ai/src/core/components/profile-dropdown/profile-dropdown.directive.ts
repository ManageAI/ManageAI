import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { ProfileDropdownComponent } from './profile-dropdown.component';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Directive({
  selector: '[appProfileDropdown]',
  standalone: true,
})
export class ProfileDropdownDirective {
  overlayRef!: OverlayRef | null;

  private _overlay = inject(Overlay);
  private _elementRef = inject(ElementRef);

  @HostListener('click', ['$event']) showProfileDropdown() {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef = null;
      return;
    }

    const positionStrategy = this._overlay
      .position()
      .flexibleConnectedTo(this._elementRef)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
        },
      ]);

    this.overlayRef = this._overlay.create({ positionStrategy });

    const portal = new ComponentPortal(ProfileDropdownComponent);
    this.overlayRef.attach(portal);
  }
}
