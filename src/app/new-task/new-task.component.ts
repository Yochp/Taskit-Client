import {Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {TaskServService} from '../task-serv.service';
import {Task} from '../models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  closeResult: string;
  newTask = new Task();

  constructor(
    private modalService: NgbModal,
    private taskService: TaskServService) {
  }


  // send the new task to service
  craeteNewTaskFunc() {
    this.taskService.createNewTaskFuncServ(this.newTask).subscribe(newtask => {
      this.taskService.getTasks().subscribe(consoleTask => console.log(consoleTask));
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

