import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-tag',
  templateUrl: './task-tag.component.html',
  styleUrls: ['./task-tag.component.css']
})
export class TaskTagComponent implements OnInit {

  constructor() {
  }


  tags = [
    {id: 1, name: 'task1'},
    {id: 2, name: 'task2'},
    {id: 3, name: 'task3'},
    {id: 4, name: 'task4'},
  ];


  ngOnInit() {
  }

}
