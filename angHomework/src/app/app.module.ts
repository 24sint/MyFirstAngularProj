import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngBasicComponent } from './angBasic/angBasic.component';
import { AppRoutingModule } from './app-routing.module';
import { AngSecondComponent } from './ang-second/ang-second.component';
import { PeopleListComponent } from './people-list/people-list.component';
import {HttpClientModule} from '@angular/common/http';
import { UserFormComponent } from './user-form/user-form.component';
import {FormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    AngBasicComponent,
    AngSecondComponent,
    PeopleListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }