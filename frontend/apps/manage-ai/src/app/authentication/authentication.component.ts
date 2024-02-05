import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';
import { LoginForm } from '../../core/interfaces/login-form.interface';
import { RegisterForm } from '../../core/interfaces/register-form.interface';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgStyle, NgIf } from '@angular/common';
import { SubSink } from 'subsink';
import { GlobalConstants } from '../../core/constants/global.constants';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgStyle, NgIf, LoginComponent, SignupComponent],
})
export class AuthenticationComponent implements OnInit, OnDestroy {
  form = this._formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  iconEmail = 'assets/icons/email.svg';
  iconPassword = 'assets/icons/password.svg';

  isLoginPath!: boolean;

  private _subsink = new SubSink();

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthenticationService,
    private _router: Router
  ) {}

  public ngOnInit(): void {
    this.isLoginPath = this._router.url === '/login';
  }

  public signIn(form: LoginForm): void {
    this._subsink.sink = this._authService.authentication('login', form).subscribe((roles) => {
      this._navigateToProfile(roles);
    });
  }

  public signUp(form: RegisterForm): void {
    this._subsink.sink = this._authService.authentication('signUp', form).subscribe((roles) => {
      this._navigateToProfile(roles);
    });
  }

  private _navigateToProfile(roles: string[]): void {
    const profileRoutesByRole = GlobalConstants.profileRoutesByRole;

    const foundRole = roles.find((role) => Object.keys(profileRoutesByRole).includes(role));
    const navigationPath = foundRole ? profileRoutesByRole[foundRole] : 'not-found';

    this._router.navigate([navigationPath]);
  }

  public ngOnDestroy(): void {
    this._subsink.unsubscribe();
  }
}
