import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import {DragulaModule} from 'ng2-dragula';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
// import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FooterComponent} from './footer/footer.component';
import {StageComponent} from './stage/stage.component';
import {TaskComponent} from './task/task.component';
import {TaskNewComponent} from './task-new/task-new.component';
import {ToolBarComponent} from './tool-bar/tool-bar.component';
import {AppRoutingModule} from './app-routing.module';
import {StateModule} from './state/state.module';
import { TaskEditComponent } from './task-edit/task-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    StageComponent,
    TaskComponent,
    TaskNewComponent,
    ToolBarComponent,
    StageComponent,
    TaskEditComponent
  ],
  imports: [
    StateModule,
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    DragulaModule.forRoot()
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, {dataEncapsulation: false}
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
