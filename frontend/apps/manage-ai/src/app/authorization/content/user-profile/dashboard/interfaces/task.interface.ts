export interface Task {
  id: number;
  title: string;
  description: string;
  tags: string[];
  timeLeft: string;
  assignedUsersPhoto: string[];
  commentsAmount: string;
}
