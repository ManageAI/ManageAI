import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '@frontend/ui-components';

@Component({
  selector: 'app-add-task-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss'],
})
export class AddTaskModalComponent {
  public confirm() {
    console.log('confirm');
  }
}
