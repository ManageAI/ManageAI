import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [ButtonComponent, InputComponent],
  exports: [ButtonComponent],
})
export class SharedComponentsModule {}
