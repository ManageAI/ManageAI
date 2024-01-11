import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { authenticationRoutes } from './authentication.routes';

import { AuthenticationComponent } from './authentication.component';
import { SharedModule } from '../shared.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(authenticationRoutes),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        AuthenticationComponent, LoginComponent, SignupComponent,
    ],
})
export class AuthenticationModule {}
