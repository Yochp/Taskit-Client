import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {taskReducer} from './tasks/task.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      tasks: taskReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ]
})
export class AppStateModule { }
