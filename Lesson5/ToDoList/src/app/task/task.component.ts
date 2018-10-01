import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from '../tasks.service';
import {ITask} from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  @Input() task: ITask;
  @Input() text: string;
  @Input() done: boolean;
  @Input() i: number;

  tasks: ITask[];
  removeTask;

  constructor(public tasksService: TasksService) {
    this.tasks = tasksService.tasks;
    this.removeTask = tasksService.remove;
  }

  ngOnInit() {
  }
}
