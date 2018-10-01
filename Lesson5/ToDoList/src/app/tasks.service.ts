import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  deletedTask: ITask;
  tasks: ITask[] = [
    {'id': 0, 'text': 'Bake a cake', 'done': true},
    {'id': 1, 'text': 'Call grandmother', 'done': true},
    {'id': 2, 'text': 'Pick up children', 'done': false},
    {'id': 3, 'text': 'Recycle glass', 'done': true},
    {'id': 4, 'text': 'Patch bike', 'done': false},
    {'id': 5, 'text': 'Pour petrol', 'done': true},
    {'id': 6, 'text': 'Take out trash', 'done': false}
  ];

  remove(id: number): ITask {
    const index: number = this.tasks.findIndex(p => p.id === id);
    if (this.tasks[index].done) {
      return this.tasks.splice(index, 1)[0];
    } else {
      window.alert('Cannot remove task, because it is not done.');
      return null;
    }
  }

  constructor() {
  }
}

export interface ITask {
  text: string;
  done: boolean;
  id: number;
}
