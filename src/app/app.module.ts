import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { StageComponent } from './stage/stage.component';
import { TaskComponent } from './task/task.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NewTaskComponent } from './new-task/new-task.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { DragulaModule } from 'ng2-dragula';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    StageComponent,
    TaskComponent,
    NewTaskComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    AppRoutingModule,
    DragulaModule.forRoot(),
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
