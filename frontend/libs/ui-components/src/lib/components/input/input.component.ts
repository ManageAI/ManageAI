import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValidationSignComponent } from './validation-sign/validation-sign.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  standalone: true,
  imports: [NgClass, ValidationSignComponent, NgIf],
})
export class InputComponent implements ControlValueAccessor {
  @Input() id!: string;
  @Input() label!: string;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() iconSrc!: string;
  @Input() isReadOnly!: boolean;
  @Input() parentForm!: FormGroup<any>;
  @Input() fieldName!: string;

  @Output() valueChange = new EventEmitter<string>();

  onChange!: <T>(value: T) => void;
  onTouched!: () => void;

  isDisabled!: boolean;
  value!: unknown;

  // NG_VALUE_ACCESSOR interface methods

  get formField(): FormControl {
    return this.parentForm?.get(this.fieldName) as FormControl;
  }

  get hasValidator(): boolean {
    if (this.formField && this.formField.validator) {
      return true;
    } else {
      return false;
    }
  }

  writeValue<T>(value: T): void {
    if (!value) {
      this.value = null;
      return;
    }

    this.value = value;
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  setInput(target: EventTarget | null): void {
    const inputValue = (target as HTMLInputElement).value;

    this.value = inputValue?.trim();
    this.valueChange.emit(inputValue);
    this.onChange(inputValue);
  }
}
