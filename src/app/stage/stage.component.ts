import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})



export class StageComponent implements OnInit {

  constructor() {

  }
    stages = [
      {id: 1, name: 'stageOne'},
      {id: 2, name: 'stage2'},
      {id: 3, name: 'stage3'},
      {id: 4, name: 'stage4'},
    ];


  ngOnInit() {
  }

}
