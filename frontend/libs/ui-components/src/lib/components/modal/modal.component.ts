import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ui-modal',
  imports: [CommonModule, ButtonComponent, SvgIconComponent, MatDialogModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @Input() title!: string;
  @Output() confirmEvent = new EventEmitter<Event>();

  constructor(public modalRef: MatDialogRef<unknown>) {}

  protected close(): void {
    this.modalRef.close(null);
  }

  protected confirm(): void {
    this.confirmEvent.emit();
  }
}
