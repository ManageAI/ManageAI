import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-canban',
  templateUrl: './dashboard-canban.component.html',
  styleUrls: ['./dashboard-canban.component.scss'],
  standalone: true,
  imports: [CommonModule, CdkDrag, CdkDropList, TagComponent, TaskComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardService],
})
export class DashboardCanbanComponent {
  private _dashboardService = inject(DashboardService);

  taskStates = [
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
        },
      ],
    },
    {
      id: 2,
      taskStateName: 'In Progress',
      connectedTo: ['To Do', 'Done'],
      color: '#ffa500',
      tasks: [
        {
          id: 2,
          title: 'Pick up groceries',
          description: 'Get rubbish from the apartment and throw them into the bin',
          tags: ['Chores', 'Food'],
          timeLeft: '4 hours',
          assignedUsersPhoto: ['assets/icons/person.svg'],
          commentsAmount: '1',
        },
      ],
    },
    {
      id: 3,
      taskStateName: 'Done',
      connectedTo: ['To Do', 'In Progress'],
      color: '#006d38',
      tasks: [
        {
          id: 3,
          title: 'Get up',
          description: 'Get rubbish from the apartment and throw them into the bin',
          tags: ['Chores', 'Food'],
          timeLeft: '4 hours',
          assignedUsersPhoto: ['assets/icons/person.svg'],
          commentsAmount: '1',
        },
        {
          id: 4,
          title: 'Brush teeth',
          description: 'Get rubbish from the apartment and throw them into the bin',
          tags: ['Chores', 'Food'],
          timeLeft: '4 hours',
          assignedUsersPhoto: ['assets/icons/person.svg', 'assets/icons/person.svg'],
          commentsAmount: '1',
        },
      ],
    },
  ];

  public drop(event: CdkDragDrop<any[]>): void {
    this._dashboardService.getTaskState().subscribe((x) => console.log(x));

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
