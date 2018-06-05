import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { VisualModule } from './visual/visual.module';
import { XpnInputComponent } from './visual/xpn-input/xpn-input.component'
import { UtilsModule } from './utils/utils.module';
import { StorageModule } from './storage/storage.module';

@NgModule({
  declarations: [
    AppComponent,
    XpnInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    VisualModule,
    UtilsModule,
    StorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
