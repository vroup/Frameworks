import {Component} from '@angular/core';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ToDoList';
  tasks = [];

  constructor(public tasksService: TasksService) {
    this.tasks = tasksService.tasks;
  }

}
