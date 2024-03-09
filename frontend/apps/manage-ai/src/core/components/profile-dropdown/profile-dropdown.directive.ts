import { Directive, HostListener, inject } from '@angular/core';
import { ProfileDropdownComponent } from './profile-dropdown.component';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Directive({
  selector: '[appProfileDropdown]',
  standalone: true,
})
export class ProfileDropdownDirective {
  private _overlay = inject(Overlay);

  overlayRef!: OverlayRef | null;

  @HostListener('click', ['$event']) showProfileDropdown() {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef = null;
      return;
    }

    this.overlayRef = this._overlay.create({
      hasBackdrop: true,
    });

    const portal = new ComponentPortal(ProfileDropdownComponent);
    this.overlayRef.attach(portal);
  }
}
