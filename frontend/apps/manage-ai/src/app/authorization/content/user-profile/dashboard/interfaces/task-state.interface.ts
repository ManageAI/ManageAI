import { Task } from './task.interface';

export interface TaskState {
  id: number;
  name: string;
  connectedTo: string[];
  color: string;
  tasks: Task[];
}
