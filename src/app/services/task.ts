import { Injectable } from '@angular/core';

export interface Task {
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string) {
    this.tasks.push({ title, completed: false });
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
  }
  
  deleteTask(task: Task) {
  this.tasks = this.tasks.filter(t => t !== task);
  }

  getTaskCount(): number {
    return this.tasks.length;
  }

  getCompletedCount(): number {
    return this.tasks.filter(t => t.completed).length;
  }

  getPendingCount(): number {
    return this.tasks.filter(t => !t.completed).length;
  }
}

