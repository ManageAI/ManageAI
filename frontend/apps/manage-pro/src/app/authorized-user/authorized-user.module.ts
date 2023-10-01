import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizedUserRoutingModule } from './authorized-user-routing.module';

import { AuthorizedUserComponent } from './authorized-user.component';

@NgModule({
  declarations: [AuthorizedUserComponent],
  imports: [CommonModule, AuthorizedUserRoutingModule],
})
export class AuthorizedUserModule {}
