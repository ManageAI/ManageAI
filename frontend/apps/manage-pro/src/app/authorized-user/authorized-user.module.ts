import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizedUserRoutingModule } from './authorized-user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthorizedUserComponent } from './authorized-user.component';

@NgModule({
  declarations: [AuthorizedUserComponent],
  imports: [
    CommonModule,
    AuthorizedUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],})
export class AuthorizedUserModule {}
