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
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-dashboard-canban',
  standalone: true,
  imports: [CommonModule, CdkDrag, CdkDropList, TagComponent, TaskComponent],
  templateUrl: './dashboard-canban.component.html',
  styleUrls: ['./dashboard-canban.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardCanbanComponent {
  todo = [
    {
      id: '1',
      title: 'Get to work',
      description: 'Get rubbish from the apartment and throw them into the bin',
      tags: ['Chores', 'Food'],
      timeLeft: '4 hours',
      assignedUsersPhoto: ['assets/icons/person.svg'],
      commentsAmount: '1',
    },
  ];
  inProgress = [
    {
      id: '1',
      title: 'Pick up groceries',
      description: 'Get rubbish from the apartment and throw them into the bin',
      tags: ['Chores', 'Food'],
      timeLeft: '4 hours',
      assignedUsersPhoto: ['assets/icons/person.svg'],
      commentsAmount: '1',
    },
  ];
  done = [
    {
      id: '1',
      title: 'Get up',
      description: 'Get rubbish from the apartment and throw them into the bin',
      tags: ['Chores', 'Food'],
      timeLeft: '4 hours',
      assignedUsersPhoto: ['assets/icons/person.svg'],
      commentsAmount: '1',
    },
    {
      id: '2',
      title: 'Brush teeth',
      description: 'Get rubbish from the apartment and throw them into the bin',
      tags: ['Chores', 'Food'],
      timeLeft: '4 hours',
      assignedUsersPhoto: ['assets/icons/person.svg', 'assets/icons/person.svg'],
      commentsAmount: '1',
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
