import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from '../../core/services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorized-user',
  templateUrl: './authorized-user.component.html',
  styleUrls: ['./authorized-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizedUserComponent implements OnInit {
  loginForm = this._formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  iconEmail = 'assets/icons/email.svg';
  iconPassword = 'assets/icons/password.svg';

  isLoginPath!: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthorizationService,
    private _router: Router
  ) {}

  public ngOnInit(): void {
    this.isLoginPath = this._router.url === '/login';
  }

  public signIn(loginForm: any): void {
    if (loginForm.valid) {
      this._authService.postAuthorizationLogin(loginForm).subscribe((x) => {
        console.log(x);
      });
    }
  }
}
