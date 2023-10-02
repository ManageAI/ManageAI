import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from '../shared/services/authorization.service';

@Component({
  selector: 'app-authorized-user',
  templateUrl: './authorized-user.component.html',
  styleUrls: ['./authorized-user.component.scss'],
})
export class AuthorizedUserComponent {
  loginForm = this._formBuilder.nonNullable.group({
    login: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthorizationService
  ) {}

  public signIn(): void {
    if (this.loginForm.valid) {
      const login = {
        ...this.loginForm.value,
      };

      this._authService.postAuthorizationLogin(login).subscribe((x) => {
        console.log(x);
      });
    }
  }
}
