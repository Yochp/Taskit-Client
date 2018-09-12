import { TaskAction, TaskActionTypes } from './task.actions';
import { Task } from '../../models/task.model';
import { tasks as mockTasks } from '../../mocks/task.mocks';

export type ITasksState = Task[];

const initUserState: ITasksState = mockTasks;

export function taskReducer(state: ITasksState = initUserState, action: TaskAction) {
  switch (action.type) {
    case TaskActionTypes.TO_DO:
      return state.concat(action.payload);

    case TaskActionTypes.WIP:
      return state.filter(task => task.code !== action.payload.code);

    default:
      return state;
  }
}
