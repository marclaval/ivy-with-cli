import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, NgbPaginationModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
