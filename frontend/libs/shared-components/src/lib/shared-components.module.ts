import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { ValidationSignComponent } from './components/input/validation-sign/validation-sign.component';

@NgModule({
    imports: [CommonModule, ButtonComponent, InputComponent, ValidationSignComponent],
    exports: [ButtonComponent, InputComponent],
})
export class SharedComponentsModule {}
