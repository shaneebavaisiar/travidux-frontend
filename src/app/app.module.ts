import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorksComponent } from './works/works.component';
import { CreateEditWorksComponent } from './works/create-edit-works/create-edit-works.component';
import { SharedService } from './shared.service';
import {HttpClientModule}  from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WorksViewComponent } from './works/works-view/works-view.component';



@NgModule({
  declarations: [
    AppComponent,
    WorksComponent,
    CreateEditWorksComponent,

    WorksViewComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
