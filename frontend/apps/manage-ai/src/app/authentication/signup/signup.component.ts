import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Registration } from 'apps/manage-ai/src/core/interfaces/registration.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {
  @Output() signUp: EventEmitter<Partial<Registration>> = new EventEmitter();

  iconUser = 'assets/icons/user.svg';
  iconEmail = 'assets/icons/email.svg';
  iconPassword = 'assets/icons/password.svg';
  iconLoop = 'assets/icons/loop.svg';

  signUpForm = this._formBuilder.nonNullable.group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private _formBuilder: FormBuilder) {}

  public createAccount(): void {
    if (this.signUpForm.invalid) return;

    this.signUp.emit(this.signUpForm.value);
  }
}
