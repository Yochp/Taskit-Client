import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { StageComponent } from './stage/stage.component';
import { TaskComponent } from './task/task.component';
import { TaskTagComponent } from './task-tag/task-tag.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    StageComponent,
    TaskComponent,
    TaskTagComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
