import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../models/task.model';
import {TaskService} from '../services/task.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  @Input() task: Task;

  constructor(private route: ActivatedRoute,
              private taskService: TaskService,
              private location: Location) {

  }

  ngOnInit() {
    this.getTask();
  }

  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id > 0) {
      this.taskService.getTaskById(id)
        .subscribe(task => this.task = task);
    }
  }

  save(): void {
    this.taskService.addTask(this.task)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }



}
