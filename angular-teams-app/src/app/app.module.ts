import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TeamInfoModule } from './team-info/team-info.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TeamInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }