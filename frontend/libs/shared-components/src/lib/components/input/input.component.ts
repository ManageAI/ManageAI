import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'shared-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() id!: string;
  @Input() label!: string;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() iconSrc!: string;
  @Input() isReadOnly!: boolean;

  @Output() valueChange = new EventEmitter<string>();

  onChange!: <T>(value: T) => void;
  onTouched!: () => void;

  isDisabled!: boolean;
  value!: unknown;

  // NG_VALUE_ACCESSOR interface methods

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
