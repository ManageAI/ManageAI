import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizedUserRoutingModule } from './authorized-user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthorizedUserComponent } from './authorized-user.component';
import { SharedModule } from '../shared.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [AuthorizedUserComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthorizedUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class AuthorizedUserModule {}
