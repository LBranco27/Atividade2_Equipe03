import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PredoComponent } from './predo/predo.component';
import { ErikComponent } from './erik/erik.component';

@NgModule({
  declarations: [
    AppComponent,
    PredoComponent,
    ErikComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
