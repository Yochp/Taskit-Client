import {Component, OnInit, OnDestroy} from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {Subscription} from 'rxjs';
import {Task, TaskStages} from '../models/task.model';
import {TaskServService} from '../task-serv.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit, OnDestroy {

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

  todo = [];
  wip = [];
  hold = [];
  done = [];

  subs = new Subscription();

  constructor(
    private dragulaService: DragulaService,
    private taskService: TaskServService) {

    this.dragulaService.createGroup('TASK', {
      direction: 'horizontal',
      moves: (el, source, handle) => handle.className === 'group-handle'
    });

    this.subs.add(dragulaService.dropModel('TASK')
      .subscribe(({el, target, source, sourceModel, targetModel, item}) => {
        item.modified = new Date(Date.now()).toISOString();

        // console.table(this.todo);
        // console.table(this.wip);
        // console.table(this.hold);
        // console.table(this.done);
      })
    );
  }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe(tasks => {
        // this.tasks = tasks;
        console.table(tasks);
        tasks.forEach(task => {
          console.log(task);
          switch (task.stageId) {
            case TaskStages.TODO:
              this.stages.find(item => item.stage === TaskStages.TODO).items.push(task);
              // this.todo.push(task);
              console.table(this.stages.find(item => item.stage === TaskStages.TODO).items);
              break;
            case TaskStages.WIP:
              this.stages.find(item => item.stage === TaskStages.WIP).items.push(task);
              // this.wip.push(task);
              // console.table(this.wip);
              break;
            case TaskStages.HOLD:
              this.stages.find(item => item.stage === TaskStages.HOLD).items.push(task);
              // this.hold.push(task);
              // console.table(this.hold);
              break;
            case TaskStages.DONE:
              this.stages.find(item => item.stage === TaskStages.DONE).items.push(task);
              // this.done.push(task);
              // console.table(this.done);
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
