import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from '../../core/services/authorization.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorized-user',
  templateUrl: './authorized-user.component.html',
  styleUrls: ['./authorized-user.component.scss'],
  animations: [
    trigger('textAnimation', [
      state(
        'hidden',
        style({
          width: '0',
        })
      ),
      state(
        'visible',
        style({
          width: '100%',
        })
      ),
      transition('hidden => visible', [animate('2s steps(70, end)')]),
      transition('visible => hidden', [animate('2s steps(70, end)')]),
    ]),
  ],
})
export class AuthorizedUserComponent implements OnInit {
  loginForm = this._formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  texts: string[] = [
    'Manage on the highest level',
    'Plan Better. Execute Faster.',
    "Unlock Your Team's Potential",
  ];

  currentText = '';
  state = 'hidden';
  currentIndex = 0;

  iconEmail = 'assets/icons/email.svg';
  iconPassword = 'assets/icons/password.svg';

  isLoginPath!: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthorizationService,
    private _router: Router
  ) {
    this.changeText();
    setInterval(() => {
      this.state = 'hidden';
      setTimeout(() => {
        this.changeText();
      }, 4000);
    }, 8000);
  }

  public ngOnInit(): void {
    this.isLoginPath = this._router.url === '/login';
  }

  public changeText(): void {
    this.currentText = this.texts[this.currentIndex];

    this.state = 'visible';
    this.currentIndex++;

    if (this.currentIndex >= this.texts.length) {
      this.currentIndex = 0;
    }
  }

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
