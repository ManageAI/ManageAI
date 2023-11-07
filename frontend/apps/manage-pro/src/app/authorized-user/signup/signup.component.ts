import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {
  iconUser = 'assets/icons/user.svg';
  iconEmail = 'assets/icons/email.svg';
  iconPassword = 'assets/icons/password.svg';
  iconLoop = 'assets/icons/loop.svg';

  signUpForm = this._formBuilder.nonNullable.group({
    fullName: ['', [Validators.required, Validators.email]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
