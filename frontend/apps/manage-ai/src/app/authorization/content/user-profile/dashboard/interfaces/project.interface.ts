import { TaskState } from './task-state.interface';

export interface Project {
  id: number;
  name: string;
  taskStates: TaskState[];
}
