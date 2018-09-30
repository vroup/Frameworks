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

  tasks;

  constructor(public tasksService: TasksService) {
    this.tasks = tasksService.tasks;
  }

  ngOnInit() {
  }

  logChange(e) {
    console.log(e);

  }

  remove(index: number) {
    const task = this.tasks[index];
    console.log(task.done);
    if (task.done) {
      const deletedTask = this.tasks.splice(index, 1);
    } else {
      window.alert('Cannot remove task, because it is not done.');
    }
  }
}
