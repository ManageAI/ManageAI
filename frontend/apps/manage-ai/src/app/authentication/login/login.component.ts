import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Authentication } from 'apps/manage-ai/src/core/interfaces/authentication.interface';
import { RouterLink } from '@angular/router';
import { InputComponent } from '../../../../../../libs/shared-components/src/lib/components/input/input.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        InputComponent,
        RouterLink,
    ],
})
export class LoginComponent {
  @Output() signIn = new EventEmitter<Partial<Authentication>>();

  iconEmail = 'assets/icons/email.svg';
  iconPassword = 'assets/icons/password.svg';

  loginForm = this._formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private _formBuilder: FormBuilder) {}

  signInUser(): void {
    if (this.loginForm.invalid) return;

    this.signIn.emit(this.loginForm.value);
  }
}
