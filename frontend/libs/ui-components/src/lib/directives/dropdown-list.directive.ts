import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  inject,
} from '@angular/core';
import { DropdownListComponent } from '../components/dropdown-list/dropdown-list.component';
import { FilterProps } from '../interfaces/filter-props.interface';

@Directive({
  selector: '[uiDropdownList]',
  standalone: true,
})
export class DropdownListDirective {
  @Input('uiDropdownList') dropdownListData!: FilterProps[];

  @Input() selectedItems!: FilterProps[];

  @Output() clickOutside = new EventEmitter();
  @Output() isDropdownListOpen = new EventEmitter();

  private _isOpen = false;
  private _componentRef!: ComponentRef<DropdownListComponent> | null;
  private _overlayRef!: OverlayRef | null;

  private _elementRef = inject(ElementRef);
  private _overlay = inject(Overlay);

  @HostListener('click', ['$event'])
  protected toggleDropdown(event: Event): void {
    event.stopPropagation();

    if (!this._componentRef) {
      this._isOpen = !this._isOpen;

      this._openOverlay();
    }
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

    if (!this._overlayRef) {
      this.isDropdownListOpen.emit(this._isOpen);
    }

    this._overlayRef = this._overlay.create({ positionStrategy });

    const portal = new ComponentPortal(DropdownListComponent);
    const componentRef = this._overlayRef.attach(portal);

    componentRef?.instance.clickOutside.subscribe((itemsList) => {
      this._closeOverlay(itemsList);
    });

    this._componentRef = componentRef;

    componentRef.instance.filterProps = this.dropdownListData;
    componentRef.instance.selectedItems = this.selectedItems;
  }

  private _closeOverlay(itemsList: FilterProps): void {
    this._isOpen = !this._isOpen;

    if (this._overlayRef) {
      this.isDropdownListOpen.emit(this._isOpen);
      this.clickOutside.emit(itemsList);

      this._overlayRef.detach();
      this._componentRef?.destroy();

      this._overlayRef = null;
      this._componentRef = null;
    }
  }
}
