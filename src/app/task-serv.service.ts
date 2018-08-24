import {Injectable} from '@angular/core';
import {Task} from './models/task.model';
import {TASK} from './mocks/task.mocks';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskServService {


  constructor() {
  }


  geTasks(): Observable<Task[]> {
    return of(TASK);
  }

//
//   createNewTask(task) {
// TASK.push(task);
// return TASK;
//   }

}
