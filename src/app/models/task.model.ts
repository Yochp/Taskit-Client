export class Task  {
  id: Number;
  name: String;
  owner: String;
  admin: String;
  notes: [ { content: String, author: String } ];
  stageId: Number;
}

