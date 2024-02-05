import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginForm } from 'apps/manage-ai/src/core/interfaces/login-form.interface';
import { RouterLink } from '@angular/router';
import { InputComponent } from '../../../../../../libs/shared-components/src/lib/components/input/input.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, InputComponent, RouterLink],
})
export class LoginComponent {
  @Output() signIn = new EventEmitter<LoginForm>();

  iconEmail = 'assets/icons/email.svg';
  iconPassword = 'assets/icons/password.svg';

  loginForm = this._formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private _formBuilder: FormBuilder) {}

  signInUser(): void {
    if (this.loginForm.invalid) return;

    const loginForm: LoginForm = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
    };

    this.signIn.emit(loginForm);
  }
}
