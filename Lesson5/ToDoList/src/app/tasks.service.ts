import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  tasks: ITask[] = [
    {'id': 0, 'text': 'Bake a cake', 'done': true},
    {'id': 1, 'text': 'Call grandmother', 'done': true},
    {'id': 2, 'text': 'Pick up children', 'done': false},
    {'id': 3, 'text': 'Recycle glass', 'done': true},
    {'id': 4, 'text': 'Patch bike', 'done': false},
    {'id': 5, 'text': 'Pour petrol', 'done': true},
    {'id': 6, 'text': 'Take out trash', 'done': false}
  ];

  finishedTasks = this.tasks.filter(p => p.done);
  unfinishedTasks = this.tasks.filter(p => !p.done);

  constructor() { }
}

export interface ITask {
  text: string;
  done: boolean;
  id: number;
}
