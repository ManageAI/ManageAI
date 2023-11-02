import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() id!: string;
  @Input() label!: string;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() iconSrc!: string;
}
