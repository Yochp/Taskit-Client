import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StageComponent} from './stage/stage.component';

const routes: Routes = [
  {path: '', redirectTo: '/stages', pathMatch: 'full'},
  {path: 'stages', component: StageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
