export enum TaskStages {
  TODO = 1,
  WIP = 2,
  HOLD = 3,
  DONE = 4
}

export class Task {
  id: number;
  owner: string;
  created: any;
  modified: any;
  admin: string;
  description: string;
  notes: [{content: string, author: string, date: any}];
  stageId: number;
  code: number;

  constructor() {
    this.id = -1;
    this.modified = Date.now();
    this.created = new Date(this.modified).toISOString();
    this.stageId = TaskStages.TODO;
  }
}
