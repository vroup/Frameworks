import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from '../tasks.service';

@Component({
  selector: '[app-task]',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  @Input() text: string;
  @Input() done: boolean;
  @Input() i: number;

  tasks = [];

  constructor(public tasksService: TasksService) {
    this.tasks = tasksService.tasks;
  }

  ngOnInit() {
  }

  remove(index: number) {
    const task = this.tasks[index];
    if (task.done) {
      const deletedTask = this.tasks.splice(index, 1);
      console.log(deletedTask[0]);
    } else {
      console.log('Cannot remove task, because it is not done.');
    }
  }
}
