import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { BlockComponent } from './components/block/block.component';
import { MockDataService } from "./services/mock-data.service";
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    MockDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
