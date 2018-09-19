import {Component, OnInit, OnDestroy} from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {Subscription} from 'rxjs';
import {TaskStages} from '../models/task.model';
import {Task} from '../models/task.model';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit, OnDestroy {

  tasks: Task[];

  public stages: Array<any> = [
    {
      name: 'To Do',
      stage: TaskStages.TODO,
      items: []
    },
    {
      name: 'In Progress',
      stage: TaskStages.WIP,
      items: []
    },
    {
      name: 'On Hold',
      stage: TaskStages.HOLD,
      items: []
    },
    {
      name: 'Complete',
      stage: TaskStages.DONE,
      items: []
    },
  ];

  subs = new Subscription();

  constructor(
    private dragulaService: DragulaService,
    private taskService: TaskService) {

    this.dragulaService.createGroup('STAGES', {
      direction: 'horizontal',
      moves: (el, source, handle) => handle.className === 'stage-head'
    });

    this.subs.add(dragulaService.dropModel('TASKS')
      .subscribe(({el, target, source, sourceModel, targetModel, item}) => {
        item.modified = new Date(Date.now()).toISOString();
        console.log(target);
        console.log(item);
        console.log(source);
      })
    );
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
        console.table(this.tasks);
        this.tasks.forEach(task => {
          console.log(task);
          switch (task.stageId) {
            case TaskStages.TODO:
              this.stages.find(item => item.stage === TaskStages.TODO).items.push(task);
              break;
            case TaskStages.WIP:
              this.stages.find(item => item.stage === TaskStages.WIP).items.push(task);
              break;
            case TaskStages.HOLD:
              this.stages.find(item => item.stage === TaskStages.HOLD).items.push(task);
              break;
            case TaskStages.DONE:
              this.stages.find(item => item.stage === TaskStages.DONE).items.push(task);
              break;
          }
        });
      });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  // function onDragStart(event, data) {
  //   event.dataTransfer.setData('data', data);
  // }
  //
  // function onDrop(event, data) {
  //   let dataTransfer = event.dataTransfer.getData('data');
  //   event.preventDefault();
  // }
  //
  // function allowDrop(event) {
  //   event.preventDefault();
  // }
}
