import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XpnInputComponent } from './xpn-input/xpn-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [XpnInputComponent],
  exports: [XpnInputComponent]
})
export class VisualModule { }
