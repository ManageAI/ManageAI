import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [SvgIconComponent, NgIf],
})
export class ButtonComponent {
  @Input() type = 'button';
  @Input() iconSrc!: string;
  @Input() content!: string;
  @Input() width!: string;

  @Output() emitClick = new EventEmitter();
}
