import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { TagComponent } from '@frontend/ui-components';
import { TaskComponent } from './task/task.component';
import { Observable } from 'rxjs';
import { TaskState } from '../../interfaces/task-state.interface';

@Component({
  selector: 'app-dashboard-canban',
  templateUrl: './dashboard-canban.component.html',
  styleUrls: ['./dashboard-canban.component.scss'],
  standalone: true,
  imports: [CommonModule, CdkDrag, CdkDropList, TagComponent, TaskComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardCanbanComponent {
  @Input() taskStates$!: Observable<TaskState[]>;

  taskState = [
    {
      id: 1,
      taskStateName: 'To Do',
      connectedTo: ['In Progress', 'Done'],
      color: '#ff0000',
      tasks: [
        {
          id: 1,
          title: 'Get to work',
          description: 'Get rubbish from the apartment and throw them into the bin',
          tags: ['Chores', 'Food'],
          timeLeft: '4 hours',
          assignedUsersPhoto: ['assets/icons/person.svg'],
          commentsAmount: '1',
          isTaskFinished: false,
        },
      ],
    },
  ];

  public drop(event: CdkDragDrop<any[]>): void {
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
