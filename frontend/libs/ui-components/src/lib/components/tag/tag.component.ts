import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { DisplayNamePipe } from '../../pipe/display-name.pipe';
import { FilterProps } from '../../interfaces/filter-props.interface';

@Component({
  selector: 'ui-tag',
  imports: [CommonModule, SvgIconComponent, DisplayNamePipe],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  @Input() item!: FilterProps;
  @Input() itemContent!: string;

  @Output() removeTag = new EventEmitter();
}
