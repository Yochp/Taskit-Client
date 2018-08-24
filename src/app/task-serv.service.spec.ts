import { TestBed, inject } from '@angular/core/testing';

import { TaskServService } from './task-serv.service';

describe('TaskServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskServService]
    });
  });

  it('should be created', inject([TaskServService], (service: TaskServService) => {
    expect(service).toBeTruthy();
  }));
});
