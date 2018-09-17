import {Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {TaskService} from '../services/task.service';
import {Task} from '../models/task.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  closeResult: string;
  newTask = new Task();

  constructor(
    private modalService: NgbModal,
    private taskService: TaskService,
    private router: Router) {
  }

  ngOnInit() {
  }

  // send the new task to service
  saveTask(): void {
    this.taskService.addTask(this.newTask).subscribe(() => {
      this.taskService.getTasks().subscribe(tasks => console.table(tasks));
      this.router.navigateByUrl('/');
    });
  }

  // bootstrap
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // bootstrap
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

