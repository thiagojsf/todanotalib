import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VisualModule } from './visual/visual.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VisualModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
