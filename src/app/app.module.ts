import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';

import {InfoService} from './services/intro.service';
import { EducationComponent } from './sections/education/education.component'

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
