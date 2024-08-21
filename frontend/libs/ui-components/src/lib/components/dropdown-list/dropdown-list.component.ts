import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../tag/tag.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { HidePopupDirective } from '../../directives/hide-popup.directive';
import { FilterProps } from '../../interfaces/filter-props.interface';

@Component({
  selector: 'ui-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss'],
  imports: [CommonModule, TagComponent, SvgIconComponent, HidePopupDirective],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownListComponent implements OnInit {
  @Input() filterProps: FilterProps[] = [];
  @Input() selectedItems: FilterProps[] = [];

  @Output() clickOutside = new EventEmitter();

  public ngOnInit(): void {
    const selectedIds = new Set(this.selectedItems.map(({ id }) => id));
    this.filterProps = this.filterProps.filter(({ id }) => !selectedIds.has(id));
  }

  public addItem(item: FilterProps, event: Event): void {
    event.stopPropagation();

    this.selectedItems.push(item);
    this.filterProps = this.filterProps.filter(({ id }) => id !== item.id);
  }

  public removeItem({ $event, item }: { $event: Event; item: FilterProps }): void {
    $event.stopPropagation();

    this.selectedItems = this.selectedItems.filter(({ id }) => id !== item.id);
    this.filterProps.push(item);
  }

  public closePopup(): void {
    this.clickOutside.emit(this.selectedItems);
  }
}
