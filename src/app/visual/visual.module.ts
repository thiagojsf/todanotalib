import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XpnInputComponent } from './xpn-input/xpn-input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [XpnInputComponent],
  exports: [XpnInputComponent]
})
export class VisualModule { }
