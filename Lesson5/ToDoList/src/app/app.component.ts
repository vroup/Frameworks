import {Component} from '@angular/core';
import {TasksService} from './tasks.service';
import {ITask} from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ToDoList';
  tasks: ITask[];
  deletedTask: ITask;

  isPending = p => !p.done;
  isFinished = p => p.done;

  constructor(public tasksService: TasksService) {
    this.tasks = tasksService.tasks;
    this.deletedTask = tasksService.deletedTask;
  }

  getDeleted() {
    return this.tasksService.deletedTask;
  }

  getPendingTasks() {
    return this.tasks.filter(this.isPending);
  }

  getFinishedTasks() {
    return this.tasks.filter(this.isFinished);
  }

}

