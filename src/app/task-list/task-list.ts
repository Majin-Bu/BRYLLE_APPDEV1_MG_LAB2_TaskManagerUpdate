import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskService, Task } from '../services/task';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  toggle(task: Task) {
    this.taskService.toggleTask(task);
  }

  deleteTask(task: Task) {
  this.taskService.deleteTask(task);
  this.tasks = this.taskService.getTasks();
  }

}
