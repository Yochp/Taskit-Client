export enum TaskStages {
  TODO = 1,
  WIP = 2,
  HOLD = 3,
  DONE = 4
}

export class Task {
  id: number;
  name: string;
  owner: string;
  admin: string;
  description: string;
  notes: [{content: string, author: string}];
  stageId: number;
  modified: any;
  created: any;
  code: number;

  constructor() {
    this.modified = Date.now();
    this.created = new Date(this.modified).toISOString();
    this.stageId = TaskStages.TODO;
  }
}
