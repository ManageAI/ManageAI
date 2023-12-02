import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  @Output() signIn = new EventEmitter<any>();

  iconEmail = 'assets/icons/email.svg';
  iconPassword = 'assets/icons/password.svg';

  loginForm = this._formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private _formBuilder: FormBuilder) {}

  signInUser(): void {
    this.signIn.emit(this.loginForm.value);
  }
}
