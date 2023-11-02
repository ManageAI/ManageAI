import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'shared-validation-sign',
  templateUrl: './validation-sign.component.html',
  styleUrls: ['./validation-sign.component.scss'],
})
export class ValidationSignComponent {
  @Input() formField!: FormControl;

  get hasValidator(): boolean {
    if (this.formField && this.formField.validator) {
      return true;
    } else {
      return false;
    }
  }
}
