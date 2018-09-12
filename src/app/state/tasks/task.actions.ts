import {Action} from '@ngrx/store';
import {Task} from '../../models/task.model';

export enum TaskActionTypes {
  TO_DO = '[Task] Init',
  WIP = '[Task] In Progress',
  ON_HOLD = '[Task] On hold',
  DONE = '[Task] Complete'
}

export class AddTask implements Action {
  readonly type = TaskActionTypes.TO_DO;

  constructor(public payload: Task) {
  }
}

export class MoveTask implements Action {
  readonly type = TaskActionTypes.WIP;

  constructor(public payload: Task) {
  }
}

export type TaskAction =
  AddTask |
  MoveTask;
