import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NameHeaderComponent } from './name-header/name-header.component';
import { MainPostComponent } from './main-post/main-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NameHeaderComponent,
    MainPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
