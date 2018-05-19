import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VisualModule } from './visual/visual.module';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    VisualModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
