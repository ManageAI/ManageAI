import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';
import { Authentication } from '../../core/interfaces/authentication.interface';
import { Registration } from '../../core/interfaces/registration.interface';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationComponent implements OnInit {
  loginForm = this._formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  iconEmail = 'assets/icons/email.svg';
  iconPassword = 'assets/icons/password.svg';

  isLoginPath!: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthenticationService,
    private _router: Router
  ) {}

  public ngOnInit(): void {
    this.isLoginPath = this._router.url === '/login';
  }

  public signIn(loginForm: Partial<Authentication>): void {
    this._router.navigate(['authorization']);
    // this._authService.authenticationLogin(loginForm).subscribe((x) => {
    //   console.log(x);
    // });
  }

  public signUp(signUpForm: Registration): void {
    this._authService.registration(signUpForm).subscribe((x) => {
      console.log(x);
      this._router.navigate(['']);
    });
  }
}
