import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const tasks = [
      {
        id: 1,
        name: 'task1',
        owner: 'Avi',
        admin: 'Avi',
        notes: [{content: 'content1', author: 'author1'}],
        stageId: 1,
        created: Date.now() - 1000 * 10,
        code: 1234,
      },
      {
        id: 2,
        name: 'task2',
        owner: 'David',
        admin: 'Avi',
        notes: [{content: 'content2', author: 'author2'}],
        stageId: 2,
        created: Date.now(),
        code: 1235,
      },
      {
        id: 3,
        name: 'task3',
        owner: 'Bill',
        admin: 'Avi',
        notes: [{content: 'content3', author: 'author3'}],
        stageId: 4,
        created: Date.now() - 1000 * 50,
        code: 1236,
      },
      {
        id: 5,
        name: 'task5',
        owner: 'Avi',
        admin: 'Avi',
        notes: [{content: 'content1', author: 'author1'}],
        stageId: 1,
        created: Date.now() - 1000 * 30,
        code: 1240,
      }
    ];
    return {tasks};
  }
}
