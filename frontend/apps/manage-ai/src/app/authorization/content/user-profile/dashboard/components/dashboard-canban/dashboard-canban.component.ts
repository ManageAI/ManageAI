import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { TagComponent } from '@frontend/ui-components';

@Component({
  selector: 'app-dashboard-canban',
  standalone: true,
  imports: [CommonModule, CdkDrag, CdkDropList, TagComponent],
  templateUrl: './dashboard-canban.component.html',
  styleUrls: ['./dashboard-canban.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardCanbanComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home'];
  inProgress = ['Pick up groceries'];
  done = ['Get up', 'Brush teeth'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
