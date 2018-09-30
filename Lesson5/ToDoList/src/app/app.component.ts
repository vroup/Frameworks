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

  constructor(private tasksService: TasksService) {
    this.tasks = tasksService.tasks;
  }

}

