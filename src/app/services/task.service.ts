import {Injectable} from '@angular/core';
import {Task} from '../models/task.model';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = 'api/task';  // URL to web api

  constructor(private http: HttpClient) {
  }

  /** GET tasks from the DB */
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  /** POST: add a new task to the DB */
  addTask(task: Task): Observable<Task> {
    console.table(task);
    return this.http.post<Task>(this.url, task, httpOptions);
  }
}
