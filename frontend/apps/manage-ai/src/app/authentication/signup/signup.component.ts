import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterForm } from '../../../core/interfaces/register-form.interface';
import { RouterLink } from '@angular/router';
import { InputComponent } from '../../../../../../libs/ui-components/src/lib/components/input/input.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, InputComponent, RouterLink],
})
export class SignupComponent {
  @Output() signUp: EventEmitter<RegisterForm> = new EventEmitter();

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

    const signUpForm: RegisterForm = {
      fullName: this.signUpForm.controls.fullName.value,
      email: this.signUpForm.controls.email.value,
      password: this.signUpForm.controls.password.value,
    };

    this.signUp.emit(signUpForm);
  }
}
