import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '@frontend/ui-components';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-task-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss'],
})
export class AddTaskModalComponent {
  private _modalRef = inject(DialogRef);

  public confirm() {
    this._modalRef.close();
  }
}
