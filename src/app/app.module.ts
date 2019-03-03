import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { GithubService } from './home/github.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    WorkComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

   
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
