import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {


    const task = [

      {
        id: 1,
        name: 'task1',
        owner: 'owner1',
        admin: 'admin1',
        notes: [{content: 'content1', author: 'author1'}],
        stageId: 1,
        timeStamp: Date.now() -  1000 * 10,
        code: 1234,

      },

      {
        id: 2,
        name: 'task2',
        owner: 'owner2',
        admin: 'admin2',
        notes: [{content: 'content2', author: 'author2'}],
        stageId: 2,
        timeStamp: Date.now(),
        code: 1235,


      },

      {
        id: 3,
        name: 'task3',
        owner: 'owner3',
        admin: 'admin3',
        notes: [{content: 'content3', author: 'author3'}],
        stageId: 3,
        timeStamp: Date.now() -  1000 * 50,
        code: 1236,

      },
    ];

    return {task};

  }

}
