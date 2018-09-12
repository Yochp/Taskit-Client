import {Injectable} from '@angular/core';
import {Task} from './models/task.model';
// import {TASK} from './mocks/task.mocks';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskServService {
  private taskUrl = 'api/task';  // URL to web api

  constructor(private http: HttpClient) {
  }


  geTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl);
  }



  createNewTaskFuncServ(newTask): Observable<Task[]> {
// TODO insert/push the new task to database
    return this.http.post<Task[]>(this.taskUrl, newTask);

  }

}
