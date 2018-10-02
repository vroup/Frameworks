import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  serverUrl = 'http://localhost:3000';
  deletedTask: ITask;
  tasks: ITask[] = [];

  getTasks() {
    return this.httpClient.get<ITask[]>(this.serverUrl + '/tasks');
  }

  remove(id: number): ITask {
    const index: number = this.tasks.findIndex(p => p.id === id);
    if (this.tasks[index].done) {
      return this.tasks.splice(index, 1)[0];
    } else {
      window.alert('Cannot remove task, because it is not done.');
      return null;
    }
  }

  constructor(private httpClient: HttpClient) {

  }
}

export interface ITask {
  text: string;
  done: boolean;
  id: number;
}
