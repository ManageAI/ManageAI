import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-input-search',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSearchComponent),
      multi: true,
    },
  ],
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent {
  @Input() placeholder!: string;
  @Input() iconSrc!: string;
  @Input() isReadOnly!: boolean;
  @Input() fieldName!: string;

  @Output() valueChange = new EventEmitter<string>();

  onChange!: <T>(value: T) => void;
  onTouched!: () => void;

  isDisabled!: boolean;
  value!: unknown;

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
