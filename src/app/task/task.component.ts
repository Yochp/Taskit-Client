import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../models/task.model';
// import {ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {TaskService} from '../services/task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  newTask = new Task();
  closeResult: string;

  constructor(private modalService: NgbModal, private taskService: TaskService) {
  }

  ngOnInit() {
  }

  addTask(): void {
    this.taskService.addTask(this.newTask)
      .subscribe(() => console.log('Add TAsk'));
  }
}
