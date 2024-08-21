import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { DropdownListDirective } from '../../directives/dropdown-list.directive';
import { TagComponent } from '../tag/tag.component';
import { FilterProps } from '../../interfaces/filter-props.interface';

@Component({
  selector: 'ui-filter',
  imports: [CommonModule, SvgIconComponent, DropdownListDirective, TagComponent],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  @Input() props!: FilterProps[] | any;
  @Input() placeholder!: string;

  isDropdownListOpen!: boolean;

  selectedItems: FilterProps[] = [];

  public closeDropdownList(items: FilterProps[]): void {
    this.selectedItems = items;
  }

  public removeItem({ $event, item }: { $event: Event; item: FilterProps }): void {
    $event.stopPropagation();

    this.selectedItems = this.selectedItems.filter(({ id }) => id !== item.id);
  }
}
