import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsModule } from '../../../../libs/shared-components/src/lib/shared-components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedComponentsModule,
  ],
  exports: [SharedComponentsModule],
})
export class SharedModule {}
