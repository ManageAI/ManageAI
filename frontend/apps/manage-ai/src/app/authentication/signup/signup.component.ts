import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormData } from '../../../core/interfaces/register-form-data.interface';
import { RouterLink } from '@angular/router';
import { InputComponent } from '@frontend/ui-components';
import { ButtonComponent } from '@frontend/ui-components';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, InputComponent, RouterLink, ButtonComponent],
})
export class SignupComponent {
  @Output() signUp = new EventEmitter<RegisterFormData>();

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

    const { confirmPassword, ...signUpFormData } = this.signUpForm.getRawValue();

    this.signUp.emit(signUpFormData);
  }
}
