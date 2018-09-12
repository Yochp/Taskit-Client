// export class Task  {
//   id: Number;
//   name?: String;
//   owner: String;
//   admin: String;
//   description?: String;
//   notes: [ { content: String, author: String } ];
//   stageId: Number;
// }
//


export class Task  {
  id: number;
  name: string;
  owner: string;
  admin: string;
  description: string;
  notes: [ { content: string, author: string } ];
  stageId: number;
  timeStamp: any;
  code: number;

  constructor() {
    this.timeStamp = Date.now();
    this.timeStamp = new Date(this.timeStamp ).toISOString();
  }
}

