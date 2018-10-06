import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StageComponent} from './stage/stage.component';
import {TaskEditComponent} from './task-edit/task-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/stages', pathMatch: 'full'},
  {path: 'stages', component: StageComponent},
  {path: 'task/edit/:id', component: TaskEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
