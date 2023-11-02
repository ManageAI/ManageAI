import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizedUserRoutingModule } from './authorized-user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthorizedUserComponent } from './authorized-user.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [AuthorizedUserComponent],
  imports: [
    CommonModule,
    AuthorizedUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class AuthorizedUserModule {}
