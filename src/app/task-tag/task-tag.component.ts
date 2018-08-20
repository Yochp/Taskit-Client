import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-tag',
  templateUrl: './task-tag.component.html',
  styleUrls: ['./task-tag.component.css']
})
export class TaskTagComponent implements OnInit {

  constructor() {
  }


  tasks = [
    {id: 1, name: 'task1',  desc: 'bla'},
    {id: 2, name: 'task2', desc: 'bla'},
    {id: 3, name: 'task3', desc: 'bla'},
    {id: 4, name: 'task4', desc: 'bla'},
  ];


  ngOnInit() {
  }

}
