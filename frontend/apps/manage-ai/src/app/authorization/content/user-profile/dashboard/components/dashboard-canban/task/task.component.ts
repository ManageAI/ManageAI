import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from '@frontend/ui-components';
import { Task } from '../../../interfaces/task.interface';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, TagComponent],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: Task;
}
