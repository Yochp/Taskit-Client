import {Task} from '../models/task.model';

export const TASK: Task[] = [

  {
    id: 1,
    name: 'task1',
    owner: 'owner1',
    admin: 'admin1',
    notes: [{content: 'content1', author: 'author1'}],
    stageId: 1,
  },

  {
    id: 2,
    name: 'task2',
    owner: 'owner2',
    admin: 'admin2',
    notes: [{content: 'content2', author: 'author2'}],
    stageId: 2,
  },

  {
    id: 3,
    name: 'task3',
    owner: 'owner3',
    admin: 'admin3',
    notes: [{content: 'content3', author: 'author3'}],
    stageId: 3,
  },
];
