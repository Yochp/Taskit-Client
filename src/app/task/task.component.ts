import {Component, OnInit} from '@angular/core';
import {TaskServService} from '../task-serv.service';
import {Task} from '../models/task.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-task-tag',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})


export class TaskComponent implements OnInit {

  constructor(private taskServ: TaskServService) {
  }


  tasks: Task[];




// get all the task from the service when the app is upp
  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskServ.geTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

}
