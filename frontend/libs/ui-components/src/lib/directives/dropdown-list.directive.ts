import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Directive, ElementRef, HostListener, Input, inject } from '@angular/core';
import { DropdownListComponent } from '../components/dropdown-list/dropdown-list.component';

@Directive({
  selector: '[uiDropdownList]',
  standalone: true,
})
export class DropdownListDirective {
  @Input('uiDropdownList') dropdownListData!: unknown;

  private isOpen = false;
  private _componentRef!: ComponentRef<DropdownListComponent>;
  private _overlayRef!: OverlayRef;

  private _elementRef = inject(ElementRef);
  private _overlay = inject(Overlay);

  @HostListener('click')
  protected toggleDropdown(): void {
    this.isOpen = !this.isOpen;
    this.isOpen ? this._openOverlay() : this._closeOverlay();
  }

  private _openOverlay(): void {
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

    this._overlayRef = this._overlay.create({ positionStrategy });

    const portal = new ComponentPortal(DropdownListComponent);
    const componentRef = this._overlayRef.attach(portal);

    this._componentRef = componentRef;

    this._componentRef.instance.data = this.dropdownListData;
  }

  private _closeOverlay(): void {
    if (this._overlayRef) {
      this._overlayRef.detach();
    }
  }
}
