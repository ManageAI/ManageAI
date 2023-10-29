import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  imports: [CommonModule, MatInputModule],
  declarations: [ButtonComponent, InputComponent],
  exports: [ButtonComponent],
})
export class SharedComponentsModule {}
