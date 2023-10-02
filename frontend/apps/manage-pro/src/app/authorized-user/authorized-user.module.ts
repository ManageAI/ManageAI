import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizedUserRoutingModule } from './authorized-user-routing.module';

import { AuthorizedUserComponent } from './authorized-user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthorizedUserComponent],
  imports: [
    CommonModule,
    AuthorizedUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthorizedUserModule {}
