import {Component, OnInit} from '@angular/core';
// import {Location} from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {TaskService} from '../services/task.service';
import {Task} from '../models/task.model';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  newTask = new Task();
  closeResult: string;

  constructor(
    private modalService: NgbModal,
    private taskService: TaskService) {
  }

  ngOnInit() {
  }

  // send the new task to service
  addTask(): void {
    this.taskService.addTask(this.newTask).subscribe(() => {
      this.taskService.getTasks().subscribe(tasks => console.table(tasks));
    });
  }

  // bootstrap
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
      .result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
        this.addTask();
        console.log(this.closeResult);
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        console.log(this.closeResult);
      });
  }

  // bootstrap private
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

